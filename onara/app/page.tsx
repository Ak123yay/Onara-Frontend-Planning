import TopNav from "@/components/nav/TopNav";
import Hero from "@/components/landing/Hero";
import MarqueeStrip from "@/components/landing/MarqueeStrip";
import Stats from "@/components/landing/Stats";
import HowItWorks from "@/components/landing/HowItWorks";
import AgentReveal from "@/components/landing/AgentReveal";
import LandingPricing from "@/components/landing/LandingPricing";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";
import SmoothScrollProvider from "@/components/motion/SmoothScrollProvider";

export default function Home() {
  return (
    <SmoothScrollProvider>
      <main className="bg-warm-grad min-h-screen">
        <TopNav />
        <Hero />
        <MarqueeStrip />
        <Stats />
        <HowItWorks />
        <AgentReveal />
        <LandingPricing />
        <CTABanner />
        <Footer />
      </main>
    </SmoothScrollProvider>
  );
}
