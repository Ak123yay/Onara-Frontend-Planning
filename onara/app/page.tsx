import TopNav from "@/components/nav/TopNav";
import Hero from "@/components/landing/Hero";
import HowItWorks from "@/components/landing/HowItWorks";
import Examples from "@/components/landing/Examples";
import Stats from "@/components/landing/Stats";
import CTABanner from "@/components/landing/CTABanner";
import Footer from "@/components/landing/Footer";
import ScrollProgress from "@/components/motion/ScrollProgress";
import CursorFollower from "@/components/motion/CursorFollower";

export default function Home() {
  return (
    <main className="bg-paper-grain min-h-screen">
      <CursorFollower />
      <ScrollProgress />
      <TopNav />
      <Hero />
      <HowItWorks />
      <Examples />
      <Stats />
      <CTABanner />
      <Footer />
    </main>
  );
}
