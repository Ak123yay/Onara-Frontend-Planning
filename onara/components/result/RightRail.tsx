import Link from "next/link";
import { Check, ArrowRight, Edit } from "@/lib/icons";

const FEATURES: [string, string][] = [
  ["Custom design", "Built for your brand, not a template"],
  ["SEO + schema", "Google can read every section"],
  ["Mobile polish", "Every page tested at phone size"],
  ["Unlimited revisions", "Just describe what to change"],
];

export default function RightRail() {
  return (
    <aside className="flex flex-col gap-3">
      <div className="card">
        <div className="flex items-center gap-2 mb-3.5">
          <span
            className="w-7 h-7 rounded-full flex items-center justify-center"
            style={{ background: "var(--accent-soft)", color: "var(--accent-ink)" }}
          >
            <Check size={13} stroke={2.4} />
          </span>
          <div className="serif text-[18px]">Your site is ready</div>
        </div>
        <div className="text-[12px] text-[var(--ink-3)] leading-[1.55] mb-3.5">
          Built in 1m 27s · 6 sections · 12 photos used · 3 reviews featured
        </div>
        <Link
          href="/auth/sign-up"
          className="btn btn-accent w-full"
          style={{ width: "100%" }}
        >
          Save &amp; publish — free
          <ArrowRight size={13} />
        </Link>
        <div className="text-[11px] text-[var(--ink-3)] text-center mt-2.5">
          Free for 14 days. No card required.
        </div>
      </div>

      <div className="card">
        <div className="mono mb-3">What&apos;s included</div>
        <div className="flex flex-col gap-2.5">
          {FEATURES.map(([t, d]) => (
            <div key={t} className="flex gap-2.5">
              <Check size={14} stroke={2} className="text-[var(--accent)] mt-0.5" />
              <div>
                <div className="text-[12px] font-medium">{t}</div>
                <div className="text-[11px] text-[var(--ink-3)]">{d}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <Link
        href="/dashboard/site/mikes/revisions"
        className="btn btn-ghost text-[12px] text-[var(--ink-3)] py-2.5"
      >
        <Edit size={12} />
        Not quite right? Request changes
      </Link>
    </aside>
  );
}
