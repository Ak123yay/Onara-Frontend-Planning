// Onara — Generation + Result screens

const AGENTS = [
  { id: 1, name: 'Analyst', desc: 'Reading 842 reviews, photos, and your menu', model: 'gpt-oss:20b' },
  { id: 2, name: 'Writer', desc: 'Drafting hero copy, about page, menu descriptions', model: 'qwen3:8b' },
  { id: 3, name: 'Style', desc: 'Picking colors, type, and rhythm from your photos', model: 'qwen3:8b' },
  { id: 4, name: 'Planner', desc: 'Mapping the site structure', model: 'glm-5.1' },
  { id: 5, name: 'Prompt Engineer', desc: 'Briefing the code generator', model: 'glm-5.1' },
  { id: 6, name: 'Code Generator', desc: 'Writing your site, component by component', model: 'copilot' },
  { id: 7, name: 'Debugger', desc: 'Catching issues before you see them', model: 'minimax-m2.7' },
  { id: 8, name: 'SEO', desc: 'Adding metadata and schema for Google', model: 'minimax-m2.5' },
  { id: 9, name: 'QA', desc: 'Validating accessibility and performance', model: 'minimax-m2.5' },
  { id: 10, name: 'Mobile', desc: 'Polishing the small-screen experience', model: 'minimax-m2.5' },
];

