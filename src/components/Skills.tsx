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
    hidden: { width: 0 },
    visible: (value: number) => ({
      width: `${value}%`,
      transition: {
        duration: 1,
        ease: "easeOut",
        delay: 0.5
      }
    })
  };

  return (
    <AnimatedSection 
      id='habilidades' 
      className='py-20 bg-gray-200 relative overflow-hidden'
      direction="up"
      delay={0.2}
    >
      {/* Retro pattern background */}
      <div className='absolute inset-0 overflow-hidden opacity-10'>
        <div className='absolute top-0 left-0 w-full h-full' style={{backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 20px, rgba(0,0,0,.1) 20px, rgba(0,0,0,.1) 21px)'}}></div>
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
            className={`text-3xl font-bold text-center transition-all duration-300 font-mono ${
              !isCheck 
                ? "text-gray-900 scale-110 text-shadow-retro" 
                : "text-gray-600 hover:text-gray-800"
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
            className={`text-3xl font-bold text-center transition-all duration-300 font-mono ${
              isCheck 
                ? "text-gray-900 scale-110 text-shadow-retro" 
                : "text-gray-600 hover:text-gray-800"
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
                  className='bg-gradient-to-br from-gray-100 to-gray-50 p-6 rounded-lg border-2 border-gray-400 hover:border-gray-600 text-center group transition-all duration-300 retro-shadow retro-shadow-hover'
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  layout
                >
                  <div className='flex flex-row items-center justify-center gap-4 my-2 md:h-12'>
                    <motion.h3 
                      className='font-bold text-lg text-gray-800 group-hover:text-gray-900 transition-colors duration-300 font-mono'
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
                  
                  <div className='w-full bg-gray-300 rounded border border-gray-400 h-4 overflow-hidden'>
                    <motion.div
                      className='bg-gray-800 h-full relative'
                      variants={progressVariants}
                      custom={skill.value}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className='absolute inset-0 bg-gray-600 opacity-50'
                        animate={{
                          x: [-20, 20],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.2
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.span
                    className='text-sm font-semibold text-gray-700 mt-3 block font-mono'
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
                  className='bg-gradient-to-br from-gray-100 to-gray-50 p-6 rounded-lg border-2 border-gray-500 hover:border-gray-700 text-center group transition-all duration-300 retro-shadow retro-shadow-hover'
                  variants={itemVariants}
                  whileHover={{ 
                    y: -5,
                    transition: { duration: 0.2 }
                  }}
                  layout
                >
                  <div className='flex flex-row items-center justify-center gap-4 my-2 md:h-12'>
                    <motion.h3 
                      className='font-bold text-lg text-gray-800 group-hover:text-gray-900 transition-colors duration-300 font-mono'
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
                  
                  <div className='w-full bg-gray-400 rounded border border-gray-500 h-4 overflow-hidden'>
                    <motion.div
                      className='bg-gray-900 h-full relative'
                      variants={progressVariants}
                      custom={skill.value}
                      initial="hidden"
                      whileInView="visible"
                      viewport={{ once: true }}
                    >
                      <motion.div
                        className='absolute inset-0 bg-gray-700 opacity-50'
                        animate={{
                          x: [-20, 20],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          ease: "linear",
                          delay: index * 0.2
                        }}
                      />
                    </motion.div>
                  </div>
                  
                  <motion.span
                    className='text-sm font-semibold text-gray-700 mt-3 block font-mono'
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
