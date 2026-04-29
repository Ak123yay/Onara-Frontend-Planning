// Onara — Build flow: search, confirm, style

const BuildHeader = ({ step, go }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 48px', borderBottom: '1px solid var(--rule-2)' }}>
    <div onClick={() => go('landing')} style={{ cursor: 'pointer' }}><Logo /></div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 14, fontSize: 12, color: 'var(--ink-3)' }}>
      <Stp n="1" l="Find" active={step >= 1} done={step > 1} />
      <Tick />
      <Stp n="2" l="Confirm" active={step >= 2} done={step > 2} />
      <Tick />
      <Stp n="3" l="Style" active={step >= 3} done={step > 3} />
      <Tick />
      <Stp n="4" l="Build" active={step >= 4} done={step > 4} />
    </div>
    <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>No account needed yet</div>
  </div>
);
const Tick = () => <span style={{ width: 24, height: 1, background: 'var(--rule)' }} />;
const Stp = ({ n, l, active, done }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 8, opacity: active ? 1 : 0.5 }}>
    <span style={{ width: 22, height: 22, borderRadius: '50%', background: done ? 'var(--ink)' : (active ? 'var(--accent)' : 'var(--paper-2)'), color: done || active ? 'white' : 'var(--ink-3)', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500 }}>
      {done ? <Icon name="check" size={11} color="white" stroke={2} /> : n}
    </span>
    <span style={{ color: active ? 'var(--ink)' : 'var(--ink-3)', fontWeight: active ? 500 : 400 }}>{l}</span>
  </div>
);

// SEARCH ─────────────────────────────────────────────────────────
const SUGGESTIONS = [
  { name: "Lupita's Tacos", addr: "1248 César Chávez Ave, Los Angeles, CA", rating: 4.7, n: 842 },
  { name: "Lupita's Pizzeria", addr: "300 Main St, Brooklyn, NY", rating: 4.4, n: 211 },
  { name: "Lupita's Café", addr: "55 Mission St, San Francisco, CA", rating: 4.6, n: 96 },
];

