// === Landing page wireframes — 4 directions ===

const TopNav = ({ light = false }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 32px', borderBottom: light ? 'none' : '1px solid var(--rule-2)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 22, height: 22, border: '1.5px solid var(--ink)', borderRadius: '50%', filter: 'url(#wobble-1)' }} />
      <span style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500, letterSpacing: '-0.01em' }}>Onara</span>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 24, fontSize: 13, color: 'var(--ink-3)' }}>
      <span>How it works</span>
      <span>Pricing</span>
      <span>Examples</span>
      <span style={{ color: 'var(--ink)' }}>Sign in</span>
      <span className="btn" style={{ padding: '8px 14px' }}>Start free</span>
    </div>
  </div>
);

// V1 — Search-led hero
const LandingV1 = () => (
  <div className="screen wf-paper">
    <TopNav />
    <div style={{ flex: 1, padding: '90px 90px 40px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
      <div className="mono" style={{ marginBottom: 28 }}>For small businesses · No code</div>
      <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 76, lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0, maxWidth: 900 }}>
        Your website,<br/>
        already <span className="hand-u">built</span> from your<br/>
        Google Business Profile.
      </h1>
      <p style={{ fontSize: 17, color: 'var(--ink-3)', maxWidth: 520, marginTop: 24, lineHeight: 1.45 }}>
        Type your business name. We'll have a complete, deployable site in 90 seconds. Nothing to drag, nothing to write.
      </p>

      {/* Big search input */}
      <div className="sk" style={{ marginTop: 40, width: 620, padding: 8, display: 'flex', alignItems: 'center', gap: 10, background: 'var(--paper)' }}>
        <div style={{ paddingLeft: 12 }}><Glyph name="search" size={18} color="var(--ink-3)" /></div>
        <div style={{ flex: 1, fontSize: 15, color: 'var(--ink-3)', padding: '12px 0' }}>Mike's Pizza, Austin TX</div>
        <span className="btn btn-accent" style={{ padding: '14px 22px' }}>Build my site →</span>
      </div>
      <div className="mono" style={{ marginTop: 14 }}>14-day Pro trial · No card</div>

      <div className="anno" style={{ top: 250, right: 60, transform: 'rotate(4deg)' }}>
        ← single hero input,<br/>everything else below
      </div>

      {/* Logos / trust */}
      <div style={{ marginTop: 80, display: 'flex', alignItems: 'center', gap: 28, color: 'var(--ink-4)' }}>
        <span className="mono">As used by</span>
        {['Plumbers', 'Cafés', 'Salons', 'Tutors', 'Trucks'].map(l => (
          <span key={l} style={{ fontFamily: 'var(--serif)', fontSize: 18, fontStyle: 'italic' }}>{l}</span>
        ))}
      </div>

      {/* Faux preview window peeking up from bottom */}
      <div className="sk" style={{ position: 'absolute', bottom: -260, left: 90, right: 90, height: 360, background: 'var(--paper)' }}>
        <div className="chrome-bar">
          <div className="chrome-dot" /><div className="chrome-dot" /><div className="chrome-dot" />
          <div style={{ flex: 1, marginLeft: 16, height: 18, border: '1px solid var(--rule)', borderRadius: 4, background: 'var(--paper)' }} />
        </div>
      </div>
    </div>
  </div>
);

