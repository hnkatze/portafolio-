import {
  animate,
  createTimeline,
  onScroll,
  utils,
  type JSAnimation,
  type Timeline,
  type ScrollObserver,
} from 'animejs';

const prefersReducedMotion = typeof window !== 'undefined'
  ? window.matchMedia('(prefers-reduced-motion: reduce)').matches
  : false;

// True when device has a fine pointer (mouse) AND can hover.
// Used to gate cursor-driven effects (magnetic, cursor follower) so they
// never run on touch devices — saves work on mobile.
export const hasFinePointer = typeof window !== 'undefined'
  ? window.matchMedia('(hover: hover) and (pointer: fine)').matches
  : false;

const EASE = 'outQuad';

type Preset = { opacity: number[]; translateX?: number[]; translateY?: number[] };

export const presets: Record<string, Preset> = {
  fadeUp:    { opacity: [0, 1], translateY: [60, 0] },
  fadeDown:  { opacity: [0, 1], translateY: [-60, 0] },
  fadeLeft:  { opacity: [0, 1], translateX: [-60, 0] },
  fadeRight: { opacity: [0, 1], translateX: [60, 0] },
  fadeOnly:  { opacity: [0, 1] },
};

type Direction = 'fadeUp' | 'fadeDown' | 'fadeLeft' | 'fadeRight' | 'fadeOnly';

const liveAnimations = new Set<JSAnimation | Timeline>();
const liveObservers = new Set<IntersectionObserver | ScrollObserver>();

function track<T extends JSAnimation | Timeline>(a: T): T {
  liveAnimations.add(a);
  return a;
}

// Accept seconds (legacy GSAP-style) and convert to ms for animejs.
// Heuristic: values < 50 are assumed seconds; >= 50 are already ms.
function toMs(v: number): number {
  return v < 50 ? v * 1000 : v;
}

function toElements(elements: string | Element | Element[] | NodeListOf<Element>): Element[] {
  if (typeof elements === 'string') return Array.from(document.querySelectorAll(elements));
  if (elements instanceof Element) return [elements];
  return Array.from(elements);
}

export function scrollReveal(
  elements: string | Element | Element[] | NodeListOf<Element>,
  options: {
    direction?: Direction;
    delay?: number;
    duration?: number;
    stagger?: number;
    start?: string;
    repeat?: boolean;
  } = {},
): void {
  const {
    direction = 'fadeUp',
    delay = 0,
    duration = prefersReducedMotion ? 0 : 0.6,
    stagger = 0,
    start = '0px 0px -10% 0px',
    repeat = false,
  } = options;

  const from = presets[direction];
  const fromState = getFromState(from);
  const targets = toElements(elements);
  if (targets.length === 0) return;

  utils.set(targets, fromState);

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        const idx = targets.indexOf(el);

        if (entry.isIntersecting) {
          const itemDelay = (delay + (idx >= 0 ? idx : 0) * stagger) * 1000;

          track(animate(el, {
            ...from,
            duration: toMs(duration),
            delay: itemDelay,
            ease: EASE,
          }));

          if (!repeat) observer.unobserve(el);
        } else if (repeat) {
          // Element left viewport — reset to "from" state so it can re-animate next entry.
          utils.set(el, fromState);
        }
      });
    },
    { rootMargin: start, threshold: 0 },
  );

  liveObservers.add(observer);
  targets.forEach((el) => observer.observe(el));
}

function getFromState(props: Record<string, unknown>): Record<string, number | string> {
  const out: Record<string, number | string> = {};
  for (const [k, v] of Object.entries(props)) {
    if (Array.isArray(v)) out[k] = v[0] as number | string;
  }
  return out;
}

export function entranceTimeline(
  targets: (string | Element)[],
  options: {
    stagger?: number;
    duration?: number;
  } = {},
): Timeline {
  const { stagger = 0.15, duration = prefersReducedMotion ? 0 : 0.5 } = options;
  const durMs = toMs(duration);

  const tl = createTimeline();
  targets.forEach((target, i) => {
    const el = typeof target === 'string' ? document.querySelector(target) : target;
    if (!el) return;
    utils.set(el, { opacity: 0, translateY: 20 });
    tl.add(el, {
      opacity: [0, 1],
      translateY: [20, 0],
      duration: durMs,
      ease: EASE,
    }, i * stagger * 1000);
  });

  track(tl);
  return tl;
}

export function parallax(
  trigger: string | Element,
  target: string | Element,
  speed: number,
): void {
  if (prefersReducedMotion || window.innerWidth < 768) return;

  const triggerEl = typeof trigger === 'string' ? document.querySelector(trigger) : trigger;
  if (!triggerEl) return;

  const a = animate(target, {
    translateY: speed * 200,
    ease: 'linear',
    autoplay: onScroll({
      target: triggerEl,
      enter: 'bottom top',
      leave: 'top bottom',
      sync: true,
    }),
  });

  track(a);
}

// Magnetic hover effect — element gravitates toward the cursor when nearby.
// Strength: how strongly the element pulls (0..1, default 0.4).
// Radius: in pixels around the element where the effect activates (default 120).
// Disabled on touch devices and when reduced-motion is on.
const magneticHandlers = new WeakMap<HTMLElement, { move: (e: MouseEvent) => void; leave: () => void }>();

export function magnetic(
  target: HTMLElement,
  options: { strength?: number; radius?: number } = {},
): void {
  if (!hasFinePointer || prefersReducedMotion) return;

  const { strength = 0.4, radius = 120 } = options;

  // Avoid double-binding the same element.
  if (magneticHandlers.has(target)) return;

  const move = (e: MouseEvent) => {
    const rect = target.getBoundingClientRect();
    const cx = rect.left + rect.width / 2;
    const cy = rect.top + rect.height / 2;
    const dx = e.clientX - cx;
    const dy = e.clientY - cy;
    const dist = Math.hypot(dx, dy);

    if (dist > radius) {
      target.style.transform = '';
      return;
    }

    const pull = 1 - dist / radius;
    target.style.transform = `translate(${dx * strength * pull}px, ${dy * strength * pull}px)`;
  };

  const leave = () => {
    animate(target, {
      translateX: 0,
      translateY: 0,
      duration: 400,
      ease: 'outElastic(1, .5)',
    });
  };

  document.addEventListener('mousemove', move, { passive: true });
  target.addEventListener('mouseleave', leave);
  magneticHandlers.set(target, { move, leave });
}

export function killAll(): void {
  liveAnimations.forEach((a) => a.cancel?.());
  liveAnimations.clear();
  liveObservers.forEach((o) => {
    if (o instanceof IntersectionObserver) o.disconnect();
    else o.revert?.();
  });
  liveObservers.clear();
}

if (typeof document !== 'undefined') {
  document.addEventListener('astro:before-swap', killAll);
}

export { animate, createTimeline, utils, onScroll, prefersReducedMotion };
