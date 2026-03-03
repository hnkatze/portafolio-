import type {
  PersonalInfo,
  Skill,
  Project,
  Experience,
  Education,
  Certification,
  Language,
  IntegrationConfig,
} from "@/lib/types";

// === Personal Info ===
export const personalInfo: PersonalInfo = {
  name: "Camilo Henriquez",
  title: {
    es: "Desarrollador Frontend",
    en: "Frontend-Focused Developer",
  },
  summary: {
    es: "Desarrollador con 4+ años de experiencia construyendo aplicaciones web escalables. Especializado en React, Next.js, Angular y TypeScript. Creo herramientas de desarrollo propias (MCP servers, librerías) e integro IA (Claude Code, Copilot, Gemini) en mi flujo diario. Experiencia remota con equipos distribuidos en múltiples zonas horarias.",
    en: "Developer with 4+ years of experience building scalable web applications. Specialized in React, Next.js, Angular, and TypeScript. I build custom dev tools (MCP servers, libraries) and integrate AI (Claude Code, Copilot, Gemini) into my daily workflow. Remote-experienced with distributed teams across multiple time zones.",
  },
  email: "contact@camilohenriquez.com",
  location: "Remote / Worldwide",
  photo: "/tshirtw.png",
  socials: {
    github: "hnkatze",
    linkedin: "https://www.linkedin.com/in/hnkatze/",
    discord: undefined,
  },
};

// === Skills ===
export const skills: Skill[] = [
  {
    name: "React",
    value: 88,
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/React.png",
    category: "frontend",
    favorite: true,
  },
  {
    name: "Next.js",
    value: 80,
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
    category: "frontend",
    favorite: true,
  },
  {
    name: "Astro.js",
    value: 70,
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/Astro.png",
    category: "frontend",
    favorite: true,
  },
  {
    name: "Angular",
    value: 50,
    icon: "https://icon.icepanel.io/Technology/svg/AngularJS.svg",
    category: "frontend",
    favorite: true,
  },
  {
    name: "TypeScript",
    value: 60,
    icon: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
    category: "frontend",
    favorite: true,
  },
  {
    name: "JavaScript",
    value: 60,
    icon: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
    category: "frontend",
  },
  {
    name: "HTML",
    value: 80,
    icon: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
    category: "frontend",
  },
  {
    name: "CSS",
    value: 70,
    icon: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
    category: "frontend",
  },
  {
    name: "Tailwind",
    value: 70,
    icon: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    category: "frontend",
    favorite: true,
  },
  {
    name: "Nest.js",
    value: 60,
    icon: "https://icon.icepanel.io/Technology/svg/Nest.js.svg",
    category: "backend",
  },
  {
    name: "Go",
    value: 40,
    icon: "https://icon.icepanel.io/Technology/svg/Go.svg",
    category: "backend",
  },
  {
    name: "C#",
    value: 50,
    icon: "https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg",
    category: "backend",
  },
  {
    name: "Docker",
    value: 30,
    icon: "https://icon.icepanel.io/Technology/svg/Docker.svg",
    category: "tools",
  },
  {
    name: "Firebase",
    value: 20,
    icon: "https://icon.icepanel.io/Technology/svg/Firebase.svg",
    category: "tools",
  },
  {
    name: "AWS",
    value: 10,
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/AWS.png",
    category: "tools",
  },
  {
    name: "Git",
    value: 80,
    icon: "https://icon.icepanel.io/Technology/svg/Git.svg",
    category: "tools",
  },
  {
    name: "Jest/Vitest",
    value: 50,
    icon: "https://icon.icepanel.io/Technology/svg/Jest.svg",
    category: "tools",
  },
  {
    name: "Playwright",
    value: 40,
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/Playwright.png",
    category: "tools",
  },
];

