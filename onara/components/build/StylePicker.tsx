"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";
import Reveal from "@/components/motion/Reveal";
import { ArrowLeft, Sparkle, Check } from "@/lib/icons";
import { cn } from "@/lib/utils";

const TONES = ["Professional", "Friendly", "Bold", "Minimal", "Luxurious"];

const COLORS = [
  { name: "Auto", swatches: ["#999999", "#cccccc", "#eeeeee"] },
  { name: "Warm", swatches: ["#b15a3a", "#e6c19c", "#f7ede0"] },
  { name: "Cool", swatches: ["#2a3b5c", "#7e94b4", "#dce5f0"] },
  { name: "Earthy", swatches: ["#3e4b2c", "#94a36b", "#e7e3cf"] },
  { name: "Mono", swatches: ["#1a1a1a", "#6a6a6a", "#e3e3dc"] },
];

const DENSITY = [
  { name: "Airy", lines: 3, gap: 8 },
  { name: "Balanced", lines: 4, gap: 5 },
  { name: "Dense", lines: 5, gap: 3 },
];

export default function StylePicker() {
  const router = useRouter();
  const [tone, setTone] = useState("Friendly");
  const [color, setColor] = useState("Warm");
  const [density, setDensity] = useState("Balanced");
  const [extra, setExtra] = useState("");

  return (
    <div className="max-w-[760px] mx-auto">
      <Reveal>
        <div className="text-center mb-10">
          <div className="eyebrow mb-3">Step 3 of 4 · Style preferences · all optional</div>
          <h1 className="serif text-[clamp(32px,4.5vw,48px)] leading-[1.05] m-0 font-normal">
            How should it <span className="italic">feel</span>?
          </h1>
          <p className="text-[14px] text-[var(--ink-3)] mt-3 max-w-[460px] mx-auto">
            Skip and we&apos;ll use smart defaults for a pizzeria.
          </p>
        </div>
      </Reveal>

      <Reveal delay={0.1}>
        <div className="card mb-4">
          <div className="mono mb-3">Tone</div>
          <div className="flex flex-wrap gap-2">
            {TONES.map((t) => (
              <motion.button
                key={t}
                type="button"
                onClick={() => setTone(t)}
                whileTap={{ scale: 0.96 }}
                className={cn("chip", tone === t && "active")}
              >
                {t}
              </motion.button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.15}>
        <div className="card mb-4">
          <div className="mono mb-4">Color direction</div>
          <div className="grid grid-cols-2 sm:grid-cols-5 gap-3">
            {COLORS.map((c) => (
              <motion.button
                key={c.name}
                type="button"
                onClick={() => setColor(c.name)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "p-3 rounded-2xl text-left transition-all relative",
                  color === c.name
                    ? "bg-[var(--accent-soft)]"
                    : "bg-[var(--paper)] hover:bg-[var(--paper-2)]",
                )}
                style={{
                  border:
                    color === c.name
                      ? "1.5px solid var(--accent)"
                      : "1.5px solid var(--rule-2)",
                }}
              >
                {color === c.name && (
                  <motion.span
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 400, damping: 18 }}
                    className="absolute top-2 right-2 w-4 h-4 rounded-full flex items-center justify-center text-white"
                    style={{ background: "var(--accent)" }}
                  >
                    <Check size={9} stroke={3} />
                  </motion.span>
                )}
                <div className="flex gap-1 mb-2">
                  {c.swatches.map((s, i) => (
                    <div
                      key={i}
                      className="flex-1 h-7 rounded-md"
                      style={{
                        background: s,
                        border: "1px solid rgba(0,0,0,0.08)",
                      }}
                    />
                  ))}
                </div>
                <div className="mono text-[10px]">{c.name}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.2}>
        <div className="card mb-4">
          <div className="mono mb-4">Layout density</div>
          <div className="grid grid-cols-3 gap-3">
            {DENSITY.map((d) => (
              <motion.button
                key={d.name}
                type="button"
                onClick={() => setDensity(d.name)}
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.97 }}
                className={cn(
                  "p-3 rounded-2xl text-left transition-all relative",
                  density === d.name
                    ? "bg-[var(--accent-soft)]"
                    : "bg-[var(--paper)] hover:bg-[var(--paper-2)]",
                )}
                style={{
                  border:
                    density === d.name
                      ? "1.5px solid var(--accent)"
                      : "1.5px solid var(--rule-2)",
                }}
              >
                <div className="flex flex-col mb-2" style={{ gap: d.gap }}>
                  {Array.from({ length: d.lines }).map((_, j) => (
                    <div
                      key={j}
                      className="h-1 rounded-full"
                      style={{ background: "rgba(26,24,21,0.18)" }}
                    />
                  ))}
                </div>
                <div className="mono text-[10px]">{d.name}</div>
              </motion.button>
            ))}
          </div>
        </div>
      </Reveal>

      <Reveal delay={0.25}>
        <div className="card mb-7">
          <div className="flex items-baseline justify-between mb-2">
            <div className="mono">Anything else?</div>
            <div className="mono text-[var(--ink-4)]">{extra.length}/500</div>
          </div>
          <textarea
            className="input"
            rows={4}
            value={extra}
            maxLength={500}
            onChange={(e) => setExtra(e.target.value)}
            placeholder="e.g. We do delivery til midnight on weekends. Brand colors are red and white. Mention our family-owned story."
          />
        </div>
      </Reveal>

      <Reveal delay={0.3}>
        <div className="flex justify-between items-center flex-wrap gap-3">
          <Link
            href="/build/confirm"
            className="inline-flex items-center gap-1.5 text-[13px] text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors"
          >
            <ArrowLeft size={13} /> Back
          </Link>
          <span className="text-[12px] text-[var(--ink-3)] hidden md:inline">
            3 revisions / mo on free · resets May 1
          </span>
          <motion.button
            type="button"
            onClick={() => router.push("/build/generate")}
            className="btn btn-accent btn-lg"
            whileHover={{ scale: 1.02, boxShadow: "0 14px 32px -10px rgba(177,90,58,0.65)" }}
            whileTap={{ scale: 0.98 }}
          >
            <Sparkle size={14} /> Generate my site
          </motion.button>
        </div>
      </Reveal>
    </div>
  );
}
