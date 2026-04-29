import DashboardShell from "@/components/dashboard/DashboardShell";
import DashHeader from "@/components/dashboard/DashHeader";

export default function SettingsPage() {
  return (
    <DashboardShell>
      <DashHeader sub="Account" title="Settings" />

      <div className="px-5 sm:px-8 pb-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
        <section className="card">
          <div className="mono mb-3">Profile</div>
          <label className="block text-[11px] text-[var(--ink-3)] uppercase tracking-wider mb-1.5">
            Name
          </label>
          <input className="input mb-4" defaultValue="Mike Cantelli" />
          <label className="block text-[11px] text-[var(--ink-3)] uppercase tracking-wider mb-1.5">
            Email
          </label>
          <input className="input" defaultValue="mike@mikespizza.com" />
        </section>

        <section className="card">
          <div className="mono mb-3">Notifications</div>
          {["Site published", "Revision complete", "Google listing synced"].map((item) => (
            <label
              key={item}
              className="flex items-center justify-between gap-4 py-3 border-t first:border-t-0 border-[var(--rule-2)] text-[13px]"
            >
              <span>{item}</span>
              <input type="checkbox" defaultChecked className="w-4 h-4 accent-[var(--accent)]" />
            </label>
          ))}
        </section>
      </div>
    </DashboardShell>
  );
}
