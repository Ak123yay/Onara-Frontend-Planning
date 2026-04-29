import Link from "next/link";
import DashboardShell from "@/components/dashboard/DashboardShell";
import DashHeader from "@/components/dashboard/DashHeader";
import { Edit, ArrowRight } from "@/lib/icons";
import { MOCK_SITES, REVISIONS } from "@/lib/data";

export default function RevisionsOverviewPage() {
  return (
    <DashboardShell>
      <DashHeader
        sub="Across all sites"
        title="Revisions"
        action={
          <Link href="/dashboard/site/lupitas/revisions" className="btn btn-accent btn-sm">
            <Edit size={12} /> Request a revision
          </Link>
        }
      />

      <div className="px-5 sm:px-8 pb-10 grid grid-cols-1 xl:grid-cols-[1fr_320px] gap-6">
        <div className="card p-0 overflow-hidden">
          {REVISIONS.map((revision, index) => (
            <Link
              key={revision.v}
              href="/dashboard/site/lupitas/revisions"
              className={`flex items-center gap-4 p-4 hover:bg-[var(--paper-2)] transition-colors ${
                index ? "border-t border-[var(--rule-2)]" : ""
              }`}
            >
              <span className="mono text-[9px]">{revision.v}</span>
              <div className="flex-1 min-w-0">
                <div className="text-[13px]">{revision.what}</div>
                <div className="text-[11px] text-[var(--ink-3)]">
                  Lupita&apos;s Tacos · {revision.when}
                </div>
              </div>
              <ArrowRight size={13} className="text-[var(--ink-3)]" />
            </Link>
          ))}
        </div>

        <div className="card h-fit">
          <div className="mono mb-3">Monthly allowance</div>
          <div className="serif text-[28px] leading-none">7 / unlimited</div>
          <p className="text-[12px] text-[var(--ink-3)] leading-[1.55] mt-3 mb-5">
            Pro keeps unlimited plain-English revisions. Starter includes 10 changes each billing cycle.
          </p>
          <div className="space-y-2">
            {MOCK_SITES.map((site) => (
              <Link
                key={site.id}
                href={`/dashboard/site/${site.id}/revisions`}
                className="flex items-center justify-between text-[12px] py-2 border-t border-[var(--rule-2)]"
              >
                <span>{site.name}</span>
                <span className="text-[var(--ink-3)]">{site.rev}</span>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </DashboardShell>
  );
}
