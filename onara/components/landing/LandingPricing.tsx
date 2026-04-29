import Link from "next/link";
import Reveal from "@/components/motion/Reveal";
import { Check } from "@/lib/icons";

const TIERS = [
  {
    tier: "Free",
    price: "$0",
    sub: "forever",
    items: ["1 site · preview only", "3 revisions / month", "Onara branding"],
    cta: "Start free",
    href: "/build",
  },
  {
    tier: "Starter",
    price: "$12",
    sub: "per month",
    items: ["1 live site", "10 revisions / month", "Custom domain", "No Onara branding"],
    cta: "Pick Starter",
    href: "/pricing",
    highlight: true,
  },
  {
    tier: "Pro",
    price: "$29",
    sub: "per month",
    items: ["3 live sites", "Unlimited revisions", "Code download", "Priority queue"],
    cta: "Go Pro",
    href: "/pricing",
  },
];

export default function LandingPricing() {
  return (
    <section id="pricing" className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto text-center">
        <Reveal>
          <div className="eyebrow mb-4">Pricing</div>
          <h2 className="serif text-[clamp(34px,5vw,56px)] leading-[1.05] tracking-[-0.025em] m-0">
            Build for free. <span className="italic text-[var(--accent)]">Pay to publish.</span>
          </h2>
          <p className="mt-4 text-[15px] text-[var(--ink-3)]">
            Every new account starts with 14 days of Pro, no card.
          </p>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-5">
          {TIERS.map((p, i) => (
            <Reveal key={p.tier} delay={i * 0.08}>
              <div
                className="card p-7 text-left h-full relative"
                style={{ background: p.highlight ? "var(--accent-soft)" : "var(--paper)" }}
              >
                {p.highlight && (
                  <span className="chip chip-accent absolute -top-3 left-6">most popular</span>
                )}
                <div className="mono">{p.tier}</div>
                <div className="flex items-baseline gap-1.5 mt-3">
                  <span className="serif text-[44px] tracking-[-0.02em] leading-none">{p.price}</span>
                  <span className="text-[12px] text-[var(--ink-3)]">{p.sub}</span>
                </div>
                <div className="my-5 squiggle-thin" />
                <div className="flex flex-col gap-2.5">
                  {p.items.map((it) => (
                    <div key={it} className="flex items-center gap-2 text-[13px]">
                      <Check size={11} stroke={2} />
                      <span>{it}</span>
                    </div>
                  ))}
                </div>
                <Link
                  href={p.href}
                  className={`btn ${p.highlight ? "btn-accent" : ""} w-full mt-6`}
                  style={{ width: "100%" }}
                >
                  {p.cta}
                </Link>
              </div>
            </Reveal>
          ))}
        </div>

        <div className="mt-10 text-[12px] text-[var(--ink-3)]">
          Year of Starter for $99 · custom domain $10 add-on · human revision $20
        </div>
      </div>
    </section>
  );
}
