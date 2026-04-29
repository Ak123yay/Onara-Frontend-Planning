import Marquee from "@/components/motion/Marquee";

const businesses = [
  "Lupita's Tacos · East LA",
  "Mike's Pizza · Austin",
  "Bloom Florist · Brooklyn",
  "Cedar Plumbing · Denver",
  "The Daily Bean · Portland",
  "Saffron Thai · Chicago",
  "Penny's Diner · Nashville",
  "North Roastery · Seattle",
];

export default function MarqueeStrip() {
  return (
    <section className="border-y border-[var(--rule-2)] bg-[var(--paper-2)]/40 py-7">
      <div className="mono text-center mb-5">As used by</div>
      <Marquee speed={70}>
        {businesses.map((b) => (
          <span
            key={b}
            className="serif text-[28px] md:text-[34px] italic text-[var(--ink-3)] whitespace-nowrap"
          >
            {b}
            <span className="mx-7 text-[var(--accent)] not-italic">✦</span>
          </span>
        ))}
      </Marquee>
    </section>
  );
}
