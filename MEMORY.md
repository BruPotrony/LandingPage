# MEMORY.md

Estado del proyecto y decisiones que no se deducen del código. Se escribe en frases cortas y se actualiza al terminar cada tarea.

## Estado
- La landing, los proyectos y el i18n están terminados y publicados.
- Ask Bru funciona de principio a fin: el chat del frontend llama a FastAPI en Render, que hace RAG con Supabase y usa los LLMs con fallback.
- 2026-09-30: los CSS se han movido a `css/` y los JS a `js/`. Los HTML se quedan en la raíz.

## Decisiones
- Los HTML van en la raíz para no romper las URLs públicas, las canónicas ni los enlaces compartidos.
- El frontend no tiene build y está hecho en vanilla para que sea simple y rápido en GitHub Pages.
- Hay varios proveedores de LLM con fallback porque los planes gratuitos dan 429/503 a menudo.
- El contexto de RAG se trata como datos y nunca como instrucciones, para evitar prompt injection.
- El código se escribe sin comentarios.

## Pendiente
- (vacío)
