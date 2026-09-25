import hashlib, os, re
from datetime import datetime, timezone
from pathlib import Path

import numpy as np
from dotenv import load_dotenv
from google import genai
from google.genai import types
from supabase import create_client

ROOT = Path(__file__).resolve().parent.parent
load_dotenv(ROOT / ".env")
DATA = ROOT / "data"
MAX_CHARS, OVERLAP = 1600, 200
EMBED_MODEL, DIM = "gemini-embedding-001", 768
BATCH = 100

gclient = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
sb = create_client(os.environ["SUPABASE_URL"], os.environ["SUPABASE_SERVICE_KEY"])


def doc_type_for(rel: Path) -> str:
    if rel.parts[0] == "projects":
        return "project"
    if rel.parts[0] == "jobs":
        return "job"
    return rel.stem


def split_sections(md: str) -> tuple[str, list[tuple[str, str]]]:
    m = re.search(r"(?m)^# (.+)$", md)
    doc_title = m.group(1).strip() if m else ""
    md = re.sub(r"<!--.*?-->", "", md, flags=re.S)
    parts = re.split(r"(?m)^(#{2,3} .+)$", md)
    sections, title = [], ""
    for p in parts:
        if re.match(r"^#{2,3} ", p):
            title = p.lstrip("# ").strip()
        else:
            text = re.sub(r"(?m)^# .+$", "", p).strip()
            if text:
                sections.append((title or "Intro", text))
    return doc_title, sections


def window(text: str) -> list[str]:
    if len(text) <= MAX_CHARS:
        return [text]
    out, i = [], 0
    while i < len(text):
        out.append(text[i:i + MAX_CHARS])
        i += MAX_CHARS - OVERLAP
    return out


def embed(texts: list[str]) -> list[list[float]]:
    out = []
    for i in range(0, len(texts), BATCH):
        res = gclient.models.embed_content(
            model=EMBED_MODEL,
            contents=texts[i:i + BATCH],
            config=types.EmbedContentConfig(
                task_type="RETRIEVAL_DOCUMENT", output_dimensionality=DIM),
        )
        for e in res.embeddings:
            v = np.array(e.values)
            out.append((v / np.linalg.norm(v)).tolist())
    return out


def ingest_file(path: Path):
    rel = path.relative_to(DATA)
    source = rel.as_posix()
    doc_title, sections = split_sections(path.read_text(encoding="utf-8"))
    now = datetime.now(timezone.utc).isoformat()

    rows = []
    for sec_title, text in sections:
        for piece in window(text):
            content = f"{doc_title} > {sec_title}\n\n{piece}"
            rows.append({
                "id": f"{source}#{len(rows)}",
                "content": content,
                "source": source,
                "doc_type": doc_type_for(rel),
                "content_hash": hashlib.sha256(content.encode()).hexdigest(),
                "updated_at": now,
            })
    if not rows:
        return

    for r, e in zip(rows, embed([r["content"] for r in rows])):
        r["embedding"] = e

    sb.table("chunks").delete().eq("source", source).execute()
    sb.table("chunks").upsert(rows).execute()
    print(f"{source}: {len(rows)} chunks")


if __name__ == "__main__":
    for path in sorted(DATA.rglob("*.md")):
        ingest_file(path)
