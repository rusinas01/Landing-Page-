import type { Variants } from "framer-motion";

/*
 * Ultra-premium scroll reveal system.
 * Heavy, deliberate easing curve — elements FLOAT into place
 * with luxurious weight, never snappy.
 */
export const powerOnEase: [number, number, number, number] = [0.19, 1, 0.22, 1];

// Deep, heavy deceleration for premium feel
const heavyEase: [number, number, number, number] = [0.25, 0.46, 0.45, 0.94];

/* ── Primitive reveals (slow, heavy, parallax-y) ────────────────────────────── */

export const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 48 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.3, ease: heavyEase },
  },
};

export const fadeInDown: Variants = {
  hidden: { opacity: 0, y: -32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1.1, ease: heavyEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 1.2, ease: heavyEase },
  },
};

export const scaleIn: Variants = {
  hidden: { opacity: 0, scale: 0.94 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 1.2, ease: heavyEase },
  },
};

export const slideInLeft: Variants = {
  hidden: { opacity: 0, x: -64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: heavyEase },
  },
};

export const slideInRight: Variants = {
  hidden: { opacity: 0, x: 64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 1.2, ease: heavyEase },
  },
};

/* ── Deliberate stagger — children drift in one after another ─── */

export const logicGateStagger: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.14, delayChildren: 0.1 },
  },
};

export const sectionAssembly: Variants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.18, delayChildren: 0 },
  },
};

// Legacy aliases — kept so existing imports don't break.
export const staggerContainer: Variants = logicGateStagger;
export const staggerContainerSlow: Variants = logicGateStagger;

/* ── Soft hardening — gentle blur clear with heavy drift ────── */

export const hardenIn: Variants = {
  hidden: {
    opacity: 0,
    y: 40,
    filter: "blur(8px)",
  },
  visible: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { duration: 1.4, ease: heavyEase },
  },
};

export const viewportConfig = {
  once: true,
  amount: 0.15,
} as const;

export const viewportConfigHarden = {
  once: true,
  amount: 0.2,
} as const;
