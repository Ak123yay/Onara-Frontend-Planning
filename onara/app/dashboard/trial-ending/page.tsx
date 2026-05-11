import Link from "next/link";
import DashboardShell from "@/components/dashboard/DashboardShell";
import DashHeader from "@/components/dashboard/DashHeader";
import SiteCard from "@/components/dashboard/SiteCard";
import { Sparkles } from "@/lib/icons";
import { MOCK_SITES } from "@/lib/data";

export default function TrialEndingPage() {
  return (
    <DashboardShell trialDaysLeft={1}>
      <div
        className="flex items-center justify-between px-8 py-3.5 flex-wrap gap-3"
        style={{
          background: "var(--warn-soft)",
          borderBottom: "1px solid var(--accent)",
        }}
      >
        <div className="flex items-center gap-3">
          <span style={{ color: "var(--accent-ink)" }}>
            <Sparkles size={14} />
          </span>
          <div>
            <div
              className="font-medium text-[13px]"
              style={{ color: "var(--accent-ink)" }}
            >
              Your Pro trial ends tomorrow.
            </div>
            <div className="text-[12px] text-[var(--ink-2)]">
              Your live URL{" "}
              <span className="mono lowercase">mikespizza.com</span> goes offline at
              9:42a tomorrow unless you upgrade.
            </div>
          </div>
        </div>
        <Link href="/pricing" className="btn btn-accent btn-sm">
          Keep Pro · $29/mo
        </Link>
      </div>

      <DashHeader sub="1 day left of Pro" title="Your sites" />
      <div className="px-8 pb-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 content-start">
        {MOCK_SITES.map((s) => (
          <SiteCard key={s.id} site={{ ...s, live: true, danger: true }} />
        ))}
      </div>
    </DashboardShell>
  );
}
