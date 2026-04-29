// === Build flow wireframes — search → confirm Google → style prefs ===

// Step indicator (shared)
const StepDots = ({ step = 1, total = 4, labels = ['Search', 'Confirm', 'Style', 'Generate'] }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.08em', textTransform: 'uppercase', color: 'var(--ink-3)' }}>
    {labels.map((l, i) => (
      <React.Fragment key={l}>
        <span style={{ display: 'flex', alignItems: 'center', gap: 6, color: i + 1 === step ? 'var(--ink)' : i + 1 < step ? 'var(--ink-3)' : 'var(--ink-4)' }}>
          <span className={`sdot ${i + 1 < step ? 'sdot-done' : i + 1 === step ? 'sdot-on' : 'sdot-pending'}`} />
          {l}
        </span>
        {i < labels.length - 1 && <span style={{ width: 16, height: 1, background: 'var(--rule)' }} />}
      </React.Fragment>
    ))}
  </div>
);

const ShellHeader = ({ step }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 32px', borderBottom: '1px solid var(--rule-2)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 22, height: 22, border: '1.5px solid var(--ink)', borderRadius: '50%', filter: 'url(#wobble-1)' }} />
      <span style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500 }}>Onara</span>
    </div>
    <StepDots step={step} />
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: 'var(--ink-3)' }}>
      <span>Save & exit</span>
      <div className="ph-circle" style={{ width: 28, height: 28 }} />
    </div>
  </div>
);

// === BUILD STEP 1 — SEARCH ===

// V1: Centered single input, very Stripe/Linear minimal
const BuildSearchV1 = () => (
  <div className="screen wf-paper">
    <ShellHeader step={1} />
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 80px', position: 'relative' }}>
      <div style={{ maxWidth: 560, width: '100%', textAlign: 'center' }}>
        <div className="mono" style={{ marginBottom: 20 }}>Step 1 of 4</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.02em', margin: 0 }}>
          What's your business called?
        </h2>
        <p style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 14 }}>
          We'll pull your details straight from Google Maps.
        </p>
        <div className="sk" style={{ marginTop: 36, display: 'flex', alignItems: 'center', padding: '4px 4px 4px 16px', background: 'var(--paper)' }}>
          <Glyph name="search" size={16} color="var(--ink-3)" />
          <div style={{ flex: 1, padding: '14px 12px', fontSize: 15, color: 'var(--ink)', textAlign: 'left' }}>Mike's Pizza, Austin TX|</div>
          <span className="btn btn-accent">Continue →</span>
        </div>
        <div style={{ marginTop: 14, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, fontSize: 12, color: 'var(--ink-3)' }}>
          <Glyph name="globe" size={12} color="var(--ink-3)" />
          <span>Powered by Google Places</span>
        </div>

        {/* dropdown suggestions hint */}
        <div className="sk sk-rule" style={{ marginTop: 18, padding: 0, textAlign: 'left' }}>
          {[
            { name: "Mike's Pizza", addr: '218 Congress Ave · Austin, TX' },
            { name: "Mike's Pizzeria & Subs", addr: '4101 Burnet Rd · Austin, TX' },
            { name: "Big Mike's Pizza Co.", addr: '901 W 6th St · Austin, TX' },
          ].map((r, i) => (
            <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '12px 14px', borderBottom: i < 2 ? '1px solid var(--rule-2)' : 'none', background: i === 0 ? 'var(--paper-2)' : 'transparent' }}>
              <Glyph name="pin" size={14} color="var(--ink-3)" />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13, fontWeight: 500 }}>{r.name}</div>
                <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>{r.addr}</div>
              </div>
              {i === 0 && <Glyph name="arrow-r" size={14} color="var(--ink)" />}
            </div>
          ))}
        </div>
      </div>
      <div className="anno" style={{ top: 220, right: 90, transform: 'rotate(3deg)' }}>
        Google places typeahead<br/>under input
      </div>
    </div>
  </div>
);

