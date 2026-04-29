import BuildHeader from "@/components/nav/BuildHeader";
import SearchInput from "@/components/build/SearchInput";

export default function BuildSearchPage() {
  return (
    <main className="min-h-screen flex flex-col bg-[var(--paper)]">
      <BuildHeader step={1} />
      <div className="flex-1 flex items-start justify-center pt-20 md:pt-32 px-6">
        <div className="w-full max-w-[620px] fade-up">
          <div className="eyebrow text-center mb-4">Step 1 of 4</div>
          <h1 className="serif text-[clamp(32px,5vw,48px)] text-center m-0 mb-3 leading-[1.05]">
            What&apos;s your business called?
          </h1>
          <p className="text-center text-[var(--ink-3)] text-[15px] mb-10">
            We&apos;ll pull everything we need from your Google listing.
          </p>
          <SearchInput />
        </div>
      </div>
    </main>
  );
}
