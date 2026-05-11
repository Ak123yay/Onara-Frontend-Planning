import DashboardShell from "@/components/dashboard/DashboardShell";
import SiteDetailView from "@/components/dashboard/SiteDetailView";
import { MOCK_SITES } from "@/lib/data";
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
      <SiteDetailView site={site} />
    </DashboardShell>
  );
}
