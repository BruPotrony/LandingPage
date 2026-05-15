// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Typewriter effect on the intro paragraph
const intro = document.querySelector('.intro');
if (intro) {
  const text = intro.textContent.trim();
  const TYPE_SPEED_MS = 28;
  const START_DELAY_MS = 700;

  intro.textContent = '';
  intro.classList.add('typing');

  let i = 0;
  const type = () => {
    if (i < text.length) {
      intro.textContent += text[i++];
      setTimeout(type, TYPE_SPEED_MS);
    } else {
      intro.classList.remove('typing');
    }
  };
  setTimeout(type, START_DELAY_MS);
}
