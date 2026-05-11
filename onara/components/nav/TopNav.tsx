"use client";

import Link from "next/link";
import {
  motion,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useState } from "react";
import Logo from "@/components/primitives/Logo";
import Magnetic from "@/components/motion/Magnetic";

const E_OUT: [number, number, number, number] = [0.16, 1, 0.3, 1];

export default function TopNav() {
  const { scrollY, scrollYProgress } = useScroll();
  const navOpacity = useSpring(useTransform(scrollY, [0, 80], [0.6, 0.95]), {
    stiffness: 120,
    damping: 22,
  });
  const navBlur = useTransform(scrollY, [0, 80], [6, 16]);
  const filterValue = useTransform(navBlur, (v) => `blur(${v}px) saturate(140%)`);
  const navPaddingY = useTransform(scrollY, [0, 80], [18, 12]);
  const bgColor = useTransform(navOpacity, (v) => `rgba(250, 247, 242, ${v})`);
  const ruleProgress = useSpring(scrollYProgress, {
    stiffness: 110,
    damping: 24,
  });

  const [scrolled, setScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (v) => {
    setScrolled(v > 24);
  });

  return (
    <motion.nav
      className="flex items-center justify-between px-6 md:px-10 border-b border-[var(--rule-2)] sticky top-0 z-30"
      style={{
        backgroundColor: bgColor,
        backdropFilter: filterValue,
        WebkitBackdropFilter: filterValue,
        paddingTop: navPaddingY,
        paddingBottom: navPaddingY,
        boxShadow: scrolled
          ? "0 8px 28px -18px rgba(20,16,12,0.18)"
          : "0 0 0 0 rgba(0,0,0,0)",
        transition: "box-shadow 0.4s ease",
      }}
      initial={{ opacity: 0, y: -16 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, ease: E_OUT }}
    >
      {/* Logo with subtle breathing motion */}
      <motion.div
        animate={{ scale: [1, 1.04, 1] }}
        transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
        whileHover={{ scale: 1.06 }}
      >
        <Logo />
      </motion.div>

      <div className="hidden md:flex items-center gap-7 text-[13px] text-[var(--ink-3)]">
        {[
          { href: "/#how", label: "How it works" },
          { href: "/pricing", label: "Pricing" },
          { href: "/#examples", label: "Examples" },
        ].map((l, i) => (
          <motion.div
            key={l.href}
            initial={{ opacity: 0, y: -6 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 + i * 0.06, ease: E_OUT }}
          >
            <NavLink href={l.href} label={l.label} />
          </motion.div>
        ))}
        <motion.div
          initial={{ opacity: 0, y: -6 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4, ease: E_OUT }}
        >
          <Link
            className="hover:text-[var(--ink)] transition-colors text-[var(--ink)]"
            href="/auth/sign-in"
          >
            Sign in
          </Link>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: -8, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.5, ease: E_OUT }}
        >
          <Magnetic strength={0.2}>
            <motion.div
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.97 }}
              className="relative overflow-hidden rounded-full"
            >
              <Link href="/auth/sign-up" className="btn btn-accent btn-sm relative z-10">
                Start free
              </Link>
              <motion.span
                aria-hidden
                className="absolute inset-0 pointer-events-none"
                style={{
                  background:
                    "linear-gradient(110deg, transparent 35%, rgba(255,255,255,0.35) 50%, transparent 65%)",
                  transform: "translateX(-110%)",
                }}
                whileHover={{ x: ["-110%", "110%"] }}
                transition={{ duration: 0.9, ease: "easeInOut" }}
              />
            </motion.div>
          </Magnetic>
        </motion.div>
      </div>
      <Link href="/build" className="btn btn-accent btn-sm md:hidden">
        Build
      </Link>

      {/* Scroll progress underline */}
      <motion.div
        aria-hidden
        className="absolute left-0 bottom-0 h-[2px] origin-left pointer-events-none"
        style={{
          right: 0,
          background:
            "linear-gradient(90deg, var(--accent), var(--accent-2), var(--accent))",
          backgroundSize: "200% 100%",
          scaleX: ruleProgress,
        }}
        animate={{ backgroundPositionX: ["0%", "200%"] }}
        transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
      />
    </motion.nav>
  );
}

function NavLink({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="relative inline-flex items-center hover:text-[var(--ink)] transition-colors group"
    >
      <motion.span
        whileHover={{ y: -1 }}
        transition={{ duration: 0.2, ease: E_OUT }}
      >
        {label}
      </motion.span>
      <motion.span
        className="absolute left-0 right-0 -bottom-1 h-[1.5px] origin-left"
        style={{ background: "var(--accent)" }}
        initial={{ scaleX: 0 }}
        whileHover={{ scaleX: 1 }}
        transition={{ duration: 0.32, ease: E_OUT }}
      />
    </Link>
  );
}
