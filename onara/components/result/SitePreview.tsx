export default function SitePreview() {
  return (
    <div
      className="bg-white rounded-xl overflow-hidden flex flex-col"
      style={{ boxShadow: "0 16px 48px rgba(0,0,0,0.1)" }}
    >
      <div className="chrome">
        <div className="chrome-dots">
          <span className="chrome-dot" />
          <span className="chrome-dot" />
          <span className="chrome-dot" />
        </div>
        <div className="chrome-url">lupitastacos.onara.site</div>
      </div>
      <div className="flex-1 overflow-auto">
        {/* Hero */}
        <div
          className="relative p-9 flex flex-col justify-between text-white"
          style={{
            height: 320,
            background: "linear-gradient(135deg, #2a1810 0%, #5c2818 100%)",
          }}
        >
          <div className="flex justify-between text-[12px] opacity-85">
            <span className="serif text-[17px] font-medium">Lupita&apos;s</span>
            <div className="hidden sm:flex gap-4">
              <span>Menu</span>
              <span>Story</span>
              <span>Visit</span>
              <span>Order</span>
            </div>
          </div>
          <div>
            <div
              className="mono text-white/70 mb-3.5"
              style={{ letterSpacing: "0.15em", fontSize: 10 }}
            >
              SINCE 1995 · EAST LA · FAMILY-RUN
            </div>
            <h1 className="serif text-[clamp(40px,6vw,64px)] leading-[0.95] m-0 font-medium">
              Lupita&apos;s Tacos
            </h1>
            <div className="text-[16px] opacity-85 mt-3">
              Slow-braised, hand-pressed, family-made.
            </div>
          </div>
          <div className="flex gap-3">
            <span
              className="px-4 py-2.5 rounded-full text-[13px] font-medium"
              style={{ background: "white", color: "#2a1810" }}
            >
              Order online
            </span>
            <span
              className="px-4 py-2.5 rounded-full text-[13px] border"
              style={{ borderColor: "rgba(255,255,255,0.4)" }}
            >
              See the menu
            </span>
          </div>
        </div>

        {/* Photo strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-0.5">
          {["AL PASTOR", "CARNITAS", "BARBACOA", "TORTILLAS"].map((l) => (
            <div key={l} className="ph rounded-none h-[130px] text-[9px]">
              {l}
            </div>
          ))}
        </div>

        {/* Story */}
        <div className="p-10 md:p-14 grid grid-cols-1 md:grid-cols-[1fr_1.4fr] gap-10 md:gap-14">
          <div>
            <div className="eyebrow mb-3">Our story</div>
            <div className="ph h-[220px] text-[9px]">FAMILY PHOTO</div>
          </div>
          <div>
            <p className="serif text-[28px] md:text-[32px] leading-[1.25] m-0 mb-5">
              Three generations cooking the recipes my abuela brought from Jalisco — every tortilla still pressed by hand.
            </p>
            <p className="text-[14px] text-[var(--ink-2)] leading-[1.6]">
              We opened in 1995 with twelve seats and one promise: nothing leaves the kitchen unless we&apos;d serve it to family. Thirty years later, the seats are wider, the line is longer — but the recipes haven&apos;t changed.
            </p>
          </div>
        </div>

        {/* Menu */}
        <div className="px-10 md:px-14 py-12 bg-[#faf7f2]">
          <div className="eyebrow mb-3">The menu</div>
          <div className="serif text-[28px] md:text-[32px] mb-8">
            Cooked today, gone by tonight.
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3 gap-x-14">
            {[
              ["Al pastor", "Marinated 16 hrs, off the trompo", "4.50"],
              ["Carnitas", "Slow-braised pork, crisp edges", "4.50"],
              ["Barbacoa", "Sundays only, while it lasts", "5.00"],
              ["Lengua", "Tender, deeply seasoned", "4.50"],
            ].map(([n, d, p]) => (
              <div
                key={n}
                className="flex justify-between items-baseline py-3 border-b border-[var(--rule-2)]"
              >
                <div>
                  <div className="serif text-[17px]">{n}</div>
                  <div className="text-[12px] text-[var(--ink-3)] mt-0.5">{d}</div>
                </div>
                <div className="text-[14px] text-[var(--ink-2)]">${p}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Visit */}
        <div className="p-10 md:p-14 border-t border-[var(--rule-2)] grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="eyebrow mb-2.5">Visit</div>
            <div className="serif text-[22px] mb-1">1248 César Chávez Ave</div>
            <div className="text-[var(--ink-3)] text-[13px] mb-4">Los Angeles, CA 90033</div>
            <div className="text-[13px] text-[var(--ink-2)] leading-[1.6]">
              Mon–Sat · 11 AM – 9 PM
              <br />
              Closed Sundays
            </div>
          </div>
          <div className="ph h-[140px] text-[9px]">MAP</div>
        </div>
      </div>
    </div>
  );
}
