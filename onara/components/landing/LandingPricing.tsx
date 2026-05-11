"use client";

import { useState } from "react";
import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { Check } from "@/lib/icons";
import { cn } from "@/lib/utils";

type Tier = {
  tier: string;
  monthly: string;
  yearly: string;
  sub: string;
  items: string[];
  cta: string;
  href: string;
  highlight?: boolean;
  muted?: boolean;
};

const TIERS: Tier[] = [
  {
    tier: "Free",
    monthly: "$0",
    yearly: "$0",
    sub: "forever",
    items: [
      "1 site · preview only",
      "3 revisions / month",
      "Onara branding in footer",
      "Dashboard access",
    ],
    cta: "Start free",
    href: "/build",
    muted: true,
  },
  {
    tier: "Starter",
    monthly: "$12",
    yearly: "$10",
    sub: "/month",
    items: [
      "1 live site",
      "10 revisions / month",
      "Custom domain",
      "No Onara branding",
    ],
    cta: "Pick Starter",
    href: "/auth/sign-up",
    highlight: true,
  },
  {
    tier: "Pro",
    monthly: "$29",
    yearly: "$24",
    sub: "/month",
    items: [
      "3 live sites",
      "Unlimited revisions",
      "Code download",
      "Priority queue",
    ],
    cta: "Go Pro",
    href: "/auth/sign-up",
  },
];

export default function LandingPricing({
  centered = true,
  showHeader = true,
}: {
  centered?: boolean;
  showHeader?: boolean;
}) {
  const [billing, setBilling] = useState<"monthly" | "yearly">("monthly");

  return (
    <section id="pricing" className="px-6 md:px-12 py-16 md:py-20">
      <div className={cn("max-w-[1200px] mx-auto", centered && "text-center")}>
        {showHeader && (
          <Reveal>
            <div className="eyebrow mb-3">Pricing</div>
            <h2 className="serif text-[clamp(34px,5vw,60px)] leading-[1.05] tracking-[-0.025em] m-0">
              One plan. <span className="italic">Honest pricing.</span>
            </h2>
            <p className="mt-4 text-[15px] text-[var(--ink-3)] max-w-[520px] mx-auto">
              Less than a Saturday-night pizza. Cancel anytime — your site stays online.
            </p>
          </Reveal>
        )}

        <div className="mt-8 mb-10 inline-flex items-center justify-center gap-1 p-1 rounded-full border border-[var(--rule-2)] bg-[var(--paper-2)]">
          <button
            type="button"
            onClick={() => setBilling("monthly")}
            className={cn(
              "px-4 py-1.5 text-[13px] rounded-full transition-colors",
              billing === "monthly" ? "bg-[var(--ink)] text-[var(--paper)]" : "text-[var(--ink-3)]",
            )}
          >
            Monthly
          </button>
          <button
            type="button"
            onClick={() => setBilling("yearly")}
            className={cn(
              "px-4 py-1.5 text-[13px] rounded-full transition-colors",
              billing === "yearly" ? "bg-[var(--ink)] text-[var(--paper)]" : "text-[var(--ink-3)]",
            )}
          >
            Yearly · save 20%
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 items-stretch text-left">
          {TIERS.map((p, i) => {
            const price = billing === "monthly" ? p.monthly : p.yearly;
            return (
              <Reveal key={p.tier} delay={i * 0.08}>
                <div
                  className="card p-7 relative h-full flex flex-col"
                  style={{
                    background: p.highlight ? "var(--ink)" : "var(--paper)",
                    color: p.highlight ? "var(--paper)" : "var(--ink)",
                    borderColor: p.highlight ? "transparent" : "var(--rule-2)",
                    boxShadow: p.highlight ? "0 30px 80px rgba(0,0,0,0.18)" : undefined,
                  }}
                >
                  {p.highlight && (
                    <span
                      className="absolute -top-3 left-7 px-2.5 py-1 rounded-full text-[10px] font-medium tracking-[0.08em] uppercase"
                      style={{
                        background: "var(--accent)",
                        color: "white",
                        fontFamily: "var(--font-jetbrains), monospace",
                      }}
                    >
                      Most chosen
                    </span>
                  )}
                  <div className="mono" style={{ color: p.highlight ? "var(--accent-soft)" : "var(--ink-3)" }}>
                    {p.tier}
                  </div>
                  <div className="flex items-baseline gap-1.5 mt-3">
                    <span
                      className="serif font-medium"
                      style={{ fontSize: 56, letterSpacing: "-0.03em", lineHeight: 1 }}
                    >
                      {price}
                    </span>
                    <span
                      className="text-[13px]"
                      style={{ color: p.highlight ? "rgba(250,247,242,0.6)" : "var(--ink-3)" }}
                    >
                      {p.sub}
                    </span>
                  </div>
                  <div className="my-5 squiggle-thin" />
                  <ul className="m-0 p-0 list-none flex flex-col gap-2.5 flex-1">
                    {p.items.map((it) => (
                      <li key={it} className="flex items-start gap-2.5 text-[13.5px]">
                        <Check
                          size={14}
                          stroke={2.2}
                          style={{ color: p.highlight ? "var(--accent-2)" : "var(--accent-ink)" }}
                        />
                        <span style={{ color: p.highlight ? "var(--paper)" : "var(--ink-2)" }}>{it}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={p.href}
                    className={cn(
                      "btn w-full mt-6",
                      p.highlight ? "btn-accent" : p.muted ? "btn-ghost" : "btn-soft",
                    )}
                    style={{ width: "100%" }}
                  >
                    {p.cta}
                  </Link>
                </div>
              </Reveal>
            );
          })}
        </div>

        <div className="mt-10 text-[12px] text-[var(--ink-3)]">
          Year of Starter for $99 · custom domain $10 add-on · human revision $20
        </div>
      </div>
    </section>
  );
}
