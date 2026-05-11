"use client";

import Link from "next/link";
import { useRef } from "react";
import {
  motion,
  useInView,
  useReducedMotion,
  useScroll,
  useTransform,
} from "framer-motion";
import Logo from "@/components/primitives/Logo";

const E_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

const COLS = [
  {
    label: "Product",
    links: [
      { href: "/#how", label: "How it works" },
      { href: "/#examples", label: "Examples" },
      { href: "/pricing", label: "Pricing" },
      { href: "/build", label: "Build my site" },
    ],
  },
  {
    label: "Company",
    links: [
      { href: "#", label: "About" },
      { href: "#", label: "Press" },
      { href: "#", label: "Careers" },
      { href: "mailto:hello@onara.co", label: "hello@onara.co" },
    ],
  },
  {
    label: "Legal",
    links: [
      { href: "#", label: "Privacy" },
      { href: "#", label: "Terms" },
      { href: "#", label: "Security" },
    ],
  },
];

export default function Footer() {
  const reduced = useReducedMotion();
  const ref = useRef<HTMLElement | null>(null);
  const inView = useInView(ref, { once: true, margin: "-10%" });
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end end"],
  });
  // Big wordmark drifts in as the user reaches the footer
  const wordmarkY = useTransform(scrollYProgress, [0, 1], ["18%", "-2%"]);
  const wordmarkScale = useTransform(scrollYProgress, [0, 1], [0.94, 1]);
  const wordmarkOpacity = useTransform(scrollYProgress, [0, 0.4, 1], [0, 0.55, 1]);

  return (
    <footer
      ref={ref}
      className="relative px-6 md:px-12 pt-16 pb-10 border-t border-[var(--rule-2)] overflow-hidden"
    >
      {/* ambient warm glow */}
      {!reduced && (
        <motion.div
          aria-hidden
          className="absolute pointer-events-none -z-10"
          style={{
            bottom: -160,
            left: "50%",
            width: 900,
            height: 380,
            marginLeft: -450,
            background:
              "radial-gradient(ellipse at center, rgba(177,90,58,0.18) 0%, transparent 65%)",
            filter: "blur(40px)",
          }}
          animate={{ opacity: [0.35, 0.6, 0.35] }}
          transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }}
        />
      )}

      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-[1.4fr_1fr_1fr_1fr] gap-10 mb-12">
        <motion.div
          initial={reduced ? {} : { opacity: 0, y: 18 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: E_OUT }}
        >
          <Logo />
          <p className="mt-5 text-[14px] text-[var(--ink-3)] leading-[1.55] max-w-[320px]">
            The only website builder that starts with your Google Business Profile, not a blank page.
          </p>
        </motion.div>

        {COLS.map((col, ci) => (
          <motion.div
            key={col.label}
            initial={reduced ? {} : { opacity: 0, y: 18 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.1 + ci * 0.08, ease: E_OUT }}
          >
            <div className="mono mb-3">{col.label}</div>
            <ul className="space-y-2 text-[13px] text-[var(--ink-2)]">
              {col.links.map((l, li) => (
                <motion.li
                  key={l.label}
                  initial={reduced ? {} : { opacity: 0, x: -8 }}
                  animate={inView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + ci * 0.08 + li * 0.05,
                    ease: E_OUT,
                  }}
                >
                  <FooterLink href={l.href} label={l.label} reduced={!!reduced} />
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>

      {/* Massive animated Onara wordmark */}
      <div className="relative max-w-[1400px] mx-auto select-none pointer-events-none mb-10">
        <motion.div
          aria-hidden
          className="serif font-normal leading-[0.85] tracking-[-0.05em]"
          style={{
            fontSize: "clamp(120px, 24vw, 360px)",
            color: "var(--ink)",
            y: reduced ? 0 : wordmarkY,
            scale: reduced ? 1 : wordmarkScale,
            opacity: reduced ? 1 : wordmarkOpacity,
          }}
        >
          {"Onara".split("").map((c, i) => (
            <motion.span
              key={i}
              className="inline-block"
              initial={reduced ? {} : { y: "120%", rotate: 6, opacity: 0 }}
              animate={inView ? { y: 0, rotate: 0, opacity: 1 } : {}}
              transition={{
                duration: 1.0,
                delay: 0.3 + i * 0.06,
                ease: E_OUT,
              }}
            >
              {c}
            </motion.span>
          ))}
        </motion.div>
        {/* hairline rule that draws across as wordmark settles */}
        <motion.div
          aria-hidden
          className="absolute left-0 right-0 origin-left"
          style={{
            bottom: -8,
            height: 1,
            background: "var(--rule-2)",
          }}
          initial={{ scaleX: 0 }}
          animate={inView ? { scaleX: 1 } : {}}
          transition={{ duration: 1.2, delay: 0.6, ease: E_OUT }}
        />
      </div>

      <motion.div
        className="flex justify-between items-center text-[12px] text-[var(--ink-4)] pt-6 border-t border-[var(--rule-2)] flex-wrap gap-2"
        initial={reduced ? {} : { opacity: 0, y: 8 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.9, ease: E_OUT }}
      >
        <span className="inline-flex items-center gap-2">
          <motion.span
            className="inline-block w-1.5 h-1.5 rounded-full"
            style={{ background: "var(--accent)" }}
            animate={
              reduced
                ? {}
                : {
                    scale: [1, 1.5, 1],
                    boxShadow: [
                      "0 0 0 0 rgba(177,90,58,0.4)",
                      "0 0 0 6px rgba(177,90,58,0)",
                      "0 0 0 0 rgba(177,90,58,0)",
                    ],
                  }
            }
            transition={{ duration: 2.6, repeat: Infinity, ease: "easeOut" }}
          />
          © Onara 2026 · Built for small business owners
        </span>
        <span>Made on a Friday in Austin</span>
      </motion.div>
    </footer>
  );
}

function FooterLink({
  href,
  label,
  reduced,
}: {
  href: string;
  label: string;
  reduced: boolean;
}) {
  return (
    <Link
      href={href}
      className="relative inline-flex items-center hover:text-[var(--accent)] transition-colors group"
    >
      {label}
      <motion.span
        aria-hidden
        className="absolute left-0 right-0 -bottom-0.5 h-[1.5px] origin-left"
        style={{ background: "var(--accent)" }}
        initial={{ scaleX: 0 }}
        whileHover={reduced ? {} : { scaleX: 1 }}
        transition={{ duration: 0.32, ease: E_OUT }}
      />
    </Link>
  );
}
