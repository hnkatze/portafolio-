# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

### Development
```bash
npm run dev        # Start development server at http://localhost:4321
npm run build      # Type check with astro check, then build for production
npm run preview    # Preview production build locally
```

## Architecture Overview

### Tech Stack
- **Framework**: Astro 5 with SSG (Static Site Generation) for optimal performance
- **Styling**: TailwindCSS 3.4.13 with custom retro theme utilities
- **Animations**: GSAP 3 + ScrollTrigger for scroll-based and entrance animations
- **Contact Form**: EmailJS for client-side email submissions
- **PDF Export**: html2pdf.js (lazy-loaded) for CV downloads
- **Language**: TypeScript 5.6.2 with strict mode

### Project Structure

#### Key Directories
- `src/components/` - All Astro components with `<script>` blocks for interactivity
  - `journey/` - Main page sections (Hero, Skills, Experience, Projects, etc.)
  - `cv/` - CV modal with PDF export
  - `integrations/` - GitHub stats, Discord presence
- `src/libs/utils.ts` - Core data (skills, projects, constants)
- `src/lib/` - Utilities and configuration
  - `gsap.ts` - GSAP setup, ScrollTrigger, animation presets, reduced-motion handling
  - `config.ts` - EmailJS configuration
  - `types.ts` - TypeScript type definitions
  - `i18n.ts` - Bilingual text helper
- `src/styles/` - Global CSS with custom animations and retro theme

### Component Architecture

#### Pure Astro Architecture (no React)
- All HTML is server-rendered at build time
- Interactivity via `<script>` blocks with vanilla JS + GSAP
- No client hydration — zero framework JS overhead
- Native `<dialog>` for CV modal

#### Key Components
- **Layout.astro**: Main layout with SEO meta tags
- **JourneyNav.astro**: Scroll spy navigation with dot indicators
- **SkillsIsland.astro**: Tab switching + 3D tilt + progress bars
- **CVTemplate.astro**: Native `<dialog>` modal with PDF export + bilingual toggle
- **ContactIsland.astro**: Form with EmailJS submission

### Animation System (`src/lib/gsap.ts`)
- **GSAP ScrollTrigger** for scroll-triggered reveals (`scrollReveal()`)
- **GSAP Timeline** for entrance animations (`entranceTimeline()`)
- **Parallax** via ScrollTrigger scrub (`parallax()`)
- **Reduced motion**: Centralized `prefers-reduced-motion` check — all animations duration=0
- **Cleanup**: Auto-cleanup on `astro:before-swap` event (`killAll()`)
- **Easing**: `power2.out` matching previous Framer Motion cubic-bezier

### Data Management
All portfolio data is centralized in `src/libs/utils.ts`:
- `personalInfo` - Name, title, summary, socials, photo
- `skills[]` - All technical skills with proficiency percentages
- `projects[]` - Project showcase data
- `experience[]` - Professional experience with bilingual text
- `education[]`, `certifications[]`, `languages[]` - CV data

### Styling Approach
- **Utility-first**: TailwindCSS for all styling
- **CSS only for**: Complex keyframe animations (`global.css`, `journey.css`)
- **Hover/focus effects**: Pure Tailwind classes
- **No CVA/Radix** — direct Tailwind classes everywhere

### Path Aliases
TypeScript configured with `@/*` alias pointing to `src/*` for clean imports.

## Development Guidelines

### Component Creation
- Use `.astro` for all components
- Add `<script>` blocks for interactivity
- Import `scrollReveal`, `parallax`, etc. from `@/lib/gsap`
- Use `data-*` attributes for DOM queries in scripts
- Follow existing patterns in `src/components/journey/`

### Animation Patterns
```astro
<div data-my-element>Content</div>

<script>
  import { scrollReveal } from '@/lib/gsap';
  scrollReveal('[data-my-element]', { direction: 'fadeUp', stagger: 0.1 });
</script>
```
