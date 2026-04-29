import Link from "next/link";
import DashboardShell from "@/components/dashboard/DashboardShell";
import DashHeader from "@/components/dashboard/DashHeader";
import SiteCard from "@/components/dashboard/SiteCard";
import EmptyState from "@/components/dashboard/EmptyState";
import { Plus } from "@/lib/icons";
import { MOCK_SITES } from "@/lib/data";

export default function DashboardPage({
  searchParams,
}: {
  searchParams?: Promise<{ empty?: string }>;
}) {
  // For demo, allow toggling empty via ?empty=1
  return (
    <DashboardContent searchParams={searchParams} />
  );
}

async function DashboardContent({
  searchParams,
}: {
  searchParams?: Promise<{ empty?: string }>;
}) {
  const params = await searchParams;
  const isEmpty = params?.empty === "1";
  return (
    <DashboardShell>
      {isEmpty ? (
        <>
          <DashHeader sub="Welcome, Mike" title="Let's build your first site." />
          <EmptyState />
        </>
      ) : (
        <>
          <DashHeader
            sub="3 of 3 used · Pro"
            title="My sites"
            action={
              <Link href="/build" className="btn btn-accent btn-sm">
                <Plus size={12} /> New site
              </Link>
            }
          />
          <div className="px-5 sm:px-8 pb-10 grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 content-start">
            {MOCK_SITES.map((s) => (
              <SiteCard key={s.id} site={s} />
            ))}
            <Link
              href="/build"
              className="card border-dashed h-[280px] flex flex-col items-center justify-center gap-2 text-[var(--ink-3)] hover:border-[var(--ink)] transition-colors"
            >
              <Plus size={20} />
              <div className="text-[13px]">Add another site</div>
              <div className="mono">Pro · 3 / 3 used</div>
            </Link>
          </div>
        </>
      )}
    </DashboardShell>
  );
}
