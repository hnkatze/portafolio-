import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect, type ReactNode } from "react";

interface ParallaxLayerProps {
  children: ReactNode;
  speed: number;
  className?: string;
}

export default function ParallaxLayer({
  children,
  speed,
  className,
}: ParallaxLayerProps) {
  const ref = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    setIsMobile(window.innerWidth < 768);
  }, []);

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], [speed * -100, speed * 100]);

  // Skip parallax on mobile — just render children statically
  if (isMobile) {
    return <div className={className}>{children}</div>;
  }

  return (
    <motion.div ref={ref} style={{ y }} className={className}>
      {children}
    </motion.div>
  );
}
