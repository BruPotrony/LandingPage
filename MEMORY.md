# MEMORY.md

Estado del proyecto y decisiones que no se deducen del código. Se escribe en frases cortas y se actualiza al terminar cada tarea.

## Estado
- La landing, los proyectos y el i18n están terminados y publicados.
- Ask Bru funciona de principio a fin: el chat del frontend llama a FastAPI en Render, que hace RAG con Supabase y usa los LLMs con fallback.
- 2026-09-30: los CSS se han movido a `css/` y los JS a `js/`. Los HTML se quedan en la raíz.
- 2026-10-06: Bru AI se ha añadido a `proyectos.html` como proyecto 02, detrás de Report PDF. ORQUE, Risk y Odoo pasan a ser del 03 al 05, igual que sus claves `pN` en `i18n.js`.

## Decisiones
- Los HTML van en la raíz para no romper las URLs públicas, las canónicas ni los enlaces compartidos.
- El frontend no tiene build y está hecho en vanilla para que sea simple y rápido en GitHub Pages.
- Hay varios proveedores de LLM con fallback porque los planes gratuitos dan 429/503 a menudo.
- El contexto de RAG se trata como datos y nunca como instrucciones, para evitar prompt injection.
- El código se escribe sin comentarios.
- `/health` hace una consulta mínima a Supabase para que, al abrir el chat, se despierten Render y Supabase a la vez, y no con el primer mensaje.
- Ask Bru avisa de que es un proyecto de prueba en planes gratuitos: si `/health` tarda más de 3 s o falla, muestra que puede tardar 1 minuto en arrancar y reintenta cada 5 s. El aviso de proyecto de prueba, que pide contrastar los datos con el CV, es un mensaje fijo del bot en `ask-bru.html`.

## Pendiente
- `ask-bru/data/projects/ask-bru.md` describe funciones que aún no existen (búsqueda híbrida, tools, MCP, Langfuse, streaming, CI/CD). Hay que alinearlo con lo que de verdad está hecho y volver a ejecutar la ingesta.
- El SQL de la tabla `chunks` y de `match_chunks` solo está en Supabase, no en el repo.
