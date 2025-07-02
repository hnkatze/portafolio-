import { useEffect, useState } from 'react';

export function useScrollAnimation() {
  const [scrollY, setScrollY] = useState(0);
  const [isVisible, setIsVisible] = useState<{ [key: string]: boolean }>({});

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const observeElement = (id: string, threshold = 0.1) => {
    useEffect(() => {
      const element = document.getElementById(id);
      if (!element) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          setIsVisible(prev => ({
            ...prev,
            [id]: entry.isIntersecting
          }));
        },
        { threshold }
      );

      observer.observe(element);
      return () => observer.disconnect();
    }, [id, threshold]);

    return isVisible[id] || false;
  };

  return { scrollY, observeElement };
}

export function useInView(ref: React.RefObject<HTMLElement>, threshold = 0.1) {
  const [inView, setInView] = useState(false);

  useEffect(() => {
    if (!ref.current) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setInView(entry.isIntersecting);
      },
      { threshold }
    );

    observer.observe(ref.current);
    return () => observer.disconnect();
  }, [ref, threshold]);

  return inView;
}
