// Onara — Landing page (before/after direction)

const Landing = ({ go }) => {
  const [stage, setStage] = React.useState(0); // 0 = listing, 1 = site
  React.useEffect(() => {
    const t = setInterval(() => setStage(s => (s + 1) % 2), 3200);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="bg-warm-grad" style={{ minHeight: '100%' }}>
      <div className="nav">
        <Logo />
        <div className="nav-links">
          <a>How it works</a>
          <a>Examples</a>
          <a>Pricing</a>
          <a>For accountants</a>
          <a onClick={() => go('auth')}>Sign in</a>
          <button className="btn btn-sm btn-accent" onClick={() => go('search')} style={{ marginLeft: 8 }}>
            Build free
          </button>
        </div>
      </div>

      <div style={{ padding: '40px 80px 80px', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 80, alignItems: 'center' }}>
        {/* Left — copy */}
        <div className="fade-up">
          <div className="eyebrow" style={{ marginBottom: 20 }}>For independent restaurants & cafés</div>
          <h1 className="serif" style={{ fontSize: 68, lineHeight: 0.98, margin: 0, letterSpacing: '-0.03em', fontWeight: 400 }}>
            Your Google listing,<br />
            <span style={{ color: 'var(--accent)', fontStyle: 'italic' }}>turned into</span> a real website.
          </h1>
          <p style={{ fontSize: 17, lineHeight: 1.55, color: 'var(--ink-2)', marginTop: 28, maxWidth: 480 }}>
            Type your business name. Watch ten agents read your reviews, photos, hours and menu — and build you a custom site in 90 seconds. No templates. No drag-and-drop.
          </p>

          <div style={{ display: 'flex', gap: 12, marginTop: 36, alignItems: 'center' }}>
            <button className="btn btn-lg btn-accent" onClick={() => go('search')}>
              Build mine free <Icon name="arrow" size={14} color="white" />
            </button>
            <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>No card. See it before you sign up.</span>
          </div>

          <div style={{ display: 'flex', gap: 24, marginTop: 56, paddingTop: 28, borderTop: '1px solid var(--rule-2)' }}>
            <Stat n="2,400+" l="sites built" />
            <Stat n="92s" l="median build time" />
            <Stat n="4.9★" l="from owners" />
          </div>
        </div>

        {/* Right — before/after */}
        <div className="fade-up fade-up-d2" style={{ position: 'relative', height: 560 }}>
          {/* Before — Google listing */}
          <div style={{
            position: 'absolute', top: 0, right: 40, width: 360,
            background: 'white', borderRadius: 12,
            boxShadow: stage === 0 ? '0 30px 60px rgba(0,0,0,0.18)' : '0 10px 20px rgba(0,0,0,0.08)',
            transform: stage === 0 ? 'translate(0, 0) rotate(-2deg) scale(1)' : 'translate(-30px, -10px) rotate(-4deg) scale(0.92)',
            opacity: stage === 0 ? 1 : 0.55,
            transition: 'all 0.9s cubic-bezier(0.2, 0.7, 0.3, 1)',
            overflow: 'hidden', zIndex: stage === 0 ? 2 : 1,
          }}>
            <div style={{ padding: '10px 14px', borderBottom: '1px solid #eee', fontSize: 11, color: '#5f6368', display: 'flex', alignItems: 'center', gap: 8 }}>
              <span style={{ width: 14, height: 14, borderRadius: 2, background: 'conic-gradient(from 0deg, #4285f4, #ea4335, #fbbc04, #34a853, #4285f4)' }} />
              Google
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ fontFamily: 'arial', fontSize: 18, color: '#202124', marginBottom: 4 }}>Lupita's Tacos</div>
              <div style={{ fontSize: 13, color: '#70757a', marginBottom: 6 }}>4.7 ★★★★★ (842) · Mexican · $$</div>
              <div style={{ fontSize: 13, color: '#70757a', marginBottom: 14 }}>Open · Closes 9 PM</div>
              <div className="ph" style={{ height: 100, marginBottom: 12, fontSize: 9 }}>STOREFRONT</div>
              <div style={{ display: 'flex', gap: 6, marginBottom: 12 }}>
                <div className="ph" style={{ flex: 1, height: 50, fontSize: 8 }}>FOOD</div>
                <div className="ph" style={{ flex: 1, height: 50, fontSize: 8 }}>FOOD</div>
                <div className="ph" style={{ flex: 1, height: 50, fontSize: 8 }}>INTERIOR</div>
              </div>
              <div style={{ fontSize: 11, color: '#5f6368', lineHeight: 1.5 }}>
                "Best al pastor in the neighborhood, hands down. Family-run for 30 years."
              </div>
            </div>
          </div>

          {/* After — generated site */}
          <div style={{
            position: 'absolute', bottom: 0, left: 0, width: 460,
            borderRadius: 12,
            boxShadow: stage === 1 ? '0 30px 60px rgba(0,0,0,0.18)' : '0 10px 20px rgba(0,0,0,0.08)',
            transform: stage === 1 ? 'translate(0, 0) rotate(2deg) scale(1)' : 'translate(20px, 10px) rotate(4deg) scale(0.92)',
            opacity: stage === 1 ? 1 : 0.55,
            transition: 'all 0.9s cubic-bezier(0.2, 0.7, 0.3, 1)',
            overflow: 'hidden', zIndex: stage === 1 ? 2 : 1,
            background: 'white',
          }}>
            <div className="chrome">
              <div className="chrome-dots"><span className="chrome-dot" /><span className="chrome-dot" /><span className="chrome-dot" /></div>
              <div className="chrome-url">lupitastacos.com</div>
            </div>
            <div className="site-preview">
              <div className="sp-hero" style={{ height: 220 }}>
                <div className="sp-hero-content">
                  <div style={{ fontFamily: 'var(--mono)', fontSize: 10, opacity: 0.7, letterSpacing: '0.15em', marginBottom: 12 }}>SINCE 1995 · EAST LA</div>
                  <h1 style={{ fontSize: 38 }}>Lupita's Tacos</h1>
                  <div className="sp-sub">Slow-braised, hand-pressed, family-made.</div>
                </div>
              </div>
              <div style={{ padding: '20px 24px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 12 }}>
                <div className="ph" style={{ height: 70, fontSize: 8 }}>AL PASTOR</div>
                <div className="ph" style={{ height: 70, fontSize: 8 }}>CARNITAS</div>
                <div className="ph" style={{ height: 70, fontSize: 8 }}>BARBACOA</div>
              </div>
              <div style={{ padding: '0 24px 20px', fontSize: 11, color: 'var(--ink-3)', display: 'flex', justifyContent: 'space-between', borderTop: '1px solid var(--rule-2)', paddingTop: 14, marginTop: 6 }}>
                <span>Mon–Sat · 11–9</span>
                <span>(323) 555-0142</span>
              </div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{
            position: 'absolute', top: 230, left: 280,
            display: 'flex', alignItems: 'center', gap: 8,
            fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.15em',
            color: 'var(--accent)', textTransform: 'uppercase',
          }}>
            <span>92 seconds</span>
            <svg width="60" height="20" viewBox="0 0 60 20" fill="none">
              <path d="M2 14 Q 30 -2 56 14 M 50 8 L 56 14 L 50 20" stroke="var(--accent)" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
        </div>
      </div>

      {/* Footer strip */}
      <div style={{ padding: '24px 80px', borderTop: '1px solid var(--rule-2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', fontSize: 12, color: 'var(--ink-3)' }}>
        <div>© Onara 2026 · Independent restaurants only</div>
        <div style={{ display: 'flex', gap: 24 }}>
          <a style={{ color: 'inherit' }}>Privacy</a>
          <a style={{ color: 'inherit' }}>Terms</a>
          <a style={{ color: 'inherit' }}>hello@onara.co</a>
        </div>
      </div>
    </div>
  );
};

const Stat = ({ n, l }) => (
  <div>
    <div className="serif" style={{ fontSize: 24, lineHeight: 1 }}>{n}</div>
    <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 4, letterSpacing: '0.04em' }}>{l}</div>
  </div>
);

window.Landing = Landing;
