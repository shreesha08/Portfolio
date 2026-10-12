# Shreesha Rao | Mobile Application Developer

Personal portfolio — a single-page Next.js + Tailwind site, exported as static HTML.

## Editing content

All text lives in `content/site.ts`: profile, experience, projects, technologies,
services, education and links. Sections render from it, so copy changes never
touch JSX. Empty values are hidden on the page:

- `links.email` / `links.linkedin` / `links.github` — contact buttons and footer icons.
- `links.resume` — set to `/resume.pdf` after adding `public/resume.pdf`.
- `education.degree` — the Education section appears once this is filled.
- `SPLINE_SCENE` — a Spline `scene.splinecode` URL for the 3D hero; until set,
  the hero shows CSS keycaps.

## Structure

- `app/(site)/page.tsx` — composes the sections in order.
- `components/sections/*` — one component per section.
- `components/SiteNav.tsx`, `components/SiteFooter.tsx` — sticky anchor nav and footer.
- `components/HeroScene.tsx` — lazy-loaded Spline scene with the keycap fallback.
- `lib/tokens.ts` — colours and fonts; `tailwind.config.ts` reads it.

## Run

```sh
npm install
npm run dev
```

## Checks

```sh
npm run format
npm run lint
npm run typecheck
npm run build      # static export to out/
```

## Deploy

`output: 'export'` produces a static site in `out/`, so it can be hosted on
Vercel (`npx vercel`), GitHub Pages, Netlify or any static host.