// V2 — Before / After
const LandingV2 = () => (
  <div className="screen wf-paper">
    <TopNav />
    <div style={{ flex: 1, padding: '70px 70px 40px', position: 'relative' }}>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
        <div>
          <div className="mono" style={{ marginBottom: 16 }}>Onara · v1</div>
          <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 60, lineHeight: 1.04, letterSpacing: '-0.025em', margin: 0 }}>
            From a Google<br/>listing to a<br/><em style={{ fontWeight: 300 }}>real</em> website.
          </h1>
          <p style={{ fontSize: 16, color: 'var(--ink-3)', marginTop: 22, maxWidth: 420, lineHeight: 1.5 }}>
            We import what's already on Google Maps — name, hours, address, photos — and 10 small AI agents turn it into a finished site you can publish.
          </p>
          <div style={{ display: 'flex', gap: 12, marginTop: 32 }}>
            <span className="btn btn-accent">Try it with your business</span>
            <span className="btn btn-ghost">See an example →</span>
          </div>
          <div className="mono" style={{ marginTop: 14 }}>~90s · $0 to start · cancel anytime</div>
        </div>

        {/* Before/After visual */}
        <div style={{ position: 'relative', height: 480 }}>
          {/* Before — Google card */}
          <div className="sk sk-2" style={{ position: 'absolute', top: 0, left: 0, width: 280, padding: 16, background: 'var(--paper)', transform: 'rotate(-2deg)' }}>
            <div className="mono" style={{ marginBottom: 8 }}>Google Business · Before</div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: 18, marginBottom: 4 }}>Mike's Pizza</div>
            <div style={{ display: 'flex', gap: 4, marginBottom: 10 }}>
              {[1,2,3,4].map(i => <Glyph key={i} name="star" size={11} color="var(--accent)" />)}
              <Glyph name="star" size={11} color="var(--ink-4)" />
              <span style={{ fontSize: 11, color: 'var(--ink-3)', marginLeft: 4 }}>4.6 · 312</span>
            </div>
            <div className="ph" style={{ height: 90, marginBottom: 10 }}>storefront photo</div>
            <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5 }}>
              <div>📍 218 Congress Ave, Austin</div>
              <div>📞 (512) 555-0182</div>
              <div>🕐 Open · closes 10pm</div>
            </div>
          </div>

          {/* Arrow */}
          <div style={{ position: 'absolute', top: 200, left: 240, fontFamily: 'var(--hand)', fontSize: 32, color: 'var(--accent-ink)', transform: 'rotate(-8deg)' }}>
            →
          </div>
          <div style={{ position: 'absolute', top: 240, left: 215, fontFamily: 'var(--hand)', fontSize: 16, color: 'var(--accent-ink)', transform: 'rotate(-8deg)', whiteSpace: 'nowrap' }}>
            10 agents,<br/>~90 seconds
          </div>

          {/* After — site mock */}
          <div className="sk sk-2" style={{ position: 'absolute', top: 80, right: 0, width: 360, height: 380, background: 'var(--paper)', transform: 'rotate(2deg)' }}>
            <div className="chrome-bar">
              <div className="chrome-dot" /><div className="chrome-dot" /><div className="chrome-dot" />
              <div className="mono" style={{ marginLeft: 12, fontSize: 9 }}>mikes-pizza.pages.dev</div>
            </div>
            <div style={{ padding: 18 }}>
              <div className="bar" style={{ width: '70%', marginBottom: 8 }} />
              <div className="bar bar-thin" style={{ width: '90%', marginBottom: 6 }} />
              <div className="bar bar-thin" style={{ width: '60%', marginBottom: 16 }} />
              <div className="ph" style={{ height: 130, marginBottom: 14 }}>hero · Mike's Pizza</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 8 }}>
                <div className="ph" style={{ height: 60 }}>menu</div>
                <div className="ph" style={{ height: 60 }}>hours</div>
                <div className="ph" style={{ height: 60 }}>visit</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// V3 — Bold statement, demo below
const LandingV3 = () => (
  <div className="screen wf-paper">
    <TopNav />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ padding: '120px 90px 80px', position: 'relative' }}>
        <div className="mono" style={{ marginBottom: 36 }}>Built for owners, not builders</div>
        <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 124, lineHeight: 0.96, letterSpacing: '-0.04em', margin: 0, maxWidth: 1100 }}>
          Stop staring<br/>at a <em>blank page</em>.
        </h1>
        <p style={{ fontSize: 18, color: 'var(--ink-3)', marginTop: 28, maxWidth: 540, lineHeight: 1.5 }}>
          Onara starts where you already are — your Google Business Profile — and writes, designs, and ships your site for you.
        </p>
        <div style={{ display: 'flex', gap: 16, marginTop: 40, alignItems: 'center' }}>
          <span className="btn btn-accent" style={{ padding: '16px 26px', fontSize: 15 }}>Start with your business</span>
          <span style={{ fontFamily: 'var(--hand)', fontSize: 18, color: 'var(--accent-ink)' }}>↘ free, no card, 14 days of Pro</span>
        </div>

        {/* Big terracotta circle behind text */}
        <div style={{ position: 'absolute', top: 60, right: 90, width: 280, height: 280, borderRadius: '50%', background: 'var(--accent-soft)', filter: 'url(#wobble-2)', zIndex: -1 }} />

        {/* Tickers */}
        <div style={{ marginTop: 72, display: 'flex', gap: 40, fontSize: 13, color: 'var(--ink-3)', borderTop: '1px solid var(--rule-2)', paddingTop: 28 }}>
          <div><span style={{ fontFamily: 'var(--serif)', fontSize: 32, color: 'var(--ink)' }}>10</span> agents working in sequence</div>
          <div><span style={{ fontFamily: 'var(--serif)', fontSize: 32, color: 'var(--ink)' }}>90s</span> from name to live site</div>
          <div><span style={{ fontFamily: 'var(--serif)', fontSize: 32, color: 'var(--ink)' }}>$0</span> to see your site for the first time</div>
        </div>
      </div>
    </div>
  </div>
);

