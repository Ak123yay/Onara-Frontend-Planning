// === Dashboard, Result, Pricing, Mobile, Trial-end ===

const SidebarV1 = ({ active = 'sites' }) => (
  <div style={{ width: 220, borderRight: '1px solid var(--rule-2)', background: 'var(--paper-2)', padding: '20px 16px', display: 'flex', flexDirection: 'column' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 28, padding: '0 6px' }}>
      <div style={{ width: 22, height: 22, border: '1.5px solid var(--ink)', borderRadius: '50%', filter: 'url(#wobble-1)' }} />
      <span style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500 }}>Onara</span>
    </div>
    <div className="mono" style={{ marginBottom: 8, padding: '0 6px' }}>Build</div>
    {[
      ['sites', 'My sites', 'globe'],
      ['new', 'New site', 'plus'],
      ['revisions', 'Revisions', 'edit'],
    ].map(([k, l, ic]) => (
      <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', fontSize: 13, fontWeight: active === k ? 500 : 400, background: active === k ? 'var(--paper)' : 'transparent', border: active === k ? '1.5px solid var(--ink)' : '1.5px solid transparent', filter: active === k ? 'url(#wobble-1)' : 'none', marginBottom: 2 }}>
        <Glyph name={ic} size={13} color="var(--ink)" />
        <span>{l}</span>
      </div>
    ))}
    <div className="mono" style={{ marginTop: 22, marginBottom: 8, padding: '0 6px' }}>Account</div>
    {[
      ['billing', 'Plan & billing', 'cog'],
      ['domain', 'Domains', 'globe'],
      ['settings', 'Settings', 'cog'],
    ].map(([k, l, ic]) => (
      <div key={k} style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '8px 10px', fontSize: 13, color: 'var(--ink-2)', marginBottom: 2 }}>
        <Glyph name={ic} size={13} color="var(--ink-3)" />
        <span>{l}</span>
      </div>
    ))}

    <div style={{ flex: 1 }} />
    {/* Trial banner */}
    <div className="sk sk-rule sk-thin" style={{ padding: 12, background: 'var(--accent-soft)', fontSize: 11 }}>
      <div className="mono" style={{ color: 'var(--accent-ink)', marginBottom: 4 }}>Pro trial</div>
      <div style={{ fontSize: 12, color: 'var(--ink)', marginBottom: 8 }}>11 days left</div>
      <div className="btn btn-accent" style={{ width: '100%', justifyContent: 'center', padding: '8px 10px', fontSize: 11 }}>Keep Pro · $29/mo</div>
    </div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 6px 0', marginTop: 8, borderTop: '1px solid var(--rule-2)' }}>
      <div className="ph-circle" style={{ width: 28, height: 28 }} />
      <div style={{ flex: 1, fontSize: 12 }}>
        <div>Mike Cantelli</div>
        <div style={{ color: 'var(--ink-3)', fontSize: 10 }}>mike@mikespizza.com</div>
      </div>
    </div>
  </div>
);

const DashHeader = ({ title, sub, action }) => (
  <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', padding: '32px 40px 20px' }}>
    <div>
      <div className="mono" style={{ marginBottom: 6 }}>{sub}</div>
      <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 32, margin: 0, letterSpacing: '-0.02em' }}>{title}</h2>
    </div>
    {action}
  </div>
);

// V1 — My sites — empty state for first run
const DashEmptyV1 = () => (
  <div className="screen wf-paper" style={{ flexDirection: 'row' }}>
    <SidebarV1 active="sites" />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <DashHeader sub="Welcome, Mike" title="Let's build your first site." action={null} />
      <div style={{ flex: 1, padding: '20px 40px 40px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
        <div className="sk sk-2" style={{ width: 520, padding: 40, textAlign: 'center', background: 'var(--paper)' }}>
          <div className="ph-circle" style={{ width: 56, height: 56, margin: '0 auto 18px', background: 'var(--accent-soft)' }} />
          <h3 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 26, margin: 0, letterSpacing: '-0.01em' }}>No sites yet</h3>
          <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 10, lineHeight: 1.5 }}>Type your business name and we'll handle the rest.<br/>Most sites are ready in under two minutes.</p>
          <div className="sk" style={{ marginTop: 22, display: 'flex', alignItems: 'center', padding: '4px 4px 4px 14px' }}>
            <Glyph name="search" size={14} color="var(--ink-3)" />
            <div style={{ flex: 1, padding: '12px 10px', fontSize: 13, color: 'var(--ink-3)', textAlign: 'left' }}>Your business name…</div>
            <span className="btn btn-accent">Build →</span>
          </div>
        </div>
        <div className="anno" style={{ top: 60, right: 80, transform: 'rotate(3deg)' }}>empty state · single CTA</div>
      </div>
    </div>
  </div>
);

