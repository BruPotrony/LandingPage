import os
from pathlib import Path

import numpy as np
from dotenv import load_dotenv
from google import genai
from google.genai import types
from supabase import create_client

ROOT = Path(__file__).resolve().parent.parent
load_dotenv(ROOT / ".env")
EMBED_MODEL, DIM = "gemini-embedding-001", 768

gclient = genai.Client(api_key=os.environ["GEMINI_API_KEY"])
sb = create_client(os.environ["SUPABASE_URL"], os.environ["SUPABASE_SERVICE_KEY"])


def retrieve(query: str, k: int = 5) -> list[dict]:
    res = gclient.models.embed_content(
        model=EMBED_MODEL, contents=[query],
        config=types.EmbedContentConfig(
            task_type="RETRIEVAL_QUERY", output_dimensionality=DIM))
    v = np.array(res.embeddings[0].values)
    v = (v / np.linalg.norm(v)).tolist()
    return sb.rpc("match_chunks",
                  {"query_embedding": v, "match_count": k}).execute().data
