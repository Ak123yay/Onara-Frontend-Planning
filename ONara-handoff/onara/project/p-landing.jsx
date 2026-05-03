// Landing page — hi-fi
const { useState: uS_landing } = React;

const FeaturedSites = [
  { name: "Mike's Pizza", type: "Italian · Austin TX", color: 'oklch(0.62 0.13 50)', emoji: '🍕' },
  { name: "Bloom Florist", type: "Florist · Brooklyn NY", color: 'oklch(0.65 0.10 350)', emoji: '🌸' },
  { name: "Cedar Plumbing", type: "Plumber · Denver CO", color: 'oklch(0.55 0.08 230)', emoji: '🔧' },
  { name: "Aria Studio", type: "Photographer · Seattle", color: 'oklch(0.58 0.06 280)', emoji: '📷' },
];

const Landing = ({ go }) => {
  const [searchValue, setSearchValue] = uS_landing("Mike's Pizza Austin TX");

  return (
    <div className="paper" style={{ minHeight: '100vh' }}>
      <TopNav go={go}/>

      {/* HERO */}
      <section style={{ padding: '90px 40px 60px', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        {/* warm orb */}
        <div style={{ position: 'absolute', top: '-100px', right: '-50px', width: 380, height: 380, borderRadius: '50%', background: 'var(--accent-softer)', filter: 'blur(40px)', opacity: 0.7, zIndex: 0 }}/>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: 1100, margin: '0 auto' }}>
          <div className="mono" style={{ marginBottom: 24 }}>
            <span style={{ display: 'inline-block', width: 6, height: 6, borderRadius: '50%', background: 'var(--accent)', marginRight: 8, verticalAlign: 'middle' }}/>
            For small businesses · No code, no decisions
          </div>
          <h1 className="serif" style={{ fontSize: 84, lineHeight: 1.0, margin: 0, fontWeight: 400, letterSpacing: '-0.03em' }}>
            Your website,<br/>
            already <span className="hand-u serif-italic" style={{ fontWeight: 300 }}>built</span> from your<br/>
            Google Business Profile.
          </h1>
          <p style={{ fontSize: 18, color: 'var(--ink-3)', maxWidth: 560, margin: '28px auto 0', lineHeight: 1.5 }}>
            Type your business name. We'll have a complete, deployable site in 90 seconds. Nothing to drag, nothing to write.
          </p>

          {/* Big search */}
          <form
            onSubmit={(e) => { e.preventDefault(); go('build', { q: searchValue }); }}
            style={{ marginTop: 44, maxWidth: 640, margin: '44px auto 0', display: 'flex', alignItems: 'center', gap: 10, padding: 8, background: 'var(--paper)', border: '1px solid var(--ink)', borderRadius: 4, boxShadow: '0 8px 30px rgba(0,0,0,0.06)' }}>
            <div style={{ paddingLeft: 14 }}><Ic name="search" size={18} color="var(--ink-3)"/></div>
            <input
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              placeholder="e.g. Mike's Pizza Austin TX"
              style={{ flex: 1, fontSize: 15, color: 'var(--ink)', padding: '14px 0', border: 'none', background: 'transparent', outline: 'none' }}
            />
            <button type="submit" className="btn btn-accent" style={{ padding: '14px 22px' }}>
              Build my site <Ic name="arrow-r" size={15} color="white"/>
            </button>
          </form>
          <div className="mono" style={{ marginTop: 16 }}>14-day Pro trial · No card required</div>

          {/* Hero preview window */}
          <div style={{ marginTop: 90, position: 'relative', perspective: 1600 }}>
            <BrowserMock url="mikes-pizza.pages.dev" preview="hero"/>
            <div className="hand" style={{ position: 'absolute', bottom: 60, right: -10, transform: 'rotate(6deg)', fontSize: 19, maxWidth: 160, lineHeight: 1.05 }}>
              ← real, live, deployable site
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section id="how" style={{ padding: '120px 40px 80px', borderTop: '1px solid var(--rule-2)' }}>
        <div className="container">
          <div className="eyebrow" style={{ marginBottom: 14 }}>How it works</div>
          <h2 className="serif" style={{ fontSize: 56, lineHeight: 1.05, margin: 0, fontWeight: 400, maxWidth: 700 }}>
            Three steps. <span className="serif-italic" style={{ color: 'var(--ink-3)' }}>One coffee.</span>
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginTop: 60 }}>
            {[
              { n: '01', t: 'Find your business', d: "Type your business name. We pull your real address, hours, photos and reviews from Google Maps.", icon: 'search' },
              { n: '02', t: '10 agents build it', d: "Analyst, writer, designer, debugger, QA — ten small AIs collaborate on your site, live.", icon: 'sparkle' },
              { n: '03', t: 'Ship to a real URL', d: "We deploy to Cloudflare Pages. Share your link in 90 seconds, no DNS skills required.", icon: 'globe' },
            ].map((s, i) => (
              <div key={s.n} className="card" style={{ padding: 28, position: 'relative' }}>
                <div className="mono" style={{ marginBottom: 16, color: 'var(--accent-ink)' }}>step {s.n}</div>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                  <Ic name={s.icon} size={18} color="var(--accent-ink)"/>
                </div>
                <h3 className="serif" style={{ fontSize: 24, margin: '0 0 8px', fontWeight: 500 }}>{s.t}</h3>
                <p style={{ fontSize: 13.5, color: 'var(--ink-3)', lineHeight: 1.55, margin: 0 }}>{s.d}</p>
                {i < 2 && <div className="hand" style={{ position: 'absolute', right: -14, top: '50%', fontSize: 28, color: 'var(--ink-4)', display: 'none' }}>→</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* EXAMPLES */}
      <section id="examples" style={{ padding: '100px 40px', borderTop: '1px solid var(--rule-2)', background: 'var(--paper-2)' }}>
        <div className="container">
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', marginBottom: 50 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 14 }}>Real generated sites</div>
              <h2 className="serif" style={{ fontSize: 52, lineHeight: 1.05, margin: 0, fontWeight: 400, maxWidth: 600 }}>
                Every business gets its <span className="serif-italic">own look</span>.
              </h2>
            </div>
            <button className="btn btn-soft btn-sm">View all 47 examples <Ic name="arrow-r" size={13} color="currentColor"/></button>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 18 }}>
            {FeaturedSites.map(s => (
              <div key={s.name} className="card hover-lift" style={{ overflow: 'hidden', cursor: 'pointer' }}>
                <div style={{ height: 180, background: s.color, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 64 }}>
                  <span style={{ filter: 'grayscale(0.2)' }}>{s.emoji}</span>
                  <div style={{ position: 'absolute', inset: 0, background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.15), transparent 50%)' }}/>
                </div>
                <div style={{ padding: 16 }}>
                  <div className="serif" style={{ fontSize: 18, marginBottom: 4, fontWeight: 500 }}>{s.name}</div>
                  <div className="mono" style={{ fontSize: 10 }}>{s.type}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* STATS */}
      <section style={{ padding: '90px 40px', borderTop: '1px solid var(--rule-2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 32 }}>
            {[
              ['90s', 'name to live site'],
              ['10', 'specialised AI agents'],
              ['$0', 'first-site cost'],
              ['3 plans', 'free, $12, $29'],
            ].map(([n, l]) => (
              <div key={l}>
                <div className="serif" style={{ fontSize: 56, lineHeight: 1, margin: 0, fontWeight: 400 }}>{n}</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 8 }}>{l}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ padding: '120px 40px', textAlign: 'center', background: 'var(--ink)', color: 'var(--paper)' }}>
        <div className="container">
          <h2 className="serif" style={{ fontSize: 76, fontWeight: 300, lineHeight: 1.0, margin: 0, letterSpacing: '-0.03em' }}>
            Stop staring at a<br/><span className="serif-italic">blank page</span>.
          </h2>
          <p style={{ fontSize: 17, color: 'var(--ink-4)', marginTop: 24, maxWidth: 480, margin: '24px auto 0' }}>
            Onara starts where you already are — your Google Business Profile.
          </p>
          <button className="btn btn-accent btn-lg" style={{ marginTop: 44 }} onClick={() => go('signup')}>
            Try it with your business <Ic name="arrow-r" size={15} color="white"/>
          </button>
          <div className="mono" style={{ marginTop: 14, color: 'var(--ink-4)' }}>14 days of Pro · No card required</div>
        </div>
      </section>

      <footer style={{ padding: '40px', borderTop: '1px solid var(--rule-2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'var(--ink-3)' }}>
        <Logo/>
        <div style={{ display: 'flex', gap: 24 }}>
          <a style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Privacy</a>
          <a style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Terms</a>
          <a style={{ color: 'inherit', textDecoration: 'none', cursor: 'pointer' }}>Contact</a>
        </div>
        <div className="mono">© 2026 Onara</div>
      </footer>
    </div>
  );
};

// Browser mockup
const BrowserMock = ({ url, preview, height = 500 }) => (
  <div className="card" style={{ maxWidth: 1080, margin: '0 auto', overflow: 'hidden', boxShadow: '0 30px 80px rgba(0,0,0,0.10)', borderRadius: 8 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '12px 14px', background: 'var(--paper-2)', borderBottom: '1px solid var(--rule-2)' }}>
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#ff5f57' }}/>
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#febc2e' }}/>
      <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#28c840' }}/>
      <div style={{ flex: 1, marginLeft: 14, padding: '5px 14px', background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: 100, fontSize: 11, color: 'var(--ink-3)', fontFamily: 'var(--mono)' }}>
        {url}
      </div>
    </div>
    {preview === 'hero' && <PizzaSitePreview/>}
  </div>
);

// A finished pizza-site preview
const PizzaSitePreview = () => (
  <div style={{ background: '#1a1410', color: '#f7f0e2', height: 500 }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px' }}>
      <div className="serif" style={{ fontSize: 22, fontWeight: 600, color: '#ff8a4c' }}>Mike's Pizza</div>
      <div style={{ display: 'flex', gap: 22, fontSize: 12, color: '#bcb0a0' }}>
        <span>Menu</span><span>Hours</span><span>Visit</span><span style={{ color: '#ff8a4c' }}>Order →</span>
      </div>
    </div>
    <div style={{ display: 'grid', gridTemplateColumns: '1.1fr 1fr', gap: 40, padding: '40px 40px', alignItems: 'center', height: 'calc(100% - 60px)' }}>
      <div>
        <div style={{ fontSize: 10, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#ff8a4c', marginBottom: 14, fontFamily: 'var(--mono)' }}>Wood-fired · since 2008</div>
        <div className="serif" style={{ fontSize: 56, lineHeight: 1.0, fontWeight: 500, letterSpacing: '-0.02em' }}>
          Austin's slowest<br/>pizza dough.
        </div>
        <div style={{ fontSize: 13, color: '#bcb0a0', marginTop: 18, maxWidth: 380, lineHeight: 1.6 }}>
          72-hour cold ferment, San Marzano tomatoes, fior di latte. Open till 10 — walk in or order online.
        </div>
        <div style={{ marginTop: 28, display: 'flex', gap: 10 }}>
          <div style={{ padding: '12px 20px', background: '#ff8a4c', color: '#1a1410', borderRadius: 2, fontSize: 13, fontWeight: 600 }}>See the menu</div>
          <div style={{ padding: '12px 20px', border: '1px solid #46382a', color: '#f7f0e2', borderRadius: 2, fontSize: 13 }}>(512) 555-0182</div>
        </div>
        <div style={{ marginTop: 32, display: 'flex', gap: 18, fontSize: 11, color: '#857762', fontFamily: 'var(--mono)' }}>
          <span>★ 4.6 · 312 reviews</span><span>218 Congress Ave</span>
        </div>
      </div>
      <div style={{ height: 360, borderRadius: 6, background: 'radial-gradient(circle at 50% 50%, #d96838, #8a2f10)', position: 'relative', overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ fontSize: 200 }}>🍕</span>
        <div style={{ position: 'absolute', bottom: 16, left: 16, right: 16, padding: '10px 14px', background: 'rgba(0,0,0,0.5)', backdropFilter: 'blur(8px)', borderRadius: 3, fontSize: 11, color: '#f7f0e2', display: 'flex', justifyContent: 'space-between' }}>
          <span>Margherita Classic</span><span>$14</span>
        </div>
      </div>
    </div>
  </div>
);

window.Landing = Landing;
window.BrowserMock = BrowserMock;
window.PizzaSitePreview = PizzaSitePreview;