// V4 — Lead with a 60s build animation
const LandingV4 = () => (
  <div className="screen wf-paper">
    <TopNav />
    <div style={{ flex: 1, padding: '60px 70px', display: 'grid', gridTemplateColumns: '1fr 1.1fr', gap: 60, alignItems: 'center' }}>
      <div>
        <span className="chip chip-accent" style={{ marginBottom: 24 }}><Glyph name="sparkle" size={11} color="white" /> Live demo</span>
        <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 64, lineHeight: 1.02, letterSpacing: '-0.025em', margin: 0 }}>
          Watch a real<br/>site build itself.
        </h1>
        <p style={{ fontSize: 16, color: 'var(--ink-3)', marginTop: 22, maxWidth: 400, lineHeight: 1.5 }}>
          Pick any business. We'll generate the site live, right here on this page. No signup needed to watch.
        </p>

        <div style={{ marginTop: 28 }}>
          <div className="mono" style={{ marginBottom: 10 }}>Try one →</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Mike\'s Pizza · Austin', 'Bloom Florist · Brooklyn', 'Cedar Plumbing · Denver', 'Or… your own'].map((s, i) => (
              <span key={i} className="chip" style={{ background: i === 3 ? 'var(--ink)' : 'var(--paper)', color: i === 3 ? 'var(--paper)' : 'var(--ink)', borderColor: i === 3 ? 'var(--ink)' : 'var(--ink)' }}>{s}</span>
            ))}
          </div>
        </div>
        <div style={{ marginTop: 36, display: 'flex', gap: 12 }}>
          <span className="btn">Sign up to keep it</span>
          <span className="btn btn-ghost">See pricing</span>
        </div>
      </div>

      {/* Live demo viewport */}
      <div style={{ position: 'relative' }}>
        <div className="sk sk-2" style={{ background: 'var(--paper)', height: 460, padding: 0, overflow: 'hidden' }}>
          <div className="chrome-bar">
            <div className="chrome-dot" /><div className="chrome-dot" /><div className="chrome-dot" />
            <div style={{ flex: 1, marginLeft: 14, height: 16, border: '1px solid var(--rule)', borderRadius: 4 }} />
          </div>
          <div style={{ display: 'flex', height: 'calc(100% - 38px)' }}>
            {/* Agent panel */}
            <div style={{ width: 160, borderRight: '1px solid var(--rule-2)', padding: 14, background: 'var(--paper-2)' }}>
              <div className="mono" style={{ marginBottom: 12 }}>Agents</div>
              {['Analyst','Writer','Style','Planner','Prompt','Code','Debug','SEO','QA','Mobile'].map((a, i) => (
                <div key={a} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 11, padding: '5px 0', color: i < 4 ? 'var(--ink)' : 'var(--ink-4)' }}>
                  <span className={`sdot ${i < 3 ? 'sdot-done' : i === 3 ? 'sdot-on' : 'sdot-pending'}`} />
                  {a}
                  {i === 3 && <span className="hand hand-accent" style={{ fontSize: 14 }}>···</span>}
                </div>
              ))}
            </div>
            {/* Preview pane */}
            <div style={{ flex: 1, padding: 18 }}>
              <div className="bar" style={{ width: '70%', marginBottom: 6 }} />
              <div className="bar bar-thin" style={{ width: '90%', marginBottom: 14 }} />
              <div className="ph" style={{ height: 120, marginBottom: 10 }}>hero</div>
              <div className="bar bar-thin" style={{ width: '40%', marginBottom: 6 }} />
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8, marginTop: 10 }}>
                <div className="ph" style={{ height: 60 }}>menu</div>
                <div className="ph" style={{ height: 60 }}>hours</div>
              </div>
              <div className="hatch-soft" style={{ position: 'absolute', bottom: 0, left: 161, right: 0, height: 80, opacity: 0.5 }} />
            </div>
          </div>
        </div>
        <div className="anno anno-multi" style={{ bottom: -34, right: 20, transform: 'rotate(-2deg)' }}>
          live agent log + filling preview ↑
        </div>
      </div>
    </div>
  </div>
);

window.LandingV1 = LandingV1;
window.LandingV2 = LandingV2;
window.LandingV3 = LandingV3;
window.LandingV4 = LandingV4;
