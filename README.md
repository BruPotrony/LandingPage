# Bru Potrony — Landing Page

Personal landing page built with vanilla HTML, CSS and JavaScript. No build step, no dependencies.

**Live:** [brupotrony.com](https://brupotrony.com)

## Stack

- HTML5
- CSS3 (custom properties, keyframe animations, responsive layout)
- Vanilla JavaScript (ES2020)
- Hosted on GitHub Pages with a custom domain

## Project structure

```
.
├── index.html        # Page markup
├── style.css         # Theme, layout and animations
├── script.js         # Footer year + typewriter intro
├── assets/           # Images and icons
└── CNAME             # Custom domain for GitHub Pages
```

## Run locally

Just open `index.html` in a browser, or serve the folder with any static server:

```powershell
# Python
python -m http.server 8080

# Node (npx)
npx serve .
```

Then visit `http://localhost:8080`.

## Deployment

Pushed to `main` and served automatically by GitHub Pages.