// V2 — My sites — populated, gallery cards
const DashSitesV1 = () => (
  <div className="screen wf-paper" style={{ flexDirection: 'row' }}>
    <SidebarV1 active="sites" />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <DashHeader sub="3 of 3 used · Pro" title="My sites" action={<span className="btn btn-accent"><Glyph name="plus" size={12} color="white" /> New site</span>} />
      <div style={{ flex: 1, padding: '12px 40px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, alignContent: 'start' }}>
        {[
          { name: "Mike's Pizza", url: 'mikes-pizza.pages.dev', custom: 'mikespizza.com', live: true, rev: '7 / unlimited' },
          { name: 'Bloom Florist', url: 'bloom-florist.pages.dev', live: true, rev: '2 / unlimited' },
          { name: 'Cedar Plumbing', url: 'cedar-plumbing.pages.dev', live: false, rev: '0 / unlimited' },
        ].map((s) => (
          <div key={s.name} className="sk sk-2" style={{ background: 'var(--paper)', padding: 0, overflow: 'hidden' }}>
            <div className="ph" style={{ height: 130 }}>preview</div>
            <div style={{ padding: 16 }}>
              <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: 18, letterSpacing: '-0.01em' }}>{s.name}</div>
                <span className="chip chip-soft chip-mono" style={{ borderColor: s.live ? 'var(--accent)' : 'var(--rule)', color: s.live ? 'var(--accent-ink)' : 'var(--ink-3)' }}>
                  <span className={`sdot ${s.live ? 'sdot-on' : 'sdot-pending'}`} />
                  {s.live ? 'live' : 'paused'}
                </span>
              </div>
              <div className="mono" style={{ marginTop: 8 }}>{s.custom || s.url}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--rule-2)' }}>
                <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>Revisions {s.rev}</span>
                <div style={{ display: 'flex', gap: 8 }}>
                  <Glyph name="eye" size={14} color="var(--ink-3)" />
                  <Glyph name="edit" size={14} color="var(--ink-3)" />
                  <Glyph name="cog" size={14} color="var(--ink-3)" />
                </div>
              </div>
            </div>
          </div>
        ))}
        {/* New site card */}
        <div className="sk sk-dashed sk-rule" style={{ background: 'var(--paper)', height: 280, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 8, color: 'var(--ink-3)' }}>
          <Glyph name="plus" size={20} color="var(--ink-3)" />
          <div style={{ fontSize: 13 }}>Add another site</div>
          <div className="mono">Pro · 3 / 3 used</div>
        </div>
      </div>
    </div>
  </div>
);

