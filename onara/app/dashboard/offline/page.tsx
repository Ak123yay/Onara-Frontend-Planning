import Link from "next/link";
import DashboardShell from "@/components/dashboard/DashboardShell";
import DashHeader from "@/components/dashboard/DashHeader";
import { X, Check } from "@/lib/icons";
import { MOCK_SITES } from "@/lib/data";

export default function OfflinePage() {
  return (
    <DashboardShell trialDaysLeft={0}>
        <div
          className="flex items-center justify-between px-8 py-3.5 flex-wrap gap-3"
          style={{ background: "var(--danger-soft)", borderBottom: "1px solid var(--accent)" }}
        >
          <div className="flex items-center gap-3.5">
            <span style={{ color: "var(--accent-ink)" }}>
              <X size={14} />
            </span>
            <div>
              <div
                className="font-medium text-[13px]"
                style={{ color: "var(--accent-ink)" }}
              >
                Your sites are offline.
              </div>
              <div className="text-[12px] text-[var(--ink-2)]">
                Pro trial ended at 9:42a today. Visitors see a suspension page until you upgrade.
              </div>
            </div>
          </div>
          <Link href="/pricing" className="btn btn-accent btn-sm">
            Restore for $12/mo
          </Link>
        </div>

        <DashHeader sub="Free plan · preview only" title="My sites" />
        <div className="px-8 pb-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 content-start">
          {MOCK_SITES.map((s) => (
            <div
              key={s.id}
              className="card p-0 overflow-hidden bg-[var(--paper)] relative"
            >
              <div
                className="h-[130px] flex items-center justify-center flex-col gap-1 relative"
                style={{
                  backgroundImage:
                    "repeating-linear-gradient(45deg, transparent 0, transparent 5px, var(--ink-4) 5px, var(--ink-4) 6px)",
                }}
              >
                <div
                  className="absolute inset-0 flex items-center justify-center flex-col gap-1"
                  style={{ background: "rgba(244,237,225,0.85)" }}
                >
                  <span style={{ color: "var(--accent-ink)" }}>
                    <X size={18} />
                  </span>
                  <span
                    className="mono"
                    style={{ color: "var(--accent-ink)" }}
                  >
                    Offline
                  </span>
                </div>
              </div>
              <div className="p-4">
                <div className="serif text-[18px]">{s.name}</div>
                <div
                  className="mono mt-1.5 line-through"
                  style={{ color: "var(--ink-4)" }}
                >
                  {s.custom || s.url}
                </div>
                <div className="flex justify-between items-center mt-3.5 pt-3 border-t border-[var(--rule-2)]">
                  <span className="text-[11px]" style={{ color: "var(--accent-ink)" }}>
                    Public URL paused
                  </span>
                  <span className="text-[11px] text-[var(--ink-3)]">Preview only</span>
                </div>
              </div>
              <div className="px-4 pb-4">
                <Link
                  href="/pricing"
                  className="btn btn-accent w-full"
                  style={{ width: "100%" }}
                >
                  Bring it back online
                </Link>
              </div>
            </div>
          ))}

          <div
            className="card p-4.5 flex items-center gap-4 col-span-full"
            style={{ borderColor: "var(--rule)", borderStyle: "solid" }}
          >
            <Check size={14} className="text-[var(--ink-3)]" />
            <div className="flex-1 text-[13px] text-[var(--ink-2)]">
              Your code, content, and revision history are safe in our backup. The moment you upgrade, all 3 sites redeploy automatically — usually under 30 seconds.
            </div>
            <span className="mono">no data lost</span>
          </div>
        </div>
    </DashboardShell>
  );
}