// === Projects ===
// Dev Tools & MCP Servers first (highlight engineering depth), then client projects
export const projects: Project[] = [
  // --- Dev Tools & Libraries ---
  {
    title: "Swagger Extractor",
    description: {
      es: "Herramienta web para desarrolladores que permite subir specs OpenAPI/Swagger, filtrar endpoints por tags, testearlos en vivo y exportar en JSON o formato TOON optimizado para prompts de LLM. Corre 100% en el navegador sin backend.",
      en: "Developer tool to upload OpenAPI/Swagger specs, filter endpoints by tags, test them live, and export in JSON or TOON format optimized for LLM prompts. Runs entirely in the browser with zero backend.",
    },
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "ShadCN UI", "OpenAPI"],
    projectUrl: "https://swaggerextractor.camilohenriquez.com/",
    repoUrl: "https://github.com/hnkatze/swagger-extractor",
  },
  {
    title: "Swagger Extractor MCP",
    description: {
      es: "Servidor MCP (Model Context Protocol) escrito en Go que expone operaciones de Swagger Extractor como herramientas para asistentes de IA. Permite a Claude, Copilot y otros LLMs interactuar con specs OpenAPI de forma programática.",
      en: "MCP (Model Context Protocol) server written in Go that exposes Swagger Extractor operations as tools for AI assistants. Enables Claude, Copilot, and other LLMs to interact with OpenAPI specs programmatically.",
    },
    technologies: ["Go", "MCP", "OpenAPI", "AI Tooling"],
    repoUrl: "https://github.com/hnkatze/swagger-extractor-mcp",
  },
  {
    title: "PrimeNG MCP Server",
    description: {
      es: "Servidor MCP que provee documentación de componentes PrimeNG como herramientas para asistentes de IA. Permite consultar props, ejemplos y mejores prácticas de Angular/PrimeNG directamente desde Claude Code o cualquier cliente MCP.",
      en: "MCP server that provides PrimeNG component documentation as tools for AI assistants. Query props, examples, and best practices for Angular/PrimeNG directly from Claude Code or any MCP client.",
    },
    technologies: ["TypeScript", "MCP", "PrimeNG", "Angular", "AI Tooling"],
    repoUrl: "https://github.com/hnkatze/PrimeNG_MCP",
  },
  {
    title: "FetchMate",
    description: {
      es: "Librería TypeScript ligera para hacer fetch requests con tipado fuerte, interceptors, retry automático y manejo de errores. Diseñada para simplificar llamadas HTTP en proyectos frontend y backend.",
      en: "Lightweight TypeScript library for making fetch requests with strong typing, interceptors, automatic retry, and error handling. Designed to simplify HTTP calls in frontend and backend projects.",
    },
    technologies: ["TypeScript", "HTTP", "Library", "Open Source"],
    repoUrl: "https://github.com/hnkatze/fetchmate",
  },
  // --- Client & Real-World Projects ---
  {
    title: "El Carbonal FC",
    description: {
      es: "Sitio web oficial del club de fútbol El Carbonal FC de Bonito Oriental, Honduras. Con calendario de partidos, roster de jugadores, resultados en vivo, noticias y galería. Formando jugadores y personas desde 2017.",
      en: "Official website for El Carbonal FC football club from Bonito Oriental, Honduras. Features match schedules, player rosters, live scores, news, and gallery. Forming players and people since 2017.",
    },
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    projectUrl: "https://elcarbonalfc.vercel.app",
    repoUrl: "https://github.com/hnkatze/carbonal",
  },
  {
    title: "TacticBoard",
    description: {
      es: "Pizarra táctica interactiva para fútbol 8. Permite agregar jugadores, crear formaciones, dibujar jugadas con herramientas de dibujo y exportar diagramas tácticos como imágenes.",
      en: "Interactive tactical board for 8-a-side football. Add players, create formations, draw plays with drawing tools, and export tactical diagrams as images.",
    },
    technologies: ["Astro", "TypeScript", "Canvas API", "TailwindCSS"],
    projectUrl: "https://tactic-board-eight.vercel.app",
    repoUrl: "https://github.com/hnkatze/TacticBoard",
  },
  {
    title: "Honduras Social Foundation",
    description: {
      es: "Sitio web para la fundación Honduras Social, ONG que transforma comunidades a través de educación, emprendimiento e inclusión social. Opera en más de 50 comunidades beneficiando a más de 5,000 personas.",
      en: "Website for Honduras Social foundation, an NGO transforming communities through education, entrepreneurship, and social inclusion. Operating in 50+ communities benefiting over 5,000 people.",
    },
    technologies: ["Astro", "TailwindCSS", "TypeScript", "Vercel"],
    projectUrl: "https://fundation-page.vercel.app",
    repoUrl: "https://github.com/hnkatze/fundation-page",
  },
  {
    title: "Taller Gerardito",
    description: {
      es: "Sitio web para taller automotriz especializado en diagnóstico electrónico en San Manuel, Cortés, Honduras. Fundado en 2015, con servicios de mecánica general y diagnóstico avanzado con escáners, osciloscopios y cámaras endoscópicas.",
      en: "Website for an automotive repair shop specialized in electronic diagnostics in San Manuel, Honduras. Founded in 2015, offering general mechanics and advanced diagnostics with scanners, oscilloscopes, and endoscopic cameras.",
    },
    technologies: ["Astro", "TailwindCSS", "TypeScript", "Vercel"],
    projectUrl: "https://taller-gerardo.vercel.app",
    repoUrl: "https://github.com/hnkatze/taller-gerardo",
  },
  {
    title: "Taller Los Camilos",
    description: {
      es: "Sitio web para taller de soldadura y metalurgia profesional en Bonito Oriental, Honduras. Especializado en fabricación de pailas ganaderas, reparación de maquinaria agrícola y techos metálicos. Más de 15 años de experiencia.",
      en: "Website for a professional welding and metalwork shop in Bonito Oriental, Honduras. Specializing in cattle tank fabrication, agricultural machinery repair, and metal roofing. Over 15 years of experience.",
    },
    technologies: ["Astro", "TailwindCSS", "TypeScript", "Vercel"],
    projectUrl: "https://tallerloscamilos.com",
    repoUrl: "https://github.com/hnkatze/taller-los-camilos",
  },
  {
    title: "Template Catalog",
    description: {
      es: "Catálogo profesional de templates web con más de 10 diseños para e-commerce, hoteles, restaurantes, eventos y más. Construido como showcase de servicios de desarrollo web con diseños modernos y funcionales.",
      en: "Professional web template catalog with 10+ designs for e-commerce, hotels, restaurants, events, and more. Built as a web development services showcase with modern, functional designs.",
    },
    technologies: ["Next.js", "TailwindCSS", "TypeScript", "Vercel"],
    projectUrl: "https://templates.camilohenriquez.com",
  },
  {
    title: "Portfolio",
    description: {
      es: "Mi portafolio personal — una experiencia de scroll interactiva con parallax, integración de GitHub en tiempo real, CV bilingüe con exportación a PDF, y formulario de contacto con Firebase. Construido con Astro Islands + React.",
      en: "My personal portfolio — an interactive scroll experience with parallax, real-time GitHub integration, bilingual CV with PDF export, and Firebase contact form. Built with Astro Islands + React.",
    },
    technologies: ["Astro", "React", "TypeScript", "Framer Motion", "Firebase"],
    projectUrl: "https://camilohenriquez.com",
    repoUrl: "https://github.com/hnkatze/portafolio-",
  },
];

