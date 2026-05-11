"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { Plus } from "@/lib/icons";

const FAQS: [string, string][] = [
  [
    "What happens after the 14-day Pro trial?",
    "You drop to the free tier automatically. Your live URL pauses, but your dashboard preview stays. Your code, content, and revision history are kept for 30 days — restore at any point by upgrading.",
  ],
  [
    "Can I download my code?",
    "Yes — Pro plans include a one-click ZIP export of every site you build. The code is plain HTML, CSS, and JavaScript. No proprietary lock-in.",
  ],
  [
    "Do I have to use a custom domain?",
    "No. We publish at a free <yourbusiness>.pages.dev URL by default. Add a custom domain anytime for a $10 one-time add-on (we handle DNS, SSL, redirects).",
  ],
  [
    "What if my payment fails?",
    "We retry 3 times over 7 days, then pause the live site. Your data and revision history stay intact for 30 days — restore by adding a working card.",
  ],
  [
    "Can I cancel anytime?",
    "Yes. One click. No phone calls. Your live URL pauses at the end of the current billing cycle, and your data sticks around for 30 days in case you change your mind.",
  ],
  [
    "What's a revision?",
    'Any plain-English change request — "update my hours", "add a catering section", "swap that photo". Each one triggers an incremental rebuild of just the affected components, not the whole site. Most revisions finish in under 30 seconds.',
  ],
  [
    "How is this different from Squarespace or Wix?",
    "Those tools start with a blank template. Onara starts with your real business — your hours, address, photos, and reviews already pulled from Google. You're done in 90 seconds, not a weekend.",
  ],
  [
    "Is there a free plan forever?",
    "Yes. Free is permanent — preview your site, request 3 revisions a month, see what we'd build for you. The catch: your URL doesn't go live without a paid plan.",
  ],
];

export default function PricingFAQ() {
  return (
    <section className="px-6 md:px-12 pb-20 relative">
      <div className="max-w-[820px] mx-auto">
        <Reveal>
          <div className="text-center mb-12">
            <div className="mono mb-3">FAQ</div>
            <h2 className="serif text-[clamp(28px,4vw,48px)] leading-[1.05] m-0 font-normal">
              Questions you probably <span className="italic">have</span>.
            </h2>
          </div>
        </Reveal>

        <div className="card p-0 overflow-hidden">
          {FAQS.map((f, i) => (
            <FAQItem key={f[0]} q={f[0]} a={f[1]} index={i} />
          ))}
        </div>

        <Reveal delay={0.2}>
          <p className="text-center text-[12px] text-[var(--ink-3)] mt-6">
            Still curious? Email{" "}
            <a
              href="mailto:hello@onara.co"
              className="underline underline-offset-2 hover:text-[var(--accent-ink)] transition-colors"
            >
              hello@onara.co
            </a>{" "}
            — real humans, usually under 4 hours.
          </p>
        </Reveal>
      </div>
    </section>
  );
}

function FAQItem({ q, a, index }: { q: string; a: string; index: number }) {
  const [open, setOpen] = useState(index === 0);
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-10%" }}
      transition={{ duration: 0.5, delay: index * 0.04 }}
      className={`border-t border-[var(--rule-2)] ${index === 0 ? "border-t-0" : ""}`}
    >
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        className="w-full flex items-center justify-between gap-4 text-left p-5 md:p-6 group"
      >
        <span className="serif text-[17px] md:text-[19px] leading-tight pr-2 group-hover:text-[var(--accent-ink)] transition-colors">
          {q}
        </span>
        <motion.span
          animate={{ rotate: open ? 45 : 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 22 }}
          className="shrink-0 w-7 h-7 rounded-full flex items-center justify-center text-[var(--ink-3)]"
          style={{
            background: open ? "var(--accent-soft)" : "var(--paper-2)",
            color: open ? "var(--accent-ink)" : "var(--ink-3)",
          }}
        >
          <Plus size={14} stroke={2.2} />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {open && (
          <motion.div
            key="content"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.2, 0.7, 0.3, 1] }}
            className="overflow-hidden"
          >
            <div className="px-5 md:px-6 pb-6 text-[13.5px] text-[var(--ink-3)] leading-[1.65] max-w-[680px]">
              {a}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
