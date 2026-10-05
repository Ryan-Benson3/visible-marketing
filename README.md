# Visible Marketing

Local marketing you actually own — websites and local search presence for service businesses and property managers. Built with **Astro 7**.

## Run it

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static build to dist/
npm run preview
```

## Design system

Warm paper `#fbfaf7`, ink `#0f172a`, electric blue `#2545ff` (primary), highlighter yellow `#ffd84d` (the "visible" mark). Tokens live in `src/styles/global.css`.

The "visible" idea carries the whole design:

- Hero headline word gets swept with a highlighter stroke on load
- A soft light follows the cursor across the hero (spotlight)
- The Invisible → Visible switch demos the core promise: a dimmed/blurred search card vs. highlighted winner
- Yellow dots and marks accent list items like margin notes

## Interactions (all vanilla, reduced-motion safe)

- Cursor spotlight via CSS custom properties
- Demo toggle (`[data-demo-switch]`)
- Scroll reveals (IntersectionObserver)
- Native `<details>` FAQ

## SEO

Sitemap, canonical, Open Graph, JSON-LD (`ProfessionalService`), robots.txt, llms.txt.

## Before launch

- Replace the placeholder email in the CTA (`index.astro`, marked with `TODO`)
- Point a real domain (e.g. visiblemarketing.com) at the Pages project and update `site` in `astro.config.mjs`
