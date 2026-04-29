import Reveal from "@/components/motion/Reveal";
import { SearchIcon, Sparkle, Globe } from "@/lib/icons";

const STEPS = [
  {
    n: "01",
    icon: SearchIcon,
    title: "Type your business name",
    body: "We pull your hours, address, photos, menu, and reviews from Google in seconds.",
  },
  {
    n: "02",
    icon: Sparkle,
    title: "10 agents go to work",
    body: "Watch them read, draft, design, and code. About 90 seconds, no decisions required.",
  },
  {
    n: "03",
    icon: Globe,
    title: "Publish or revise",
    body: "Live URL ready to share, or describe a change and we redo only what matters.",
  },
];

export default function HowItWorks() {
  return (
    <section id="how" className="px-6 md:px-12 py-20 md:py-28">
      <div className="max-w-[1200px] mx-auto">
        <Reveal>
          <div className="eyebrow mb-4">For owners, not builders</div>
          <h2 className="serif text-[clamp(34px,5vw,60px)] leading-[1.05] tracking-[-0.025em] max-w-[760px] m-0">
            Three steps. <span className="italic text-[var(--accent)]">Zero busywork.</span>
          </h2>
        </Reveal>

        <div className="mt-14 grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
          {STEPS.map((s, i) => {
            const Icon = s.icon;
            return (
              <Reveal key={s.n} delay={i * 0.1}>
                <div className="card h-full p-7 hover:shadow-[0_24px_40px_-20px_rgba(0,0,0,0.10)] transition-shadow duration-300">
                  <div className="flex items-center gap-3 mb-7">
                    <div className="w-11 h-11 rounded-full bg-[var(--accent-soft)] flex items-center justify-center text-[var(--accent-ink)]">
                      <Icon size={18} />
                    </div>
                    <span className="mono">{s.n}</span>
                  </div>
                  <h3 className="serif text-[24px] m-0 leading-[1.2]">{s.title}</h3>
                  <p className="mt-4 text-[14px] text-[var(--ink-2)] leading-[1.6]">{s.body}</p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
