import type {
  PersonalInfo,
  Skill,
  Project,
  Experience,
  Education,
  Certification,
  Language,
  IntegrationConfig,
  Testimonial,
} from "@/lib/types";

// === Personal Info ===
export const personalInfo: PersonalInfo = {
  name: "Camilo Henriquez",
  title: {
    es: "Full-Stack Engineer & AI Tooling",
    en: "Full-Stack Engineer & AI Tooling",
  },
  summary: {
    es: "Construyo sistemas completos — desde APIs REST con 130+ endpoints en NestJS/PostgreSQL hasta frontends en Angular y React. Manejo pipelines CI/CD, Docker y deploy en plataformas cloud. Autor de MCP servers open source para integrar IA en flujos de desarrollo. 4+ años enviando código a producción, remoto desde día uno.",
    en: "I build complete systems — from REST APIs with 130+ endpoints in NestJS/PostgreSQL to frontends in Angular and React. I manage CI/CD pipelines, Docker, and cloud deployments. Author of open source MCP servers for integrating AI into dev workflows. 4+ years shipping production code, remote from day one.",
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
// Levels: expert = daily driver, ship production code
//         proficient = comfortable, build full features
//         familiar = working knowledge, can ramp up fast
export const skills: Skill[] = [
  // --- Frontend ---
  {
    name: "React",
    level: "expert",
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/React.png",
    category: "frontend",
    favorite: true,
  },
  {
    name: "Next.js",
    level: "expert",
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
    category: "frontend",
    favorite: true,
  },
  {
    name: "TypeScript",
    level: "expert",
    icon: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
    category: "frontend",
    favorite: true,
  },
  {
    name: "Astro",
    level: "proficient",
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/Astro.png",
    category: "frontend",
    favorite: true,
  },
  {
    name: "Angular (v17–v21)",
    level: "proficient",
    icon: "https://icon.icepanel.io/Technology/svg/AngularJS.svg",
    category: "frontend",
    favorite: true,
  },
  {
    name: "Tailwind CSS",
    level: "expert",
    icon: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    category: "frontend",
    favorite: true,
  },
  {
    name: "JavaScript",
    level: "expert",
    icon: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
    category: "frontend",
  },
  {
    name: "HTML & CSS",
    level: "expert",
    icon: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
    category: "frontend",
  },
  // --- Backend ---
  {
    name: "NestJS",
    level: "expert",
    icon: "https://icon.icepanel.io/Technology/svg/Nest.js.svg",
    category: "backend",
    favorite: true,
  },
  {
    name: "PostgreSQL",
    level: "proficient",
    icon: "https://icon.icepanel.io/Technology/svg/PostgresSQL.svg",
    category: "backend",
  },
  {
    name: "Go",
    level: "familiar",
    icon: "https://icon.icepanel.io/Technology/svg/Go.svg",
    category: "backend",
  },
  {
    name: "C#",
    level: "familiar",
    icon: "https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg",
    category: "backend",
  },
  // --- Tools ---
  {
    name: "Git",
    level: "expert",
    icon: "https://icon.icepanel.io/Technology/svg/Git.svg",
    category: "tools",
  },
  {
    name: "Jest / Vitest",
    level: "proficient",
    icon: "https://icon.icepanel.io/Technology/svg/Jest.svg",
    category: "tools",
  },
  {
    name: "Playwright",
    level: "proficient",
    icon: "/icons/playwright.svg",
    category: "tools",
  },
  {
    name: "Docker",
    level: "proficient",
    icon: "https://icon.icepanel.io/Technology/svg/Docker.svg",
    category: "tools",
  },
  {
    name: "GitHub Actions",
    level: "proficient",
    icon: "https://icon.icepanel.io/Technology/svg/GitHub-Actions.svg",
    category: "tools",
    favorite: true,
  },
  {
    name: "Firebase",
    level: "proficient",
    icon: "https://icon.icepanel.io/Technology/svg/Firebase.svg",
    category: "tools",
  },
  {
    name: "Vercel / Railway",
    level: "proficient",
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/Vercel.png",
    category: "tools",
  },
  {
    name: "AWS",
    level: "familiar",
    icon: "https://icon.icepanel.io/Technology/png-shadow-512/AWS.png",
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
      es: "Sitio web para la fundación Honduras Social, ONG que transforma comunidades a través de educación, emprendimiento e inclusión social. Opera en más de 50 comunidades beneficiando a más de 5,000 personas. Integración con Every.org para donaciones.",
      en: "Website for Honduras Social foundation, an NGO transforming communities through education, entrepreneurship, and social inclusion. Operating in 50+ communities benefiting over 5,000 people. Every.org donation integration.",
    },
    technologies: ["Astro", "TailwindCSS", "TypeScript", "Cloudinary", "Vercel"],
    projectUrl: "https://www.hondurassocial.org",
    repoUrl: "https://github.com/hnkatze/fundation-page",
  },
  {
    title: "Taller Gerardito",
    description: {
      es: "Sitio web para taller automotriz especializado en diagnóstico electrónico en San Manuel, Honduras. Precios, testimonios, FAQ y reservas por WhatsApp. Fundado en 2015, con diagnóstico avanzado: escáners, osciloscopios y cámaras endoscópicas.",
      en: "Website for an automotive repair shop specialized in electronic diagnostics in San Manuel, Honduras. Pricing, testimonials, FAQ, and WhatsApp booking. Founded in 2015, with advanced diagnostics: scanners, oscilloscopes, and endoscopic cameras.",
    },
    technologies: ["Astro", "TailwindCSS", "TypeScript", "WhatsApp API", "Vercel"],
    projectUrl: "https://www.tallergerardito.com",
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
    title: "Scrunshes HN",
    description: {
      es: "Landing page para marca hondureña de accesorios para cabello hechos a mano. Diseño minimalista con enfoque en social-commerce: integración con Instagram y contacto directo por WhatsApp.",
      en: "Landing page for a Honduran handmade hair accessories brand. Minimalist design with social-commerce focus: Instagram integration and direct WhatsApp contact.",
    },
    technologies: ["Next.js", "TypeScript", "TailwindCSS", "Vercel"],
    projectUrl: "https://www.scrunsheshn.com",
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
      es: "Mi portafolio personal — experiencia de scroll interactiva con parallax GSAP, integración de GitHub en tiempo real, CV bilingüe con exportación a PDF y formulario de contacto. Zero framework JS — puro Astro SSG.",
      en: "My personal portfolio — interactive scroll experience with GSAP parallax, real-time GitHub integration, bilingual CV with PDF export, and contact form. Zero framework JS — pure Astro SSG.",
    },
    technologies: ["Astro", "TypeScript", "GSAP", "Tailwind CSS", "EmailJS"],
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
        es: "Arquitectura full-stack para sistema municipal: API REST NestJS con 130+ endpoints, PostgreSQL + PostGIS, sirviendo 5 frontends (4 Angular 21 + 1 Astro)",
        en: "Full-stack architecture for municipal system: NestJS REST API with 130+ endpoints, PostgreSQL + PostGIS, serving 5 frontends (4 Angular 21 + 1 Astro)",
      },
      {
        es: "Reduje tiempos de carga un 40% con code splitting, lazy loading y optimización de bundles",
        en: "Reduced page load times by 40% through code splitting, lazy loading, and bundle optimization",
      },
      {
        es: "Pipelines CI/CD con GitHub Actions, Docker multi-stage y deploy en Railway, Vercel y Firebase",
        en: "CI/CD pipelines with GitHub Actions, multi-stage Docker builds, and deployments on Railway, Vercel, and Firebase",
      },
      {
        es: "Implementé testing (unit + e2e) con Jest, Vitest y Playwright, y servidores MCP para automatizar flujos del equipo",
        en: "Implemented testing (unit + e2e) with Jest, Vitest, and Playwright, plus MCP servers to automate team workflows",
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

// === Testimonials ===
// TODO: Replace with real testimonials from clients
export const testimonials: Testimonial[] = [
  {
    name: "Honduras Social Foundation",
    role: {
      es: "Fundación Honduras Social",
      en: "Honduras Social Foundation",
    },
    project: "hondurassocial.org",
    quote: {
      es: "Camilo entendió nuestra visión desde el primer día. El sitio web que construyó refleja perfectamente nuestra misión y nos ha ayudado a conectar con más donantes y voluntarios.",
      en: "Camilo understood our vision from day one. The website he built perfectly reflects our mission and has helped us connect with more donors and volunteers.",
    },
  },
  {
    name: "Taller Gerardito",
    role: {
      es: "Taller Gerardito — San Manuel, Honduras",
      en: "Taller Gerardito — San Manuel, Honduras",
    },
    project: "tallergerardito.com",
    quote: {
      es: "Desde que tenemos la página web, los clientes nos encuentran más fácil y ya pueden ver precios y servicios antes de llegar. Las reservas por WhatsApp han sido un éxito.",
      en: "Since we got the website, clients find us more easily and can check prices and services before visiting. The WhatsApp booking has been a huge success.",
    },
  },
  {
    name: "Taller Los Camilos",
    role: {
      es: "Taller Los Camilos — Bonito Oriental, Honduras",
      en: "Taller Los Camilos — Bonito Oriental, Honduras",
    },
    project: "tallerloscamilos.com",
    quote: {
      es: "Profesional, rápido y siempre disponible. El sitio web nos dio presencia digital y ahora recibimos consultas de clientes nuevos cada semana.",
      en: "Professional, fast, and always available. The website gave us a digital presence and now we receive inquiries from new clients every week.",
    },
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
