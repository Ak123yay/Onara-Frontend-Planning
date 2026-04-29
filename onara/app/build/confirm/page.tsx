import BuildHeader from "@/components/nav/BuildHeader";
import ConfirmCard from "@/components/build/ConfirmCard";

export default function ConfirmPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--paper)]">
      <BuildHeader step={2} />
      <div className="flex-1 flex items-center justify-center px-6 py-10">
        <ConfirmCard />
      </div>
    </main>
  );
}
