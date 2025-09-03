import { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { skills, favo } from "../libs/utils";
import AnimatedSection from "./AnimatedSection";

interface SkillStep {
  number: number;
  title: string;
  description: string;
  skills: typeof skills;
  color: string;
}

const skillSteps: SkillStep[] = [
  {
    number: 1,
    title: "Frontend Fundamentals",
    description: "Core web technologies and modern frameworks",
    skills: skills.filter(s => ["HTML", "CSS", "JavaScript", "TypeScript", "React"].includes(s.name)),
    color: "from-purple-500 to-pink-500"
  },
  {
    number: 2,
    title: "Advanced Frameworks",
    description: "Next-generation web development tools",
    skills: skills.filter(s => ["Next.js", "Astro.js", "Angular"].includes(s.name)),
    color: "from-blue-500 to-cyan-500"
  },
  {
    number: 3,
    title: "Backend & Cloud",
    description: "Server-side and cloud infrastructure",
    skills: skills.filter(s => ["Nest.js", "C#", "Firebase", "AWS"].includes(s.name)),
    color: "from-indigo-500 to-purple-500"
  },
  {
    number: 4,
    title: "Design & Styling",
    description: "UI/UX and modern styling solutions",
    skills: skills.filter(s => ["Tailwind"].includes(s.name)),
    color: "from-pink-500 to-rose-500"
  }
];

function SkillStepCard({ step, index, progress }: { step: SkillStep; index: number; progress: any }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  const isLeft = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className={`relative flex ${isLeft ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-8 mb-32`}
      initial={{ opacity: 0, y: 30 }}
      animate={isVisible ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.4, ease: "easeOut" }}
    >
      {/* Step Number Circle */}
      <motion.div 
        className="absolute left-1/2 transform -translate-x-1/2 z-20"
        initial={{ scale: 0 }}
        animate={isVisible ? { scale: 1 } : {}}
        transition={{ duration: 0.3, type: "spring" }}
      >
        <div className={`w-20 h-20 rounded-full bg-gradient-to-br ${step.color} flex items-center justify-center shadow-2xl`}>
          <span className="text-3xl font-bold text-white">{step.number}</span>
        </div>
      </motion.div>

      {/* Content Card */}
      <div className={`w-full lg:w-5/12 ${isLeft ? 'lg:pr-16' : 'lg:pl-16'}`}>
        <motion.div
          className="relative"
          whileHover={{ scale: 1.02 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          {/* Glow effect */}
          <div className={`absolute inset-0 bg-gradient-to-br ${step.color} opacity-20 blur-2xl`} />
          
          {/* Card content */}
          <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-2xl p-8 shadow-2xl border border-gray-800">
            <h3 className="text-2xl font-bold mb-2 text-gray-100">
              <span className="font-mono text-gray-500 text-lg">// </span>
              {step.title}
            </h3>
            <p className="text-gray-400 mb-6 font-mono text-sm">{step.description}</p>
            
            {/* Skills Grid */}
            <div className="grid grid-cols-2 gap-4">
              {step.skills.map((skill, idx) => (
                <motion.div
                  key={skill.name}
                  className="flex items-center gap-3"
                  initial={{ opacity: 0 }}
                  animate={isVisible ? { opacity: 1 } : {}}
                  transition={{ duration: 0.3, delay: idx * 0.05 }}
                >
                  <img src={skill.url} alt={skill.name} className="w-8 h-8" />
                  <div className="flex-1">
                    <p className="text-sm font-semibold text-gray-300 font-mono">{skill.name}</p>
                    <div className="mt-1 h-1 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        className={`h-full bg-gradient-to-r ${step.color}`}
                        initial={{ width: 0 }}
                        animate={isVisible ? { width: `${skill.value}%` } : {}}
                        transition={{ duration: 0.8, delay: idx * 0.05 }}
                      />
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Empty space */}
      <div className="hidden lg:block lg:w-5/12" />
    </motion.div>
  );
}

export default function SkillsFlow() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 80%", "end 20%"]
  });

  const pathLength = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1]), {
    stiffness: 100,
    damping: 30
  });

  return (
    <AnimatedSection 
      id='habilidades' 
      className='py-20 bg-[#0f0f0f] relative overflow-hidden min-h-screen'
      direction="up"
      delay={0.2}
    >
      {/* Dark animated background elements */}
      <div className='absolute inset-0 overflow-hidden'>
        <motion.div 
          className='absolute top-1/4 -right-1/4 w-[600px] h-[600px] bg-purple-500/5 rounded-full blur-3xl'
          animate={{ 
            x: [0, 50, 0],
            y: [0, -30, 0],
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
        />
        <motion.div 
          className='absolute bottom-1/4 -left-1/4 w-[600px] h-[600px] bg-blue-500/5 rounded-full blur-3xl'
          animate={{ 
            x: [0, -50, 0],
            y: [0, 30, 0],
          }}
          transition={{ duration: 35, repeat: Infinity, ease: "linear" }}
        />
      </div>

      <div className='w-full px-4 sm:px-6 lg:px-8 2xl:px-12 relative z-10' ref={containerRef}>
        {/* Header */}
        <motion.div 
          className="text-center mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
          viewport={{ once: true }}
        >
          <motion.h2 
            className="text-6xl font-bold mb-4"
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <span className="text-gray-100">
              <span className="font-mono text-blue-400">const</span> myJourney <span className="text-gray-500">=</span> <span className="text-purple-400">[</span>
            </span>
          </motion.h2>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto font-mono">
            Follow my progression through different technologies and frameworks, 
            from fundamentals to advanced specializations.
          </p>
        </motion.div>

        {/* Timeline Flow */}
        <div className="relative">
          {/* Animated SVG Path */}
          <svg 
            className="absolute left-1/2 transform -translate-x-1/2 w-2 h-full pointer-events-none"
            style={{ top: 0, bottom: 0 }}
          >
            <motion.path
              d={`M 1 0 L 1 ${skillSteps.length * 400}`}
              stroke="url(#gradient)"
              strokeWidth="2"
              fill="none"
              strokeDasharray="5 5"
              style={{ pathLength }}
            />
            <defs>
              <linearGradient id="gradient" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#8b5cf6" />
                <stop offset="50%" stopColor="#3b82f6" />
                <stop offset="100%" stopColor="#ec4899" />
              </linearGradient>
            </defs>
          </svg>

          {/* Step Cards */}
          {skillSteps.map((step, index) => (
            <SkillStepCard 
              key={step.number} 
              step={step} 
              index={index}
              progress={scrollYProgress}
            />
          ))}
        </div>

        {/* Core Specializations Section */}
        <motion.div 
          className="mt-32 text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <motion.div 
            className="inline-block mb-12"
            whileHover={{ scale: 1.05 }}
          >
            <div className="w-32 h-32 rounded-full bg-gradient-to-br from-indigo-500 to-purple-500 flex items-center justify-center shadow-2xl mx-auto">
              <svg className="w-16 h-16 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
            </div>
          </motion.div>

          <h3 className="text-3xl font-bold mb-8 text-gray-100 font-mono">
            <span className="text-purple-400">]</span>;
            <br />
            <span className="text-blue-400">const</span> coreSkills <span className="text-gray-500">=</span> <span className="text-purple-400">{'{'}</span>
          </h3>
          
          {/* Favorite Skills Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {favo.map((skill, index) => (
              <motion.div
                key={skill.name}
                className="relative group"
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 to-purple-500/10 rounded-xl blur-xl group-hover:opacity-30 transition-opacity" />
                <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-xl p-6 shadow-xl border border-gray-800">
                  <img src={skill.url} alt={skill.name} className="w-16 h-16 mx-auto mb-4" />
                  <h4 className="text-xl font-bold text-gray-200 mb-2 font-mono">{skill.name}</h4>
                  <div className="w-full h-2 bg-gray-800 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-gradient-to-r from-indigo-500 to-purple-500"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.value}%` }}
                      transition={{ duration: 0.6, delay: index * 0.05 }}
                      viewport={{ once: true }}
                    />
                  </div>
                  <span className="text-sm font-semibold text-gray-400 mt-2 block font-mono">{skill.value}%</span>
                </div>
              </motion.div>
            ))}
          </div>
          
          {/* Closing bracket */}
          <div className="text-center mt-8">
            <span className="text-3xl font-bold text-purple-400 font-mono">{'}'}</span>
          </div>
        </motion.div>
      </div>
    </AnimatedSection>
  );
}