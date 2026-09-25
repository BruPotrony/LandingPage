import logging
import os
import time
from pathlib import Path

import openai
from dotenv import load_dotenv
from openai import OpenAI

ROOT = Path(__file__).resolve().parent.parent
load_dotenv(ROOT / ".env")
log = logging.getLogger("ask-bru.llm")

GEMINI = OpenAI(
    api_key=os.environ["GEMINI_API_KEY"],
    base_url="https://generativelanguage.googleapis.com/v1beta/openai/",
    timeout=20, max_retries=0,
)
GROQ = OpenAI(
    api_key=os.environ["GROQ_API_KEY"],
    base_url="https://api.groq.com/openai/v1",
    timeout=20, max_retries=0,
)

PROVIDERS = [
    {"name": "gemini-3.5-flash-lite", "client": GEMINI,
     "model": "gemini-3.5-flash-lite", "extra": {"reasoning_effort": "low"}},
    {"name": "gemini-3.1-flash-lite", "client": GEMINI,
     "model": "gemini-3.1-flash-lite", "extra": {"reasoning_effort": "low"}},
    {"name": "groq", "client": GROQ,
     "model": "openai/gpt-oss-120b", "extra": {"reasoning_effort": "low"}},
]

BACKOFF = (0.5, 1.5)


class EmptyResponseError(Exception):
    """El proveedor respondio 200 pero sin contenido utilizable."""


# Fallos transitorios: reintentamos el mismo proveedor antes de degradar.
# Una respuesta vacia no entra aqui, se salta al siguiente proveedor sin reintentar.
RETRY_ERRORS = (
    openai.RateLimitError,       # 429
    openai.InternalServerError,  # 5xx (Gemini devuelve 503 en picos de demanda)
    openai.APITimeoutError,
    openai.APIConnectionError,
)


def generate(messages: list[dict], max_tokens: int = 1024) -> tuple[str, str]:
    """Devuelve (respuesta, proveedor_que_respondio)."""
    last_error = None
    for p in PROVIDERS:
        for intento in range(len(BACKOFF) + 1):
            try:
                resp = p["client"].chat.completions.create(
                    model=p["model"],
                    messages=messages,
                    max_tokens=max_tokens,
                    **p["extra"],
                )
                choice = resp.choices[0]
                content = (choice.message.content or "").strip()
                if not content:
                    raise EmptyResponseError(
                        f"{p['name']} sin contenido (finish_reason={choice.finish_reason})")
                return content, p["name"]
            except EmptyResponseError as e:
                last_error = e
                log.warning("Falla %s (%s), probando el siguiente",
                            p["name"], type(e).__name__)
                break
            except RETRY_ERRORS as e:
                last_error = e
                if intento < len(BACKOFF):
                    log.warning("Falla %s (%s), reintento %d/%d",
                                p["name"], type(e).__name__, intento + 1, len(BACKOFF))
                    time.sleep(BACKOFF[intento])
                else:
                    log.warning("Falla %s (%s), probando el siguiente",
                                p["name"], type(e).__name__)
    raise RuntimeError("Todos los proveedores han fallado") from last_error
