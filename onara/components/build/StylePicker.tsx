"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { Check, ArrowLeft, Sparkle } from "@/lib/icons";
import { cn } from "@/lib/utils";

const STYLES = [
  {
    id: "warm",
    label: "Warm & rustic",
    sub: "Earth tones, serif, family-feel",
    colors: ["#5c2818", "#b15a3a", "#f0d9c8", "#faf7f2"],
    fontHero: "Fraunces",
  },
  {
    id: "clean",
    label: "Clean & modern",
    sub: "White space, sans-serif, bright",
    colors: ["#1a1815", "#5b8a5a", "#e8f0e6", "#ffffff"],
    fontHero: "Inter",
  },
  {
    id: "bold",
    label: "Bold & editorial",
    sub: "Big type, high contrast",
    colors: ["#0c0c0c", "#d94a2c", "#f4f1ea", "#ffffff"],
    fontHero: "Fraunces",
  },
  {
    id: "soft",
    label: "Soft & local",
    sub: "Pastels, hand-feel, friendly",
    colors: ["#3a3a52", "#dba374", "#e8e0d0", "#fbf6ee"],
    fontHero: "Fraunces",
  },
];

const VIBES = ["Cozy", "Bright", "Refined", "Playful", "Family", "Date-night", "Lively", "Quiet"];

export default function StylePicker() {
  const router = useRouter();
  const [pick, setPick] = useState("warm");
  const [vibes, setVibes] = useState<string[]>(["Cozy", "Family"]);

  const toggle = (v: string) =>
    setVibes((vs) => (vs.includes(v) ? vs.filter((x) => x !== v) : [...vs, v]));

  return (
    <div className="max-w-[1100px] mx-auto fade-up">
      <div className="eyebrow text-center mb-4">Step 3 of 4</div>
      <h1 className="serif text-[clamp(28px,4vw,40px)] text-center m-0 mb-2">Pick a feel.</h1>
      <p className="text-center text-[var(--ink-3)] text-[14px] mb-10">
        You can change anything later. The agents will use this as a starting point.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
        {STYLES.map((s) => (
          <button
            key={s.id}
            type="button"
            onClick={() => setPick(s.id)}
            className={cn(
              "card text-left p-4 cursor-pointer transition-all duration-150 relative bg-[var(--paper)]",
              pick === s.id ? "border-[var(--ink)] shadow-[0_8px_24px_rgba(0,0,0,0.06)]" : "border-[var(--rule-2)] hover:border-[var(--rule)]",
            )}
            style={{ borderWidth: 1.5 }}
          >
            {pick === s.id && (
              <span className="absolute top-3 right-3 w-5 h-5 rounded-full bg-[var(--ink)] flex items-center justify-center">
                <Check size={11} stroke={2.4} className="text-white" />
              </span>
            )}
            <div
              className="h-[140px] rounded-lg overflow-hidden mb-3.5 border border-[var(--rule-2)]"
              style={{ background: s.colors[3] }}
            >
              <div
                className="h-[70px] p-3 flex items-end"
                style={{ background: s.colors[0] }}
              >
                <span
                  className="text-white text-[16px] leading-none font-medium"
                  style={{
                    fontFamily:
                      s.fontHero === "Fraunces" ? "var(--font-fraunces), serif" : "var(--font-inter), sans-serif",
                  }}
                >
                  Lupita&apos;s
                </span>
              </div>
              <div className="p-2.5">
                <div
                  className="h-1 rounded-sm w-3/5 mb-1.5"
                  style={{ background: s.colors[1] }}
                />
                <div
                  className="h-[3px] rounded-sm w-[90%] mb-1"
                  style={{ background: s.colors[2] }}
                />
                <div
                  className="h-[3px] rounded-sm w-3/4"
                  style={{ background: s.colors[2] }}
                />
              </div>
            </div>
            <div className="text-[14px] font-medium mb-0.5">{s.label}</div>
            <div className="text-[12px] text-[var(--ink-3)]">{s.sub}</div>
            <div className="flex gap-1 mt-2.5">
              {s.colors.map((c) => (
                <div
                  key={c}
                  className="w-3.5 h-3.5 rounded-full border border-[var(--rule-2)]"
                  style={{ background: c }}
                />
              ))}
            </div>
          </button>
        ))}
      </div>

      <div className="bg-[var(--paper-2)] rounded-2xl p-6 mb-8">
        <div className="flex items-center justify-between mb-3.5 flex-wrap gap-2">
          <div>
            <div className="text-[14px] font-medium">
              What&apos;s the vibe?{" "}
              <span className="text-[var(--ink-3)] font-normal">(pick any)</span>
            </div>
            <div className="text-[12px] text-[var(--ink-3)] mt-0.5">
              This shapes the copy our writer agent generates.
            </div>
          </div>
          <span className="mono text-[10px]">{vibes.length} selected</span>
        </div>
        <div className="flex flex-wrap gap-2">
          {VIBES.map((v) => (
            <button
              key={v}
              type="button"
              onClick={() => toggle(v)}
              className={cn("chip", vibes.includes(v) && "active")}
            >
              {v}
            </button>
          ))}
        </div>
      </div>

      <div className="flex justify-between items-center flex-wrap gap-3">
        <Link
          href="/build/confirm"
          className="inline-flex items-center gap-1.5 text-[13px] text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors"
        >
          <ArrowLeft size={13} /> Back
        </Link>
        <button
          type="button"
          onClick={() => router.push("/build/generate")}
          className="btn btn-accent btn-lg"
        >
          Build my site
          <Sparkle size={14} />
        </button>
      </div>
    </div>
  );
}