const Search = ({ go }) => {
  const [q, setQ] = React.useState("Lupita's");
  const [open, setOpen] = React.useState(true);

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <BuildHeader step={1} go={go} />
      <div style={{ flex: 1, display: 'flex', alignItems: 'flex-start', justifyContent: 'center', paddingTop: 120 }}>
        <div style={{ width: 620 }} className="fade-up">
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: 16 }}>Step 1 of 4</div>
          <h1 className="serif" style={{ fontSize: 48, textAlign: 'center', margin: '0 0 12px', lineHeight: 1.05 }}>
            What's your business called?
          </h1>
          <p style={{ textAlign: 'center', color: 'var(--ink-3)', fontSize: 15, marginBottom: 40 }}>
            We'll pull everything we need from your Google listing.
          </p>

          <div style={{ position: 'relative' }}>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: 20, top: '50%', transform: 'translateY(-50%)' }}>
                <Icon name="search" size={18} color="var(--ink-3)" />
              </span>
              <input
                className="input"
                value={q}
                onChange={e => { setQ(e.target.value); setOpen(true); }}
                onFocus={() => setOpen(true)}
                placeholder="Restaurant name + city"
                style={{ padding: '20px 20px 20px 52px', fontSize: 17, borderRadius: 14 }}
              />
            </div>

            {open && q && (
              <div className="fade-in" style={{ position: 'absolute', top: 'calc(100% + 8px)', left: 0, right: 0, background: 'var(--paper)', border: '1px solid var(--rule)', borderRadius: 14, overflow: 'hidden', boxShadow: '0 12px 32px rgba(0,0,0,0.06)' }}>
                {SUGGESTIONS.map((s, i) => (
                  <div key={i}
                    onClick={() => go('confirm')}
                    style={{ padding: '14px 18px', borderTop: i ? '1px solid var(--rule-2)' : 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 14, transition: 'background 0.12s' }}
                    onMouseEnter={e => e.currentTarget.style.background = 'var(--paper-2)'}
                    onMouseLeave={e => e.currentTarget.style.background = 'transparent'}>
                    <Icon name="pin" size={16} color="var(--ink-3)" />
                    <div style={{ flex: 1 }}>
                      <div style={{ fontSize: 14, fontWeight: 500 }}>{s.name}</div>
                      <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{s.addr}</div>
                    </div>
                    <div style={{ fontSize: 11, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Icon name="star" size={11} color="var(--accent)" />{s.rating} ({s.n})
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

          <div style={{ marginTop: 60, display: 'flex', justifyContent: 'center', gap: 24, fontSize: 12, color: 'var(--ink-3)' }}>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="check" size={12} color="var(--accent)" /> Reads your hours, menu, photos</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="check" size={12} color="var(--accent)" /> Pulls your top reviews</span>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: 6 }}><Icon name="check" size={12} color="var(--accent)" /> Uses your real photos</span>
          </div>
        </div>
      </div>
    </div>
  );
};

// CONFIRM ────────────────────────────────────────────────────────
const Confirm = ({ go }) => {
  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <BuildHeader step={2} go={go} />
      <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 0' }}>
        <div style={{ width: 720 }} className="fade-up">
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: 14 }}>Step 2 of 4</div>
          <h1 className="serif" style={{ fontSize: 40, textAlign: 'center', margin: '0 0 8px', lineHeight: 1.05 }}>Is this you?</h1>
          <p style={{ textAlign: 'center', color: 'var(--ink-3)', fontSize: 14, marginBottom: 32 }}>
            We found one match. Confirm what we got and fill in two missing pieces.
          </p>

          <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr' }}>
              <div className="ph" style={{ borderRadius: 0, height: '100%', minHeight: 240, fontSize: 9 }}>STOREFRONT</div>
              <div style={{ padding: 24 }}>
                <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', marginBottom: 4 }}>
                  <h2 className="serif" style={{ margin: 0, fontSize: 26, fontWeight: 500 }}>Lupita's Tacos</h2>
                  <span className="chip" style={{ background: 'var(--paper-2)', fontSize: 10 }}><Icon name="check" size={10} stroke={2.4} color="var(--accent)" /> Verified on Google</span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 16 }}>Mexican · $$ · 4.7 ★ (842 reviews)</div>

                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, fontSize: 13 }}>
                  <Field l="Address" v="1248 César Chávez Ave, LA" />
                  <Field l="Phone" v="(323) 555-0142" />
                  <Field l="Hours" v="Mon–Sat · 11 AM – 9 PM" />
                  <Field l="Menu" v="42 items imported" />
                  <Field l="Photos" v="38 photos available" />
                  <Field l="Cuisine" v="Mexican, Tacos, Family-run" />
                </div>
              </div>
            </div>

            {/* Missing fields */}
            <div style={{ background: 'var(--warn-soft)', borderTop: '1px solid #e8d5a1', padding: '18px 24px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 12 }}>
                <span style={{ width: 18, height: 18, borderRadius: '50%', background: 'var(--warn)', color: 'white', fontSize: 11, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>!</span>
                <span style={{ fontSize: 13, fontWeight: 500 }}>Two things we couldn't find — fill them in to make the site great</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 14 }}>
                <div>
                  <label style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Your story (1–2 sentences)</label>
                  <textarea className="input" rows={2} style={{ marginTop: 6, fontSize: 13, resize: 'none' }} defaultValue="Family-run since 1995. Three generations cooking the recipes my abuela brought from Jalisco." />
                </div>
                <div>
                  <label style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>What you're known for</label>
                  <input className="input" style={{ marginTop: 6, fontSize: 13 }} defaultValue="Hand-pressed tortillas, slow-braised al pastor" />
                </div>
              </div>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 28 }}>
            <button className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--ink-3)' }} onClick={() => go('search')}>
              <Icon name="arrowL" size={13} /> Back
            </button>
            <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
              <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>Wrong place? <a className="link-arrow" onClick={() => go('search')}>Search again</a></span>
              <button className="btn btn-accent btn-lg" onClick={() => go('style')}>
                Yes, that's us <Icon name="arrow" size={14} color="white" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const Field = ({ l, v }) => (
  <div>
    <div style={{ fontSize: 10, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: 4 }}>{l}</div>
    <div style={{ color: 'var(--ink)' }}>{v}</div>
  </div>
);

// STYLE ──────────────────────────────────────────────────────────
const STYLES = [
  { id: 'warm', label: 'Warm & rustic', sub: 'Earth tones, serif, family-feel', colors: ['#5c2818', '#b15a3a', '#f0d9c8', '#faf7f2'], fontHero: 'Fraunces', fontBody: 'Inter' },
  { id: 'clean', label: 'Clean & modern', sub: 'White space, sans-serif, bright', colors: ['#1a1815', '#5b8a5a', '#e8f0e6', '#ffffff'], fontHero: 'Inter', fontBody: 'Inter' },
  { id: 'bold', label: 'Bold & editorial', sub: 'Big type, high contrast', colors: ['#0c0c0c', '#d94a2c', '#f4f1ea', '#ffffff'], fontHero: 'Fraunces', fontBody: 'Inter' },
  { id: 'soft', label: 'Soft & local', sub: 'Pastels, hand-feel, friendly', colors: ['#3a3a52', '#dba374', '#e8e0d0', '#fbf6ee'], fontHero: 'Fraunces', fontBody: 'Inter' },
];

