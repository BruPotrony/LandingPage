document.getElementById('year').textContent = new Date().getFullYear();

const t = (key) => window.BP_I18N.t(key);

// Tecleado del párrafo de intro; se reinicia al cambiar de idioma
const intro = document.querySelector('.intro');
if (intro) {
  let timer = null;

  const typewrite = (delay) => {
    clearTimeout(timer);
    const text = intro.textContent.trim();
    let i = 0;
    intro.textContent = '';
    intro.classList.add('typing');

    const type = () => {
      if (i < text.length) {
        intro.textContent += text[i++];
        timer = setTimeout(type, 28);
      } else {
        intro.classList.remove('typing');
      }
    };
    timer = setTimeout(type, delay);
  };

  typewrite(700);
  // i18n.js ya ha dejado el texto traducido en el párrafo cuando avisa
  document.addEventListener('bp:languagechange', () => typewrite(120));
}

// Carrusel de proyectos (flechas en pantalla y del teclado)
const carousel = document.querySelector('[data-carousel]');
const lightbox = document.querySelector('[data-lightbox]');

if (carousel) {
  const slides = [...carousel.querySelectorAll('[data-slide]')];
  const counter = document.querySelector('[data-counter]');
  let current = 0;

  const show = (index) => {
    current = (index + slides.length) % slides.length;
    slides.forEach((slide, i) => slide.classList.toggle('is-active', i === current));
    counter.textContent = `${current + 1} / ${slides.length}`;
  };

  carousel.querySelector('[data-prev]').addEventListener('click', () => show(current - 1));
  carousel.querySelector('[data-next]').addEventListener('click', () => show(current + 1));

  document.addEventListener('keydown', (event) => {
    if (event.repeat || event.ctrlKey || event.metaKey || event.altKey) return;
    if (lightbox && !lightbox.hidden) return; // el lightbox usa las flechas para lo suyo
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
}

// Lightbox de "Vista previa": imágenes y PDFs de cada proyecto
if (lightbox) {
  const stage = lightbox.querySelector('[data-lightbox-stage]');
  const titleEl = lightbox.querySelector('[data-lightbox-title]');
  const counterEl = lightbox.querySelector('[data-lightbox-counter]');
  let items = [];
  let current = 0;
  let lastFocused = null;

  const show = (index) => {
    current = (index + items.length) % items.length;
    const item = items[current];
    stage.innerHTML = item.src.endsWith('.pdf')
      ? `<div class="lightbox-pdf">
           <p>${item.alt}</p>
           <a class="project-action project-action-light" href="${item.src}" target="_blank" rel="noreferrer">${t('openPdf')}</a>
         </div>`
      : `<img src="${item.src}" alt="${item.alt}" />`;
    counterEl.textContent = `${current + 1} / ${items.length}`;
  };

  const close = () => {
    lightbox.hidden = true;
    stage.innerHTML = '';
    lastFocused?.focus();
  };

  document.querySelectorAll('[data-gallery]').forEach((trigger) => {
    trigger.addEventListener('click', () => {
      items = JSON.parse(trigger.dataset.gallery);
      titleEl.textContent = trigger.dataset.galleryTitle;
      lastFocused = document.activeElement;
      lightbox.hidden = false;
      show(0);
      lightbox.querySelector('.lightbox-close').focus();
    });
  });

  lightbox.querySelectorAll('[data-lightbox-close]').forEach((el) => el.addEventListener('click', close));
  lightbox.querySelector('[data-lightbox-prev]').addEventListener('click', () => show(current - 1));
  lightbox.querySelector('[data-lightbox-next]').addEventListener('click', () => show(current + 1));

  document.addEventListener('keydown', (event) => {
    if (lightbox.hidden) return;
    if (event.key === 'Escape') close();
    if (event.key === 'ArrowLeft') show(current - 1);
    if (event.key === 'ArrowRight') show(current + 1);
  });
}