// V2: Two-column with map preview + manual fallback affordance
const BuildSearchV2 = () => (
  <div className="screen wf-paper">
    <ShellHeader step={1} />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 0 }}>
      <div style={{ padding: '80px 60px', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="mono" style={{ marginBottom: 16 }}>01 / search</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 40, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
          Find your business on Google.
        </h2>
        <div className="sk" style={{ marginTop: 32, display: 'flex', alignItems: 'center', padding: '4px 4px 4px 16px' }}>
          <Glyph name="search" size={16} color="var(--ink-3)" />
          <div style={{ flex: 1, padding: '14px 12px', fontSize: 14, color: 'var(--ink-3)' }}>Search by name or phone…</div>
          <span className="btn btn-accent">Find</span>
        </div>
        <div className="squiggle-thin" style={{ marginTop: 32 }} />
        <div style={{ marginTop: 20, fontSize: 13, color: 'var(--ink-3)' }}>
          Not on Google yet? <span style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Enter details manually →</span>
        </div>
      </div>
      <div style={{ background: 'var(--paper-2)', borderLeft: '1px solid var(--rule-2)', position: 'relative', overflow: 'hidden' }}>
        <div className="ph" style={{ position: 'absolute', inset: 0, fontSize: 11 }}>map preview · pinned result</div>
        <div className="sk" style={{ position: 'absolute', top: 60, left: 60, right: 60, padding: 14, background: 'var(--paper)' }}>
          <div style={{ display: 'flex', gap: 12 }}>
            <div className="ph" style={{ width: 60, height: 60 }}>logo</div>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 16 }}>Mike's Pizza</div>
              <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>218 Congress Ave, Austin TX</div>
              <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>★ 4.6 · 312 reviews</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// === BUILD STEP 2 — CONFIRM ===

// V1: Card with editable amber missing fields
const BuildConfirmV1 = () => (
  <div className="screen wf-paper">
    <ShellHeader step={2} />
    <div style={{ flex: 1, padding: '50px 80px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
      <div style={{ width: '100%', maxWidth: 720 }}>
        <div className="mono" style={{ marginBottom: 8 }}>Step 2 of 4</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 36, letterSpacing: '-0.02em', margin: 0 }}>
          Is this you?
        </h2>
        <p style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 8 }}>Pulled from Google Maps. Anything in <span style={{ color: 'var(--accent-ink)' }}>amber</span> needs your help.</p>

        <div className="sk sk-2" style={{ marginTop: 28, padding: 0, overflow: 'hidden' }}>
          <div className="ph" style={{ height: 160 }}>storefront photo · pulled from Google</div>
          <div style={{ padding: 24 }}>
            <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', marginBottom: 4 }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 26, letterSpacing: '-0.01em' }}>Mike's Pizza</div>
              <span className="chip chip-soft chip-mono">Pizzeria</span>
            </div>
            <div style={{ display: 'flex', gap: 6, marginBottom: 18, alignItems: 'center' }}>
              {[1,2,3,4].map(i => <Glyph key={i} name="star" size={11} color="var(--accent)" />)}
              <Glyph name="star" size={11} color="var(--ink-4)" />
              <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>4.6 · 312 Google reviews</span>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '120px 1fr auto', rowGap: 16, columnGap: 18, alignItems: 'center', fontSize: 13 }}>
              <div className="mono">Address</div>
              <div>218 Congress Ave, Austin, TX 78701</div>
              <Glyph name="edit" size={12} color="var(--ink-3)" />

              <div className="mono">Phone</div>
              <div>(512) 555-0182</div>
              <Glyph name="edit" size={12} color="var(--ink-3)" />

              <div className="mono">Hours</div>
              <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                Mon–Thu 11a–10p · Fri–Sat 11a–11p · Sun 12p–9p
              </div>
              <Glyph name="edit" size={12} color="var(--ink-3)" />

              <div className="mono">Website</div>
              <div className="sk-fill-warn" style={{ padding: '8px 12px', borderLeft: '2px solid var(--accent)', fontSize: 12 }}>
                <span style={{ color: 'var(--accent-ink)' }}>Missing on Google.</span> Add a URL or skip — we'll publish at <span style={{ fontFamily: 'var(--mono)' }}>mikes-pizza.pages.dev</span>
              </div>
              <Glyph name="plus" size={12} color="var(--accent-ink)" />

              <div className="mono">Email</div>
              <div className="sk-fill-warn" style={{ padding: '8px 12px', borderLeft: '2px solid var(--accent)', fontSize: 12, color: 'var(--accent-ink)' }}>
                Add for the contact form (optional)
              </div>
              <Glyph name="plus" size={12} color="var(--accent-ink)" />
            </div>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 32 }}>
          <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>← Wrong place? <span style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Search again</span></span>
          <span className="btn btn-accent">Confirm & continue →</span>
        </div>
      </div>

      <div className="anno anno-multi" style={{ top: 320, right: 30, transform: 'rotate(2deg)' }}>
        amber rows = missing<br/>on Google. inline editable.
      </div>
    </div>
  </div>
);