// === Experience ===
export const experience: Experience[] = [
  {
    role: {
      es: "Desarrollador Asociado",
      en: "Associate Developer",
    },
    company: "Creative Information Technologies",
    startDate: "July 2024",
    endDate: "Present",
    description: {
      es: "Desarrollando aplicaciones web escalables usando frameworks modernos de JavaScript. Colaborando con equipos multifuncionales para entregar soluciones de software de alta calidad.",
      en: "Developing scalable web applications using modern JavaScript frameworks. Collaborating with cross-functional teams to deliver high-quality software solutions.",
    },
    highlights: [
      {
        es: "Reduje tiempos de carga un 40% implementando code splitting, lazy loading y optimización de bundles",
        en: "Reduced page load times by 40% through code splitting, lazy loading, and bundle optimization",
      },
      {
        es: "Lideré arquitectura frontend en 3 proyectos con Angular y React, definiendo patrones y estructura",
        en: "Led frontend architecture for 3 projects with Angular and React, defining patterns and structure",
      },
      {
        es: "Implementé testing (unit + e2e) con Jest y Cypress, y servidores MCP para automatizar flujos del equipo",
        en: "Implemented testing (unit + e2e) with Jest and Cypress, and MCP servers to automate team workflows",
      },
    ],
  },
  {
    role: {
      es: "Desarrollador Frontend Freelance",
      en: "Freelance Frontend Developer",
    },
    company: "Freelance",
    startDate: "2021",
    endDate: "Present",
    description: {
      es: "Soluciones web personalizadas para clientes en múltiples industrias. Especializado en React, Next.js, Astro y Go. Trabajo remoto con clientes en diferentes zonas horarias.",
      en: "Custom web solutions for clients across multiple industries. Specialized in React, Next.js, Astro, and Go. Remote work with clients across different time zones.",
    },
    highlights: [
      {
        es: "25+ proyectos entregados con 100% de satisfacción del cliente",
        en: "25+ projects delivered with 100% client satisfaction rate",
      },
      {
        es: "Creé herramientas open source: Swagger Extractor MCP (Go), PrimeNG MCP, FetchMate (TypeScript)",
        en: "Built open source tools: Swagger Extractor MCP (Go), PrimeNG MCP, FetchMate (TypeScript)",
      },
      {
        es: "Testing con Vitest, Jest y Playwright en proyectos Next.js, Angular y Go",
        en: "Testing with Vitest, Jest, and Playwright across Next.js, Angular, and Go projects",
      },
    ],
  },
];

