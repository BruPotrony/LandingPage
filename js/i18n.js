// Traducciones ES / CA / EN. Los nombres de tecnologías no se traducen.
const I18N = {
  es: {
    titleHome: 'Bru Potrony · Software Developer',
    titleProjects: 'Proyectos · Bru Potrony',
    titleChat: 'Bru AI · Bru Potrony',
    langAria: 'Cambiar idioma',
    avatarAlt: 'Foto de Bru Potrony Lopez',
    role: 'software developer',
    intro: 'Backend y full-stack. Automatizo procesos industriales e integro sistemas con Python, Vue.js y Odoo.',
    stackAria: 'Tecnologías principales',
    linksAria: 'Enlaces principales',
    linkedinDesc: 'Perfil profesional y experiencia laboral',
    githubDesc: 'Repositorios y proyectos open source',
    cvTitle: 'Currículum',
    cvDesc: 'Descarga mi currículum actualizado',
    gmailDesc: 'Escríbeme directamente por email',
    projectsTitle: 'Proyectos',
    projectsDesc: 'Trabajos y casos de estudio destacados',
    askBruDesc: 'Pregunta a mi asistente sobre mi perfil',

    back: '← Volver',
    carouselAria: 'Listado de proyectos',
    prevAria: 'Proyecto anterior',
    nextAria: 'Proyecto siguiente',
    preview: 'Vista previa',
    privateLabel: 'Privado',
    privateTitle: 'Repositorio privado',
    lightboxAria: 'Recursos del proyecto',
    close: 'Cerrar',
    lbPrev: 'Recurso anterior',
    lbNext: 'Recurso siguiente',
    openPdf: 'Abrir PDF',

    chatSub: 'Asistente con IA entrenado con mi CV, mis proyectos y mi experiencia.',
    chatStatusCheck: 'Conectando…',
    chatStatusOn: 'En línea',
    chatStatusOff: 'Sin conexión',
    chatLogAria: 'Conversación',
    chatWelcome: 'Hola, soy el asistente de Bru. Pregúntame por su experiencia, sus proyectos o su stack.',
    chatPlaceholder: 'Escribe tu pregunta…',
    chatSend: 'Enviar pregunta',
    chatThinking: 'Pensando',
    chatErrNet: 'No he podido conectar con el servidor. Inténtalo en un momento.',
    chatErrBusy: 'El asistente está saturado ahora mismo. Prueba en unos segundos.',
    chatErrGeneric: 'Algo ha fallado al responder. Inténtalo de nuevo.',
    chatNote: 'Respuestas generadas por IA a partir de información sobre Bru. Pueden contener errores.',
    chatDemo: 'Esto es un proyecto de prueba: las respuestas las genera una IA y pueden contener errores. Contrasta cualquier dato con el CV de Bru.',
    chatColdStart: 'Como es un proyecto de prueba y no un caso real, uso los planes gratuitos de Render y Supabase, así que el servicio puede tardar hasta 1 minuto en arrancar.',

    p1a: 'Prueba de acceso para Footprint Mappa: una app que genera un PDF de reporte OCF (huella de carbono) con estadísticas y gráficos a partir de un CSV. Fui más allá del encargo y añadí scraping de la web del cliente para personalizar el informe con sus propios datos.',
    p1b: 'Implementé autenticación contra una base de datos en Xano, un chat de IA para explicar el reporte y un agente de IA (también sobre Xano) que genera recomendaciones para reducir la huella de carbono. Construí frontend y API por completo en una semana mediante vibe coding.',

    p2a: 'Bru AI es el asistente de este portfolio: un chat con RAG que responde preguntas sobre mi experiencia, mis proyectos y mi stack usando solo información real sobre mí. Lo construí de principio a fin: backend, base de datos vectorial, despliegue e interfaz.',
    p2b: 'Mis datos se guardan como embeddings de Gemini en Supabase con pgvector, y la API en FastAPI, desplegada en Render, recupera los fragmentos relevantes para cada pregunta. Para que sea fiable con planes gratuitos, encadeno tres modelos (Gemini y Groq) con reintentos y fallback automático.',

    p3a: 'ORQUE nació con dos compañeros para crear webs a medida con HTML, CSS y JavaScript.',
    p3b: 'El proyecto me enseñó a captar clientes, entender lo que necesitaban de verdad y convertirlo en una web clara, rápida y con buen SEO.',
    p3c: 'También aprendí a ordenar mejor el contenido para que cada web se entienda al instante.',
    p3d: 'La combinación de diseño, comunicación y posicionamiento fue clave para hacer un proyecto más sólido.',

    p4a: 'Este proyecto fue el trabajo final de curso, desarrollado en equipo con dos compañeros. Yo fui el responsable del frontend, implementado con WPF, C# y .NET, creando la interfaz y la lógica de juego para una adaptación multijugador de Risk.',
    p4b: 'Durante el desarrollo aprendí conceptos de contenedores, servidores, bases de datos y comunicación en tiempo real mediante WebSockets, necesarios para gestionar múltiples jugadores conectados simultáneamente. El proyecto se apoyaba en una base de datos MySQL y en un backend desarrollado con Java 21 y Spring Boot, con arquitectura cliente-servidor y funcionalidades multijugador en tiempo real.',

    p5a: 'Proyecto desarrollado en solitario, de principio a fin, para MASTERFOAM: una app de planta sobre Odoo para automatizar producción, materiales, stock, ubicaciones y fichajes, pensada para usarse desde una tablet en cada puesto de trabajo de la fábrica.',
    p5b: 'Construí el frontend en Vue y los módulos y funciones personalizadas en Python para conectar con Odoo (ORM, controladores/APIs), cubriendo todo el ciclo: análisis, desarrollo, despliegue y formación a toda la empresa tras la puesta en marcha, siguiendo buenas prácticas de programación y tests bajo supervisión de código externa.',
    p5c: 'Hoy la usan a diario más de 20 operarios en planta y uno de los procesos pasó de necesitar 3 personas a 1.'
  },

  ca: {
    titleHome: 'Bru Potrony · Software Developer',
    titleProjects: 'Projectes · Bru Potrony',
    titleChat: 'Bru AI · Bru Potrony',
    langAria: 'Canviar d’idioma',
    avatarAlt: 'Foto de Bru Potrony Lopez',
    role: 'software developer',
    intro: 'Backend i full-stack. Automatitzo processos industrials i integro sistemes amb Python, Vue.js i Odoo.',
    stackAria: 'Tecnologies principals',
    linksAria: 'Enllaços principals',
    linkedinDesc: 'Perfil professional i experiència laboral',
    githubDesc: 'Repositoris i projectes open source',
    cvTitle: 'Currículum',
    cvDesc: 'Descarrega el meu currículum actualitzat',
    gmailDesc: 'Escriu-me directament per correu',
    projectsTitle: 'Projectes',
    projectsDesc: 'Treballs i casos d’estudi destacats',
    askBruDesc: 'Pregunta al meu assistent sobre el meu perfil',

    back: '← Tornar',
    carouselAria: 'Llistat de projectes',
    prevAria: 'Projecte anterior',
    nextAria: 'Projecte següent',
    preview: 'Vista prèvia',
    privateLabel: 'Privat',
    privateTitle: 'Repositori privat',
    lightboxAria: 'Recursos del projecte',
    close: 'Tancar',
    lbPrev: 'Recurs anterior',
    lbNext: 'Recurs següent',
    openPdf: 'Obrir PDF',

    chatSub: 'Assistent amb IA entrenat amb el meu CV, els meus projectes i la meva experiència.',
    chatStatusCheck: 'Connectant…',
    chatStatusOn: 'En línia',
    chatStatusOff: 'Sense connexió',
    chatLogAria: 'Conversa',
    chatWelcome: 'Hola, sóc l’assistent d’en Bru. Pregunta’m per la seva experiència, els seus projectes o el seu stack.',
    chatPlaceholder: 'Escriu la teva pregunta…',
    chatSend: 'Enviar pregunta',
    chatThinking: 'Pensant',
    chatErrNet: 'No he pogut connectar amb el servidor. Torna-ho a provar d’aquí una estona.',
    chatErrBusy: 'L’assistent està saturat ara mateix. Prova-ho d’aquí uns segons.',
    chatErrGeneric: 'Alguna cosa ha fallat en respondre. Torna-ho a provar.',
    chatNote: 'Respostes generades amb IA a partir d’informació sobre en Bru. Poden contenir errors.',
    chatDemo: 'Això és un projecte de prova: les respostes les genera una IA i poden contenir errors. Contrasta qualsevol dada amb el CV d’en Bru.',
    chatColdStart: 'Com que és un projecte de prova i no un cas real, faig servir els plans gratuïts de Render i Supabase, així que el servei pot trigar fins a 1 minut a arrencar.',

    p1a: 'Prova d’accés per a Footprint Mappa: una app que genera un PDF d’informe OCF (petjada de carboni) amb estadístiques i gràfics a partir d’un CSV. Vaig anar més enllà de l’encàrrec i vaig afegir scraping del web del client per personalitzar l’informe amb les seves pròpies dades.',
    p1b: 'Vaig implementar autenticació contra una base de dades a Xano, un xat d’IA per explicar l’informe i un agent d’IA (també sobre Xano) que genera recomanacions per reduir la petjada de carboni. Vaig construir el frontend i l’API sencers en una setmana mitjançant vibe coding.',

    p2a: 'Bru AI és l’assistent d’aquest portfolio: un xat amb RAG que respon preguntes sobre la meva experiència, els meus projectes i el meu stack fent servir només informació real sobre mi. El vaig construir de principi a fi: backend, base de dades vectorial, desplegament i interfície.',
    p2b: 'Les meves dades es desen com a embeddings de Gemini a Supabase amb pgvector, i l’API en FastAPI, desplegada a Render, recupera els fragments rellevants per a cada pregunta. Perquè sigui fiable amb plans gratuïts, encadeno tres models (Gemini i Groq) amb reintents i fallback automàtic.',

    p3a: 'ORQUE va néixer amb dos companys per crear webs a mida amb HTML, CSS i JavaScript.',
    p3b: 'El projecte em va ensenyar a captar clients, entendre què necessitaven de debò i convertir-ho en un web clar, ràpid i amb bon SEO.',
    p3c: 'També vaig aprendre a ordenar millor el contingut perquè cada web s’entengui a l’instant.',
    p3d: 'La combinació de disseny, comunicació i posicionament va ser clau per fer un projecte més sòlid.',

    p4a: 'Aquest projecte va ser el treball final de curs, desenvolupat en equip amb dos companys. Jo vaig ser el responsable del frontend, implementat amb WPF, C# i .NET, creant la interfície i la lògica de joc per a una adaptació multijugador del Risk.',
    p4b: 'Durant el desenvolupament vaig aprendre conceptes de contenidors, servidors, bases de dades i comunicació en temps real mitjançant WebSockets, necessaris per gestionar múltiples jugadors connectats simultàniament. El projecte es recolzava en una base de dades MySQL i en un backend desenvolupat amb Java 21 i Spring Boot, amb arquitectura client-servidor i funcionalitats multijugador en temps real.',

    p5a: 'Projecte desenvolupat en solitari, de principi a fi, per a MASTERFOAM: una app de planta sobre Odoo per automatitzar producció, materials, estoc, ubicacions i fitxatges, pensada per fer-se servir des d’una tauleta a cada lloc de treball de la fàbrica.',
    p5b: 'Vaig construir el frontend en Vue i els mòduls i funcions personalitzades en Python per connectar amb Odoo (ORM, controladors/APIs), cobrint tot el cicle: anàlisi, desenvolupament, desplegament i formació a tota l’empresa després de la posada en marxa, seguint bones pràctiques de programació i tests sota supervisió de codi externa.',
    p5c: 'Avui l’utilitzen a diari més de 20 operaris a planta i un dels processos va passar de necessitar 3 persones a 1.'
  },

  en: {
    titleHome: 'Bru Potrony · Software Developer',
    titleProjects: 'Projects · Bru Potrony',
    titleChat: 'Bru AI · Bru Potrony',
    langAria: 'Change language',
    avatarAlt: 'Photo of Bru Potrony Lopez',
    role: 'software developer',
    intro: 'Backend and full-stack. I automate industrial processes and integrate systems with Python, Vue.js and Odoo.',
    stackAria: 'Main technologies',
    linksAria: 'Main links',
    linkedinDesc: 'Professional profile and work experience',
    githubDesc: 'Repositories and open source projects',
    cvTitle: 'CV',
    cvDesc: 'Download my up-to-date CV',
    gmailDesc: 'Email me directly',
    projectsTitle: 'Projects',
    projectsDesc: 'Selected work and case studies',
    askBruDesc: 'Ask my assistant about my profile',

    back: '← Back',
    carouselAria: 'Project list',
    prevAria: 'Previous project',
    nextAria: 'Next project',
    preview: 'Preview',
    privateLabel: 'Private',
    privateTitle: 'Private repository',
    lightboxAria: 'Project resources',
    close: 'Close',
    lbPrev: 'Previous resource',
    lbNext: 'Next resource',
    openPdf: 'Open PDF',

    chatSub: 'AI assistant trained on my CV, my projects and my experience.',
    chatStatusCheck: 'Connecting…',
    chatStatusOn: 'Online',
    chatStatusOff: 'Offline',
    chatLogAria: 'Conversation',
    chatWelcome: 'Hi, I’m Bru’s assistant. Ask me about his experience, his projects or his stack.',
    chatPlaceholder: 'Type your question…',
    chatSend: 'Send question',
    chatThinking: 'Thinking',
    chatErrNet: 'I couldn’t reach the server. Please try again in a moment.',
    chatErrBusy: 'The assistant is overloaded right now. Try again in a few seconds.',
    chatErrGeneric: 'Something went wrong while answering. Please try again.',
    chatNote: 'AI-generated answers based on information about Bru. They may contain mistakes.',
    chatDemo: 'This is a demo project: answers are AI-generated and may contain mistakes. Please check any information against Bru’s CV.',
    chatColdStart: 'Since this is a demo project and not a production service, it runs on the free tiers of Render and Supabase, so it may take up to 1 minute to start.',

    p1a: 'Technical test for Footprint Mappa: an app that turns a CSV into a carbon footprint (OCF) PDF report with statistics and charts. I went beyond the brief and added scraping of the client’s website to personalise the report with their own data.',
    p1b: 'I implemented authentication against a Xano database, an AI chat that explains the report and an AI agent (also on Xano) that generates recommendations to reduce the carbon footprint. I built the entire frontend and API in one week through vibe coding.',

    p2a: 'Bru AI is the assistant on this portfolio: a RAG chat that answers questions about my experience, my projects and my stack using only real information about me. I built it end to end: backend, vector database, deployment and interface.',
    p2b: 'My data is stored as Gemini embeddings in Supabase with pgvector, and the FastAPI service, deployed on Render, retrieves the relevant chunks for each question. To keep it reliable on free tiers, I chain three models (Gemini and Groq) with retries and automatic fallback.',

    p3a: 'ORQUE started with two colleagues to build custom websites with HTML, CSS and JavaScript.',
    p3b: 'The project taught me to find clients, understand what they actually needed and turn it into a clear, fast website with good SEO.',
    p3c: 'I also learned to structure content better so that each site is understood at a glance.',
    p3d: 'Combining design, communication and search positioning was key to making the project more solid.',

    p4a: 'This was my final course project, built as a team of three. I was responsible for the frontend, implemented with WPF, C# and .NET, creating the interface and the game logic for a multiplayer adaptation of Risk.',
    p4b: 'Along the way I learned about containers, servers, databases and real-time communication over WebSockets, all needed to handle several players connected at once. The project ran on a MySQL database and a backend built with Java 21 and Spring Boot, with a client-server architecture and real-time multiplayer features.',

    p5a: 'A project I built end to end on my own for MASTERFOAM: a shop-floor app on top of Odoo to automate production, materials, stock, locations and time tracking, designed to be used from a tablet at every workstation in the factory.',
    p5b: 'I built the frontend in Vue and the custom modules and functions in Python to connect with Odoo (ORM, controllers/APIs), covering the whole cycle: analysis, development, deployment and training for the entire company after go-live, following good programming practices and tests under external code review.',
    p5c: 'More than 20 operators now use it daily on the factory floor, and one of the processes went from needing 3 people to 1.'
  }
};