// V2: Side rail with raw data + sectioned card
const BuildConfirmV2 = () => (
  <div className="screen wf-paper">
    <ShellHeader step={2} />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 320px' }}>
      <div style={{ padding: '40px 60px', overflow: 'auto' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 32, margin: 0 }}>Confirm your details</h2>
        <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 6 }}>Each section is editable. We'll only use what you keep.</p>

        {[
          { t: 'Identity', items: ['Mike\'s Pizza', 'Pizzeria · Italian'], complete: true },
          { t: 'Location', items: ['218 Congress Ave', 'Austin, TX 78701'], complete: true },
          { t: 'Contact', items: ['(512) 555-0182', '— no email on file'], complete: false },
          { t: 'Hours', items: ['Mon–Sun, regular schedule'], complete: true },
          { t: 'Photos', items: ['12 imported from Google'], complete: true },
        ].map((s) => (
          <div key={s.t} className="sk sk-rule" style={{ marginTop: 14, padding: 16, display: 'flex', alignItems: 'center', gap: 16 }}>
            <span className={`sdot ${s.complete ? 'sdot-done' : 'sdot-on'}`} />
            <div style={{ flex: 1 }}>
              <div style={{ fontSize: 12, fontFamily: 'var(--mono)', textTransform: 'uppercase', letterSpacing: '0.08em', color: 'var(--ink-3)', marginBottom: 4 }}>{s.t}</div>
              <div style={{ fontSize: 13 }}>{s.items.join(' · ')}</div>
            </div>
            {!s.complete && <span className="chip" style={{ borderColor: 'var(--accent)', color: 'var(--accent-ink)' }}>Add</span>}
            <Glyph name="arrow-r" size={14} color="var(--ink-3)" />
          </div>
        ))}

        <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: 24 }}>
          <span className="btn btn-accent">Continue to style →</span>
        </div>
      </div>
      <div style={{ borderLeft: '1px solid var(--rule-2)', background: 'var(--paper-2)', padding: 24 }}>
        <div className="mono" style={{ marginBottom: 12 }}>Raw from Google</div>
        <div className="sk sk-rule sk-thin" style={{ padding: 12, fontFamily: 'var(--mono)', fontSize: 10, lineHeight: 1.6, background: 'var(--paper)' }}>
{`{
  "place_id": "ChIJ_8_72Az…",
  "name": "Mike's Pizza",
  "rating": 4.6,
  "user_ratings": 312,
  "address": "218 Congress…",
  "phone": "+15125550182",
  "hours": [...],
  "photos": [12 refs],
  "website": null,
  "email": null
}`}
        </div>
        <div className="mono" style={{ marginTop: 16, marginBottom: 8 }}>Wrong listing?</div>
        <div className="btn btn-soft" style={{ width: '100%', justifyContent: 'center' }}>Search again</div>
      </div>
    </div>
  </div>
);

// === BUILD STEP 3 — STYLE PREFERENCES ===

