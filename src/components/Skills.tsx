import { useState } from "react";
import "../styles/switch.css";
import { AnimatePresence, motion } from "framer-motion";
import { favo, skills } from "../libs/utils";

export default function Skills() {
  const [isCheck, setIsCheck] = useState(false);

  const handleSwitch = () => {
    setIsCheck(!isCheck);
  };
  const containerVariants = {
    hidden: { opacity: 0, y: 100 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, y: -50, transition: { duration: 0.5 } },
  };
  const containerVariantsMainAxis = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  };

  return (
    <section id='habilidades' className='py-20  '>
      <div className='container mx-auto px-6 lg:min-h-max'>
        <div className='w-full flex flex-row justify-center items-center gap-4 mb-7 '>
          <h2
            id='skills'
            className={`text-2xl font-bold text-center ${!isCheck ? "underline" : ""}`}>
            Mis Habilidades
          </h2>
          <label className='switch'>
            <input
              id='switch'
              type='checkbox'
              checked={isCheck}
              onChange={handleSwitch}
            />
            <span className='slider'></span>
          </label>
          <h2
            id='favo'
            className={`text-2xl font-bold text-center ${isCheck ? "underline" : ""}`}>
            Favoritos
          </h2>
        </div>

        {/* Mostrar habilidades */}
        <AnimatePresence>
          {!isCheck && (
            <motion.div
              id='AllSkills'
              className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
              variants={
                window.innerWidth < 500
                  ? containerVariants
                  : containerVariantsMainAxis
              }
              initial='hidden'
              animate='visible'
              exit='exit'>
              {skills.map((skill, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-lg shadow-md text-center'>
                  <div className='flex flex-row items-center justify-center gap-4 my-1 md:h-10'>
                    <h3 className='font-bold mb-2 text-lg text-center hover:underline'>
                      {skill.name}
                    </h3>
                    <img
                      src={skill.url}
                      alt='logo'
                      className='w-8 h-9 flex md:pb-1'
                    />
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2.5'>
                    <div
                      className='bg-blue-600 h-2.5 rounded-full'
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {isCheck && (
            <motion.div
              id='FavoriteSkills'
              className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
              variants={containerVariants}
              initial='hidden'
              animate='visible'
              exit='exit'>
              {favo.map((skill, index) => (
                <div
                  key={index}
                  className='bg-white p-6 rounded-lg shadow-md text-center'>
                  <div className='flex flex-row items-center justify-center gap-4 my-1 md:h-10'>
                    <h3 className='font-bold mb-2 text-lg text-center hover:underline'>
                      {skill.name}
                    </h3>
                    <img
                      src={skill.url}
                      alt='logo'
                      className='w-8 h-9 flex md:pb-1'
                    />
                  </div>
                  <div className='w-full bg-gray-200 rounded-full h-2.5'>
                    <div
                      className='bg-blue-600 h-2.5 rounded-full'
                      style={{ width: `${skill.value}%` }}
                    />
                  </div>
                </div>
              ))}
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}
