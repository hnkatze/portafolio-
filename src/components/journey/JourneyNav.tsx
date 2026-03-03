import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const islands = [
  { id: "hero", label: "Home" },
  { id: "skills", label: "Skills" },
  { id: "experience", label: "Experience" },
  { id: "projects", label: "Projects" },
  { id: "integrations", label: "Integrations" },
  { id: "contact", label: "Contact" },
];

export default function JourneyNav() {
  const [active, setActive] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);

      const sections = islands
        .map(({ id }) => {
          const el = document.getElementById(id);
          if (!el) return null;
          const rect = el.getBoundingClientRect();
          return { id, top: rect.top, bottom: rect.bottom };
        })
        .filter(Boolean) as { id: string; top: number; bottom: number }[];

      const viewportCenter = window.innerHeight / 2;
      for (const section of sections) {
        if (section.top <= viewportCenter && section.bottom >= viewportCenter) {
          setActive(section.id);
          break;
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      {/* Floating top bar */}
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-[#0a0a0a]/80 backdrop-blur-md border-b border-white/5"
            : "bg-transparent"
        }`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <button
            onClick={() => scrollTo("hero")}
            className="text-lg font-bold text-white hover:text-blue-400 transition-colors"
          >
            CH<span className="text-blue-400">.</span>
          </button>
          <button
            onClick={() => window.dispatchEvent(new CustomEvent("open-cv-modal"))}
            className="px-4 py-2 text-sm font-medium text-gray-300 rounded-lg border border-white/10 hover:border-blue-400/50 hover:text-blue-400 transition-all duration-300"
          >
            View CV
          </button>
        </div>
      </motion.header>

      {/* Side dot navigation — hidden on mobile */}
      <nav className="hidden md:flex fixed right-6 top-1/2 -translate-y-1/2 z-50 flex-col gap-4">
        {islands.map(({ id, label }) => (
          <div key={id} className="group relative flex items-center">
            <AnimatePresence>
              {active === id && (
                <motion.span
                  className="absolute right-8 text-xs text-blue-400 font-medium whitespace-nowrap"
                  initial={{ opacity: 0, x: 10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: 10 }}
                  transition={{ duration: 0.2 }}
                >
                  {label}
                </motion.span>
              )}
            </AnimatePresence>
            <button
              onClick={() => scrollTo(id)}
              aria-label={`Navigate to ${label}`}
              className={`w-3 h-3 rounded-full border-2 transition-all duration-300 ${
                active === id
                  ? "bg-blue-400 border-blue-400 shadow-[0_0_12px_rgba(96,165,250,0.5)] scale-125"
                  : "border-white/30 hover:border-blue-400/80 hover:scale-110"
              }`}
            />
          </div>
        ))}
      </nav>
    </>
  );
}
