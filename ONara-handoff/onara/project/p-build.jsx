// Build flow — search → confirm → style preferences
const { useState: uS_build } = React;

const StepIndicator = ({ current, steps }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 0, justifyContent: 'center', marginBottom: 56 }}>
    {steps.map((s, i) => (
      <React.Fragment key={s}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div style={{
            width: 26, height: 26, borderRadius: '50%',
            background: i < current ? 'var(--ink)' : i === current ? 'var(--accent)' : 'var(--paper)',
            border: '1px solid ' + (i <= current ? 'transparent' : 'var(--rule)'),
            color: i <= current ? 'white' : 'var(--ink-4)',
            fontSize: 11, fontWeight: 600,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontFamily: 'var(--mono)'
          }}>
            {i < current ? <Ic name="check" size={12} color="white"/> : i + 1}
          </div>
          <span style={{ fontSize: 12.5, color: i === current ? 'var(--ink)' : 'var(--ink-3)', fontWeight: i === current ? 500 : 400 }}>{s}</span>
        </div>
        {i < steps.length - 1 && <div style={{ width: 36, height: 1, background: 'var(--rule)', margin: '0 18px' }}/>}
      </React.Fragment>
    ))}
  </div>
);

const BuildFlow = ({ go, initialQ = '', user }) => {
  const [step, setStep] = uS_build(0);
  const [query, setQuery] = uS_build(initialQ);
  const [results, setResults] = uS_build(null);
  const [chosen, setChosen] = uS_build(null);
  const [tone, setTone] = uS_build('Friendly');
  const [colorStyle, setColorStyle] = uS_build('Auto');
  const [layout, setLayout] = uS_build('Modern');
  const [extra, setExtra] = uS_build('');

  const SAMPLE = [
    { id: '1', name: "Mike's Pizza", addr: '218 Congress Ave, Austin TX', phone: '(512) 555-0182', rating: 4.6, reviews: 312, hours: 'Open · closes 10pm', emoji: '🍕', color: 'oklch(0.62 0.13 50)' },
    { id: '2', name: "Mike's Pizzeria", addr: '5500 Burnet Rd, Austin TX', phone: '(512) 555-0244', rating: 4.3, reviews: 89, hours: 'Closed · opens 11am', emoji: '🍕', color: 'oklch(0.55 0.10 30)' },
    { id: '3', name: "Mike's Mobile Pizza", addr: 'East 6th St, Austin TX', phone: null, rating: 4.8, reviews: 47, hours: 'Hours vary', emoji: '🚚', color: 'oklch(0.58 0.12 70)' },
  ];

  const doSearch = () => setResults(SAMPLE);

  const STEPS = ['Find', 'Confirm', 'Style', 'Generate'];

  return (
    <DashShell go={go} current="build" user={user}>
      <div style={{ padding: '60px 40px 40px', maxWidth: 920, margin: '0 auto' }}>
        <StepIndicator current={step} steps={STEPS}/>

        {/* STEP 1: SEARCH */}
        {step === 0 && (
          <div className="fadein-up">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Step 1 · Find your business</div>
              <h1 className="serif" style={{ fontSize: 48, lineHeight: 1.05, margin: 0, fontWeight: 400 }}>
                Where are you on <span className="serif-italic">Google</span>?
              </h1>
              <p style={{ fontSize: 14.5, color: 'var(--ink-3)', marginTop: 14 }}>We'll pull your real address, hours, photos, and reviews.</p>
            </div>

            <div style={{ display: 'flex', gap: 10, padding: 8, background: 'var(--paper)', border: '1px solid var(--ink)', borderRadius: 4, boxShadow: '0 6px 24px rgba(0,0,0,0.05)' }}>
              <div style={{ paddingLeft: 14, display: 'flex', alignItems: 'center' }}><Ic name="search" size={18} color="var(--ink-3)"/></div>
              <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="e.g. Mike's Pizza Austin TX" style={{ flex: 1, fontSize: 15, padding: '14px 0', border: 'none', background: 'transparent', outline: 'none' }}/>
              <button className="btn btn-accent" onClick={doSearch} style={{ padding: '12px 22px' }}>Search Google</button>
            </div>

            {results && (
              <div style={{ marginTop: 32 }} className="fadein-up">
                <div className="mono" style={{ marginBottom: 14 }}>3 matches found</div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                  {results.map(r => (
                    <div key={r.id} className="card hover-lift" style={{ padding: 18, display: 'flex', gap: 18, cursor: 'pointer' }}
                      onClick={() => { setChosen(r); setStep(1); }}>
                      <div style={{ width: 64, height: 64, borderRadius: 4, background: r.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 32, flexShrink: 0 }}>{r.emoji}</div>
                      <div style={{ flex: 1 }}>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: 12 }}>
                          <div className="serif" style={{ fontSize: 19, fontWeight: 500 }}>{r.name}</div>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 12, color: 'var(--ink-3)' }}>
                            <Ic name="star-fill" size={11} color="var(--accent)"/> {r.rating} · {r.reviews}
                          </div>
                        </div>
                        <div style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 4 }}>{r.addr}</div>
                        <div style={{ fontSize: 12, color: 'var(--ink-4)', marginTop: 4, display: 'flex', gap: 14 }}>
                          <span>{r.phone || <span style={{ color: 'var(--accent-ink)' }}>· no phone on file</span>}</span>
                          <span>{r.hours}</span>
                        </div>
                      </div>
                      <Ic name="arrow-r" size={16} color="var(--ink-4)"/>
                    </div>
                  ))}
                </div>
                <div style={{ textAlign: 'center', marginTop: 24, fontSize: 13, color: 'var(--ink-3)' }}>
                  Not here? <a style={{ color: 'var(--accent-ink)', textDecoration: 'underline', cursor: 'pointer' }} onClick={() => { setChosen({ id: 'manual', name: 'New Business', addr: '', phone: '', emoji: '✨', color: 'var(--accent)' }); setStep(1); }}>Enter manually</a>
                </div>
              </div>
            )}

            {!results && (
              <div style={{ textAlign: 'center', marginTop: 40, color: 'var(--ink-4)', fontSize: 13 }}>
                <div className="hand" style={{ fontSize: 17, marginBottom: 6 }}>↑ try the example above</div>
              </div>
            )}
          </div>
        )}

        {/* STEP 2: CONFIRM */}
        {step === 1 && chosen && (
          <div className="fadein-up">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Step 2 · Confirm</div>
              <h1 className="serif" style={{ fontSize: 48, lineHeight: 1.05, margin: 0, fontWeight: 400 }}>Is this <span className="serif-italic">you</span>?</h1>
            </div>

            <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
              <div style={{ height: 180, background: chosen.color, display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 80 }}>{chosen.emoji}</div>
              <div style={{ padding: 28 }}>
                <div className="mono" style={{ marginBottom: 6 }}>From Google Maps</div>
                <div className="serif" style={{ fontSize: 30, fontWeight: 500 }}>{chosen.name}</div>
                <div style={{ marginTop: 18, display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 18 }}>
                  <Field icon="pin" label="Address" value={chosen.addr || 'Add your address'} missing={!chosen.addr}/>
                  <Field icon="phone" label="Phone" value={chosen.phone} missing={!chosen.phone}/>
                  <Field icon="clock" label="Hours" value={chosen.hours || 'Add your hours'} missing={!chosen.hours}/>
                  <Field icon="star" label="Reviews" value={chosen.rating ? `${chosen.rating} ★ · ${chosen.reviews} reviews` : 'No reviews yet'}/>
                </div>
                <div style={{ marginTop: 20, padding: 14, background: 'var(--accent-softer)', borderRadius: 3, fontSize: 12.5, color: 'var(--accent-ink)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
                  <Ic name="sparkle" size={14} color="var(--accent-ink)"/>
                  <span>We'll also import 4 photos and your top 3 reviews to feature on the homepage.</span>
                </div>
              </div>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 28, justifyContent: 'space-between' }}>
              <button className="btn btn-ghost" onClick={() => setStep(0)}><Ic name="arrow-l" size={14} color="currentColor"/> Search again</button>
              <button className="btn btn-accent" onClick={() => setStep(2)}>Looks right — continue <Ic name="arrow-r" size={14} color="white"/></button>
            </div>
          </div>
        )}

        {/* STEP 3: STYLE */}
        {step === 2 && (
          <div className="fadein-up">
            <div style={{ textAlign: 'center', marginBottom: 40 }}>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Step 3 · Style preferences</div>
              <h1 className="serif" style={{ fontSize: 48, lineHeight: 1.05, margin: 0, fontWeight: 400 }}>How should it <span className="serif-italic">feel</span>?</h1>
              <p style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 12 }}>All optional. Skip and we'll use smart defaults for your industry.</p>
            </div>

            <div className="card" style={{ padding: 32 }}>
              <Pills label="Tone" options={['Professional', 'Friendly', 'Bold', 'Minimal', 'Luxurious']} value={tone} onChange={setTone}/>
              <div style={{ height: 24 }}/>
              <Pills label="Color style" options={['Auto', 'Dark', 'Light', 'Vibrant', 'Earthy']} value={colorStyle} onChange={setColorStyle}/>
              <div style={{ height: 24 }}/>
              <Pills label="Layout" options={['Modern', 'Classic', 'Bold & Graphic', 'Clean & Simple']} value={layout} onChange={setLayout}/>
              <div style={{ height: 28 }}/>
              <label className="mono" style={{ display: 'block', marginBottom: 8 }}>Anything else?</label>
              <textarea className="input" rows={4} value={extra} onChange={(e) => setExtra(e.target.value)}
                placeholder="e.g. We do emergency callouts 24/7. Brand colors are navy and white. Mention our family-owned story."/>
            </div>

            <div style={{ display: 'flex', gap: 12, marginTop: 28, justifyContent: 'space-between' }}>
              <button className="btn btn-ghost" onClick={() => setStep(1)}><Ic name="arrow-l" size={14} color="currentColor"/> Back</button>
              <button className="btn btn-accent btn-lg" onClick={() => go('generating', { business: chosen, tone, colorStyle, layout, extra })}>
                <Ic name="sparkle" size={15} color="white"/> Generate my site
              </button>
            </div>
          </div>
        )}
      </div>
    </DashShell>
  );
};

const Field = ({ icon, label, value, missing }) => (
  <div style={{ padding: 14, border: '1px solid ' + (missing ? 'oklch(0.78 0.10 80)' : 'var(--rule-2)'), borderRadius: 3, background: missing ? 'var(--warn-soft)' : 'transparent' }}>
    <div className="mono" style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
      <Ic name={icon} size={11} color="currentColor"/> {label}
      {missing && <span className="badge badge-warn" style={{ marginLeft: 'auto' }}>Missing</span>}
    </div>
    <div style={{ fontSize: 13.5, color: missing ? 'var(--accent-ink)' : 'var(--ink)' }}>{value}</div>
  </div>
);

const Pills = ({ label, options, value, onChange }) => (
  <div>
    <div className="mono" style={{ marginBottom: 10 }}>{label}</div>
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
      {options.map(o => (
        <button key={o} className={`chip ${value === o ? 'chip-active' : ''}`} onClick={() => onChange(o)} style={{ padding: '8px 14px', fontSize: 13 }}>{o}</button>
      ))}
    </div>
  </div>
);

window.BuildFlow = BuildFlow;
