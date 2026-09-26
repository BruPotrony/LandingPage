/* ── ask bru: conversación contra la API de FastAPI (POST /chat) ──
   Va en un IIFE porque script.js ya declara una `t` global y los scripts
   clásicos comparten ámbito: dos `const t` de primer nivel serían un error. */
(() => {
  // Backend local: `uvicorn app.main:app --reload` desde ask-bru/
  const LOCAL_HOSTS = ['localhost', '127.0.0.1', ''];
  const API_BASE = LOCAL_HOSTS.includes(location.hostname)
    ? 'http://127.0.0.1:8000'
    : 'https://ask-bru.onrender.com';

  const TIMEOUT_MS = 60000;   // la cadena de fallback del backend puede tardar
  const MAX_CHARS = 500;      // mismo límite que el Field de ChatRequest
  const MAX_HEIGHT = 160;     // mismo valor que el max-height de .chat-input

  const form = document.querySelector('[data-form]');
  if (!form) return;

  const log = document.querySelector('[data-log]');
  const input = document.querySelector('[data-input]');
  const sendBtn = document.querySelector('[data-send]');
  const counter = document.querySelector('[data-counter]');
  const status = document.querySelector('[data-status]');
  const statusText = document.querySelector('[data-status-text]');

  const t = (key) => window.BP_I18N.t(key);
  let pending = false;

  const el = (tag, className, text) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (text) node.textContent = text;
    return node;
  };

  const scrollToEnd = () => log.scrollTo({ top: log.scrollHeight, behavior: 'smooth' });

  // ── estado de la conexión ──
  const setStatus = (state) => {
    const key = { online: 'chatStatusOn', offline: 'chatStatusOff' }[state] || 'chatStatusCheck';
    status.classList.toggle('is-online', state === 'online');
    status.classList.toggle('is-offline', state === 'offline');
    // dejamos la clave puesta para que i18n.js la retraduzca al cambiar de idioma
    statusText.dataset.i18n = key;
    statusText.textContent = t(key);
  };

  const checkHealth = async () => {
    try {
      const res = await fetch(`${API_BASE}/health`, { method: 'GET' });
      setStatus(res.ok ? 'online' : 'offline');
    } catch {
      setStatus('offline');
    }
  };

  // ── render de la respuesta ──
  // Formato mínimo (negritas, código y listas) construido como nodos:
  // nunca pasamos texto del modelo por innerHTML.
  const INLINE = /(\*\*[^*]+\*\*|`[^`]+`)/g;

  const appendInline = (parent, text) => {
    text.split(INLINE).forEach((part) => {
      if (!part) return;
      if (part.startsWith('**') && part.endsWith('**')) parent.append(el('strong', '', part.slice(2, -2)));
      else if (part.startsWith('`') && part.endsWith('`')) parent.append(el('code', '', part.slice(1, -1)));
      else parent.append(document.createTextNode(part));
    });
  };

  const renderRich = (text, parent) => {
    let list = null;
    text.split('\n').forEach((raw) => {
      const line = raw.trim();
      if (!line) { list = null; return; }

      const bullet = line.match(/^[-*•]\s+(.*)$/);
      if (bullet) {
        if (!list) { list = el('ul'); parent.append(list); }
        const li = el('li');
        appendInline(li, bullet[1]);
        list.append(li);
        return;
      }

      list = null;
      const p = el('p');
      appendInline(p, line);
      parent.append(p);
    });
  };

  const addMessage = (variant) => {
    const msg = el('article', `msg msg-${variant}`);
    const body = el('div', 'msg-body');
    msg.append(body);
    log.append(msg);
    scrollToEnd();
    return { msg, body };
  };

  const addProvider = (msg, provider) => {
    if (provider) msg.append(el('p', 'msg-provider', provider));
  };

  const showTyping = () => {
    const { msg, body } = addMessage('bot msg-typing');
    const dots = el('span', 'typing-dots');
    dots.append(el('span'), el('span'), el('span'));
    body.append(dots, el('span', 'typing-label', t('chatThinking')));
    return msg;
  };

  // ── ciclo de pregunta / respuesta ──
  const setBusy = (busy) => {
    pending = busy;
    input.disabled = busy;
    sendBtn.disabled = busy;
    log.setAttribute('aria-busy', String(busy));
  };

  const ask = async (question) => {
    if (pending) return;

    const user = addMessage('user');
    user.body.append(el('p', '', question));

    setBusy(true);
    const typing = showTyping();

    const controller = new AbortController();
    const timer = setTimeout(() => controller.abort(), TIMEOUT_MS);

    try {
      const res = await fetch(`${API_BASE}/chat`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ message: question }),
        signal: controller.signal,
      });

      typing.remove();

      if (!res.ok) {
        const { body } = addMessage('bot msg-error');
        body.append(el('p', '', t(res.status === 503 ? 'chatErrBusy' : 'chatErrGeneric')));
        setStatus(res.status === 503 ? 'online' : 'offline');
        return;
      }

      const data = await res.json();
      const { msg, body } = addMessage('bot');
      renderRich(data.answer, body);
      addProvider(msg, data.provider);
      setStatus('online');
    } catch (e) {
      typing.remove();
      const { body } = addMessage('bot msg-error');
      body.append(el('p', '', t('chatErrNet')));
      setStatus('offline');
    } finally {
      clearTimeout(timer);
      setBusy(false);
      scrollToEnd();
      input.focus();
    }
  };

  // ── entrada ──
  const resize = () => {
    input.style.height = 'auto';
    // scrollHeight no cuenta el borde y el box-sizing es border-box: sin sumarlo
    // el textarea queda 2px corto y sale una barra de scroll permanente
    const border = input.offsetHeight - input.clientHeight;
    const needed = input.scrollHeight + border;
    input.style.height = `${Math.min(needed, MAX_HEIGHT)}px`;
    input.classList.toggle('is-full', needed > MAX_HEIGHT);
  };

  const updateCounter = () => {
    const left = MAX_CHARS - input.value.length;
    counter.textContent = input.value.length ? `${input.value.length}/${MAX_CHARS}` : '';
    counter.classList.toggle('is-near', left <= 60);
  };

  form.addEventListener('submit', (event) => {
    event.preventDefault();
    const question = input.value.trim();
    if (!question) return;
    input.value = '';
    resize();
    updateCounter();
    ask(question);
  });

  input.addEventListener('input', () => { resize(); updateCounter(); });

  // Enter envía, Shift+Enter hace salto de línea
  input.addEventListener('keydown', (event) => {
    if (event.key !== 'Enter' || event.shiftKey || event.isComposing) return;
    event.preventDefault();
    form.requestSubmit();
  });

  checkHealth();
  if (window.matchMedia('(min-width: 640px)').matches) input.focus();
})();
