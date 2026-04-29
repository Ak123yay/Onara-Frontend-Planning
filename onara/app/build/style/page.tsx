import BuildHeader from "@/components/nav/BuildHeader";
import StylePicker from "@/components/build/StylePicker";

export default function StylePage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--paper)]">
      <BuildHeader step={3} />
      <div className="flex-1 px-6 py-10 md:px-12">
        <StylePicker />
      </div>
    </main>
  );
}
