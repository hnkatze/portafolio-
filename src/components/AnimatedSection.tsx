import { motion } from 'framer-motion';
import type { ReactNode } from 'react';

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: 'up' | 'down' | 'left' | 'right' | 'fade';
  duration?: number;
  id?: string;
}

const animations = {
  up: {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0 }
  },
  down: {
    hidden: { opacity: 0, y: -60 },
    visible: { opacity: 1, y: 0 }
  },
  left: {
    hidden: { opacity: 0, x: -60 },
    visible: { opacity: 1, x: 0 }
  },
  right: {
    hidden: { opacity: 0, x: 60 },
    visible: { opacity: 1, x: 0 }
  },
  fade: {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  }
};

export default function AnimatedSection({
  children,
  className = '',
  delay = 0,
  direction = 'up',
  duration = 0.6,
  id
}: AnimatedSectionProps) {
  const variants = animations[direction];

  return (
    <motion.div
      id={id}
      className={className}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      transition={{
        duration,
        delay,
        ease: [0.25, 0.46, 0.45, 0.94]
      }}
      variants={variants}
    >
      {children}
    </motion.div>
  );
}

// Componente para animaciones en hover
export function AnimatedCard({ 
  children, 
  className = '',
  hoverScale = 1.05,
  tapScale = 0.95 
}: {
  children: ReactNode;
  className?: string;
  hoverScale?: number;
  tapScale?: number;
}) {
  return (
    <motion.div
      className={className}
      whileHover={{ 
        scale: hoverScale,
        transition: { duration: 0.2 }
      }}
      whileTap={{ scale: tapScale }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {children}
    </motion.div>
  );
}

// Componente para texto con animación de escritura
export function TypewriterText({ 
  text, 
  className = '',
  delay = 0 
}: {
  text: string;
  className?: string;
  delay?: number;
}) {
  return (
    <motion.span
      className={className}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay, duration: 0.5 }}
    >
      {text.split('').map((char, index) => (
        <motion.span
          key={index}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: delay + index * 0.05,
            duration: 0.1
          }}
        >
          {char}
        </motion.span>
      ))}
    </motion.span>
  );
}

// Componente para botones animados
export function AnimatedButton({
  children,
  className = '',
  onClick,
  type = 'button'
}: {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit';
}) {
  return (
    <motion.button
      type={type}
      className={className}
      onClick={onClick}
      whileHover={{ 
        scale: 1.05,
        boxShadow: '0 10px 25px rgba(0,0,0,0.2)'
      }}
      whileTap={{ scale: 0.95 }}
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
    >
      {children}
    </motion.button>
  );
}
