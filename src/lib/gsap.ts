import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

// --- Reduced motion ---
const prefersReducedMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

// --- Easing (matches Framer Motion [0.25, 0.46, 0.45, 0.94]) ---
const EASE = 'power2.out';

// --- Animation presets (from values) ---
export const presets = {
  fadeUp: { opacity: 0, y: 60 },
  fadeDown: { opacity: 0, y: -60 },
  fadeLeft: { opacity: 0, x: -60 },
  fadeRight: { opacity: 0, x: 60 },
  fadeOnly: { opacity: 0 },
} as const;

type Direction = keyof typeof presets;

// --- Scroll-triggered reveal ---
export function scrollReveal(
  elements: string | Element | Element[],
  options: {
    direction?: Direction;
    delay?: number;
    duration?: number;
    stagger?: number;
    start?: string;
  } = {}
): void {
  const {
    direction = 'fadeUp',
    delay = 0,
    duration = prefersReducedMotion ? 0 : 0.6,
    stagger = 0,
    start = 'top 90%',
  } = options;

  const from = presets[direction];
  const targets = gsap.utils.toArray<Element>(elements);

  targets.forEach((el, i) => {
    gsap.from(el, {
      ...from,
      duration,
      delay: delay + i * stagger,
      ease: EASE,
      scrollTrigger: {
        trigger: el,
        start,
        once: true,
      },
    });
  });
}

// --- Entrance timeline (not scroll-triggered) ---
export function entranceTimeline(
  targets: (string | Element)[],
  options: {
    stagger?: number;
    duration?: number;
  } = {}
): gsap.core.Timeline {
  const { stagger = 0.15, duration = prefersReducedMotion ? 0 : 0.5 } = options;

  const tl = gsap.timeline();
  targets.forEach((target, i) => {
    tl.from(target, {
      opacity: 0,
      y: 20,
      duration,
      ease: EASE,
    }, i * stagger);
  });

  return tl;
}

// --- Parallax helper ---
export function parallax(
  trigger: string | Element,
  target: string | Element,
  speed: number
): void {
  if (prefersReducedMotion || window.innerWidth < 768) return;

  gsap.to(target, {
    y: speed * 200,
    ease: 'none',
    scrollTrigger: {
      trigger: trigger as Element,
      start: 'top bottom',
      end: 'bottom top',
      scrub: true,
    },
  });
}

// --- Global cleanup ---
export function killAll(): void {
  ScrollTrigger.getAll().forEach((st) => st.kill());
  gsap.killTweensOf('*');
}

// --- Auto-cleanup on Astro navigation ---
document.addEventListener('astro:before-swap', killAll);

export { gsap, ScrollTrigger, prefersReducedMotion };
