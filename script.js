// ── Year ──
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = String(new Date().getFullYear());

// ── Typewriter intro ──
const intro = document.querySelector('.intro');
if (intro) {
  const text = intro.textContent.trim();
  intro.textContent = '';
  intro.classList.add('typing');
  let i = 0;
  const type = () => {
    if (i < text.length) {
      intro.textContent += text[i++];
      setTimeout(type, 28);
    } else {
      intro.classList.remove('typing');
    }
  };
  setTimeout(type, 700);
}

// ── Remove link-in animation on end so hover transitions work ──
document.querySelectorAll('.links a').forEach(el => {
  el.addEventListener('animationend', () => {
    el.style.animation = 'none';
    el.style.opacity = '1';
  }, { once: true });
});


