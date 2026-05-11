"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { Sparkles, ArrowRight } from "@/lib/icons";

export default function QuickBuildCTA() {
  return (
    <Link
      href="/build"
      className="block relative overflow-hidden rounded-2xl group"
      style={{
        background: "linear-gradient(135deg, var(--accent-soft) 0%, var(--paper) 100%)",
        border: "1.5px solid var(--accent)",
      }}
    >
      <motion.div
        aria-hidden
        className="absolute -top-10 -right-10 w-44 h-44 rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(177,90,58,0.35), transparent 70%)",
          filter: "blur(20px)",
        }}
        animate={{ scale: [1, 1.1, 1], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
      />
      <div className="relative p-5 flex items-center gap-4">
        <motion.div
          className="w-12 h-12 rounded-full flex items-center justify-center text-white shrink-0"
          style={{ background: "var(--accent)" }}
          animate={{ rotate: [0, 8, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        >
          <Sparkles size={20} />
        </motion.div>
        <div className="flex-1 min-w-0">
          <div className="serif text-[18px] leading-tight">
            Build another in <span className="italic">90 seconds</span>
          </div>
          <div className="text-[12px] text-[var(--ink-3)] mt-0.5">
            Tell us the business — we&apos;ll handle the rest
          </div>
        </div>
        <motion.span
          animate={{ x: [0, 4, 0] }}
          transition={{ duration: 1.6, repeat: Infinity, ease: "easeInOut" }}
          className="text-[var(--accent-ink)] shrink-0 group-hover:translate-x-1 transition-transform"
        >
          <ArrowRight size={18} stroke={2.2} />
        </motion.span>
      </div>
    </Link>
  );
}