const BuildStyleV1 = () => (
  <div className="screen wf-paper">
    <ShellHeader step={3} />
    <div style={{ flex: 1, padding: '40px 80px', display: 'flex', justifyContent: 'center', position: 'relative' }}>
      <div style={{ width: '100%', maxWidth: 720 }}>
        <div className="mono" style={{ marginBottom: 8 }}>Step 3 of 4 · all optional</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 36, letterSpacing: '-0.02em', margin: 0 }}>
          A few taste questions.
        </h2>
        <p style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 8 }}>Skip any to use smart defaults for a {'\u2009'}<em>pizzeria</em>.</p>

        <div className="sk sk-rule" style={{ marginTop: 28, padding: 24 }}>
          <div className="mono" style={{ marginBottom: 12 }}>Tone</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Professional', 'Friendly', 'Bold', 'Minimal', 'Luxurious'].map((t, i) => (
              <span key={t} className="chip" style={{ background: i === 1 ? 'var(--ink)' : 'var(--paper)', color: i === 1 ? 'var(--paper)' : 'var(--ink)', borderColor: 'var(--ink)' }}>{t}</span>
            ))}
          </div>
        </div>

        <div className="sk sk-rule" style={{ marginTop: 14, padding: 24 }}>
          <div className="mono" style={{ marginBottom: 12 }}>Color direction</div>
          <div style={{ display: 'flex', gap: 12 }}>
            {[
              { name: 'Auto', sw: ['#999', '#ccc', '#eee'] },
              { name: 'Warm', sw: ['#b15a3a', '#e6c19c', '#f7ede0'] },
              { name: 'Cool', sw: ['#2a3b5c', '#7e94b4', '#dce5f0'] },
              { name: 'Earthy', sw: ['#3e4b2c', '#94a36b', '#e7e3cf'] },
              { name: 'Mono', sw: ['#1a1a1a', '#6a6a6a', '#e3e3dc'] },
            ].map((c, i) => (
              <div key={c.name} className="sk sk-rule sk-thin" style={{ padding: 10, flex: 1, background: i === 1 ? 'var(--accent-soft)' : 'var(--paper)' }}>
                <div style={{ display: 'flex', gap: 4, marginBottom: 8 }}>
                  {c.sw.map(s => <div key={s} style={{ flex: 1, height: 28, background: s, border: '1px solid rgba(0,0,0,0.1)' }} />)}
                </div>
                <div style={{ fontSize: 11, fontFamily: 'var(--mono)', textTransform: 'uppercase' }}>{c.name}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sk sk-rule" style={{ marginTop: 14, padding: 24 }}>
          <div className="mono" style={{ marginBottom: 12 }}>Layout density</div>
          <div style={{ display: 'flex', gap: 12 }}>
            {['Airy', 'Balanced', 'Dense'].map((d, i) => (
              <div key={d} className="sk sk-rule sk-thin" style={{ flex: 1, padding: 12, background: i === 1 ? 'var(--accent-soft)' : 'var(--paper)' }}>
                <div style={{ display: 'flex', flexDirection: 'column', gap: i === 0 ? 8 : i === 1 ? 5 : 3, marginBottom: 8 }}>
                  {[...Array(i === 0 ? 3 : i === 1 ? 4 : 5)].map((_, j) => <div key={j} className="bar bar-rule" style={{ height: 4 }} />)}
                </div>
                <div style={{ fontSize: 11, fontFamily: 'var(--mono)', textTransform: 'uppercase' }}>{d}</div>
              </div>
            ))}
          </div>
        </div>

        <div className="sk sk-rule" style={{ marginTop: 14, padding: 24 }}>
          <div className="mono" style={{ marginBottom: 12 }}>Anything else? <span style={{ textTransform: 'none', letterSpacing: 0, color: 'var(--ink-4)' }}>(0/500)</span></div>
          <div style={{ height: 80, border: '1px dashed var(--rule)', borderRadius: 2, padding: 12, fontSize: 12, color: 'var(--ink-4)', fontStyle: 'italic' }}>
            We do delivery til midnight on weekends. Brand colors are red and white.
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28 }}>
          <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>3 revisions / mo on free · resets May 1</span>
          <span className="btn btn-accent" style={{ padding: '14px 28px' }}>✦ Generate my site</span>
        </div>
      </div>
      <div className="anno anno-multi" style={{ top: 200, right: 50, transform: 'rotate(-3deg)' }}>
        every section optional;<br/>skip = smart defaults
      </div>
    </div>
  </div>
);

window.BuildSearchV1 = BuildSearchV1;
window.BuildSearchV2 = BuildSearchV2;
window.BuildConfirmV1 = BuildConfirmV1;
window.BuildConfirmV2 = BuildConfirmV2;
window.BuildStyleV1 = BuildStyleV1;
