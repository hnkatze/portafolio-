import { useState } from "react";
import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxLayer from "./ParallaxLayer";
import type { Skill, SkillCategory } from "@/lib/types";

interface SkillsIslandProps {
  skills: Skill[];
}

const categories: { key: SkillCategory; label: string }[] = [
  { key: "frontend", label: "Frontend" },
  { key: "backend", label: "Backend" },
  { key: "tools", label: "Tools" },
];

function SkillCard({ skill, index }: { skill: Skill; index: number }) {
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setTilt({ x: y * -10, y: x * 10 });
  };

  const handleMouseLeave = () => setTilt({ x: 0, y: 0 });

  return (
    <motion.div
      className="group relative"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.1 }}
      transition={{ duration: 0.5, delay: index * 0.05 }}
    >
      <div
        className="relative p-5 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-400/30 transition-all duration-300 cursor-default"
        style={{
          transform: `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`,
          transition: "transform 0.15s ease-out",
        }}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
      >
        <div className="flex items-center gap-3 mb-3">
          <img
            src={skill.icon}
            alt={skill.name}
            className="w-8 h-8 object-contain"
            loading="lazy"
          />
          <span className="text-sm font-medium text-white">{skill.name}</span>
          {skill.favorite && (
            <span className="ml-auto text-xs text-yellow-400">&#9733;</span>
          )}
        </div>
        <div className="w-full h-1.5 bg-white/5 rounded-full overflow-hidden">
          <motion.div
            className="h-full rounded-full bg-gradient-to-r from-blue-400 to-purple-500"
            initial={{ width: 0 }}
            whileInView={{ width: `${skill.value}%` }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.2 + index * 0.05, ease: "easeOut" }}
          />
        </div>
        <span className="text-xs text-gray-500 mt-1 block text-right">
          {skill.value}%
        </span>
      </div>
    </motion.div>
  );
}

export default function SkillsIsland({ skills }: SkillsIslandProps) {
  const [activeCategory, setActiveCategory] = useState<SkillCategory>("frontend");

  const filtered = skills.filter((s) => s.category === activeCategory);

  return (
    <section id="skills" className="relative min-h-screen flex items-center py-24 overflow-hidden">
      <ParallaxLayer speed={-0.2} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-10 right-20 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-10 left-20 w-60 h-60 bg-blue-500/5 rounded-full blur-3xl" />
      </ParallaxLayer>

      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <AnimatedSection className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Skills & Technologies
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            Technologies I work with to build modern web applications
          </p>
        </AnimatedSection>

        {/* Category tabs */}
        <AnimatedSection delay={0.2} className="flex justify-center gap-2 mb-12">
          {categories.map(({ key, label }) => (
            <button
              key={key}
              onClick={() => setActiveCategory(key)}
              className={`px-5 py-2.5 rounded-xl text-sm font-medium transition-all duration-300 ${
                activeCategory === key
                  ? "bg-blue-500/20 text-blue-400 border border-blue-400/30"
                  : "bg-white/5 text-gray-400 border border-white/5 hover:text-white hover:border-white/10"
              }`}
            >
              {label}
            </button>
          ))}
        </AnimatedSection>

        {/* Skills grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filtered.map((skill, i) => (
            <SkillCard key={skill.name} skill={skill} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
