import type { ReactNode } from "react";
import Sidebar from "@/components/nav/Sidebar";

export default function DashboardShell({
  children,
  trialDaysLeft,
}: {
  children: ReactNode;
  trialDaysLeft?: number;
}) {
  return (
    <main className="min-h-screen flex bg-[var(--paper)] pt-16 lg:pt-0">
      <Sidebar trialDaysLeft={trialDaysLeft} />
      <div className="flex-1 flex flex-col min-w-0">{children}</div>
    </main>
  );
}
