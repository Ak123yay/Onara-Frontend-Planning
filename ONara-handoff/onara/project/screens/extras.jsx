// Onara — Auth, Domain, Revision, Offline, Mobile screens

// AUTH — generate-first signup ───────────────────────────────────
const Auth = ({ go }) => (
  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', height: '100%' }}>
    {/* Left — what we built */}
    <div style={{ background: 'linear-gradient(170deg, #2a1810 0%, #5c2818 100%)', padding: 60, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', color: 'white', position: 'relative', overflow: 'hidden' }}>
      <div style={{ position: 'absolute', inset: 0, backgroundImage: 'repeating-linear-gradient(-45deg, transparent 0, transparent 20px, rgba(255,255,255,0.025) 20px, rgba(255,255,255,0.025) 21px)' }} />

      <div style={{ display: 'flex', alignItems: 'center', gap: 8, position: 'relative', fontFamily: 'var(--serif)', fontSize: 19, fontWeight: 500 }}>
        <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'white', position: 'relative' }}>
          <span style={{ position: 'absolute', inset: 5, borderRadius: '50%', background: 'var(--accent)' }} />
        </span>
        Onara
      </div>

      <div style={{ position: 'relative', maxWidth: 460 }}>
        <div className="eyebrow" style={{ color: 'rgba(255,255,255,0.6)', marginBottom: 18 }}>You just built</div>
        <div className="serif" style={{ fontSize: 56, lineHeight: 0.98, fontWeight: 400, marginBottom: 24 }}>
          Lupita's Tacos<span style={{ color: 'var(--accent-2)' }}>.</span>
        </div>
        {/* Mini site card */}
        <div style={{ background: 'rgba(255,255,255,0.06)', backdropFilter: 'blur(20px)', border: '1px solid rgba(255,255,255,0.1)', borderRadius: 12, padding: 16, marginBottom: 24 }}>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 9, opacity: 0.6, letterSpacing: '0.15em', marginBottom: 6 }}>LUPITASTACOS.ONARA.SITE</div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 6 }}>
            <div style={{ height: 50, borderRadius: 4, background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ height: 50, borderRadius: 4, background: 'rgba(255,255,255,0.08)' }} />
            <div style={{ height: 50, borderRadius: 4, background: 'rgba(255,255,255,0.08)' }} />
          </div>
          <div style={{ height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.15)', width: '70%', marginTop: 12 }} />
          <div style={{ height: 4, borderRadius: 2, background: 'rgba(255,255,255,0.1)', width: '50%', marginTop: 6 }} />
        </div>
        <div style={{ fontSize: 14, lineHeight: 1.6, opacity: 0.85 }}>
          Save it to your account in 10 seconds, or it'll disappear when you close this tab.
        </div>
      </div>

      <div style={{ position: 'relative', display: 'flex', gap: 24, fontSize: 11, color: 'rgba(255,255,255,0.55)' }}>
        <div><span style={{ color: 'white', fontFamily: 'var(--serif)', fontSize: 17 }}>92s</span><br />build time</div>
        <div><span style={{ color: 'white', fontFamily: 'var(--serif)', fontSize: 17 }}>6</span><br />pages</div>
        <div><span style={{ color: 'white', fontFamily: 'var(--serif)', fontSize: 17 }}>30 days</span><br />free trial</div>
      </div>
    </div>

    {/* Right — signup form */}
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 60 }}>
      <div style={{ width: '100%', maxWidth: 380 }} className="fade-up">
        <h2 className="serif" style={{ fontSize: 36, margin: '0 0 8px', lineHeight: 1.05, fontWeight: 400 }}>Save your site.</h2>
        <p style={{ fontSize: 14, color: 'var(--ink-3)', marginBottom: 32 }}>Create an account to publish, get a custom domain, and unlock revisions.</p>

        <button className="btn btn-soft" style={{ width: '100%', padding: '14px', fontSize: 14 }} onClick={() => go('dashboard')}>
          <svg width="16" height="16" viewBox="0 0 24 24"><path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/><path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84A11 11 0 0 0 12 23z"/><path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18A11 11 0 0 0 1 12c0 1.77.42 3.45 1.18 4.93l3.66-2.84z"/><path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1A11 11 0 0 0 2.18 7.07l3.66 2.84C6.71 7.31 9.14 5.38 12 5.38z"/></svg>
          Continue with Google
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0', fontSize: 11, color: 'var(--ink-4)', textTransform: 'uppercase', letterSpacing: '0.08em' }}>
          <div style={{ flex: 1, height: 1, background: 'var(--rule-2)' }} />
          or
          <div style={{ flex: 1, height: 1, background: 'var(--rule-2)' }} />
        </div>

        <label style={{ fontSize: 11, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>Email</label>
        <input className="input" placeholder="you@lupitastacos.com" style={{ marginTop: 6, marginBottom: 14, fontSize: 14 }} />

        <button className="btn btn-accent" style={{ width: '100%', padding: '14px' }} onClick={() => go('dashboard')}>
          Save my site & continue <Icon name="arrow" size={14} color="white" />
        </button>

        <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 16, lineHeight: 1.5, textAlign: 'center' }}>
          By continuing, you agree to our Terms and Privacy.<br />
          Free for 30 days · No card required.
        </div>

        <div style={{ marginTop: 24, padding: 14, background: 'var(--paper-2)', borderRadius: 10, fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 10, alignItems: 'flex-start' }}>
          <Icon name="check" size={14} color="var(--accent)" stroke={2.2} />
          <div>Already have a site? <a className="link-arrow" onClick={() => go('dashboard')} style={{ fontSize: 12 }}>Sign in →</a></div>
        </div>
      </div>
    </div>
  </div>
);