const LANGS = ['es', 'ca', 'en'];
const STORE_KEY = 'bp-lang';

// idioma guardado > idioma del navegador > español
const detectLang = () => {
  let saved = null;
  try { saved = localStorage.getItem(STORE_KEY); } catch { /* almacenamiento bloqueado */ }
  const nav = (navigator.language || 'es').slice(0, 2).toLowerCase();
  return LANGS.includes(saved) ? saved : LANGS.includes(nav) ? nav : 'es';
};

const ATTRS = [
  ['data-i18n-aria', 'aria-label'],
  ['data-i18n-title', 'title'],
  ['data-i18n-alt', 'alt'],
  ['data-i18n-placeholder', 'placeholder']
];

let currentLang = null;

const applyLang = (lang) => {
  const dict = I18N[lang];
  currentLang = lang;
  document.documentElement.lang = lang;
  document.title = dict[document.body.dataset.titleKey];

  // solo elementos hoja: textContent borraría los hijos
  document.querySelectorAll('[data-i18n]').forEach((el) => {
    el.textContent = dict[el.dataset.i18n];
  });

  ATTRS.forEach(([source, target]) => {
    document.querySelectorAll(`[${source}]`).forEach((el) => {
      el.setAttribute(target, dict[el.getAttribute(source)]);
    });
  });

  const cv = document.querySelector('[data-cv-link]');
  if (cv) cv.href = `./assets/cv/cv_BruPotrony_${lang}.pdf`;

  document.querySelectorAll('[data-lang]').forEach((btn) => {
    const active = btn.dataset.lang === lang;
    btn.classList.toggle('is-active', active);
    btn.setAttribute('aria-pressed', active);
  });

  window.BP_I18N = { lang, t: (key) => dict[key] };
  document.dispatchEvent(new CustomEvent('bp:languagechange', { detail: { lang } }));
};

document.querySelectorAll('[data-lang]').forEach((btn) => {
  btn.addEventListener('click', () => {
    const lang = btn.dataset.lang;
    if (lang === currentLang) return;
    try { localStorage.setItem(STORE_KEY, lang); } catch { /* sin persistencia, pero el cambio se aplica igual */ }
    applyLang(lang);
  });
});

// se ejecuta antes que script.js para que el tecleado lea ya el texto traducido
applyLang(detectLang());
