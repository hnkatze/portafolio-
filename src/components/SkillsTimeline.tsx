import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { favo, skills } from "../libs/utils";
import AnimatedSection from "./AnimatedSection";

interface Skill {
  name: string;
  value: number;
  url: string;
}

function SkillCard({ skill, index, isVisible, isFavorite = false }: { skill: Skill; index: number; isVisible: boolean; isFavorite?: boolean }) {
  const isLeft = index % 2 === 0;
  
  return (
    <motion.div
      className={`relative flex ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse'} items-center gap-8 mb-20`}
      initial={{ opacity: 0, x: isLeft ? -50 : 50 }}
      animate={isVisible ? { opacity: 1, x: 0 } : { opacity: 0, x: isLeft ? -50 : 50 }}
      transition={{ duration: 0.8, delay: index * 0.05, ease: [0.4, 0, 0.2, 1] }}
    >
      {/* Timeline dot with pulse */}
      <div className="absolute left-1/2 transform -translate-x-1/2 z-20">
        <motion.div 
          className={`w-6 h-6 rounded-full ${isFavorite ? 'bg-gradient-to-r from-indigo-500 to-purple-500' : 'bg-gradient-to-r from-purple-400 to-pink-400'} shadow-lg`}
          initial={{ scale: 0 }}
          animate={isVisible ? { scale: 1 } : { scale: 0 }}
          transition={{ duration: 0.5, delay: index * 0.05 + 0.2, type: "spring" }}
        >
          {isVisible && (
            <div className="absolute inset-0 rounded-full bg-white/40 animate-ping" />
          )}
        </motion.div>
      </div>

      {/* Content Card */}
      <div className={`w-full md:w-5/12 ${isLeft ? 'md:pr-12' : 'md:pl-12'}`}>
        <motion.div 
          className="bg-white/80 backdrop-blur-md p-6 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/20"
          whileHover={{ y: -5 }}
        >
          <div className={`flex items-center gap-4 mb-4 ${isLeft ? 'md:flex-row' : 'md:flex-row-reverse md:justify-end'}`}>
            <motion.div
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.5 }}
            >
              <img
                src={skill.url}
                alt={skill.name}
                className="w-14 h-14 drop-shadow-md"
              />
            </motion.div>
            <div className={isLeft ? '' : 'md:text-right'}>
              <h3 className="text-2xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                {skill.name}
              </h3>
              <p className="text-xs text-gray-500 uppercase tracking-wider mt-1">
                {isFavorite ? 'Specialized' : 'Proficient'}
              </p>
            </div>
          </div>
          
          {/* Modern Progress bar */}
          <div className="relative mt-4">
            <div className="flex justify-between items-center mb-2">
              <span className="text-xs text-gray-500">Proficiency</span>
              <span className="text-sm font-bold text-gray-700">{skill.value}%</span>
            </div>
            <div className="w-full h-3 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                className={`h-full rounded-full ${isFavorite 
                  ? 'bg-gradient-to-r from-indigo-500 to-purple-500' 
                  : 'bg-gradient-to-r from-purple-400 to-pink-400'}`}
                initial={{ width: 0 }}
                animate={isVisible ? { width: `${skill.value}%` } : { width: 0 }}
                transition={{ duration: 1.5, delay: index * 0.1, ease: [0.4, 0, 0.2, 1] }}
              >
                <motion.div
                  className="h-full w-full bg-white/20"
                  animate={{ x: ["0%", "100%", "0%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  style={{ width: "50%" }}
                />
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Empty space for alternating layout */}
      <div className="hidden md:block md:w-5/12" />
    </motion.div>
  );
}

export default function SkillsTimeline() {
  const [visibleSkills, setVisibleSkills] = useState<Set<number>>(new Set());
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const lineHeight = useTransform(scrollYProgress, [0, 1], ["0%", "100%"]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const index = parseInt(entry.target.getAttribute('data-index') || '0');
            setVisibleSkills((prev) => new Set([...prev, index]));
          }
        });
      },
      { threshold: 0.3 }
    );

    const elements = containerRef.current?.querySelectorAll('[data-index]');
    elements?.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <AnimatedSection 
      id='habilidades' 
      className='py-20 bg-gradient-to-br from-slate-50 via-gray-50 to-zinc-50 relative overflow-hidden'
      direction="up"
      delay={0.2}
    >
      {/* Subtle background decoration */}
      <div className='absolute inset-0 overflow-hidden opacity-30'>
        <div className='absolute top-1/4 -right-1/4 w-96 h-96 bg-purple-200/20 rounded-full blur-3xl' />
        <div className='absolute bottom-1/4 -left-1/4 w-96 h-96 bg-blue-200/20 rounded-full blur-3xl' />
      </div>

      <div className='container mx-auto px-6 relative z-10' ref={containerRef}>
        {/* Section Title */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h2 className="text-5xl font-bold mb-4 gradient-text">Technical Expertise</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            A comprehensive overview of my technical skills and proficiency levels, 
            showcasing my journey through various technologies and frameworks.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200">
            <motion.div 
              className="w-full bg-gradient-to-b from-purple-500 to-pink-500"
              style={{ height: lineHeight }}
            />
          </div>

          {/* All Skills */}
          <div className="mb-32">
            <motion.h3 
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Complete Skill Set
            </motion.h3>
            {skills.map((skill, index) => (
              <div key={skill.name} data-index={index}>
                <SkillCard skill={skill} index={index} isVisible={visibleSkills.has(index)} />
              </div>
            ))}
          </div>

          {/* Separator */}
          <motion.div 
            className="flex items-center justify-center my-20"
            initial={{ opacity: 0, scale: 0 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="w-20 h-20 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center shadow-xl">
              <svg className="w-10 h-10 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </motion.div>

          {/* Favorite Skills */}
          <div>
            <motion.h3 
              className="text-3xl font-bold text-center mb-12 text-gray-800"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              Core Specializations
            </motion.h3>
            {favo.map((skill, index) => (
              <div key={`fav-${skill.name}`} data-index={skills.length + index}>
                <SkillCard 
                  skill={skill} 
                  index={index} 
                  isVisible={visibleSkills.has(skills.length + index)}
                  isFavorite={true}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </AnimatedSection>
  );
}