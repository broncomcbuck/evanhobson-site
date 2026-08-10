# evanhobson.com

Personal site — research, projects, CV, and writing.

Built with [Astro](https://astro.build) and Tailwind, deployed to GitHub Pages via `.github/workflows/deploy.yml` on push to `main`. Custom domain set in `CNAME`.

## Structure

```
src/
├── pages/          index · about · research · projects · cv · writing
├── layouts/        BaseLayout, SnapLayout (scroll-snap sections)
├── components/     NavBar, ScrollDots, AsciiLandscape
├── scripts/        theme-toggle.js
└── styles/         global.css
```

Pages are file-routed: `src/pages/about.astro` becomes `/about`.

## Local development

```sh
npm install
npm run dev      # dev server at localhost:4321
npm run build    # static build to dist/
npm run preview  # serve the build locally
```
