import { motion } from "framer-motion";
import AnimatedSection from "@/components/AnimatedSection";
import ParallaxLayer from "./ParallaxLayer";
import type { Experience, Lang } from "@/lib/types";
import { t } from "@/lib/i18n";

interface ExperienceIslandProps {
  experience: Experience[];
  lang: Lang;
}

function TimelineEntry({
  entry,
  index,
  lang,
}: {
  entry: Experience;
  index: number;
  lang: Lang;
}) {
  const isLeft = index % 2 === 0;

  return (
    <motion.div
      className="relative flex flex-col md:flex-row items-center md:items-start gap-6 md:gap-0"
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, delay: index * 0.15 }}
    >
      {/* Timeline dot */}
      <div className="absolute left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-blue-400 border-4 border-[#0a0a0a] z-10 hidden md:block" />

      {/* Content card — alternating sides on desktop, centered on mobile */}
      <div
        className={`w-full md:w-[calc(50%-2rem)] ${
          isLeft ? "md:mr-auto md:pr-8 md:text-right" : "md:ml-auto md:pl-8"
        }`}
      >
        <div className="p-6 rounded-2xl bg-white/[0.03] border border-white/[0.06] hover:border-blue-400/20 transition-all duration-300">
          <div className={`flex flex-col ${isLeft ? "md:items-end" : ""}`}>
            <span className="text-xs text-blue-400 font-medium mb-1">
              {entry.startDate} — {entry.endDate}
            </span>
            <h3 className="text-lg font-bold text-white mb-1">
              {t(entry.role, lang)}
            </h3>
            <span className="text-sm text-gray-400 mb-3">{entry.company}</span>
          </div>
          <p className={`text-sm text-gray-400 leading-relaxed mb-3 ${isLeft ? "md:text-right" : ""}`}>
            {t(entry.description, lang)}
          </p>
          <ul className={`space-y-1 ${isLeft ? "md:text-right" : ""}`}>
            {entry.highlights.map((h, i) => (
              <li key={i} className="text-xs text-gray-500">
                {isLeft ? "" : "- "}
                {t(h, lang)}
                {isLeft ? " -" : ""}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}

export default function ExperienceIsland({
  experience,
  lang,
}: ExperienceIslandProps) {
  return (
    <section
      id="experience"
      className="relative min-h-screen flex items-center py-24 overflow-hidden"
    >
      <ParallaxLayer speed={-0.15} className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 left-10 w-64 h-64 bg-blue-500/5 rounded-full blur-3xl" />
        <div className="absolute bottom-20 right-10 w-80 h-80 bg-purple-500/5 rounded-full blur-3xl" />
      </ParallaxLayer>

      <div className="relative z-10 max-w-5xl mx-auto px-6 w-full">
        <AnimatedSection className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Experience
          </h2>
          <p className="text-gray-400 max-w-xl mx-auto">
            My professional journey building web applications
          </p>
        </AnimatedSection>

        <div className="relative">
          {/* Vertical timeline line — visible on md+ */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-blue-400/30 via-purple-500/20 to-transparent" />

          <div className="space-y-12">
            {experience.map((entry, i) => (
              <TimelineEntry
                key={entry.company + entry.startDate}
                entry={entry}
                index={i}
                lang={lang}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
