"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion } from "framer-motion";
import Logo from "@/components/primitives/Logo";
import Reveal from "@/components/motion/Reveal";
import MagneticButton from "@/components/motion/MagneticButton";
import BrowserMock from "@/components/site-preview/BrowserMock";
import MikesPizzaPreview from "@/components/site-preview/MikesPizzaPreview";
import {
  Check,
  Copy,
  Edit,
  Globe,
  ArrowRight,
  Sparkles,
  Layers,
  Phone,
} from "@/lib/icons";

const PUBLIC_URL = "mikes-pizza-a3f2.pages.dev";

const CONFETTI = Array.from({ length: 18 }, (_, i) => i);

export default function ReadyView() {
  const reduced = useReducedMotion();
  const [copied, setCopied] = useState(false);
  const [device, setDevice] = useState<"desktop" | "mobile">("desktop");

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(`https://${PUBLIC_URL}`);
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    } catch {}
  };

  return (
    <main className="min-h-screen bg-[var(--paper-2)] relative overflow-hidden">
      {/* Confetti burst */}
      {!reduced && (
        <div className="absolute inset-x-0 top-0 h-[500px] pointer-events-none z-0">
          {CONFETTI.map((i) => {
            const x = Math.random() * 100;
            const colors = [
              "var(--accent)",
              "var(--accent-ink)",
              "#f7c8a8",
              "#1a1a1a",
            ];
            const color = colors[i % colors.length];
            const rotate = Math.random() * 360;
            const size = 6 + Math.random() * 6;
            return (
              <motion.span
                key={i}
                initial={{ y: -40, x: `${x}%`, opacity: 0, rotate }}
                animate={{
                  y: [0, 220 + Math.random() * 180],
                  opacity: [0, 1, 0],
                  rotate: rotate + 360,
                }}
                transition={{
                  duration: 2.4 + Math.random() * 1.2,
                  delay: Math.random() * 0.6,
                  ease: [0.2, 0.7, 0.3, 1],
                }}
                className="absolute top-0"
                style={{
                  left: 0,
                  width: size,
                  height: size * 1.6,
                  background: color,
                  borderRadius: 1,
                }}
              />
            );
          })}
        </div>
      )}

      <div className="relative z-10">
        {/* Top bar */}
        <div className="flex items-center justify-between px-6 md:px-10 py-4 border-b border-[var(--rule-2)] bg-[var(--paper)]">
          <Logo />
          <div className="hidden md:flex items-center gap-3.5">
            <span className="text-[12px] text-[var(--ink-3)]">
              Built in 1m 27s · 6 sections · 12 photos
            </span>
            <button
              onClick={() => setDevice("desktop")}
              className={`chip ${device === "desktop" ? "active" : ""}`}
            >
              <Layers size={11} /> Desktop
            </button>
            <button
              onClick={() => setDevice("mobile")}
              className={`chip ${device === "mobile" ? "active" : ""}`}
            >
              <Phone size={11} /> Mobile
            </button>
          </div>
          <div className="flex gap-2.5">
            <Link href="/dashboard/site/mikes/revisions" className="btn btn-soft btn-sm">
              <Edit size={12} /> Request changes
            </Link>
          </div>
        </div>

        {/* Hero celebration */}
        <div className="px-6 md:px-10 pt-12 md:pt-16 pb-6 text-center max-w-[760px] mx-auto">
          <Reveal>
            <div className="eyebrow mb-4 inline-flex items-center gap-2">
              <span
                className="w-1.5 h-1.5 rounded-full"
                style={{ background: "var(--accent)" }}
              />
              Ten agents · done
            </div>
          </Reveal>

          <motion.h1
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.2, 0.7, 0.3, 1] }}
            className="serif text-[clamp(40px,6vw,72px)] leading-[1.02] m-0 font-normal"
          >
            Mike&apos;s Pizza is{" "}
            <span className="italic relative inline-block">
              online
              <motion.span
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.7, duration: 0.6, ease: [0.2, 0.7, 0.3, 1] }}
                className="absolute -bottom-1 left-0 right-0 h-[3px] origin-left"
                style={{ background: "var(--accent)" }}
              />
            </span>
            .
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-[15px] text-[var(--ink-3)] mt-4 max-w-[460px] mx-auto"
          >
            Free for 14 days, then $19/mo. Custom domain ready when you are.
          </motion.div>

          {/* URL pill with copy */}
          <motion.div
            initial={{ opacity: 0, y: 10, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ delay: 0.55, duration: 0.5, type: "spring", stiffness: 220 }}
            className="mt-7 inline-flex items-center gap-3 px-4 py-2.5 rounded-full border bg-[var(--paper)]"
            style={{ borderColor: "var(--rule)" }}
          >
            <span
              className="w-2 h-2 rounded-full"
              style={{
                background: "var(--accent)",
                boxShadow: "0 0 0 3px var(--accent-soft)",
              }}
            />
            <span className="mono text-[12px]">{PUBLIC_URL}</span>
            <button
              onClick={copy}
              className="text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors inline-flex items-center gap-1 text-[11px]"
            >
              {copied ? (
                <>
                  <Check size={12} stroke={2.4} /> copied
                </>
              ) : (
                <>
                  <Copy size={12} /> copy
                </>
              )}
            </button>
          </motion.div>
        </div>

        {/* Browser preview */}
        <div className="px-4 md:px-10 pb-10">
          <Reveal delay={0.2}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.7 }}
              className={`mx-auto transition-all duration-500 ${
                device === "mobile" ? "max-w-[380px]" : "max-w-[1100px]"
              }`}
            >
              <BrowserMock url={PUBLIC_URL} className="w-full">
                <MikesPizzaPreview height={device === "mobile" ? 560 : 580} />
              </BrowserMock>
            </motion.div>
          </Reveal>
        </div>

        {/* Three action cards */}
        <div className="px-4 md:px-10 pb-16 max-w-[1100px] mx-auto">
          <Reveal delay={0.1}>
            <div className="text-center mb-7">
              <div className="mono mb-2">Next</div>
              <h2 className="serif text-[28px] m-0 font-normal">
                Pick what you&apos;d like to do.
              </h2>
            </div>
          </Reveal>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              {
                href: "/auth/sign-up",
                icon: <Sparkles size={18} />,
                eyebrow: "Recommended",
                title: "Save & publish",
                body: "Free for 14 days. No card. Keeps your site online.",
                cta: "Sign up — free",
                accent: true,
              },
              {
                href: "/dashboard/site/mikes/domain",
                icon: <Globe size={18} />,
                eyebrow: "Make it yours",
                title: "Connect a domain",
                body: "Use mikespizza.com instead of the test URL.",
                cta: "Connect domain",
              },
              {
                href: "/dashboard/site/mikes/revisions",
                icon: <Edit size={18} />,
                eyebrow: "Not quite right?",
                title: "Tweak something",
                body: "Just describe it. We’ll redo it in plain English.",
                cta: "Request a change",
              },
            ].map((c, i) => (
              <Reveal key={c.title} delay={0.15 + i * 0.08}>
                <Link
                  href={c.href}
                  className={`card hover-lift block h-full ${
                    c.accent ? "border-[var(--accent)] bg-[var(--accent-soft)]" : ""
                  }`}
                >
                  <div className="eyebrow mb-3">{c.eyebrow}</div>
                  <div
                    className="w-10 h-10 rounded-full flex items-center justify-center mb-4"
                    style={{
                      background: c.accent ? "var(--accent)" : "var(--paper-2)",
                      color: c.accent ? "var(--paper)" : "var(--ink)",
                    }}
                  >
                    {c.icon}
                  </div>
                  <div className="serif text-[20px] mb-2 leading-tight">{c.title}</div>
                  <div className="text-[13px] text-[var(--ink-3)] leading-[1.55] mb-5">
                    {c.body}
                  </div>
                  <div
                    className={`inline-flex items-center gap-1.5 text-[13px] font-medium ${
                      c.accent ? "text-[var(--accent-ink)]" : "text-[var(--ink)]"
                    }`}
                  >
                    {c.cta}
                    <ArrowRight size={13} />
                  </div>
                </Link>
              </Reveal>
            ))}
          </div>

          {/* Footer microcopy */}
          <Reveal delay={0.5}>
            <div className="text-center mt-12 text-[12px] text-[var(--ink-3)]">
              Built by 10 agents · {`{`}
              <span className="mono mx-1.5">Analyst, Writer, Style, Planner, Prompt, Code, Debug, SEO, QA, Mobile</span>
              {`}`}
            </div>
          </Reveal>

          <div className="text-center mt-6">
            <MagneticButton
              href="/auth/sign-up"
              className="btn btn-accent btn-lg"
              strength={0.25}
            >
              <Sparkles size={14} /> Save my site &amp; sign up — free
            </MagneticButton>
          </div>
        </div>
      </div>
    </main>
  );
}