const Style = ({ go }) => {
  const [pick, setPick] = React.useState('warm');
  const [vibes, setVibes] = React.useState(['Cozy', 'Family']);
  const VIBES = ['Cozy', 'Bright', 'Refined', 'Playful', 'Family', 'Date-night', 'Lively', 'Quiet'];
  const toggle = v => setVibes(vs => vs.includes(v) ? vs.filter(x => x !== v) : [...vs, v]);

  return (
    <div style={{ minHeight: '100%', display: 'flex', flexDirection: 'column' }}>
      <BuildHeader step={3} go={go} />
      <div style={{ flex: 1, padding: '40px 80px' }}>
        <div className="fade-up" style={{ maxWidth: 1100, margin: '0 auto' }}>
          <div className="eyebrow" style={{ textAlign: 'center', marginBottom: 14 }}>Step 3 of 4</div>
          <h1 className="serif" style={{ fontSize: 40, textAlign: 'center', margin: '0 0 8px' }}>Pick a feel.</h1>
          <p style={{ textAlign: 'center', color: 'var(--ink-3)', fontSize: 14, marginBottom: 36 }}>You can change anything later. The agents will use this as a starting point.</p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 40 }}>
            {STYLES.map(s => (
              <div key={s.id} onClick={() => setPick(s.id)} style={{
                background: 'var(--paper)', border: `1.5px solid ${pick === s.id ? 'var(--ink)' : 'var(--rule-2)'}`, borderRadius: 14,
                padding: 16, cursor: 'pointer', transition: 'all 0.15s',
                boxShadow: pick === s.id ? '0 8px 24px rgba(0,0,0,0.06)' : 'none',
                position: 'relative',
              }}>
                {pick === s.id && <div style={{ position: 'absolute', top: 12, right: 12, width: 20, height: 20, borderRadius: '50%', background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={11} color="white" stroke={2.4} /></div>}
                {/* Mini preview */}
                <div style={{ height: 140, borderRadius: 8, overflow: 'hidden', marginBottom: 14, background: s.colors[3], border: '1px solid var(--rule-2)' }}>
                  <div style={{ height: 70, background: s.colors[0], padding: 12, display: 'flex', alignItems: 'flex-end' }}>
                    <div style={{ fontFamily: s.fontHero === 'Fraunces' ? 'var(--serif)' : 'var(--ui)', color: 'white', fontSize: 16, lineHeight: 1, fontWeight: s.fontHero === 'Fraunces' ? 400 : 600 }}>Lupita's</div>
                  </div>
                  <div style={{ padding: 10 }}>
                    <div style={{ height: 4, borderRadius: 2, background: s.colors[1], width: '60%', marginBottom: 6 }} />
                    <div style={{ height: 3, borderRadius: 2, background: s.colors[2], width: '90%', marginBottom: 4 }} />
                    <div style={{ height: 3, borderRadius: 2, background: s.colors[2], width: '75%' }} />
                  </div>
                </div>
                <div style={{ fontSize: 14, fontWeight: 500, marginBottom: 2 }}>{s.label}</div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{s.sub}</div>
                <div style={{ display: 'flex', gap: 4, marginTop: 10 }}>
                  {s.colors.map((c, i) => <div key={i} style={{ width: 14, height: 14, borderRadius: '50%', background: c, border: '1px solid var(--rule-2)' }} />)}
                </div>
              </div>
            ))}
          </div>

          <div style={{ background: 'var(--paper-2)', borderRadius: 14, padding: 24, marginBottom: 32 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 14 }}>
              <div>
                <div style={{ fontSize: 14, fontWeight: 500 }}>What's the vibe? <span style={{ color: 'var(--ink-3)', fontWeight: 400 }}>(pick any)</span></div>
                <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>This shapes the copy our writer agent generates.</div>
              </div>
              <span className="mono" style={{ fontSize: 10 }}>{vibes.length} selected</span>
            </div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
              {VIBES.map(v => (
                <span key={v} className={"chip " + (vibes.includes(v) ? 'active' : '')} onClick={() => toggle(v)}>{v}</span>
              ))}
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <button className="btn-ghost" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: 13, color: 'var(--ink-3)' }} onClick={() => go('confirm')}>
              <Icon name="arrowL" size={13} /> Back
            </button>
            <button className="btn btn-accent btn-lg" onClick={() => go('generation')}>
              Build my site <Icon name="sparkle" size={14} color="white" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

window.Search = Search;
window.Confirm = Confirm;
window.Style = Style;
