"use client";

import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Logo } from "@/components/layout/Logo";
import { buttonHover, buttonTap, fadeIn } from "@/components/onara/motion";

const navItems = [
  { label: "How it works", href: "#how" },
  { label: "Pricing", href: "#pricing" },
  { label: "Examples", href: "#examples" },
];

export function Navbar() {
  return (
    <motion.header
      className="sticky top-0 z-50 flex items-center justify-between border-b border-rule-2 bg-paper/92 px-5 py-[18px] backdrop-blur-md md:px-10"
      initial="hidden"
      animate="visible"
      variants={fadeIn}
    >
      <Logo />
      <nav className="hidden items-center gap-7 text-[13.5px] text-ink-3 md:flex">
        {navItems.map((item) => (
          <a
            className="transition-colors duration-200 hover:text-ink"
            href={item.href}
            key={item.label}
          >
            {item.label}
          </a>
        ))}
        <Link className="text-ink transition-colors duration-200 hover:text-accent" href="/signin">
          Sign in
        </Link>
        <motion.a
          className="btn-focus inline-flex items-center justify-center gap-2 rounded-[2px] border border-accent bg-accent px-3.5 py-2 text-[12.5px] font-medium text-white transition-colors hover:border-accent-2 hover:bg-accent-2"
          href="/build"
          whileHover={buttonHover}
          whileTap={buttonTap}
        >
          Start free
          <ArrowRight size={14} strokeWidth={1.7} />
        </motion.a>
      </nav>
      <motion.a
        className="btn-focus inline-flex items-center justify-center rounded-[2px] border border-accent bg-accent px-3.5 py-2 text-[12.5px] font-medium text-white md:hidden"
        href="/build"
        whileHover={buttonHover}
        whileTap={buttonTap}
      >
        Start free
      </motion.a>
    </motion.header>
  );
}
