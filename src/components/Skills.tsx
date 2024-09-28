import { useState } from "react";
import "../css/switch.css";
import { AnimatePresence, motion } from "framer-motion";

export default function Skills() {
  const [isCheck, setIsCheck] = useState(false);

  const skills = [
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
      value: 70,
      url: "https://icon.icepanel.io/Technology/svg/Firebase.svg",
    },
    {
      name: "AWS",
      value: 40,
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
  const favo = [
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
      name: "TypeScript",
      value: 60,
      url: "https://icon.icepanel.io/Technology/svg/TypeScript.svg",
    },
    {
      name: "Tailwind",
      value: 70,
      url: "https://icon.icepanel.io/Technology/svg/Tailwind-CSS.svg",
    },
    {
      name: "Firebase",
      value: 70,
      url: "https://icon.icepanel.io/Technology/svg/Firebase.svg",
    },
  ];
  const see = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8";
  const hide = "grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 hidden";
  const handleSwitch = () => {
    setIsCheck(!isCheck);
  };
  const containerVariants = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
    exit: { opacity: 0, x: -100, transition: { duration: 0.5 } },
  };

  return (
    <section id='habilidades' className='py-20 '>
      <div className='container mx-auto px-6 lg:min-h-[520px]'>
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
            Mis Fav
          </h2>
        </div>

        {/* Mostrar habilidades */}
        <AnimatePresence>
          {!isCheck && (
            <motion.div
              id='AllSkills'
              className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8'
              variants={containerVariants}
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
