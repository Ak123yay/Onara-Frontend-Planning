import Link from "next/link";
import DashboardShell from "@/components/dashboard/DashboardShell";
import DashHeader from "@/components/dashboard/DashHeader";
import { Check, Sparkle } from "@/lib/icons";

const features = [
  "3 live sites included",
  "Unlimited revisions",
  "Custom domains",
  "ZIP export for every site",
];

export default function BillingPage() {
  return (
    <DashboardShell>
      <DashHeader
        sub="Plan & billing"
        title="Pro trial"
        action={
          <Link href="/pricing" className="btn btn-accent btn-sm">
            <Sparkle size={12} /> Keep Pro
          </Link>
        }
      />

      <div className="px-5 sm:px-8 pb-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6">
        <section className="card">
          <div className="flex items-start justify-between gap-4 flex-wrap">
            <div>
              <div className="mono mb-2">Current plan</div>
              <h2 className="serif text-[32px] leading-none m-0">Pro trial</h2>
              <p className="text-[13px] text-[var(--ink-3)] mt-3 max-w-[520px] leading-[1.55]">
                Your trial has 11 days left. Keep Pro to preserve live publishing, custom domains, and unlimited revisions.
              </p>
            </div>
            <span className="chip chip-accent">11 days left</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-7">
            {features.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5 text-[13px]">
                <Check size={12} className="text-[var(--accent-ink)]" />
                {feature}
              </div>
            ))}
          </div>
        </section>

        <aside className="card h-fit">
          <div className="mono mb-3">Next step</div>
          <div className="text-[13px] leading-[1.55] text-[var(--ink-2)]">
            Add a payment method before the trial ends to keep all published sites online.
          </div>
          <Link href="/pricing" className="btn btn-accent w-full mt-5">
            View plans
          </Link>
        </aside>
      </div>
    </DashboardShell>
  );
}