// DOMAIN ─────────────────────────────────────────────────────────
const Domain = ({ go }) => {
  const [step, setStep] = React.useState(0); // 0 enter, 1 dns, 2 verifying, 3 done
  const [d, setD] = React.useState('lupitastacos.com');

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar active="sites" go={go} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <div style={{ padding: '20px 32px', borderBottom: '1px solid var(--rule-2)', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 6 }}>
              <a className="link-arrow" onClick={() => go('siteDetail')} style={{ fontSize: 12, color: 'var(--ink-3)' }}>← Lupita's Tacos</a>
            </div>
            <h1 className="serif" style={{ fontSize: 28, margin: 0, fontWeight: 400 }}>Connect your domain</h1>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, fontSize: 12, color: 'var(--ink-3)' }}>
            <DomStep n="1" l="Enter" active={step >= 0} done={step > 0} />
            <span style={{ width: 18, height: 1, background: 'var(--rule)' }} />
            <DomStep n="2" l="DNS" active={step >= 1} done={step > 1} />
            <span style={{ width: 18, height: 1, background: 'var(--rule)' }} />
            <DomStep n="3" l="Verify" active={step >= 2} done={step > 2} />
            <span style={{ width: 18, height: 1, background: 'var(--rule)' }} />
            <DomStep n="4" l="Done" active={step >= 3} done={step >= 3} />
          </div>
        </div>

        <div style={{ padding: '40px 32px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32, maxWidth: 1100, margin: '0 auto' }}>
          <div>
            {step === 0 && (
              <div className="fade-up">
                <h2 className="serif" style={{ fontSize: 22, margin: '0 0 8px', fontWeight: 500 }}>What domain do you own?</h2>
                <p style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 20 }}>If you don't have one yet, <a className="link-arrow" style={{ fontSize: 13 }}>buy one through us for $12/yr →</a></p>
                <input className="input" value={d} onChange={e => setD(e.target.value)} style={{ fontSize: 16, padding: 16 }} />
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24, alignItems: 'center' }}>
                  <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>We'll show you exactly what to add at your registrar.</span>
                  <button className="btn btn-accent" onClick={() => setStep(1)}>Continue <Icon name="arrow" size={13} color="white" /></button>
                </div>
              </div>
            )}

            {step === 1 && (
              <div className="fade-up">
                <h2 className="serif" style={{ fontSize: 22, margin: '0 0 8px', fontWeight: 500 }}>Add these records at your registrar.</h2>
                <p style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 20 }}>This is a one-time step. Most registrars apply DNS within minutes.</p>

                <div style={{ background: 'var(--paper-2)', borderRadius: 10, padding: '14px 18px', fontSize: 12, color: 'var(--ink-2)', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 10 }}>
                  <Icon name="globe" size={14} /> Connecting <strong>{d}</strong>
                </div>

                <div className="card" style={{ padding: 0, overflow: 'hidden' }}>
                  <div style={{ background: 'var(--paper-2)', padding: '10px 16px', display: 'grid', gridTemplateColumns: '80px 100px 1fr 36px', gap: 12, fontSize: 10, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.06em' }}>
                    <span>Type</span><span>Name</span><span>Value</span><span></span>
                  </div>
                  {[
                    ['A', '@', '76.76.21.21'],
                    ['CNAME', 'www', 'cname.onara.site'],
                    ['TXT', '_onara', 'verify=8a2b9f3e4d'],
                  ].map(([t, n, v], i) => (
                    <div key={i} style={{ padding: '14px 16px', borderTop: '1px solid var(--rule-2)', display: 'grid', gridTemplateColumns: '80px 100px 1fr 36px', gap: 12, alignItems: 'center', fontFamily: 'var(--mono)', fontSize: 12 }}>
                      <span style={{ background: 'var(--paper-2)', padding: '3px 8px', borderRadius: 4, fontSize: 11, width: 'fit-content' }}>{t}</span>
                      <span>{n}</span>
                      <span style={{ color: 'var(--ink-2)' }}>{v}</span>
                      <button style={{ color: 'var(--ink-3)' }}><Icon name="copy" size={13} /></button>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 24, alignItems: 'center' }}>
                  <button className="btn-ghost" style={{ fontSize: 13, color: 'var(--ink-3)' }} onClick={() => setStep(0)}><Icon name="arrowL" size={12} /> Back</button>
                  <button className="btn btn-accent" onClick={() => { setStep(2); setTimeout(() => setStep(3), 2200); }}>I've added them — verify <Icon name="arrow" size={13} color="white" /></button>
                </div>
              </div>
            )}

            {step === 2 && (
              <div className="fade-up" style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--accent-soft)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative' }}>
                  <span className="sdot sdot-on" style={{ width: 14, height: 14 }} />
                </div>
                <h2 className="serif" style={{ fontSize: 24, margin: 0, fontWeight: 500 }}>Checking your DNS…</h2>
                <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 8 }}>This usually takes a few seconds. Sometimes up to an hour.</p>
              </div>
            )}

            {step === 3 && (
              <div className="fade-up" style={{ textAlign: 'center', padding: '40px 0' }}>
                <div style={{ width: 60, height: 60, borderRadius: '50%', background: 'var(--accent)', margin: '0 auto 20px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Icon name="check" size={28} color="white" stroke={2.4} />
                </div>
                <h2 className="serif" style={{ fontSize: 28, margin: 0, fontWeight: 400 }}>{d} is connected.</h2>
                <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 8, marginBottom: 24 }}>SSL provisioned · CDN active · Visitors will see your custom domain.</p>
                <button className="btn btn-accent" onClick={() => go('siteDetail')}>Back to your site <Icon name="arrow" size={13} color="white" /></button>
              </div>
            )}
          </div>

          {/* Right rail */}
          <div className="card" style={{ height: 'fit-content' }}>
            <div className="mono" style={{ marginBottom: 12 }}>How this works</div>
            <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.65 }}>
              <p style={{ margin: '0 0 12px' }}>You own the domain — we never take possession. We just point it at the server hosting your site.</p>
              <p style={{ margin: '0 0 12px' }}>SSL is automatic and renews itself. Email and other DNS records you have stay untouched.</p>
              <a className="link-arrow" style={{ fontSize: 12 }}>Step-by-step for GoDaddy →</a><br /><br />
              <a className="link-arrow" style={{ fontSize: 12 }}>Step-by-step for Namecheap →</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