// V3 — Site detail with iframe preview + revisions panel
const DashSiteDetail = () => (
  <div className="screen wf-paper" style={{ flexDirection: 'row' }}>
    <SidebarV1 active="sites" />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid var(--rule-2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
          <span className="mono">My sites /</span>
          <span style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>Mike's Pizza</span>
          <span className="chip chip-soft chip-mono" style={{ borderColor: 'var(--accent)', color: 'var(--accent-ink)' }}>
            <span className="sdot sdot-on" /> live
          </span>
        </div>
        <div style={{ display: 'flex', gap: 10 }}>
          <span className="btn btn-soft"><Glyph name="globe" size={12} color="var(--ink)" /> mikespizza.com</span>
          <span className="btn"><Glyph name="edit" size={12} color="white" /> Request a revision</span>
        </div>
      </div>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 360px', gap: 0 }}>
        <div style={{ padding: 28, background: 'var(--paper-2)' }}>
          {/* device toggle */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 6, marginBottom: 18 }}>
            <span className="chip" style={{ background: 'var(--ink)', color: 'var(--paper)' }}>Desktop</span>
            <span className="chip">Tablet</span>
            <span className="chip">Mobile</span>
          </div>
          <div className="sk sk-2" style={{ background: 'var(--paper)', height: 'calc(100% - 50px)', overflow: 'hidden' }}>
            <div className="chrome-bar">
              <div className="chrome-dot" /><div className="chrome-dot" /><div className="chrome-dot" />
              <div className="mono" style={{ marginLeft: 12, fontSize: 9 }}>mikespizza.com</div>
            </div>
            <div style={{ padding: 32 }}>
              <div className="bar" style={{ width: '40%', marginBottom: 8 }} />
              <div className="bar bar-thin" style={{ width: '60%', marginBottom: 18 }} />
              <div className="ph" style={{ height: 220, marginBottom: 18 }}>hero</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
                <div className="ph" style={{ height: 100 }}>menu</div>
                <div className="ph" style={{ height: 100 }}>hours</div>
                <div className="ph" style={{ height: 100 }}>visit</div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ borderLeft: '1px solid var(--rule-2)', padding: 24, overflow: 'auto' }}>
          <div className="mono" style={{ marginBottom: 8 }}>Revision history</div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 16 }}>Unlimited on Pro · resets monthly</div>

          {[
            { v: 'v7', when: '2 days ago', what: 'Updated weekend hours', live: true },
            { v: 'v6', when: '5 days ago', what: 'Added catering section' },
            { v: 'v5', when: 'Mar 14', what: 'Changed phone number' },
            { v: 'v4', when: 'Mar 02', what: 'Hero copy: "best slice in austin"' },
            { v: 'v3', when: 'Feb 21', what: 'Synced 3 photos from Google' },
          ].map((r, i) => (
            <div key={r.v} className="sk sk-rule sk-thin" style={{ padding: 12, marginBottom: 8, background: r.live ? 'var(--accent-soft)' : 'var(--paper)', display: 'flex', alignItems: 'center', gap: 12 }}>
              <span className="mono" style={{ fontSize: 9 }}>{r.v}</span>
              <div style={{ flex: 1, fontSize: 12 }}>
                <div>{r.what}</div>
                <div style={{ color: 'var(--ink-3)', fontSize: 10 }}>{r.when}</div>
              </div>
              {r.live ? <span className="chip chip-mono" style={{ borderColor: 'var(--accent)', color: 'var(--accent-ink)', padding: '2px 8px' }}>live</span> : <Glyph name="arrow-r" size={12} color="var(--ink-3)" />}
            </div>
          ))}

          <div className="mono" style={{ marginTop: 22, marginBottom: 8 }}>Auto sync from Google</div>
          <div className="sk sk-rule sk-thin" style={{ padding: 12, fontSize: 12 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <span>Hours, phone, photos</span>
              <span className="chip chip-mono" style={{ background: 'var(--ink)', color: 'var(--paper)', borderColor: 'var(--ink)', padding: '2px 8px' }}>on</span>
            </div>
            <div style={{ color: 'var(--ink-3)', fontSize: 11, marginTop: 6 }}>Last sync: 14h ago · next in 10h</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// === Result / "your site is ready" celebration screen ===
const ResultScreen = () => (
  <div className="screen wf-paper">
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 32px', borderBottom: '1px solid var(--rule-2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 22, height: 22, border: '1.5px solid var(--ink)', borderRadius: '50%', filter: 'url(#wobble-1)' }} />
        <span style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500 }}>Onara</span>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12 }}><div className="ph-circle" style={{ width: 28, height: 28 }} /></div>
    </div>
    <div style={{ flex: 1, padding: '40px 60px', display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 50, alignItems: 'center', position: 'relative' }}>
      <div>
        <span className="chip chip-accent" style={{ marginBottom: 22 }}><Glyph name="check" size={11} color="white" /> Ready in 1m 38s</span>
        <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 56, lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0 }}>
          Mike's Pizza<br/>has a website.
        </h1>
        <p style={{ fontSize: 15, color: 'var(--ink-3)', marginTop: 18, maxWidth: 380, lineHeight: 1.5 }}>
          Take a look. Anything you don't love can be changed in plain English — we'll redo only what matters.
        </p>
        <div className="sk" style={{ marginTop: 28, padding: '12px 16px', display: 'flex', alignItems: 'center', gap: 10, background: 'var(--paper)' }}>
          <Glyph name="globe" size={14} color="var(--ink)" />
          <span style={{ fontFamily: 'var(--mono)', fontSize: 12, flex: 1 }}>mikes-pizza.pages.dev</span>
          <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>copy</span>
        </div>
        <div style={{ display: 'flex', gap: 10, marginTop: 18 }}>
          <span className="btn btn-accent">Publish & share →</span>
          <span className="btn btn-ghost">Request changes</span>
        </div>
      </div>
      <div className="sk sk-2 stack" style={{ background: 'var(--paper)', height: 460, padding: 0, overflow: 'hidden' }}>
        <div className="chrome-bar">
          <div className="chrome-dot" /><div className="chrome-dot" /><div className="chrome-dot" />
          <div className="mono" style={{ marginLeft: 12, fontSize: 9 }}>mikes-pizza.pages.dev</div>
        </div>
        <div style={{ padding: 24 }}>
          <div className="bar" style={{ width: '50%', marginBottom: 8 }} />
          <div className="bar bar-thin" style={{ width: '70%', marginBottom: 16 }} />
          <div className="ph" style={{ height: 200, marginBottom: 14 }}>hero · storefront photo</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
            <div className="ph" style={{ height: 80 }}>menu</div>
            <div className="ph" style={{ height: 80 }}>hours</div>
            <div className="ph" style={{ height: 80 }}>visit</div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// === Pricing screen ===
