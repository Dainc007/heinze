# heinze.com.pl

Personal site of Daniel Heinze. A static site: HTML templates, Tailwind CSS and Alpine.js, built with Vite.
English at `/`, Polish at `/pl/`.

## Run it

```bash
npm install
npm run dev      # http://localhost:5173 and http://localhost:5173/pl/
npm run build    # static files in dist/
npm run preview  # serve dist/ locally
```

Node 20.19+ (see `.nvmrc`).

## Where things are

| What | File |
|---|---|
| Page layout and sections | `src/templates/home.njk`, `src/templates/layout.njk`, `src/templates/partials/` |
| English text | `src/content/en.json` |
| Polish text | `src/content/pl.json` |
| Links, projects, images, order of things (shared by both languages) | `src/content/site.json` |
| Colours and fonts (design tokens) | `@theme` in `src/styles/app.css` |
| Small interactions (mobile menu, active nav link, ball) | `src/js/app.js` |
| Images, favicon, robots.txt, sitemap.xml | `public/` |

Templates use [Nunjucks](https://mozilla.github.io/nunjucks/) (`{{ }}`, `{% if %}`, `{% for %}`, close to Blade/Twig).
`plugins/pages.js` renders `index.html` and `pl/index.html` from the same template with the matching
language file, so every page exists in both languages and Google indexes both.

### Add a project

1. Put a screenshot in `public/images/` (WebP, about 1600 px wide).
2. Add an entry to `projects` in `src/content/site.json` (`id`, `image`, `url`, `stack`).
3. Add its `title`, `kind` and `text` under `work.projects.<id>` in **both** `en.json` and `pl.json`.

### Add a page

Add the entry to `pages({ entries })` in `vite.config.js`, create the stub file (e.g. `pl/uses/index.html`)
and the template in `src/templates/`.

## Deploy

Hosted on **Cloudflare Pages**, connected to this GitHub repo. Every push to `main` builds and publishes the site.
Build command `npm run build`, output directory `dist`, custom domain `heinze.com.pl` (DNS is on Cloudflare).

## To do

- [ ] CloudLinux start year (`about.jobs.cloudlinux.dates` in both languages, now just "Now").
- [ ] Discord profile link (`links.discord` in `site.json`). The icon shows once it is set.
- [ ] Buy me a beer and Patronite links (`support` in `site.json`). Each shows once it is set.
- [ ] Is the "Open for projects" badge still wanted? (`available` in `site.json`).
- [ ] Read through all copy in `en.json` and `pl.json`.
- [ ] Optional: a Webratings screenshot (add `image` to its entry in `site.json`).
- [ ] Optional: client quotes (`testimonials` in `site.json` + `testimonials.quotes` in the language files).
- [ ] Optional: a share image (`og:image`) for links posted on social media.
