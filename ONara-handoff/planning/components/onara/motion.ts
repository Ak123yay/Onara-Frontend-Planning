import type { Variants } from "framer-motion";

export const refinedEase = [0.16, 1, 0.3, 1] as const;

export const fadeUp: Variants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease: refinedEase },
  },
};

export const fadeIn: Variants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.6, ease: refinedEase },
  },
};

export const staggerContainer: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.11,
      delayChildren: 0.08,
    },
  },
};

export const cardHover = {
  y: -6,
  boxShadow: "0 16px 42px rgb(0 0 0 / 0.09)",
  transition: { duration: 0.32, ease: refinedEase },
};

export const buttonHover = {
  y: -2,
  transition: { duration: 0.22, ease: refinedEase },
};

export const buttonTap = {
  y: 0,
  scale: 0.985,
};