const PricingScreen = () => (
  <div className="screen wf-paper">
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 32px', borderBottom: '1px solid var(--rule-2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <div style={{ width: 22, height: 22, border: '1.5px solid var(--ink)', borderRadius: '50%', filter: 'url(#wobble-1)' }} />
        <span style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500 }}>Onara</span>
      </div>
      <span className="mono">pricing</span>
      <span className="btn">Sign in</span>
    </div>
    <div style={{ flex: 1, padding: '60px 80px' }}>
      <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 48, letterSpacing: '-0.025em', textAlign: 'center', margin: 0 }}>
        Build for free. Pay to publish.
      </h1>
      <p style={{ textAlign: 'center', fontSize: 14, color: 'var(--ink-3)', marginTop: 12 }}>Every new account starts with 14 days of Pro, no card.</p>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 18, marginTop: 50 }}>
        {[
          { tier: 'Free', price: '$0', sub: 'forever', items: ['1 site · preview only', '3 revisions / month', 'Onara branding', 'Dashboard access'], cta: 'Start free' },
          { tier: 'Starter', price: '$12', sub: 'per month', items: ['1 live site', '10 revisions / month', 'Custom domain', 'No Onara branding'], cta: 'Pick Starter', highlight: true },
          { tier: 'Pro', price: '$29', sub: 'per month', items: ['3 live sites', 'Unlimited revisions', 'Code download', 'Priority queue'], cta: 'Go Pro' },
        ].map((p) => (
          <div key={p.tier} className="sk sk-2" style={{ padding: 28, background: p.highlight ? 'var(--accent-soft)' : 'var(--paper)', position: 'relative' }}>
            {p.highlight && <span className="chip chip-accent" style={{ position: 'absolute', top: -14, left: 24 }}>most popular</span>}
            <div className="mono">{p.tier}</div>
            <div style={{ display: 'flex', alignItems: 'baseline', gap: 6, marginTop: 10 }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 44, letterSpacing: '-0.02em' }}>{p.price}</span>
              <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>{p.sub}</span>
            </div>
            <div className="squiggle-thin" style={{ margin: '18px 0' }} />
            {p.items.map(it => (
              <div key={it} style={{ display: 'flex', alignItems: 'center', gap: 8, fontSize: 13, padding: '5px 0' }}>
                <Glyph name="check" size={11} color="var(--ink)" />
                {it}
              </div>
            ))}
            <div className={`btn ${p.highlight ? 'btn-accent' : ''}`} style={{ width: '100%', justifyContent: 'center', marginTop: 18 }}>{p.cta}</div>
          </div>
        ))}
      </div>

      <div style={{ textAlign: 'center', marginTop: 40, fontSize: 12, color: 'var(--ink-3)' }}>
        Year of Starter for $99 · custom domain $10 add-on · human revision $20
      </div>
    </div>
  </div>
);

