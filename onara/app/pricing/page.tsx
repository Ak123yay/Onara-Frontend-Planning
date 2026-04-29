import Link from "next/link";
import TopNav from "@/components/nav/TopNav";
import LandingPricing from "@/components/landing/LandingPricing";
import Footer from "@/components/landing/Footer";

export default function PricingPage() {
  return (
    <main className="min-h-screen bg-warm-grad">
      <TopNav />
      <section className="px-6 md:px-12 py-16 md:py-24 text-center">
        <div className="eyebrow mb-4">Pricing</div>
        <h1 className="serif text-[clamp(36px,6vw,68px)] leading-[1.02] tracking-[-0.025em] m-0 max-w-[900px] mx-auto">
          Build for free. <span className="italic text-[var(--accent)]">Pay to publish.</span>
        </h1>
        <p className="mt-5 text-[15px] text-[var(--ink-3)] max-w-[520px] mx-auto leading-[1.55]">
          Every new account starts with 14 days of Pro, no card required. Cancel anytime — your code stays yours.
        </p>
      </section>
      <LandingPricing />
      <section className="px-6 md:px-12 pb-24">
        <div className="card max-w-[920px] mx-auto p-8 md:p-10">
          <div className="serif text-[24px] mb-2">Frequently asked</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-6 mt-6">
            {[
              ["What happens after the 14-day Pro trial?", "You drop to the free tier automatically. Your live URL pauses, but your dashboard preview stays."],
              ["Can I download my code?", "Pro plans include a one-click ZIP export of every site you build."],
              ["Do I have to use a custom domain?", "No — we publish at a free .pages.dev URL by default. Add a custom domain anytime for $10."],
              ["What if my payment fails?", "We retry 3 times over 7 days, then pause the live site. Your data and revision history stay intact."],
            ].map(([q, a]) => (
              <div key={q}>
                <div className="text-[14px] font-medium mb-1">{q}</div>
                <div className="text-[13px] text-[var(--ink-3)] leading-[1.55]">{a}</div>
              </div>
            ))}
          </div>
          <div className="mt-8 flex justify-center">
            <Link href="/build" className="btn btn-accent btn-lg">Start free</Link>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}