// === Certifications ===
export const certifications: Certification[] = [
  { name: "HTML & CSS", issuer: "Udemy", year: "2022" },
  { name: "JavaScript", issuer: "Udemy", year: "2022" },
  { name: "Flutter", issuer: "Udemy", year: "2024" },
  { name: "Docker", issuer: "Platzi", year: "2023" },
  { name: "AWS S3", issuer: "AWS Skill Builder", year: "2025" },
];

// === Education ===
export const education: Education[] = [
  {
    degree: {
      es: "Ingeniería en Informática",
      en: "Computer Science Engineering",
    },
    institution: "CEUTEC",
    status: "in_progress",
    highlights: ["Software Engineering", "Web Technologies", "Data Structures"],
  },
  {
    degree: {
      es: "Técnico Universitario Bilingüe en Call Center",
      en: "Bilingual University Technician in Call Center",
    },
    institution: "CEUTEC",
    status: "completed",
    highlights: [
      "Customer Service",
      "English Proficiency",
      "Communication Skills",
    ],
  },
];

// === Languages ===
export const languages: Language[] = [
  {
    name: { es: "Español", en: "Spanish" },
    level: { es: "Nativo", en: "Native" },
  },
  {
    name: { es: "Inglés", en: "English" },
    level: { es: "Profesional", en: "Professional" },
  },
];

// === Integration Config ===
export const integrationConfig: IntegrationConfig = {
  github: {
    username: "hnkatze",
    statsTheme: "tokyonight",
  },
  discord: undefined,
  linkedin: {
    profileUrl: "https://www.linkedin.com/in/hnkatze/",
  },
};
