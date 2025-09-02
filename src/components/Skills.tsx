import { useState } from "react";
import "../styles/switch.css";
import { AnimatePresence, motion } from "framer-motion";
import { favo, skills } from "../libs/utils";
import AnimatedSection from "./AnimatedSection";

export default function Skills() {
  const [isCheck, setIsCheck] = useState(false);

  const handleSwitch = () => {
    setIsCheck(!isCheck);
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    },
    exit: { 
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0, 
      y: 20,
      scale: 0.9
    },
    visible: { 
      opacity: 1, 
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 12
      }
    },
    exit: {
      opacity: 0,
      y: -20,
      scale: 0.9,
      transition: {
        duration: 0.2
      }
    }
  };

  const progressVariants = {
    hidden: { width: 0, opacity: 0 },
    visible: (value: number) => ({
      width: `${value}%`,
      opacity: 1,
      transition: {
        width: {
          duration: 1.5,
          ease: [0.4, 0, 0.2, 1], // cubic-bezier suave
        },
        opacity: {
          duration: 0.3,
          ease: "easeIn"
        }
      }
    })
  };

  return (
    <AnimatedSection 
      id='habilidades' 
      className='py-20 bg-gradient-to-br from-indigo-100 via-purple-50 to-pink-100 relative overflow-hidden'
      direction="up"
      delay={0.2}
    >
      {/* Glass morphism background */}
      <div className='absolute inset-0 overflow-hidden'>
        <div className='absolute top-1/4 -left-1/4 w-96 h-96 bg-purple-300/30 rounded-full blur-3xl animate-pulse-slow'></div>
        <div className='absolute bottom-1/4 -right-1/4 w-96 h-96 bg-indigo-300/30 rounded-full blur-3xl animate-pulse-slow animation-delay-2s'></div>
      </div>
      
      <div className='container mx-auto px-6 lg:min-h-max relative z-10'>
        <motion.div 
          className='w-full flex flex-row justify-center items-center gap-4 mb-12'
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <motion.h2
            id='skills'
            className={`text-3xl font-bold text-center transition-all duration-300 ${
              !isCheck 
                ? "gradient-text scale-110" 
                : "text-gray-600 hover:text-purple-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            My Skills
          </motion.h2>
          
          <motion.label 
            className='switch'
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <input
              id='switch'
              type='checkbox'
              checked={isCheck}
              onChange={handleSwitch}
            />
            <span className='slider'></span>
          </motion.label>
          
          <motion.h2
            id='favo'
            className={`text-3xl font-bold text-center transition-all duration-300 ${
              isCheck 
                ? "gradient-text scale-110" 
                : "text-gray-600 hover:text-purple-600"
            }`}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Favorite Skills
          </motion.h2>
        </motion.div>

        {/* Mostrar habilidades */}
        <AnimatePresence mode="wait">
          {!isCheck && (
            <motion.div
              id='AllSkills'
              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              layout
            >
              {skills.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className='glass-card p-6 rounded-xl text-center group glass-hover'
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  layout
                >
                  <div className='flex flex-row items-center justify-center gap-4 my-2 md:h-12'>
                    <motion.h3 
                      className='font-bold text-lg text-gray-700 group-hover:text-purple-600 transition-colors duration-300'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {skill.name}
                    </motion.h3>
                    <motion.img
                      src={skill.url}
                      alt={`${skill.name} logo`}
                      className='w-8 h-8 group-hover:scale-110 transition-transform duration-300'
                      whileHover={{ rotate: 5 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: index * 0.1 + 0.4,
                        type: "spring",
                        stiffness: 200
                      }}
                    />
                  </div>
                  
                  <div className='w-full bg-white/30 rounded-full h-4 overflow-hidden backdrop-blur-sm border border-white/20'>
                    <motion.div
                      className='bg-gradient-to-r from-purple-500 to-pink-500 h-full relative rounded-full'
                      variants={progressVariants}
                      custom={skill.value}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className='absolute inset-0 bg-white/20 rounded-full'
                        animate={{
                          x: ["0%", "100%"],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                        style={{ width: "30%" }}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.span
                    className='text-sm font-semibold text-gray-600 mt-3 block'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  >
                    {skill.value}%
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        
        <AnimatePresence mode="wait">
          {isCheck && (
            <motion.div
              id='FavoriteSkills'
              className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              exit='exit'
              layout
            >
              {favo.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  className='glass-card p-6 rounded-xl text-center group glass-hover border-2 border-purple-200/30'
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  layout
                >
                  <div className='flex flex-row items-center justify-center gap-4 my-2 md:h-12'>
                    <motion.h3 
                      className='font-bold text-lg text-gray-700 group-hover:text-purple-600 transition-colors duration-300'
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: index * 0.1 + 0.3 }}
                    >
                      {skill.name}
                    </motion.h3>
                    <motion.img
                      src={skill.url}
                      alt={`${skill.name} logo`}
                      className='w-8 h-8 group-hover:scale-110 transition-transform duration-300'
                      whileHover={{ rotate: -5 }}
                      initial={{ opacity: 0, scale: 0 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ 
                        delay: index * 0.1 + 0.4,
                        type: "spring",
                        stiffness: 200
                      }}
                    />
                  </div>
                  
                  <div className='w-full bg-white/30 rounded-full h-4 overflow-hidden backdrop-blur-sm border border-white/20'>
                    <motion.div
                      className='bg-gradient-to-r from-indigo-500 to-purple-500 h-full relative rounded-full'
                      variants={progressVariants}
                      custom={skill.value}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className='absolute inset-0 bg-white/20 rounded-full'
                        animate={{
                          x: ["0%", "100%"],
                          opacity: [0.3, 0.6, 0.3]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          ease: "easeInOut",
                          delay: index * 0.1
                        }}
                        style={{ width: "30%" }}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.span
                    className='text-sm font-semibold text-gray-600 mt-3 block'
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: index * 0.1 + 0.8 }}
                  >
                    {skill.value}%
                  </motion.span>
                </motion.div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </AnimatedSection>
  );
}
