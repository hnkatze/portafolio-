import type { PropsProject } from "@/lib/types";

export const skills = [
  {
    name: "Astro.js",
    value: 70,
    url: "https://icon.icepanel.io/Technology/png-shadow-512/Astro.png",
  },
  {
    name: "Next.js",
    value: 80,
    url: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
  },
  {
    name: "React",
    value: 88,
    url: "https://icon.icepanel.io/Technology/png-shadow-512/React.png",
  },
  {
    name: "HTML",
    value: 80,
    url: "https://icon.icepanel.io/Technology/svg/HTML5.svg",
  },
  {
    name: "JavaScript",
    value: 60,
    url: "https://icon.icepanel.io/Technology/svg/JavaScript.svg",
  },
  {
    name: "TypeScript",
    value: 60,
    url: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
  },
  {
    name: "CSS",
    value: 70,
    url: "https://icon.icepanel.io/Technology/svg/CSS3.svg",
  },
  {
    name: "Tailwind",
    value: 70,
    url: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  },
  {
    name: "Firebase",
    value: 20,
    url: "https://icon.icepanel.io/Technology/svg/Firebase.svg",
  },
  {
    name: "AWS",
    value: 10,
    url: "https://icon.icepanel.io/Technology/png-shadow-512/AWS.png",
  },
  {
    name: "Angular",
    value: 50,
    url: "https://icon.icepanel.io/Technology/svg/AngularJS.svg",
  },
  {
    name: "C#",
    value: 50,
    url: "https://icon.icepanel.io/Technology/svg/C%23-%28CSharp%29.svg",
  },
  {
    name: "Nest.js",
    value: 60,
    url: "https://icon.icepanel.io/Technology/svg/Nest.js.svg",
  },
];
export const favo = [
  {
    name: "Next.js",
    value: 80,
    url: "https://icon.icepanel.io/Technology/png-shadow-512/Next.js.png",
  },
  {
    name: "Astro.js",
    value: 70,
    url: "https://icon.icepanel.io/Technology/png-shadow-512/Astro.png",
  },
  {
    name: "Angular",
    value: 50,
    url: "https://icon.icepanel.io/Technology/svg/AngularJS.svg",
  },
  {
    name: "TypeScript",
    value: 60,
    url: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
  },
  {
    name: "Tailwind",
    value: 70,
    url: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
  },
];

