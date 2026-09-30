# AGENTS.md

Portfolio personal de Bru Potrony en `brupotrony.com` con un chat RAG, Ask Bru, que responde preguntas sobre Bru.

## Estructura
- `index.html`, `proyectos.html`, `ask-bru.html`: páginas. Van en la raíz porque las sirve GitHub Pages y sus URLs son públicas. No se mueven.
- `css/`, `js/`: estilos y scripts. En vanilla, sin build ni dependencias.
- `js/i18n.js`: textos en es/ca/en. Todo texto visible usa `data-i18n` y tiene clave en los 3 idiomas.
- `assets/`: imágenes, iconos y CVs.
- `ask-bru/`: backend FastAPI desplegado en Render (`ask-bru-ai.onrender.com`).
  - `app/main.py`: `/health` y `/chat`.
  - `app/retrieval.py`: embeddings de Gemini y RPC `match_chunks` en Supabase.
  - `app/llm.py`: fallback de gemini-3.5-flash-lite a gemini-3.1-flash-lite y luego a groq, con reintentos.
  - `ingest/run.py`: trocea `data/*.md` y lo sube a la tabla `chunks`.
  - `data/`: la fuente de verdad sobre Bru. Si se cambia, hay que volver a ejecutar `python ingest/run.py`.

## Cómo trabajar
- **Sin comentarios** en el código. Tampoco docstrings. Los nombres deben explicar el código solos.
- Mínimo código posible: reutilizar lo que ya existe y no añadir abstracciones, archivos ni librerías sin necesidad.
- Seguir el estilo del archivo que se edita. Cambios pequeños y enfocados.
- Nada de frameworks en el frontend. Los colores y las fuentes salen de las variables de `css/style.css`.
- Si se toca el CORS o la URL de la API, hay que cambiarlo a la vez en `main.py` y en `js/ask-bru.js`.
- Los secretos solo van en `ask-bru/.env` (`GEMINI_API_KEY`, `GROQ_API_KEY`, `SUPABASE_URL`, `SUPABASE_SERVICE_KEY`). Nunca se commitean.
- Probar el frontend con `python -m http.server 5500` y el backend con `uvicorn app.main:app --reload` desde `ask-bru/`.
- Hacer commit solo cuando el usuario lo pida.
- Al terminar una tarea relevante, actualizar `MEMORY.md`.