// === Trial-ending state ===
const TrialEndState = () => (
  <div className="screen wf-paper" style={{ flexDirection: 'row' }}>
    <SidebarV1 active="sites" />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: 'var(--warn-soft)', borderBottom: '1px solid var(--accent)', padding: '14px 40px', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <Glyph name="sparkle" size={14} color="var(--accent-ink)" />
          <div>
            <div style={{ fontWeight: 500, fontSize: 13, color: 'var(--accent-ink)' }}>Your Pro trial ends tomorrow.</div>
            <div style={{ fontSize: 12, color: 'var(--ink-2)' }}>Your live URL <span style={{ fontFamily: 'var(--mono)' }}>mikespizza.com</span> goes offline at 9:42a tomorrow unless you upgrade.</div>
          </div>
        </div>
        <span className="btn btn-accent">Keep Pro · $29/mo</span>
      </div>
      <DashHeader sub="1 day left of Pro" title="Your sites" action={null} />
      <div style={{ flex: 1, padding: '12px 40px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, alignContent: 'start' }}>
        {[
          { name: "Mike's Pizza", live: true, danger: true },
          { name: 'Bloom Florist', live: true, danger: true },
          { name: 'Cedar Plumbing', live: true, danger: true },
        ].map((s, i) => (
          <div key={s.name} className="sk sk-2" style={{ background: 'var(--paper)', padding: 0, overflow: 'hidden', position: 'relative' }}>
            {s.danger && <div style={{ position: 'absolute', top: 12, right: 12, fontFamily: 'var(--hand)', color: 'var(--accent-ink)', fontSize: 18, transform: 'rotate(-4deg)' }}>going offline ↓</div>}
            <div className="ph" style={{ height: 130 }}>preview</div>
            <div style={{ padding: 16 }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 18 }}>{s.name}</div>
              <div className="mono" style={{ marginTop: 8 }}>{s.name.toLowerCase().replace(/['\s]/g, '-')}.pages.dev</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--rule-2)' }}>
                <span style={{ fontSize: 11, color: 'var(--accent-ink)' }}>Free plan = preview only</span>
                <Glyph name="cog" size={14} color="var(--ink-3)" />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
);

// === Mobile screens ===
const MobileFrame = ({ children, label }) => (
  <div style={{ position: 'relative' }}>
    <div className="sk sk-2" style={{ width: 280, height: 580, background: 'var(--paper)', padding: 0, overflow: 'hidden', borderRadius: 32 }}>
      <div style={{ height: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 18px', fontFamily: 'var(--mono)', fontSize: 9, color: 'var(--ink-3)' }}>
        <span>9:41</span>
        <span style={{ width: 50, height: 14, background: 'var(--ink)', borderRadius: 8 }} />
        <span>···</span>
      </div>
      <div style={{ height: 'calc(100% - 32px)', overflow: 'hidden' }}>{children}</div>
    </div>
    <div className="mono" style={{ textAlign: 'center', marginTop: 10 }}>{label}</div>
  </div>
);

const MobileLanding = () => (
  <MobileFrame label="landing · mobile">
    <div style={{ padding: '20px 18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
        <span style={{ fontFamily: 'var(--serif)', fontSize: 16 }}>Onara</span>
        <Glyph name="menu" size={16} color="var(--ink)" />
      </div>
      <h1 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 32, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}>
        Your website,<br/>built from your<br/>Google listing.
      </h1>
      <p style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 12, lineHeight: 1.5 }}>
        Type your business name. We'll build it.
      </p>
      <div className="sk" style={{ marginTop: 20, padding: '4px 4px 4px 12px', display: 'flex', alignItems: 'center' }}>
        <Glyph name="search" size={12} color="var(--ink-3)" />
        <div style={{ flex: 1, padding: '8px', fontSize: 11, color: 'var(--ink-3)' }}>Mike's Pizza, Austin</div>
      </div>
      <div className="btn btn-accent" style={{ width: '100%', justifyContent: 'center', marginTop: 10 }}>Build my site →</div>
      <div className="mono" style={{ textAlign: 'center', marginTop: 10, fontSize: 9 }}>14 days of Pro · no card</div>
      <div className="ph" style={{ height: 130, marginTop: 22, fontSize: 9 }}>example site</div>
    </div>
  </MobileFrame>
);

const MobileGenerate = () => (
  <MobileFrame label="generating · mobile">
    <div style={{ padding: '20px 18px', height: '100%', display: 'flex', flexDirection: 'column' }}>
      <div className="mono" style={{ marginBottom: 10 }}>04 / 10 · ~47s</div>
      <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 22, margin: 0 }}>Drawing your blueprint…</h2>
      <div style={{ marginTop: 22, position: 'relative' }}>
        <div style={{ position: 'absolute', left: 9, top: 6, bottom: 6, width: 1, background: 'var(--rule)' }} />
        {AGENTS.slice(0, 6).map((a, i) => {
          const state = i < 3 ? 'done' : i === 3 ? 'on' : 'pending';
          return (
            <div key={a.n} style={{ display: 'flex', gap: 12, padding: '5px 0', position: 'relative', alignItems: 'center' }}>
              <span className={`sdot ${state === 'done' ? 'sdot-done' : state === 'on' ? 'sdot-on' : 'sdot-pending'}`} style={{ outline: '4px solid var(--paper)', zIndex: 1 }} />
              <span style={{ fontSize: 11, color: state === 'on' ? 'var(--accent-ink)' : state === 'done' ? 'var(--ink)' : 'var(--ink-4)', fontWeight: state === 'on' ? 500 : 400 }}>{a.name}</span>
            </div>
          );
        })}
        <div style={{ fontSize: 11, color: 'var(--ink-4)', paddingLeft: 24, paddingTop: 4 }}>+ 4 more</div>
      </div>
      <div style={{ flex: 1 }} />
      <div className="ph" style={{ height: 100, fontSize: 9 }}>preview filling in</div>
    </div>
  </MobileFrame>
);

const MobileDash = () => (
  <MobileFrame label="my sites · mobile">
    <div style={{ padding: '20px 18px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 22 }}>
        <Glyph name="menu" size={16} color="var(--ink)" />
        <span style={{ fontFamily: 'var(--serif)', fontSize: 16 }}>My sites</span>
        <Glyph name="plus" size={16} color="var(--ink)" />
      </div>
      <div className="sk sk-2" style={{ background: 'var(--paper)', padding: 0, overflow: 'hidden', marginBottom: 12 }}>
        <div className="ph" style={{ height: 90, fontSize: 9 }}>preview</div>
        <div style={{ padding: 12 }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 15 }}>Mike's Pizza</div>
          <div className="mono" style={{ marginTop: 4, fontSize: 9 }}>mikespizza.com</div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 10, paddingTop: 8, borderTop: '1px solid var(--rule-2)' }}>
            <span className="chip chip-mono" style={{ borderColor: 'var(--accent)', color: 'var(--accent-ink)', padding: '1px 6px', fontSize: 9 }}><span className="sdot sdot-on" />live</span>
            <Glyph name="arrow-r" size={12} color="var(--ink-3)" />
          </div>
        </div>
      </div>
      <div className="sk sk-2" style={{ background: 'var(--paper)', padding: 0, overflow: 'hidden', marginBottom: 12 }}>
        <div className="ph" style={{ height: 90, fontSize: 9 }}>preview</div>
        <div style={{ padding: 12 }}>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 15 }}>Bloom Florist</div>
          <div className="mono" style={{ marginTop: 4, fontSize: 9 }}>bloom.pages.dev</div>
        </div>
      </div>
    </div>
  </MobileFrame>
);

window.DashEmptyV1 = DashEmptyV1;
window.DashSitesV1 = DashSitesV1;
window.DashSiteDetail = DashSiteDetail;
window.ResultScreen = ResultScreen;
window.PricingScreen = PricingScreen;
window.TrialEndState = TrialEndState;
window.MobileLanding = MobileLanding;
window.MobileGenerate = MobileGenerate;
window.MobileDash = MobileDash;
