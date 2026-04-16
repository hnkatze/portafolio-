# Camilo Henriquez — Portfolio

[![Astro](https://img.shields.io/badge/Astro-5-purple?style=flat&logo=astro)](https://astro.build)
[![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3-cyan?style=flat&logo=tailwindcss)](https://tailwindcss.com)
[![GSAP](https://img.shields.io/badge/GSAP-3-green?style=flat)](https://greensock.com/gsap)

Interactive portfolio built with **pure Astro SSG** — zero framework JS on the client. Features GSAP scroll animations, real-time GitHub integrations, bilingual content with live EN/ES toggle, and contact form via EmailJS.

**Live:** [camilohenriquez.com](https://www.camilohenriquez.com)

## Stack

- **Framework** — Astro 5 (Static Site Generation, zero hydration)
- **Animation** — GSAP 3 + ScrollTrigger (scroll reveals, parallax, entrance timelines)
- **Styling** — TailwindCSS 3 (utility-first, dark theme)
- **Contact** — EmailJS (client-side email delivery)
- **Language** — TypeScript 5 strict mode

No React, no Vue, no framework runtime. Just Astro components with `<script>` blocks using vanilla JS + GSAP for interactivity.

## Features

- **Interactive scroll journey** — Parallax layers and entrance animations across 7 sections
- **Side dot navigation** — Fixed right-side nav with active section tracking
- **Skills grid** — Expert/Proficient/Familiar levels with 3D tilt cards
- **Experience timeline** — Vertical timeline with alternating card layout
- **Projects showcase** — Dev tools, MCP servers, and client projects
- **Client testimonials** — 3-column responsive grid
- **GitHub integrations** — Stats, top languages, streak, contribution graph, and pinned repos
- **Bilingual CV modal** — A4 preview with live EN/ES toggle
- **Contact form** — EmailJS with validation and status feedback
- **Full EN/ES support** — Client-side language toggle via `data-i18n-*` attributes, localStorage persistence
- **SEO optimized** — Open Graph, Twitter Card, canonical URL, sitemap

## Project Structure

```
src/
  components/
    journey/       # Main sections — Hero, Skills, Experience, Projects, Testimonials, Contact
    integrations/  # GitHub stats, contributions, repos, streak, top languages
    cv/            # Bilingual CV modal template
  layouts/         # Layout.astro (SEO meta) + CVLayout.astro
  lib/             # Types, i18n helper, GSAP setup, EmailJS config
  libs/            # Portfolio data (skills, projects, experience, testimonials, etc.)
  pages/           # index.astro (main page) + cv.astro
  styles/          # Global CSS + journey animations
public/
  icons/           # Local SVG icons (Playwright, etc.)
  og-image.png     # Social share preview
```

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # Production build (with astro check)
npm run preview    # Preview build locally
```

## Data

All portfolio data lives in [`src/libs/utils.ts`](./src/libs/utils.ts) — skills, projects, experience, testimonials, education, certifications, personal info. Bilingual text uses the `BilingualText` type with `es` and `en` keys.

Type definitions are in [`src/lib/types.ts`](./src/lib/types.ts).

## License

MIT