const DomStep = ({ n, l, active, done }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: 6, opacity: active ? 1 : 0.5 }}>
    <span style={{ width: 18, height: 18, borderRadius: '50%', background: done ? 'var(--ink)' : (active ? 'var(--accent)' : 'var(--paper-2)'), color: done || active ? 'white' : 'var(--ink-3)', fontSize: 9, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 500 }}>
      {done ? <Icon name="check" size={9} color="white" stroke={2.4} /> : n}
    </span>
    <span style={{ fontSize: 11, fontWeight: active ? 500 : 400, color: active ? 'var(--ink)' : 'var(--ink-3)' }}>{l}</span>
  </div>
);

// REVISION ───────────────────────────────────────────────────────
const Revision = ({ go }) => {
  const [text, setText] = React.useState("");
  const [showDiff, setShowDiff] = React.useState(false);
  const [running, setRunning] = React.useState(false);

  const QUICK = [
    'Make hero photo bigger',
    'Use warmer colors',
    'Add a private events section',
    'Move menu above story',
    'Friendlier copy',
    'Add reservation button',
  ];

  const submit = () => {
    setShowDiff(true);
  };

  const apply = () => {
    setRunning(true);
    setTimeout(() => go('siteDetail'), 2400);
  };

  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar active="sites" go={go} />
      <div style={{ flex: 1, overflow: 'auto' }}>
        <div style={{ padding: '20px 32px', borderBottom: '1px solid var(--rule-2)' }}>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 6 }}>
            <a className="link-arrow" onClick={() => go('siteDetail')} style={{ fontSize: 12, color: 'var(--ink-3)' }}>← Lupita's Tacos</a>
          </div>
          <h1 className="serif" style={{ fontSize: 28, margin: 0, fontWeight: 400 }}>Request a change</h1>
        </div>

        <div style={{ padding: '32px', display: 'grid', gridTemplateColumns: '1fr 380px', gap: 32, maxWidth: 1200, margin: '0 auto' }}>
          <div>
            <div className="card" style={{ marginBottom: 16 }}>
              <label className="mono" style={{ display: 'block', marginBottom: 10 }}>Describe the change</label>
              <textarea
                className="input"
                rows={4}
                style={{ fontSize: 15, lineHeight: 1.5, resize: 'none' }}
                placeholder="E.g. The hero photo feels small. Make it taller and add a tagline above 'Lupita's Tacos' that says 'East LA, since 1995.'"
                value={text}
                onChange={e => { setText(e.target.value); setShowDiff(false); }}
              />
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14 }}>
                <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>Plain English. No tech speak. We figure it out.</span>
                <button className="btn btn-accent btn-sm" onClick={submit} disabled={!text.trim()} style={{ opacity: text.trim() ? 1 : 0.4 }}>
                  Preview changes <Icon name="sparkle" size={12} color="white" />
                </button>
              </div>
            </div>

            <div style={{ marginBottom: 16 }}>
              <div className="mono" style={{ marginBottom: 10 }}>Or pick a quick change</div>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {QUICK.map(q => (
                  <span key={q} className="chip" onClick={() => { setText(q); setShowDiff(true); }}>{q}</span>
                ))}
              </div>
            </div>

            {showDiff && (
              <div className="card fade-up" style={{ background: 'var(--accent-soft-2)', borderColor: '#e8caa8' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 14 }}>
                  <Icon name="sparkle" size={14} color="var(--accent)" />
                  <span className="mono" style={{ color: 'var(--accent)' }}>What we'll touch</span>
                </div>
                <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.6, marginBottom: 16 }}>
                  Three components, partial rerun. About 25 seconds.
                </div>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
                  {[
                    ['Hero', 'Increase height from 320px → 480px', 'edit'],
                    ['Hero', "Add tagline 'East LA, since 1995'", 'plus'],
                    ['Photo strip', 'Re-balance proportions', 'edit'],
                  ].map(([c, ch, ic], i) => (
                    <div key={i} style={{ display: 'flex', gap: 10, padding: '10px 12px', background: 'rgba(255,255,255,0.6)', borderRadius: 8, alignItems: 'center' }}>
                      <Icon name={ic} size={12} color="var(--accent)" />
                      <span className="mono" style={{ width: 80, color: 'var(--ink-3)' }}>{c}</span>
                      <span style={{ fontSize: 13 }}>{ch}</span>
                    </div>
                  ))}
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 18, alignItems: 'center' }}>
                  <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>The rest of your site stays exactly as it is.</span>
                  <button className="btn btn-accent" onClick={apply} disabled={running}>
                    {running ? 'Applying…' : <>Apply changes <Icon name="arrow" size={13} color="white" /></>}
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right rail */}
          <div>
            <div className="card" style={{ marginBottom: 12 }}>
              <div className="mono" style={{ marginBottom: 12 }}>Recent changes</div>
              {[
                ['Make the hero photo bigger', '5 days ago'],
                ['Add a private events section', '12 days ago'],
                ['Use warmer colors throughout', '23 days ago'],
              ].map(([t, w], i) => (
                <div key={i} style={{ padding: '10px 0', borderTop: i ? '1px solid var(--rule-2)' : 'none' }}>
                  <div style={{ fontSize: 12 }}>"{t}"</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 2 }}>{w} · applied</div>
                </div>
              ))}
            </div>
            <div className="card">
              <div className="mono" style={{ marginBottom: 10 }}>Tips</div>
              <ul style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.6, paddingLeft: 16, margin: 0 }}>
                <li style={{ marginBottom: 6 }}>Be specific about what's wrong, not how to fix it</li>
                <li style={{ marginBottom: 6 }}>One change at a time works best</li>
                <li>Reference a section by name ("the menu", "the story")</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// OFFLINE / DOWNGRADE ────────────────────────────────────────────
