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

// Project gallery lightbox ("Vista previa" de recursos adicionales)
const lightbox = document.querySelector('[data-lightbox]');
if (lightbox) {
  const stage = lightbox.querySelector('[data-lightbox-stage]');
  const titleEl = lightbox.querySelector('[data-lightbox-title]');
  const counterEl = lightbox.querySelector('[data-lightbox-counter]');
  const prevBtn = lightbox.querySelector('[data-lightbox-prev]');
  const nextBtn = lightbox.querySelector('[data-lightbox-next]');

  let items = [];
  let current = 0;
  let lastFocused = null;

  const renderItem = () => {
    const item = items[current];
    stage.innerHTML = '';

    if (item.type === 'pdf') {
      const wrapper = document.createElement('div');
      wrapper.className = 'lightbox-pdf';
      wrapper.innerHTML = `
        <p>${item.alt || 'Documento PDF'}</p>
        <a class="project-action project-action-light" href="${item.src}" target="_blank" rel="noreferrer">
          <span>Abrir PDF</span>
        </a>
      `;
      stage.appendChild(wrapper);
    } else {
      const img = document.createElement('img');
      img.src = item.src;
      img.alt = item.alt || '';
      stage.appendChild(img);
    }

    counterEl.textContent = `${current + 1} / ${items.length}`;
  };

  const openLightbox = (data, title) => {
    items = data;
    current = 0;
    titleEl.textContent = title || '';
    lastFocused = document.activeElement;
    lightbox.hidden = false;
    renderItem();
    lightbox.querySelector('[data-lightbox-close]')?.focus();
  };

  const closeLightbox = () => {
    lightbox.hidden = true;
    stage.innerHTML = '';
    if (lastFocused instanceof HTMLElement) {
      lastFocused.focus();
    }
  };

  document.querySelectorAll('[data-gallery-trigger]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      let data = [];
      try {
        data = JSON.parse(trigger.getAttribute('data-gallery') || '[]');
      } catch (err) {
        data = [];
      }
      if (!data.length) return;
      openLightbox(data, trigger.getAttribute('data-gallery-title'));
    });
  });

  lightbox.querySelectorAll('[data-lightbox-close]').forEach((el) => {
    el.addEventListener('click', closeLightbox);
  });

  prevBtn?.addEventListener('click', () => {
    current = (current - 1 + items.length) % items.length;
    renderItem();
  });

  nextBtn?.addEventListener('click', () => {
    current = (current + 1) % items.length;
    renderItem();
  });

  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') closeLightbox();
    if (event.key === 'ArrowLeft') prevBtn?.click();
    if (event.key === 'ArrowRight') nextBtn?.click();
  });
}
