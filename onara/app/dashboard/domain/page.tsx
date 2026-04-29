import Link from "next/link";
import DashboardShell from "@/components/dashboard/DashboardShell";
import DashHeader from "@/components/dashboard/DashHeader";
import { Globe, ArrowRight } from "@/lib/icons";
import { MOCK_SITES } from "@/lib/data";

export default function DomainsPage() {
  return (
    <DashboardShell>
      <DashHeader sub="Account" title="Domains" />

      <div className="px-5 sm:px-8 pb-10">
        <div className="card p-0 overflow-hidden">
          {MOCK_SITES.map((site, index) => (
            <Link
              key={site.id}
              href={`/dashboard/site/${site.id}/domain`}
              className={`flex items-center gap-4 p-4 hover:bg-[var(--paper-2)] transition-colors ${
                index ? "border-t border-[var(--rule-2)]" : ""
              }`}
            >
              <span className="w-9 h-9 rounded-full bg-[var(--paper-2)] flex items-center justify-center text-[var(--ink-3)]">
                <Globe size={15} />
              </span>
              <div className="flex-1 min-w-0">
                <div className="text-[13px] font-medium">{site.custom ?? site.url}</div>
                <div className="text-[11px] text-[var(--ink-3)]">
                  {site.name} · {site.custom ? "connected" : "free pages.dev domain"}
                </div>
              </div>
              <ArrowRight size={13} className="text-[var(--ink-3)]" />
            </Link>
          ))}
        </div>
      </div>
    </DashboardShell>
  );
}
