import Link from "next/link";
import DashboardShell from "@/components/dashboard/DashboardShell";
import { StatusDot } from "@/components/primitives/StatusDot";
import { Globe, Edit, ArrowRight } from "@/lib/icons";
import { MOCK_SITES, REVISIONS } from "@/lib/data";
import SitePreview from "@/components/result/SitePreview";
import { notFound } from "next/navigation";

export default async function SiteDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const site = MOCK_SITES.find((s) => s.id === id);
  if (!site) notFound();

  return (
    <DashboardShell>
        <div className="flex items-center justify-between px-8 py-5 border-b border-[var(--rule-2)] flex-wrap gap-4">
          <div className="flex items-center gap-3.5 flex-wrap">
            <Link href="/dashboard" className="mono hover:text-[var(--ink)] transition-colors">
              My sites /
            </Link>
            <span className="serif text-[22px]">{site.name}</span>
            <span
              className="chip chip-soft text-[10px] mono"
              style={{
                borderColor: site.live ? "var(--accent)" : "var(--rule)",
                color: site.live ? "var(--accent-ink)" : "var(--ink-3)",
              }}
            >
              <StatusDot state={site.live ? "on" : "pending"} />
              {site.live ? "live" : "paused"}
            </span>
          </div>
          <div className="flex gap-2.5">
            <Link href={`/dashboard/site/${id}/domain`} className="btn btn-soft btn-sm">
              <Globe size={12} /> {site.custom ?? "Connect domain"}
            </Link>
            <Link href={`/dashboard/site/${id}/revisions`} className="btn btn-sm">
              <Edit size={12} /> Request a revision
            </Link>
          </div>
        </div>

        <div className="flex-1 grid grid-cols-1 lg:grid-cols-[1fr_360px]">
          <div className="p-7 bg-[var(--paper-2)]">
            <div className="flex justify-center gap-1.5 mb-4.5">
              <button className="chip active">Desktop</button>
              <button className="chip">Tablet</button>
              <button className="chip">Mobile</button>
            </div>
            <div className="h-[calc(100vh-200px)] overflow-hidden rounded-xl">
              <SitePreview />
            </div>
          </div>

          <div className="border-l border-[var(--rule-2)] p-6 overflow-auto">
            <div className="mono mb-2">Revision history</div>
            <div className="text-[12px] text-[var(--ink-3)] mb-4">
              Unlimited on Pro · resets monthly
            </div>

            {REVISIONS.map((r) => (
              <div
                key={r.v}
                className="card-tight mb-2 flex items-center gap-3"
                style={{
                  background: r.live ? "var(--accent-soft)" : "var(--paper)",
                  border: "1px solid var(--rule-2)",
                }}
              >
                <span className="mono text-[9px]">{r.v}</span>
                <div className="flex-1 text-[12px]">
                  <div>{r.what}</div>
                  <div className="text-[var(--ink-3)] text-[10px]">{r.when}</div>
                </div>
                {r.live ? (
                  <span
                    className="chip mono text-[9px] py-0.5 px-2"
                    style={{ borderColor: "var(--accent)", color: "var(--accent-ink)" }}
                  >
                    live
                  </span>
                ) : (
                  <ArrowRight size={12} />
                )}
              </div>
            ))}

            <div className="mono mt-5 mb-2">Auto sync from Google</div>
            <div className="card-tight text-[12px]">
              <div className="flex justify-between items-center">
                <span>Hours, phone, photos</span>
                <span
                  className="chip mono text-[9px] py-0.5 px-2"
                  style={{
                    background: "var(--ink)",
                    color: "var(--paper)",
                    borderColor: "var(--ink)",
                  }}
                >
                  on
                </span>
              </div>
              <div className="text-[var(--ink-3)] text-[11px] mt-1.5">
                Last sync: 14h ago · next in 10h
              </div>
            </div>
          </div>
        </div>
    </DashboardShell>
  );
}
