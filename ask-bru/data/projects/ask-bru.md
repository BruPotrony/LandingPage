# Ask Bru — el chat de este portfolio (en desarrollo)

## Qué es

Un agente integrado en brupotrony.com que responde preguntas sobre Bru, citando las fuentes.

## Stack

Python, FastAPI, Supabase (Postgres + pgvector), Gemini con Groq como fallback, MCP, Langfuse, Render, GitHub Actions.

## Cómo funciona

RAG con búsqueda híbrida (vectorial + full-text, combinadas con RRF) sobre su CV, las descripciones de sus proyectos y los READMEs de GitHub, que se sincronizan automáticamente cada día. El agente usa tools (buscar en la base de conocimiento, consultar repos de GitHub, buscar proyectos por tecnología, obtener contacto y CV) con un loop propio sin LangChain. Las mismas tools se exponen como servidor MCP.

## Calidad y producción

Evals de retrieval y del agente, observabilidad con Langfuse, streaming, rate limiting, guardrails frente a prompt injection, tests con pytest y CI/CD por niveles.

## Estado

Se está construyendo por fases (primero RAG y chat, después tools, después MCP y evals).
