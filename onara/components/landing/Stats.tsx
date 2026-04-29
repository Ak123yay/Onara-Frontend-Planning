import Counter from "@/components/motion/Counter";
import Reveal from "@/components/motion/Reveal";

export default function Stats() {
  return (
    <section className="px-6 md:px-12 py-20">
      <div className="max-w-[1100px] mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-16">
        <Reveal delay={0}>
          <Stat number={<Counter to={2400} suffix="+" />} label="Sites built" />
        </Reveal>
        <Reveal delay={0.1}>
          <Stat number={<Counter to={92} suffix="s" />} label="Median build time" />
        </Reveal>
        <Reveal delay={0.2}>
          <Stat number={<Counter to={4.9} decimals={1} suffix="★" />} label="From owners" />
        </Reveal>
      </div>
    </section>
  );
}

function Stat({ number, label }: { number: React.ReactNode; label: string }) {
  return (
    <div className="border-t border-[var(--rule-2)] pt-7">
      <div className="serif text-[64px] md:text-[80px] leading-[0.95] tracking-[-0.03em]">
        {number}
      </div>
      <div className="mt-3 text-[13px] text-[var(--ink-3)] tracking-wide">{label}</div>
    </div>
  );
}
