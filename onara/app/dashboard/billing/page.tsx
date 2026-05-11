import Link from "next/link";
import DashboardShell from "@/components/dashboard/DashboardShell";
import DashHeader from "@/components/dashboard/DashHeader";
import { Check, Sparkles } from "@/lib/icons";

const FEATURES = [
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
            <Sparkles size={12} /> Keep Pro
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
            {FEATURES.map((feature) => (
              <div key={feature} className="flex items-center gap-2.5 text-[13px]">
                <Check size={12} className="text-[var(--accent-ink)]" />
                {feature}
              </div>
            ))}
          </div>

          <div className="mt-7 pt-6 border-t border-[var(--rule-2)]">
            <div className="mono mb-3">Recent invoices</div>
            <div className="space-y-2">
              {[
                ["Apr 5, 2026", "$29.00", "Pro · monthly", "paid"],
                ["Mar 5, 2026", "$29.00", "Pro · monthly", "paid"],
                ["Feb 5, 2026", "$29.00", "Pro · monthly", "paid"],
              ].map(([date, amt, plan, status]) => (
                <div
                  key={date}
                  className="flex items-center gap-4 py-2.5 border-t border-[var(--rule-2)] first:border-t-0 text-[13px]"
                >
                  <span className="mono text-[10px] w-24">{date}</span>
                  <span className="font-medium">{amt}</span>
                  <span className="text-[var(--ink-3)] flex-1">{plan}</span>
                  <span
                    className="chip mono text-[9px] py-0.5 px-2"
                    style={{
                      borderColor: "var(--accent)",
                      color: "var(--accent-ink)",
                    }}
                  >
                    {status}
                  </span>
                </div>
              ))}
            </div>
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
          <div className="mt-5 pt-5 border-t border-[var(--rule-2)]">
            <div className="mono mb-2">Payment method</div>
            <div className="text-[12px] text-[var(--ink-3)]">
              No card on file yet. We&apos;ll never charge without asking.
            </div>
            <button className="btn btn-soft btn-sm mt-3 w-full">Add card</button>
          </div>
        </aside>
      </div>
    </DashboardShell>
  );
}