const Offline = ({ go }) => (
  <div style={{ display: 'flex', height: '100%' }}>
    <Sidebar active="sites" go={go} />
    <div style={{ flex: 1, overflow: 'auto' }}>
      <div style={{ padding: '20px 32px', borderBottom: '1px solid var(--rule-2)' }}>
        <h1 className="serif" style={{ fontSize: 28, margin: 0, fontWeight: 400 }}>My sites</h1>
        <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>Trial ended · 2 sites paused</div>
      </div>

      <div style={{ padding: '24px 32px' }}>
        {/* Banner */}
        <div style={{ background: 'var(--warn-soft)', border: '1px solid #e8d5a1', borderRadius: 12, padding: 20, marginBottom: 24, display: 'grid', gridTemplateColumns: '1fr auto', gap: 24, alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 6 }}>
              <span style={{ width: 22, height: 22, borderRadius: '50%', background: 'var(--warn)', color: 'white', fontSize: 12, display: 'flex', alignItems: 'center', justifyContent: 'center', fontWeight: 600 }}>!</span>
              <span style={{ fontSize: 15, fontWeight: 500 }}>Your free trial ended on April 27</span>
            </div>
            <div style={{ fontSize: 13, color: 'var(--ink-2)', lineHeight: 1.55, maxWidth: 640 }}>
              We've paused your live sites — visitors see a friendly placeholder. <strong>Nothing has been deleted.</strong> Your designs, content, photos, and revision history are all backed up. Restore in one click.
            </div>
          </div>
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            <button className="btn btn-accent">Restore for $24/mo</button>
            <button className="btn-ghost btn-sm" style={{ fontSize: 12, color: 'var(--ink-3)' }}>See what's included</button>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24 }}>
          {/* Dashboard view */}
          <div>
            <div className="mono" style={{ marginBottom: 12 }}>Your sites · paused</div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SITES.slice(0, 2).map(s => (
                <div key={s.id} className="card" style={{ padding: 16, display: 'flex', gap: 14, alignItems: 'center' }}>
                  <div style={{ width: 64, height: 48, borderRadius: 6, background: `linear-gradient(135deg, ${s.img} 0%, ${s.img}dd 100%)`, opacity: 0.5 }} />
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 14, fontWeight: 500 }}>{s.name}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 6, marginTop: 3 }}>
                      <span className="sdot sdot-pending" /> Paused · {s.url}
                    </div>
                  </div>
                  <button className="btn btn-soft btn-sm">Restore</button>
                </div>
              ))}
            </div>

            <div style={{ marginTop: 20, fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.6, padding: 16, background: 'var(--paper-2)', borderRadius: 10 }}>
              <strong style={{ color: 'var(--ink)' }}>What's preserved:</strong> all designs, copy, photos, menu data, custom domain settings, revision history, and Google sync configurations. We hold this for 90 days, then archive on request.
            </div>
          </div>

          {/* What visitors see */}
          <div>
            <div className="mono" style={{ marginBottom: 12 }}>What visitors see at lupitastacos.com</div>
            <div style={{ background: 'white', borderRadius: 12, overflow: 'hidden', boxShadow: '0 8px 24px rgba(0,0,0,0.08)' }}>
              <div className="chrome">
                <div className="chrome-dots"><span className="chrome-dot" /><span className="chrome-dot" /><span className="chrome-dot" /></div>
                <div className="chrome-url">lupitastacos.com</div>
              </div>
              <div style={{ padding: '60px 40px', textAlign: 'center', background: 'var(--paper)' }}>
                <div className="serif" style={{ fontSize: 32, fontWeight: 400, marginBottom: 8 }}>Lupita's Tacos</div>
                <div style={{ fontSize: 13, color: 'var(--ink-3)', marginBottom: 28 }}>We're refreshing our website — back online soon.</div>

                <div style={{ display: 'inline-flex', flexDirection: 'column', gap: 12, padding: 20, background: 'var(--paper-2)', borderRadius: 10, fontSize: 13, color: 'var(--ink-2)', textAlign: 'left' }}>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="pin" size={14} color="var(--accent)" /> 1248 César Chávez Ave, LA</div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="phone" size={14} color="var(--accent)" /> (323) 555-0142</div>
                  <div style={{ display: 'flex', gap: 10, alignItems: 'center' }}><Icon name="globe" size={14} color="var(--accent)" /> Mon–Sat · 11 AM – 9 PM</div>
                </div>

                <div style={{ marginTop: 32, fontSize: 11, color: 'var(--ink-4)', fontFamily: 'var(--mono)', letterSpacing: '0.06em' }}>POWERED BY ONARA</div>
              </div>
            </div>
            <div style={{ marginTop: 12, fontSize: 11, color: 'var(--ink-3)', textAlign: 'center', lineHeight: 1.5 }}>
              Phone, hours, and address are still shown so customers aren't left in the dark.
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
);

