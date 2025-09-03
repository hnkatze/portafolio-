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
- **Framework**: Astro 4.15.9 with SSG (Static Site Generation) for optimal performance
- **UI Framework**: React 18.3.1 for interactive components
- **Styling**: TailwindCSS 3.4.13 with custom retro theme utilities
- **Animations**: Framer Motion 11.9.0 + AOS for scroll-based animations
- **Backend**: Firebase 10.14.0 for contact form submissions
- **Language**: TypeScript 5.6.2 with strict mode

### Project Structure

#### Key Directories
- `src/components/` - Reusable Astro and React components
  - `ui/` - Shadcn-style UI primitives (button, card, badge)
  - Interactive components use React (.tsx)
  - Static components use Astro (.astro)
- `src/libs/utils.ts` - Core data (skills, projects, constants)
- `src/lib/` - Utilities and configuration
  - `config.ts` - Firebase configuration
  - `types.ts` - TypeScript type definitions
  - `utils.ts` - cn() utility for className merging
- `src/scripts/` - Client-side JavaScript for modals and interactions
- `src/styles/` - Global CSS with custom animations and retro theme

### Component Architecture

#### Astro Islands Architecture
- Static HTML by default with selective hydration
- React components hydrated only when needed (Skills.tsx with client:load)
- Optimal performance with minimal JavaScript

#### Key Components
- **Layout.astro**: Main layout with SEO meta tags
- **Skills.tsx**: Interactive skill toggles with progress bars
- **AnimatedProjectCard.astro**: Project cards with hover effects
- **Modal System**: Enhanced modal in scripts/enhancedModal.js for contact form

### Data Management
All portfolio data is centralized in `src/libs/utils.ts`:
- `skills[]` - All technical skills with proficiency percentages
- `favo[]` - Favorite/featured skills subset
- `projects[]` - Project showcase data with PropsProject type

### Styling Approach
- **Utility-first**: TailwindCSS for rapid development
- **Custom Theme**: Retro-futuristic design with:
  - Gray-based color palette
  - Custom animations (fade, slide, pulse effects)
  - Retro patterns and shapes
  - Text shadows and gradients
- **Component Variants**: Using CVA (class-variance-authority) for UI components

### Path Aliases
TypeScript configured with `@/*` alias pointing to `src/*` for clean imports.

### Firebase Integration
Contact form submissions stored in Firestore. Configuration expected in environment variables (see README for setup).

## Development Guidelines

### Adding New Projects
Update `src/libs/utils.ts`:
```typescript
export const projects: PropsProject[] = [
  {
    title: "Project Name",
    description: "Description with technologies",
    images: "https://image-url.jpg",
    technologies: ["Tech1", "Tech2"],
    projectUrl: "https://demo.com",
    repoUrl: "https://github.com/..."
  }
];
```

### Modifying Skills
Edit arrays in `src/libs/utils.ts`:
- `skills[]` for all skills display
- `favo[]` for favorite skills toggle

### Component Creation
- Use `.astro` for static components
- Use `.tsx` with React for interactive features
- Follow existing patterns in `src/components/ui/` for consistency
- Maintain retro theme styling conventions

### Animation System
- Framer Motion for React components
- AOS for scroll-triggered animations
- Custom CSS animations in `src/styles/global.css`
- Use existing animation utilities for consistency