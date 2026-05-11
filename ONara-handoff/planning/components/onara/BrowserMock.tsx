"use client";

import { motion } from "framer-motion";
import { buttonHover, buttonTap, refinedEase } from "@/components/onara/motion";

export function BrowserMock() {
  return (
    <motion.div
      className="card deep-shadow mx-auto max-w-[1080px] overflow-hidden rounded-lg"
      initial={{ opacity: 0, y: 54, rotateX: 6 }}
      whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
      viewport={{ once: true, amount: 0.35 }}
      transition={{ duration: 0.9, ease: refinedEase }}
    >
      <div className="flex items-center gap-1.5 border-b border-rule-2 bg-paper-2 px-3.5 py-3">
        <span className="size-2.5 rounded-full bg-[#ff5f57]" />
        <span className="size-2.5 rounded-full bg-[#febc2e]" />
        <span className="size-2.5 rounded-full bg-[#28c840]" />
        <div className="ml-3.5 flex-1 rounded-full border border-rule bg-paper px-3.5 py-1.5 font-mono text-[11px] text-ink-3">
          mikes-pizza.pages.dev
        </div>
      </div>
      <PizzaSitePreview />
    </motion.div>
  );
}

export function PizzaSitePreview() {
  return (
    <div className="min-h-[440px] bg-[#1a1410] text-[#f7f0e2] lg:h-[500px]">
      <div className="flex items-center justify-between px-5 py-5 sm:px-10">
        <div className="serif text-[22px] font-semibold text-[#ff8a4c]">
          Mike&apos;s Pizza
        </div>
        <div className="hidden gap-5 text-xs text-[#bcb0a0] sm:flex">
          <span>Menu</span>
          <span>Hours</span>
          <span>Visit</span>
          <span className="text-[#ff8a4c]">Order -&gt;</span>
        </div>
      </div>
      <div className="grid gap-8 px-5 pb-8 pt-6 sm:px-10 lg:grid-cols-[1.1fr_1fr] lg:items-center">
        <div>
          <div className="mb-3.5 font-mono text-[10px] uppercase tracking-[0.15em] text-[#ff8a4c]">
            Wood-fired · since 2008
          </div>
          <h3 className="serif max-w-[560px] text-[42px] font-medium leading-none sm:text-[56px]">
            Austin&apos;s slowest
            <br />
            pizza dough.
          </h3>
          <p className="mt-4 max-w-[380px] text-[13px] leading-6 text-[#bcb0a0]">
            72-hour cold ferment, San Marzano tomatoes, fior di latte. Open till
            10 - walk in or order online.
          </p>
          <div className="mt-7 flex flex-wrap gap-2.5">
            <motion.button
              className="btn-focus rounded-[2px] bg-[#ff8a4c] px-5 py-3 text-[13px] font-semibold text-[#1a1410]"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              See the menu
            </motion.button>
            <motion.button
              className="btn-focus rounded-[2px] border border-[#46382a] px-5 py-3 text-[13px] text-[#f7f0e2]"
              whileHover={buttonHover}
              whileTap={buttonTap}
            >
              (512) 555-0182
            </motion.button>
          </div>
          <div className="mt-8 flex flex-wrap gap-4 font-mono text-[11px] text-[#857762]">
            <span>★ 4.6 · 312 reviews</span>
            <span>218 Congress Ave</span>
          </div>
        </div>
        <motion.div
          className="site-radial relative flex min-h-[260px] items-center justify-center overflow-hidden rounded-md lg:h-[360px]"
          animate={{ y: [0, -7, 0], rotate: [0, 0.4, 0] }}
          transition={{ duration: 5.4, repeat: Infinity, ease: "easeInOut" }}
        >
          <span className="text-[150px] sm:text-[200px]" aria-hidden="true">
            🍕
          </span>
          <div className="absolute inset-x-4 bottom-4 flex justify-between rounded-[3px] bg-black/50 px-3.5 py-2.5 text-[11px] text-[#f7f0e2] backdrop-blur-md">
            <span>Margherita Classic</span>
            <span>$14</span>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