export const projects: PropsProject[] = [
  {
    title: "Portfolio",
    description:
      "Personal portfolio website showcasing projects and skills. Built with Astro.js for optimal performance, featuring modern animations, responsive design, and a clean UI with TypeScript and React components integrated with Firebase backend.",
    repoUrl: "https://github.com/hnkatze/portafolio-",
    images:
      "https://firebasestorage.googleapis.com/v0/b/todo-event.appspot.com/o/portafolio.jpeg?alt=media&token=18d3444d-2269-4d7a-8249-fbb77c6f5a34",
    technologies: ["Astro.js", "Tailwind", "TypeScript", "React", "Firebase"],
    projectUrl: "https://portafolio-hnkatze.vercel.app",
  },
  {
    title: "Municipality Bonito Oriental",
    description:
      "Official website for the Municipality of Bonito Oriental, Colón, Honduras. Features administrative services, citizen information portal, document management, and local government transparency tools with secure authentication system.",
    images:
      "https://firebasestorage.googleapis.com/v0/b/todo-event.appspot.com/o/muni1.jpeg?alt=media&token=34e06ad2-6edc-498a-8b3e-3bb59f84e212",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Firebase",
      "PostgreSQL",
      "Google Auth",
    ],
    projectUrl: "https://munibonitooriental.com/",
    repoUrl: "https://github.com/hnkatze/muni",
  },
  {
    title: "University Survey Analysis Platform",
    description:
      "Interactive data visualization platform presenting survey responses from Honduran university students regarding career choices between entrepreneurship and employment. Features dynamic charts, statistical analysis, and responsive data presentation.",
    images:
      "https://firebasestorage.googleapis.com/v0/b/todo-event.appspot.com/o/Metodo.jpeg?alt=media&token=939edde4-e984-4f68-9283-f645dc2703e7",
    technologies: ["Next.js", "TailwindCSS", "Chart.js", "Framer Motion"],
    projectUrl: "https://metodo2-0.vercel.app/",
    repoUrl: "https://github.com/hnkatze/metodo2.0",
  },
  {
    title: "Statistical Sample Size Calculator",
    description:
      "Web-based statistical tool for calculating optimal sample sizes for surveys and research studies. Includes confidence level settings, margin of error calculations, and population size parameters with bilingual support (Spanish/English).",
    images:
      "https://firebasestorage.googleapis.com/v0/b/todo-event.appspot.com/o/calMuestra.jpeg?alt=media&token=ac8de681-69f1-4988-b3ea-6f97c5eafa06",
    technologies: ["Next.js", "TailwindCSS", "Statistical Algorithms"],
    projectUrl: "https://calculadoramuestra.netlify.app/",
    repoUrl: "https://github.com/hnkatze/calculator-sample",
  },
  {
    title: "Task Management Application",
    description:
      "Full-stack task management system with server-side rendering and database persistence. Features task creation, editing, priority management, and real-time updates using modern React patterns and SQLite database with Prisma ORM.",
    images:
      "https://firebasestorage.googleapis.com/v0/b/todo-event.appspot.com/o/todo-task.jpeg?alt=media&token=28823fb0-1c0b-4be9-b551-c7c823a4bfa9",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Prisma",
      "SQLite",
      "ShadCN UI",
      "SSR",
    ],
    projectUrl: "",
    repoUrl: "https://github.com/hnkatze/todo-task",
  },
  {
    title: "Event Management System",
    description:
      "Comprehensive event management platform developed as a technical assessment. Features full CRUD operations for events, SpaceX API integration for space launch data, reusable component architecture, and responsive design with Firebase backend.",
    images:
      "https://firebasestorage.googleapis.com/v0/b/todo-event.appspot.com/o/eventtest.jpeg?alt=media&token=e4add07f-687d-43c0-9b35-b6d0e7ed0755",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Firebase",
      "SpaceX API",
      "ShadCN UI",
      "SSR",
    ],
    projectUrl: "https://event-testsss.netlify.app/",
    repoUrl: "https://github.com/hnkatze/Event-Test",
  },
  {
    title: "Wedding RSVP Website",
    description:
      "Elegant wedding website for Bryan and Genesis featuring guest RSVP management, event details, photo gallery, and wedding information. Built with modern UI components and Firebase backend for guest management and real-time updates.",
    images:
      "https://firebasestorage.googleapis.com/v0/b/todo-event.appspot.com/o/boda.png?alt=media&token=e2eff1fd-cb42-4378-bb06-fb270e43ceb4",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Firebase",
      "SSR",
      "Radix UI"
    ],
    projectUrl: "https://www.boda-hernandez-lagos.online/",
    repoUrl: "https://github.com/hnkatze/boda",
  },
  {
    title: "Mi Pequeña Isla Resort",
    description:
      "Modern resort website featuring accommodation booking system, restaurant reservations, activity management, and admin dashboard. Built with Next.js and v0.dev integration, includes multiple sections for lodging, dining, and recreational activities.",
    images:
      "https://firebasestorage.googleapis.com/v0/b/todo-event.appspot.com/o/Resort.png?alt=media&token=78a8c26c-1ab5-4ba6-8915-3c2d12597df3",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Firebase",
      "SSR",
      "Radix UI",
      "v0.dev"
    ],
    projectUrl: "https://v0-mi-pequena-isla-website.vercel.app/",
    repoUrl: "https://github.com/hnkatze/resort-site",
  },
  {
    title: "Scrunshe's Hair Accessories",
    description:
      "E-commerce platform for hair accessories and scrunchies with modern product showcase, shopping cart functionality, and responsive design. Features Instagram integration and optimized user experience for mobile and desktop shopping.",
    images:
      "https://firebasestorage.googleapis.com/v0/b/todo-event.appspot.com/o/scrunches.png?alt=media&token=04c4758b-cf84-4660-a168-9d15f7d16ef7",
    technologies: [
      "Next.js",
      "TailwindCSS",
      "Firebase",
      "Radix UI",
      "SSR",
      "E-commerce"
    ],
    projectUrl: "https://scrunsheshn.shop/",
    repoUrl: "https://github.com/hnkatze/scrunchies-shop"
  },
];
