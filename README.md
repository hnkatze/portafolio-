# Camilo Henriquez — Portfolio

[![Astro](https://img.shields.io/badge/Astro-4.15.9-purple?style=flat&logo=astro)](https://astro.build)
[![React](https://img.shields.io/badge/React-18.3.1-blue?style=flat&logo=react)](https://reactjs.org)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.6.2-blue?style=flat&logo=typescript)](https://www.typescriptlang.org)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.13-cyan?style=flat&logo=tailwindcss)](https://tailwindcss.com)

Interactive developer portfolio built with Astro Islands + React. Features parallax scroll animations, real-time GitHub integrations, bilingual CV with PDF export, and contact form via EmailJS.

**[camilohenriquez.com](https://camilohenriquez.com)**

## Stack

- **Framework**: Astro 4 (SSG) + React 18 Islands
- **Styling**: TailwindCSS + Framer Motion
- **Contact**: EmailJS (client-side)
- **CV Export**: html2pdf.js (A4 layout, modal preview)
- **Language**: TypeScript strict mode

## Features

- **Interactive Journey**: Scroll-driven experience with parallax layers and entrance animations
- **Side Navigation**: Fixed dot nav tracking active section
- **Skills Grid**: Category tabs (Frontend/Backend/Tools) with 3D tilt cards
- **Experience Timeline**: Animated timeline with alternating layout
- **Projects Showcase**: 11 projects including MCP servers and dev tools
- **GitHub Integrations**: Stats, contribution graph, and pinned repos (build-time fetch)
- **Bilingual CV Modal**: A4 PDF generation with ES/EN toggle, desktop preview + mobile direct download
- **Contact Form**: EmailJS integration with validation

## Project Structure

```
src/
  components/
    journey/       # Main page islands (Hero, Skills, Experience, Projects, Contact)
    integrations/  # GitHub stats, contributions, repos (Astro components)
    cv/            # CV modal template + language toggle
    ui/            # Shared UI primitives
  layouts/         # Layout.astro + CVLayout.astro
  lib/             # Types, i18n helper, EmailJS config
  libs/            # Portfolio data (skills, projects, experience, education, certifications)
  pages/           # index.astro + cv.astro (redirect)
  styles/          # Global CSS + journey animations
```

## Quick Start

```bash
npm install
npm run dev        # http://localhost:4321
npm run build      # Production build
npm run preview    # Preview build locally
```

## Data

All portfolio data lives in `src/libs/utils.ts` — skills, projects, experience, education, certifications, and personal info. Types are defined in `src/lib/types.ts`.

## License

MIT