// MOBILE TRIO ────────────────────────────────────────────────────
const Mobile = ({ go }) => (
  <div style={{ minHeight: '100%', background: 'var(--paper-2)', padding: '40px 60px' }}>
    <div style={{ marginBottom: 32, display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end' }}>
      <div>
        <div className="eyebrow" style={{ marginBottom: 8 }}>Mobile · iOS</div>
        <h1 className="serif" style={{ fontSize: 32, margin: 0, fontWeight: 400 }}>Owners build on their phone.</h1>
        <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 6 }}>Most restaurant owners don't sit at a desk. The whole flow works one-handed.</p>
      </div>
      <button className="btn btn-soft btn-sm" onClick={() => go('landing')}><Icon name="arrowL" size={12} /> Back to desktop</button>
    </div>

    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 32, maxWidth: 1100, margin: '0 auto' }}>
      <Phone label="Search" go={go}>
        <div style={{ padding: '50px 20px 0' }}>
          <div className="serif" style={{ fontSize: 26, lineHeight: 1.1, fontWeight: 400, marginBottom: 6 }}>Build your site.</div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', marginBottom: 24 }}>From your Google listing.</div>
          <div style={{ position: 'relative' }}>
            <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}><Icon name="search" size={14} color="var(--ink-3)" /></span>
            <input className="input" defaultValue="Lupita's" style={{ paddingLeft: 36, fontSize: 13 }} />
          </div>
          <div style={{ marginTop: 8, background: 'white', borderRadius: 10, border: '1px solid var(--rule-2)' }}>
            {SUGGESTIONS.slice(0, 3).map((s, i) => (
              <div key={i} style={{ padding: 12, borderTop: i ? '1px solid var(--rule-2)' : 'none', display: 'flex', gap: 10, alignItems: 'center' }}>
                <Icon name="pin" size={12} color="var(--ink-3)" />
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ fontSize: 12, fontWeight: 500 }}>{s.name}</div>
                  <div style={{ fontSize: 10, color: 'var(--ink-3)', overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{s.addr}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </Phone>

      <Phone label="Generation" go={go}>
        <div style={{ padding: '50px 20px 0' }}>
          <div className="eyebrow" style={{ marginBottom: 6, fontSize: 9 }}>Building Lupita's Tacos</div>
          <div className="serif" style={{ fontSize: 22, lineHeight: 1.1, fontWeight: 400, marginBottom: 18 }}>62s remaining</div>
          {/* Progress */}
          <div style={{ height: 4, borderRadius: 100, background: 'var(--paper-2)', overflow: 'hidden', marginBottom: 24 }}>
            <div style={{ width: '40%', height: '100%', background: 'var(--accent)' }} />
          </div>
          {/* Agents condensed */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 8 }}>
            {AGENTS.slice(0, 5).map((a, i) => (
              <div key={a.id} style={{ display: 'flex', gap: 10, alignItems: 'center', fontSize: 11, opacity: i < 3 ? 1 : 0.5 }}>
                {i < 3 && <span style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--ink)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name="check" size={8} color="white" stroke={2.4} /></span>}
                {i === 3 && <span style={{ width: 14, height: 14, borderRadius: '50%', background: 'var(--accent-soft)', border: '2px solid var(--accent)' }} />}
                {i > 3 && <span style={{ width: 14, height: 14, borderRadius: '50%', border: '1.5px solid var(--rule)' }} />}
                <span>{a.name}</span>
              </div>
            ))}
            <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>+ 5 more</div>
          </div>
        </div>
      </Phone>

      <Phone label="Site detail" go={go}>
        <div style={{ padding: '46px 16px 0' }}>
          <div style={{ fontSize: 11, color: 'var(--ink-3)', marginBottom: 4 }}>← My sites</div>
          <div className="serif" style={{ fontSize: 22, lineHeight: 1.1, fontWeight: 400 }}>Lupita's Tacos</div>
          <div style={{ fontSize: 11, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 6, marginTop: 4, marginBottom: 16 }}>
            <span className="sdot sdot-on" style={{ width: 6, height: 6 }} /> Live · lupitastacos.com
          </div>
          <div style={{ background: 'white', borderRadius: 10, padding: 14, border: '1px solid var(--rule-2)', marginBottom: 10 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
              <div>
                <div className="serif" style={{ fontSize: 22, lineHeight: 1, fontWeight: 400 }}>1,240</div>
                <div style={{ fontSize: 10, color: 'var(--ink-3)' }}>visits · 30d</div>
              </div>
              <div style={{ fontSize: 10, color: 'var(--accent)' }}>+18%</div>
            </div>
            <svg viewBox="0 0 200 30" style={{ width: '100%', height: 30 }}>
              <path d="M0,25 L20,22 L40,18 L60,20 L80,16 L100,12 L120,14 L140,8 L160,10 L180,5 L200,3 L200,30 L0,30 Z" fill="var(--accent-soft)" />
              <path d="M0,25 L20,22 L40,18 L60,20 L80,16 L100,12 L120,14 L140,8 L160,10 L180,5 L200,3" fill="none" stroke="var(--accent)" strokeWidth="1" />
            </svg>
          </div>
          <button className="btn btn-accent btn-sm" style={{ width: '100%', marginBottom: 6 }}><Icon name="edit" size={11} color="white" /> Request changes</button>
          <button className="btn btn-soft btn-sm" style={{ width: '100%' }}><Icon name="eye" size={11} /> View live</button>
        </div>
      </Phone>
    </div>
  </div>
);

const Phone = ({ label, children, go }) => (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 12 }}>
    <div style={{ width: 280, height: 580, borderRadius: 36, background: '#1a1815', padding: 8, boxShadow: '0 24px 48px rgba(0,0,0,0.18)', position: 'relative' }}>
      <div style={{ width: '100%', height: '100%', borderRadius: 28, background: 'var(--paper)', overflow: 'hidden', position: 'relative' }}>
        {/* Status bar */}
        <div style={{ position: 'absolute', top: 0, left: 0, right: 0, height: 36, display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 24px', fontSize: 11, fontWeight: 600, zIndex: 2 }}>
          <span>9:41</span>
          <span style={{ display: 'flex', gap: 4, alignItems: 'center' }}>
            <svg width="16" height="10" viewBox="0 0 16 10"><rect x="1" y="6" width="2" height="3" fill="currentColor"/><rect x="5" y="4" width="2" height="5" fill="currentColor"/><rect x="9" y="2" width="2" height="7" fill="currentColor"/><rect x="13" y="0" width="2" height="9" fill="currentColor"/></svg>
            <svg width="22" height="10" viewBox="0 0 22 10"><rect x="0" y="0" width="18" height="10" rx="2" fill="none" stroke="currentColor" strokeWidth="1"/><rect x="2" y="2" width="14" height="6" rx="1" fill="currentColor"/></svg>
          </span>
        </div>
        {/* Notch */}
        <div style={{ position: 'absolute', top: 8, left: '50%', transform: 'translateX(-50%)', width: 90, height: 24, background: '#1a1815', borderRadius: 12, zIndex: 3 }} />
        {children}
      </div>
    </div>
    <div className="mono" style={{ fontSize: 10 }}>{label}</div>
  </div>
);

window.Auth = Auth;
window.Domain = Domain;
window.Revision = Revision;
window.Offline = Offline;
window.Mobile = Mobile;