const Generation = ({ go }) => {
  const [active, setActive] = React.useState(0);
  const [elapsed, setElapsed] = React.useState(0);

  React.useEffect(() => {
    const tick = setInterval(() => setElapsed(e => e + 1), 1000);
    const adv = setInterval(() => setActive(a => Math.min(AGENTS.length, a + 1)), 1500);
    return () => { clearInterval(tick); clearInterval(adv); };
  }, []);

  React.useEffect(() => {
    if (active >= AGENTS.length) {
      const t = setTimeout(() => go('result'), 1800);
      return () => clearTimeout(t);
    }
  }, [active]);

  return (
    <div style={{ minHeight: '100%', background: 'var(--paper-2)' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 48px', borderBottom: '1px solid var(--rule-2)', background: 'var(--paper)' }}>
        <Logo />
        <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'inline-flex', alignItems: 'center', gap: 8 }}>
          <span className="sdot sdot-on" />
          Building Lupita's Tacos · {String(Math.floor(elapsed / 60)).padStart(2, '0')}:{String(elapsed % 60).padStart(2, '0')}
        </div>
        <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>You can close this tab — we'll email when it's done</div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '420px 1fr', minHeight: 'calc(900px - 65px)' }}>
        {/* Left — agent checklist */}
        <div style={{ padding: '40px 36px', borderRight: '1px solid var(--rule-2)', background: 'var(--paper)' }}>
          <div className="eyebrow" style={{ marginBottom: 8 }}>Step 4 of 4</div>
          <h2 className="serif" style={{ fontSize: 28, margin: '0 0 6px' }}>Ten agents, working live.</h2>
          <p style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 28 }}>You'll see your site fill in as they finish.</p>

          <div>
            {AGENTS.map((a, i) => {
              const state = i < active ? 'done' : i === active ? 'running' : 'pending';
              return (
                <div key={a.id} style={{
                  display: 'flex', gap: 14, padding: '12px 0',
                  borderTop: i ? '1px solid var(--rule-2)' : 'none',
                  opacity: state === 'pending' ? 0.4 : 1,
                  transition: 'opacity 0.4s',
                }}>
                  <div style={{ flexShrink: 0, marginTop: 2 }}>
                    {state === 'done' && <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={11} color="white" stroke={2.4} /></span>}
                    {state === 'running' && <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--accent-soft)', border: '2px solid var(--accent)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><span className="sdot sdot-on" /></span>}
                    {state === 'pending' && <span style={{ width: 22, height: 22, borderRadius: '50%', border: '1.5px solid var(--rule)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 10, color: 'var(--ink-4)' }}>{a.id}</span>}
                  </div>
                  <div style={{ flex: 1, minWidth: 0 }}>
                    <div style={{ display: 'flex', alignItems: 'baseline', justifyContent: 'space-between', gap: 8 }}>
                      <span style={{ fontSize: 13, fontWeight: 500 }}>{a.name}</span>
                      <span className="mono" style={{ fontSize: 9 }}>{a.model}</span>
                    </div>
                    <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{a.desc}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div style={{ marginTop: 24, padding: 14, background: 'var(--paper-2)', borderRadius: 10, fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5 }}>
            <span style={{ color: 'var(--ink)', fontWeight: 500 }}>Why ten?</span> Each agent does one thing well. Smaller, specialized models give you a better site than one big model trying to do everything.
          </div>
        </div>

        {/* Right — live preview filling in */}
        <div style={{ padding: '40px', display: 'flex', flexDirection: 'column' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
            <span className="mono">Live preview</span>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="chip"><Icon name="layers" size={11} /> Desktop</button>
              <button className="chip"><Icon name="phone" size={11} /> Mobile</button>
            </div>
          </div>

          <div style={{ flex: 1, background: 'white', borderRadius: 12, overflow: 'hidden', boxShadow: '0 12px 40px rgba(0,0,0,0.08)', position: 'relative' }}>
            <div className="chrome">
              <div className="chrome-dots"><span className="chrome-dot" /><span className="chrome-dot" /><span className="chrome-dot" /></div>
              <div className="chrome-url">lupitastacos.onara.site</div>
            </div>

            <div style={{ position: 'relative', overflow: 'hidden', height: 'calc(100% - 45px)' }}>
              {/* Hero — fills in at active >= 2 */}
              <div style={{
                height: 220, background: active >= 2 ? 'linear-gradient(135deg, #2a1810 0%, #5c2818 100%)' : 'var(--paper-2)',
                position: 'relative', display: 'flex', alignItems: 'flex-end', padding: 28,
                transition: 'background 0.6s', overflow: 'hidden',
              }}>
                {active >= 2 && (
                  <div className="fade-up" style={{ color: 'white', position: 'relative', zIndex: 1 }}>
                    <div style={{ fontFamily: 'var(--mono)', fontSize: 10, opacity: 0.7, letterSpacing: '0.15em', marginBottom: 10 }}>SINCE 1995 · EAST LA</div>
                    <div className="serif" style={{ fontSize: 44, lineHeight: 1, fontWeight: 500 }}>Lupita's Tacos</div>
                    <div style={{ fontSize: 14, opacity: 0.85, marginTop: 6 }}>Slow-braised, hand-pressed, family-made.</div>
                  </div>
                )}
                {active < 2 && <div style={{ color: 'var(--ink-4)', fontFamily: 'var(--mono)', fontSize: 10, letterSpacing: '0.1em' }}>WAITING FOR WRITER…</div>}
              </div>

              {/* Photo strip — at active >= 3 */}
              {active >= 3 && (
                <div className="fade-up" style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 8, padding: 20 }}>
                  {['AL PASTOR', 'CARNITAS', 'BARBACOA', 'INTERIOR'].map(l => (
                    <div key={l} className="ph" style={{ height: 90, fontSize: 8 }}>{l}</div>
                  ))}
                </div>
              )}

              {/* Story block — at active >= 4 */}
              {active >= 4 && (
                <div className="fade-up" style={{ padding: '0 28px 20px', display: 'grid', gridTemplateColumns: '1fr 200px', gap: 32, alignItems: 'flex-start' }}>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 8 }}>Our story</div>
                    <p className="serif" style={{ fontSize: 22, lineHeight: 1.3, margin: 0, color: 'var(--ink)' }}>
                      Three generations cooking the recipes my abuela brought from Jalisco — every tortilla still pressed by hand.
                    </p>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--ink-3)', borderLeft: '1px solid var(--rule)', paddingLeft: 14 }}>
                    <div style={{ marginBottom: 10 }}>
                      <div className="mono" style={{ fontSize: 9, marginBottom: 2 }}>HOURS</div>
                      <div style={{ color: 'var(--ink)', fontSize: 12 }}>Mon–Sat · 11–9</div>
                    </div>
                    <div>
                      <div className="mono" style={{ fontSize: 9, marginBottom: 2 }}>VISIT</div>
                      <div style={{ color: 'var(--ink)', fontSize: 12 }}>1248 César Chávez Ave</div>
                    </div>
                  </div>
                </div>
              )}

              {/* Menu peek — active >= 6 */}
              {active >= 6 && (
                <div className="fade-up" style={{ padding: '20px 28px', borderTop: '1px solid var(--rule-2)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div className="eyebrow" style={{ marginBottom: 4 }}>Menu</div>
                    <div className="serif" style={{ fontSize: 18 }}>42 dishes, every one made today</div>
                  </div>
                  <span className="link-arrow">View full menu →</span>
                </div>
              )}

              {/* Loading shimmer at edge */}
              {active < AGENTS.length && (
                <div style={{
                  position: 'absolute', bottom: 0, left: 0, right: 0, height: 3,
                  background: 'linear-gradient(90deg, transparent, var(--accent), transparent)',
                  animation: 'shimmer 1.4s infinite',
                  backgroundSize: '200% 100%',
                }} />
              )}
            </div>
          </div>

          <div style={{ marginTop: 14, fontSize: 11, color: 'var(--ink-3)', textAlign: 'center' }}>
            {active < AGENTS.length ? `${active}/10 agents complete · approx. ${Math.max(0, 92 - elapsed)}s remaining` : 'Done. Polishing final touches…'}
          </div>
        </div>
      </div>

      <style>{`@keyframes shimmer { 0% { background-position: 100% 0; } 100% { background-position: -100% 0; } }`}</style>
    </div>
  );
};

// RESULT ─────────────────────────────────────────────────────────
const Result = ({ go }) => (
  <div style={{ minHeight: '100%', background: 'var(--paper-2)' }}>
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '16px 32px', borderBottom: '1px solid var(--rule-2)', background: 'var(--paper)' }}>
      <Logo />
      <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
        <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>Preview · not published yet</span>
        <button className="chip"><Icon name="layers" size={11} /> Desktop</button>
        <button className="chip"><Icon name="phone" size={11} /> Mobile</button>
      </div>
      <div style={{ display: 'flex', gap: 10 }}>
        <button className="btn btn-soft btn-sm" onClick={() => go('revision')}>
          <Icon name="edit" size={12} /> Request changes
        </button>
        <button className="btn btn-accent btn-sm" onClick={() => go('auth')}>
          Save & publish <Icon name="arrow" size={12} color="white" />
        </button>
      </div>
    </div>

    <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 24, height: 'calc(900px - 65px)' }}>
      {/* Site preview */}
      <div className="fade-up" style={{ background: 'white', borderRadius: 12, overflow: 'hidden', boxShadow: '0 16px 48px rgba(0,0,0,0.1)', display: 'flex', flexDirection: 'column' }}>
        <div className="chrome">
          <div className="chrome-dots"><span className="chrome-dot" /><span className="chrome-dot" /><span className="chrome-dot" /></div>
          <div className="chrome-url">lupitastacos.onara.site</div>
        </div>
        <div style={{ flex: 1, overflow: 'auto' }}>
          {/* Hero */}
          <div style={{ height: 320, background: 'linear-gradient(135deg, #2a1810 0%, #5c2818 100%)', position: 'relative', padding: 36, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'white' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: 12, opacity: 0.85 }}>
              <span style={{ fontFamily: 'var(--serif)', fontSize: 17, fontWeight: 500 }}>Lupita's</span>
              <div style={{ display: 'flex', gap: 18 }}><span>Menu</span><span>Story</span><span>Visit</span><span>Order</span></div>
            </div>
            <div>
              <div style={{ fontFamily: 'var(--mono)', fontSize: 10, opacity: 0.7, letterSpacing: '0.15em', marginBottom: 14 }}>SINCE 1995 · EAST LA · FAMILY-RUN</div>
              <h1 className="serif" style={{ fontSize: 64, lineHeight: 0.95, margin: 0, fontWeight: 500 }}>Lupita's Tacos</h1>
              <div style={{ fontSize: 16, opacity: 0.85, marginTop: 12 }}>Slow-braised, hand-pressed, family-made.</div>
            </div>
            <div style={{ display: 'flex', gap: 12 }}>
              <span style={{ background: 'white', color: '#2a1810', padding: '10px 18px', borderRadius: 100, fontSize: 13, fontWeight: 500 }}>Order online</span>
              <span style={{ border: '1px solid rgba(255,255,255,0.4)', padding: '10px 18px', borderRadius: 100, fontSize: 13 }}>See the menu</span>
            </div>
          </div>

          {/* Photo strip */}
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 2 }}>
            {['AL PASTOR', 'CARNITAS', 'BARBACOA', 'TORTILLAS'].map(l => (
              <div key={l} className="ph" style={{ height: 130, borderRadius: 0, fontSize: 9 }}>{l}</div>
            ))}
          </div>

          {/* Story */}
          <div style={{ padding: '60px 60px', display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 60 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 12 }}>Our story</div>
              <div className="ph" style={{ height: 220, fontSize: 9 }}>FAMILY PHOTO</div>
            </div>
            <div>
              <p className="serif" style={{ fontSize: 32, lineHeight: 1.25, margin: '0 0 20px', fontWeight: 400 }}>
                Three generations cooking the recipes my abuela brought from Jalisco — every tortilla still pressed by hand.
              </p>
              <p style={{ fontSize: 14, color: 'var(--ink-2)', lineHeight: 1.6 }}>
                We opened in 1995 with twelve seats and one promise: nothing leaves the kitchen unless we'd serve it to family. Thirty years later, the seats are wider, the line is longer — but the recipes haven't changed.
              </p>
            </div>
          </div>

          {/* Menu preview */}
          <div style={{ background: '#faf7f2', padding: '50px 60px' }}>
            <div className="eyebrow" style={{ marginBottom: 12 }}>The menu</div>
            <div className="serif" style={{ fontSize: 32, marginBottom: 32, fontWeight: 400 }}>Cooked today, gone by tonight.</div>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px 60px' }}>
              {[
                ['Al pastor', 'Marinated 16 hrs, off the trompo', '4.50'],
                ['Carnitas', 'Slow-braised pork, crisp edges', '4.50'],
                ['Barbacoa', 'Sundays only, while it lasts', '5.00'],
                ['Lengua', 'Tender, deeply seasoned', '4.50'],
              ].map(([n, d, p]) => (
                <div key={n} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', padding: '12px 0', borderBottom: '1px solid var(--rule-2)' }}>
                  <div>
                    <div className="serif" style={{ fontSize: 17 }}>{n}</div>
                    <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 2 }}>{d}</div>
                  </div>
                  <div style={{ fontSize: 14, color: 'var(--ink-2)' }}>${p}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Visit */}
          <div style={{ padding: '50px 60px', borderTop: '1px solid var(--rule-2)', display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 40 }}>
            <div>
              <div className="eyebrow" style={{ marginBottom: 10 }}>Visit</div>
              <div className="serif" style={{ fontSize: 22, marginBottom: 4 }}>1248 César Chávez Ave</div>
              <div style={{ color: 'var(--ink-3)', fontSize: 13, marginBottom: 16 }}>Los Angeles, CA 90033</div>
              <div style={{ fontSize: 13, color: 'var(--ink-2)' }}>Mon–Sat · 11 AM – 9 PM<br />Closed Sundays</div>
            </div>
            <div className="ph" style={{ height: 140, fontSize: 9 }}>MAP</div>
          </div>
        </div>
      </div>

      {/* Right rail — what we made */}
      <div className="fade-up fade-up-d2" style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
        <div className="card">
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
            <span style={{ width: 28, height: 28, borderRadius: '50%', background: 'var(--accent-soft)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={13} color="var(--accent)" stroke={2.4} /></span>
            <div className="serif" style={{ fontSize: 18 }}>Your site is ready</div>
          </div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.55, marginBottom: 14 }}>
            Built in 1m 32s · 6 pages · 38 photos used · 12 menu items featured
          </div>
          <button className="btn btn-accent" style={{ width: '100%' }} onClick={() => go('auth')}>
            Save & publish — free <Icon name="arrow" size={13} color="white" />
          </button>
          <div style={{ fontSize: 11, color: 'var(--ink-3)', textAlign: 'center', marginTop: 10 }}>
            Free for 30 days. No card required.
          </div>
        </div>

        <div className="card">
          <div className="mono" style={{ marginBottom: 12 }}>What's included</div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
            {[
              ['Custom design', 'Built for your brand, not a template'],
              ['SEO + schema', 'Google can read every dish'],
              ['Mobile polish', 'Every page tested at phone size'],
              ['Unlimited revisions', 'Just describe what to change'],
            ].map(([t, d]) => (
              <div key={t} style={{ display: 'flex', gap: 10 }}>
                <Icon name="check" size={14} color="var(--accent)" stroke={2} />
                <div>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>{t}</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>{d}</div>
                </div>
              </div>
            ))}
          </div>
        </div>

        <button className="btn-ghost" style={{ fontSize: 12, color: 'var(--ink-3)', padding: '10px', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6 }} onClick={() => go('revision')}>
          <Icon name="edit" size={12} /> Not quite right? Request changes
        </button>
      </div>
    </div>
  </div>
);

window.Generation = Generation;
window.Result = Result;
