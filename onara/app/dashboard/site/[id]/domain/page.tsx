import Link from "next/link";
import DashboardShell from "@/components/dashboard/DashboardShell";
import DashHeader from "@/components/dashboard/DashHeader";
import { Check, Copy, Mail } from "@/lib/icons";
import { StatusDot } from "@/components/primitives/StatusDot";

export default async function DomainPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  return (
    <DashboardShell>
        <DashHeader
          sub={`Domains · ${id}`}
          title="Connect a custom domain"
          action={
            <Link
              href={`/dashboard/site/${id}`}
              className="text-[12px] text-[var(--ink-3)] hover:text-[var(--ink)] transition-colors"
            >
              ← back to site
            </Link>
          }
        />

        <div className="flex-1 px-8 pb-10 grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8">
          <div>
            <div className="card mb-3.5">
              <div className="mono mb-2.5">1 · Your domain</div>
              <input className="input" defaultValue="lupitastacos.com" />
              <div className="flex items-center gap-2 mt-2.5 text-[12px] text-[var(--ink-3)]">
                <span style={{ color: "var(--accent)" }}>
                  <Check size={11} />
                </span>
                Domain available · we&apos;ll point it at Cloudflare Pages
              </div>
            </div>

            <div className="card mb-3.5">
              <div className="mono mb-2.5">
                2 · Add these DNS records at your registrar
              </div>
              <div className="card-tight" style={{ background: "var(--paper-2)" }}>
                <div
                  className="grid mono text-[10px] py-1.5 border-b border-[var(--rule)]"
                  style={{ gridTemplateColumns: "60px 1fr 1.5fr 60px", gap: 10 }}
                >
                  <span>TYPE</span>
                  <span>NAME</span>
                  <span>VALUE</span>
                  <span>TTL</span>
                </div>
                <div
                  className="grid mono text-[11px] py-1.5"
                  style={{ gridTemplateColumns: "60px 1fr 1.5fr 60px", gap: 10, color: "var(--ink)" }}
                >
                  <span>CNAME</span>
                  <span>@</span>
                  <span>{id}.pages.dev</span>
                  <span>auto</span>
                </div>
                <div
                  className="grid mono text-[11px]"
                  style={{ gridTemplateColumns: "60px 1fr 1.5fr 60px", gap: 10, color: "var(--ink)" }}
                >
                  <span>CNAME</span>
                  <span>www</span>
                  <span>{id}.pages.dev</span>
                  <span>auto</span>
                </div>
              </div>
              <div className="flex gap-2.5 mt-3">
                <button className="btn btn-soft btn-sm">
                  <Copy size={12} /> Copy records
                </button>
                <button className="btn btn-soft btn-sm">
                  <Mail size={12} /> Email instructions
                </button>
              </div>
            </div>

            <div className="card">
              <div className="mono mb-2.5">3 · Verify</div>
              <div className="flex items-center gap-3 flex-wrap">
                <StatusDot state="on" />
                <div className="flex-1">
                  <div className="text-[13px]">Checking DNS propagation…</div>
                  <div className="text-[11px] text-[var(--ink-3)]">
                    Usually under 15 minutes. We&apos;ll email when it&apos;s live.
                  </div>
                </div>
                <button className="btn btn-sm">Verify now</button>
              </div>
            </div>
          </div>

          <div
            className="rounded-2xl p-5"
            style={{
              background: "var(--paper-2)",
              borderLeft: "1px solid var(--rule-2)",
            }}
          >
            <div className="mono mb-2.5">What happens</div>
            <ol className="m-0 pl-5 text-[12px] leading-[1.7] text-[var(--ink-2)] list-decimal">
              <li>You add 2 CNAME records at GoDaddy / Namecheap / wherever you bought the domain</li>
              <li>Cloudflare verifies ownership (usually &lt; 15 min)</li>
              <li>SSL provisioned automatically</li>
              <li>Your site goes live at lupitastacos.com</li>
            </ol>
            <div className="mono mt-5 mb-2">Cost</div>
            <div className="text-[12px]">$10 one-time add-on · already paid</div>
            <div className="mono mt-5 mb-2">Don&apos;t have a domain?</div>
            <div className="text-[12px] text-[var(--ink-3)] leading-[1.5]">
              We&apos;ll keep publishing at{" "}
              <span className="mono lowercase text-[11px]">{id}.pages.dev</span> until you connect one.
            </div>
          </div>
        </div>
    </DashboardShell>
  );
}
