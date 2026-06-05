// Footer year
const yearEl = document.getElementById('year');
if (yearEl) {
  yearEl.textContent = String(new Date().getFullYear());
}

// Typewriter effect on the intro paragraph
const intro = document.querySelector('.intro');
if (intro && !intro.dataset.static) {
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

// Projects carousel navigation
const carousel = document.querySelector('[data-carousel]');
if (carousel) {
  const initCarousel = () => {
    const slides = Array.from(carousel.querySelectorAll('[data-slide]'));
    const prevBtn = carousel.querySelector('[data-prev]');
    const nextBtn = carousel.querySelector('[data-next]');
    const counter = document.querySelector('[data-counter]');

    let current = slides.findIndex((slide) => slide.classList.contains('is-active'));
    if (current < 0) current = 0;

    const update = () => {
      slides.forEach((slide, index) => {
        slide.classList.toggle('is-active', index === current);
      });

      if (counter) {
        counter.textContent = `${current + 1} / ${slides.length}`;
      }
    };

    prevBtn?.addEventListener('click', () => {
      current = (current - 1 + slides.length) % slides.length;
      update();
    });

    nextBtn?.addEventListener('click', () => {
      current = (current + 1) % slides.length;
      update();
    });

    update();
  };

  if ('requestIdleCallback' in window) {
    window.requestIdleCallback(initCarousel, { timeout: 180 });
  } else {
    setTimeout(initCarousel, 0);
  }
}
