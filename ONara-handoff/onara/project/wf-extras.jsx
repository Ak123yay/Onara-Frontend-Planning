// === Auth, custom domain, revision request, downgrade ===

const SimpleHeader = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 32px', borderBottom: '1px solid var(--rule-2)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 22, height: 22, border: '1.5px solid var(--ink)', borderRadius: '50%', filter: 'url(#wobble-1)' }} />
      <span style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500 }}>Onara</span>
    </div>
    <span style={{ fontSize: 13, color: 'var(--ink-3)' }}>Need help?</span>
  </div>
);

// === AUTH — V1 split: image left, form right ===
const AuthSplit = () => (
  <div className="screen wf-paper">
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 1fr' }}>
      <div style={{ background: 'var(--accent-soft)', padding: 50, display: 'flex', flexDirection: 'column', justifyContent: 'space-between', position: 'relative' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          <div style={{ width: 22, height: 22, border: '1.5px solid var(--ink)', borderRadius: '50%', filter: 'url(#wobble-1)' }} />
          <span style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500 }}>Onara</span>
        </div>
        <div>
          <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 38, lineHeight: 1.1, letterSpacing: '-0.02em', margin: 0 }}>
            "Took 90 seconds.<br/>Better than the site<br/>I paid $2,400 for."
          </h2>
          <div style={{ marginTop: 20, display: 'flex', alignItems: 'center', gap: 10 }}>
            <div className="ph-circle" style={{ width: 36, height: 36 }} />
            <div>
              <div style={{ fontSize: 13, fontWeight: 500 }}>Mike Cantelli</div>
              <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>Mike's Pizza · Austin</div>
            </div>
          </div>
        </div>
        <div className="mono" style={{ color: 'var(--accent-ink)' }}>14 days of Pro · no card</div>
      </div>

      <div style={{ padding: 50, display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
        <div className="mono" style={{ marginBottom: 6 }}>Sign up</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 32, margin: 0, letterSpacing: '-0.02em' }}>Get your site in 90 seconds.</h2>
        <div className="btn btn-soft" style={{ marginTop: 28, justifyContent: 'center', width: '100%', padding: '14px', fontSize: 14 }}>
          <span style={{ width: 16, height: 16, border: '1.5px solid var(--ink-3)', borderRadius: '50%' }} /> Continue with Google
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0', color: 'var(--ink-4)', fontSize: 11 }}>
          <div style={{ flex: 1, height: 1, background: 'var(--rule-2)' }} /> or with email <div style={{ flex: 1, height: 1, background: 'var(--rule-2)' }} />
        </div>
        <div className="mono" style={{ marginBottom: 4, fontSize: 9 }}>Email</div>
        <div className="input">mike@mikespizza.com</div>
        <div className="mono" style={{ marginTop: 14, marginBottom: 4, fontSize: 9 }}>Password</div>
        <div className="input">••••••••••</div>
        <div className="btn btn-accent" style={{ marginTop: 18, justifyContent: 'center', padding: '14px' }}>Create account →</div>
        <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 14, lineHeight: 1.5 }}>
          By continuing, you agree to our Terms. Already have an account? <span style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Sign in</span>.
        </div>
      </div>
    </div>
  </div>
);

// === AUTH — V2 centered minimal card ===
const AuthCentered = () => (
  <div className="screen wf-paper">
    <SimpleHeader />
    <div style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '40px 80px', position: 'relative' }}>
      <div style={{ width: 420 }}>
        <div className="mono" style={{ textAlign: 'center', marginBottom: 6 }}>Welcome back</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 32, textAlign: 'center', margin: 0, letterSpacing: '-0.02em' }}>Sign in to Onara</h2>
        <div className="sk sk-2" style={{ marginTop: 32, padding: 28 }}>
          <div className="btn btn-soft" style={{ justifyContent: 'center', width: '100%', padding: '12px' }}>
            <span style={{ width: 14, height: 14, border: '1.5px solid var(--ink-3)', borderRadius: '50%' }} /> Continue with Google
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, margin: '20px 0', color: 'var(--ink-4)', fontSize: 10 }}>
            <div style={{ flex: 1, height: 1, background: 'var(--rule-2)' }} /> OR <div style={{ flex: 1, height: 1, background: 'var(--rule-2)' }} />
          </div>
          <div className="input" style={{ marginBottom: 10 }}>email</div>
          <div className="input">password</div>
          <div className="btn btn-accent" style={{ marginTop: 14, width: '100%', justifyContent: 'center' }}>Sign in →</div>
          <div style={{ textAlign: 'center', fontSize: 11, color: 'var(--ink-3)', marginTop: 14 }}>
            Forgot password?
          </div>
        </div>
        <div style={{ textAlign: 'center', fontSize: 12, color: 'var(--ink-3)', marginTop: 18 }}>
          New to Onara? <span style={{ color: 'var(--ink)', textDecoration: 'underline' }}>Create an account</span>
        </div>
      </div>
      <div className="anno" style={{ top: 100, right: 60, transform: 'rotate(2deg)' }}>Google OAuth = primary</div>
    </div>
  </div>
);

// === AUTH — V3 inline on landing (one-step signup) ===
const AuthInline = () => (
  <div className="screen wf-paper">
    <SimpleHeader />
    <div style={{ flex: 1, padding: '60px 80px', display: 'flex', flexDirection: 'column', alignItems: 'center', textAlign: 'center', position: 'relative' }}>
      <div className="mono" style={{ marginBottom: 16 }}>One step</div>
      <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 44, lineHeight: 1.05, letterSpacing: '-0.025em', margin: 0, maxWidth: 720 }}>
        Type your business.<br/>Sign up after you see it.
      </h2>
      <p style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 16, maxWidth: 480, lineHeight: 1.5 }}>
        We'll generate your site first. You only sign up if you want to save or publish it.
      </p>
      <div className="sk" style={{ marginTop: 36, width: 580, padding: 6, display: 'flex', alignItems: 'center', gap: 6 }}>
        <Glyph name="search" size={16} color="var(--ink-3)" />
        <div style={{ flex: 1, padding: '12px 8px', fontSize: 14, color: 'var(--ink-3)', textAlign: 'left' }}>Mike's Pizza, Austin TX</div>
        <span className="btn btn-accent">Build →</span>
      </div>

      <div style={{ marginTop: 80, width: 580, position: 'relative' }}>
        <div className="squiggle-thin" />
        <div className="mono" style={{ position: 'absolute', top: -8, left: '50%', transform: 'translateX(-50%)', background: 'var(--paper)', padding: '0 12px' }}>after you see it</div>
      </div>

      <div style={{ marginTop: 30, display: 'flex', gap: 14 }}>
        <div className="btn btn-soft" style={{ padding: '12px 18px' }}>
          <span style={{ width: 14, height: 14, border: '1.5px solid var(--ink-3)', borderRadius: '50%' }} /> Save with Google
        </div>
        <div className="btn btn-ghost" style={{ padding: '12px 18px' }}>Save with email</div>
      </div>
      <div className="anno" style={{ top: 240, right: 80, transform: 'rotate(3deg)' }}>generate-first<br/>signup-second</div>
    </div>
  </div>
);

// === CUSTOM DOMAIN — V1 step-through ===
const DomainConnect = () => (
  <div className="screen wf-paper" style={{ flexDirection: 'row' }}>
    <SidebarV1 active="domain" />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <DashHeader sub="Domains · Mike's Pizza" title="Connect a custom domain" action={<span style={{ fontSize: 12, color: 'var(--ink-3)' }}>← back to site</span>} />
      <div style={{ flex: 1, padding: '8px 40px 40px', display: 'grid', gridTemplateColumns: '1fr 320px', gap: 32 }}>
        <div>
          <div className="sk sk-2" style={{ padding: 22 }}>
            <div className="mono" style={{ marginBottom: 10 }}>1 · Your domain</div>
            <div className="input" style={{ width: '100%', boxSizing: 'border-box' }}>mikespizza.com</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginTop: 10, fontSize: 12, color: 'var(--ink-3)' }}>
              <Glyph name="check" size={11} color="var(--accent-ink)" /> Domain available · we'll point it at Cloudflare Pages
            </div>
          </div>

          <div className="sk sk-2" style={{ padding: 22, marginTop: 14 }}>
            <div className="mono" style={{ marginBottom: 10 }}>2 · Add these DNS records at your registrar</div>
            <div className="sk sk-rule sk-thin" style={{ padding: 14, background: 'var(--paper-2)', fontFamily: 'var(--mono)', fontSize: 11, lineHeight: 1.7 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1.5fr 60px', gap: 10, color: 'var(--ink-3)', borderBottom: '1px solid var(--rule)', paddingBottom: 6, marginBottom: 8 }}>
                <span>TYPE</span><span>NAME</span><span>VALUE</span><span>TTL</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1.5fr 60px', gap: 10, color: 'var(--ink)' }}>
                <span>CNAME</span><span>@</span><span>mikes-pizza.pages.dev</span><span>auto</span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '60px 1fr 1.5fr 60px', gap: 10, color: 'var(--ink)', marginTop: 4 }}>
                <span>CNAME</span><span>www</span><span>mikes-pizza.pages.dev</span><span>auto</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 12 }}>
              <div className="btn btn-soft" style={{ padding: '8px 14px', fontSize: 12 }}>Copy records</div>
              <div className="btn btn-soft" style={{ padding: '8px 14px', fontSize: 12 }}>Email instructions</div>
            </div>
          </div>

          <div className="sk sk-2" style={{ padding: 22, marginTop: 14 }}>
            <div className="mono" style={{ marginBottom: 10 }}>3 · Verify</div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
              <div className="sdot sdot-on" />
              <div style={{ flex: 1 }}>
                <div style={{ fontSize: 13 }}>Checking DNS propagation…</div>
                <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>Usually under 15 minutes. We'll email when it's live.</div>
              </div>
              <div className="btn">Verify now</div>
            </div>
          </div>
        </div>

        <div style={{ background: 'var(--paper-2)', borderLeft: '1px solid var(--rule-2)', padding: 22, marginRight: -40, marginTop: -8 }}>
          <div className="mono" style={{ marginBottom: 10 }}>What happens</div>
          <ol style={{ margin: 0, paddingLeft: 18, fontSize: 12, lineHeight: 1.7, color: 'var(--ink-2)' }}>
            <li>You add 2 CNAME records at GoDaddy / Namecheap / wherever you bought the domain</li>
            <li>Cloudflare verifies ownership (usually &lt; 15 min)</li>
            <li>SSL provisioned automatically</li>
            <li>Your site goes live at mikespizza.com</li>
          </ol>
          <div className="mono" style={{ marginTop: 22, marginBottom: 8 }}>Cost</div>
          <div style={{ fontSize: 12 }}>$10 one-time add-on · already paid</div>
          <div className="mono" style={{ marginTop: 22, marginBottom: 8 }}>Don't have a domain?</div>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', lineHeight: 1.5 }}>We'll keep publishing at <span style={{ fontFamily: 'var(--mono)', fontSize: 11 }}>mikes-pizza.pages.dev</span> until you connect one.</div>
        </div>
      </div>
    </div>
  </div>
);

// === REVISION REQUEST ===
const RevisionRequest = () => (
  <div className="screen wf-paper" style={{ flexDirection: 'row' }}>
    <SidebarV1 active="revisions" />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '20px 40px', borderBottom: '1px solid var(--rule-2)' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
          <span className="mono">Mike's Pizza /</span>
          <span style={{ fontFamily: 'var(--serif)', fontSize: 22 }}>Request a revision</span>
        </div>
        <div className="mono">7 of 10 used this month</div>
      </div>

      <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 380px' }}>
        <div style={{ padding: 32 }}>
          <div className="mono" style={{ marginBottom: 8 }}>Tell us what to change · plain English</div>
          <div className="sk sk-2" style={{ padding: 18, height: 200, fontSize: 14, lineHeight: 1.5, color: 'var(--ink)' }}>
            Change our weekend hours to 11am–midnight and add a "catering" section just under the menu. Keep everything else the same.
            <span className="hand hand-accent" style={{ fontSize: 18 }}>|</span>
          </div>

          <div className="mono" style={{ marginTop: 22, marginBottom: 8 }}>Or pick a quick change</div>
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
            {['Change phone', 'Update hours', 'Add a service', 'Change address', 'Edit hero text', 'Swap a photo'].map(s => (
              <span key={s} className="chip">{s}</span>
            ))}
          </div>

          <div className="mono" style={{ marginTop: 22, marginBottom: 10 }}>What we'll touch</div>
          <div className="sk sk-rule sk-thin" style={{ padding: 16 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0' }}>
              <Glyph name="check" size={12} color="var(--accent-ink)" />
              <span style={{ fontSize: 13 }}>Hours component</span>
              <span className="mono" style={{ marginLeft: 'auto' }}>~ 8s</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0' }}>
              <Glyph name="plus" size={12} color="var(--accent-ink)" />
              <span style={{ fontSize: 13 }}>New "Catering" section</span>
              <span className="mono" style={{ marginLeft: 'auto' }}>~ 22s</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '6px 0', color: 'var(--ink-4)' }}>
              <Glyph name="x" size={12} color="var(--ink-4)" />
              <span style={{ fontSize: 13 }}>Hero, menu, contact, footer (untouched)</span>
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 24 }}>
            <span style={{ fontSize: 12, color: 'var(--ink-3)' }}>Only the changed components rerun. Token use ~80% lower than a full rebuild.</span>
            <span className="btn btn-accent">✦ Run revision</span>
          </div>
        </div>

        <div style={{ borderLeft: '1px solid var(--rule-2)', padding: 24, background: 'var(--paper-2)' }}>
          <div className="mono" style={{ marginBottom: 10 }}>Live site</div>
          <div className="sk sk-2 sk-thin" style={{ padding: 0, overflow: 'hidden', background: 'var(--paper)' }}>
            <div className="chrome-bar" style={{ padding: '6px 8px' }}>
              <div className="chrome-dot" /><div className="chrome-dot" /><div className="chrome-dot" />
            </div>
            <div style={{ padding: 14 }}>
              <div className="bar" style={{ width: '50%', marginBottom: 6 }} />
              <div className="bar bar-thin" style={{ width: '70%', marginBottom: 12 }} />
              <div className="ph" style={{ height: 80, marginBottom: 10, fontSize: 9 }}>hero</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 6, marginBottom: 10 }}>
                <div className="ph" style={{ height: 50, fontSize: 9 }}>menu</div>
                <div className="ph sk-fill-warn" style={{ height: 50, fontSize: 9, color: 'var(--accent-ink)', border: '1px dashed var(--accent)' }}>hours ★</div>
              </div>
              <div className="ph sk-fill-warn" style={{ height: 50, fontSize: 9, color: 'var(--accent-ink)', border: '1px dashed var(--accent)' }}>+ catering ★</div>
            </div>
          </div>
          <div className="mono" style={{ marginTop: 18, marginBottom: 8 }}>Why "incremental"?</div>
          <div style={{ fontSize: 12, color: 'var(--ink-2)', lineHeight: 1.5 }}>
            Onara doesn't rebuild your whole site every time. Each component is generated atomically — we only rerun the agents needed for what changed. Faster, cheaper, no surprises.
          </div>
        </div>
      </div>
    </div>
  </div>
);

// === DOWNGRADE — site goes offline ===
const DowngradeOffline = () => (
  <div className="screen wf-paper" style={{ flexDirection: 'row' }}>
    <SidebarV1 active="sites" />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
      <div style={{ background: '#f9e7e1', borderBottom: '1px solid var(--accent)', padding: '14px 40px', display: 'flex', alignItems: 'center', gap: 14 }}>
        <Glyph name="x" size={14} color="var(--accent-ink)" />
        <div style={{ flex: 1 }}>
          <div style={{ fontWeight: 500, fontSize: 13, color: 'var(--accent-ink)' }}>Your sites are offline.</div>
          <div style={{ fontSize: 12, color: 'var(--ink-2)' }}>Pro trial ended at 9:42a today. Visitors see a suspension page until you upgrade.</div>
        </div>
        <span className="btn btn-accent">Restore for $12/mo</span>
      </div>

      <DashHeader sub="Free plan · preview only" title="My sites" action={null} />

      <div style={{ flex: 1, padding: '8px 40px 40px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20, alignContent: 'start' }}>
        {[
          { name: "Mike's Pizza", url: 'mikespizza.com' },
          { name: 'Bloom Florist', url: 'bloom-florist.pages.dev' },
          { name: 'Cedar Plumbing', url: 'cedar-plumbing.pages.dev' },
        ].map((s) => (
          <div key={s.name} className="sk sk-2" style={{ background: 'var(--paper)', padding: 0, overflow: 'hidden', position: 'relative' }}>
            <div className="ph hatch" style={{ height: 130, fontSize: 10, color: 'var(--ink-3)', position: 'relative' }}>
              <div style={{ position: 'absolute', inset: 0, display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column', gap: 4, background: 'rgba(244,237,225,0.85)' }}>
                <Glyph name="x" size={18} color="var(--accent-ink)" />
                <span style={{ fontFamily: 'var(--mono)', fontSize: 10, textTransform: 'uppercase', color: 'var(--accent-ink)' }}>Offline</span>
              </div>
            </div>
            <div style={{ padding: 16 }}>
              <div style={{ fontFamily: 'var(--serif)', fontSize: 18 }}>{s.name}</div>
              <div className="mono" style={{ marginTop: 6, color: 'var(--ink-4)', textDecoration: 'line-through' }}>{s.url}</div>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, paddingTop: 12, borderTop: '1px solid var(--rule-2)' }}>
                <span style={{ fontSize: 11, color: 'var(--accent-ink)' }}>Public URL paused</span>
                <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>Preview only</span>
              </div>
            </div>
            <div style={{ padding: '0 16px 16px' }}>
              <div className="btn btn-accent" style={{ width: '100%', justifyContent: 'center', padding: '10px' }}>Bring it back online</div>
            </div>
          </div>
        ))}

        <div className="sk sk-rule sk-thin" style={{ gridColumn: '1 / -1', padding: 18, background: 'var(--paper)', display: 'flex', alignItems: 'center', gap: 18 }}>
          <Glyph name="check" size={14} color="var(--ink-3)" />
          <div style={{ flex: 1, fontSize: 13, color: 'var(--ink-2)' }}>
            Your code, content, and revision history are safe in our backup. The moment you upgrade, all 3 sites redeploy automatically — usually under 30 seconds.
          </div>
          <span className="mono">no data lost</span>
        </div>
      </div>
    </div>
  </div>
);

// What visitors see when site is offline (the placeholder page)
const PublicSuspended = () => (
  <div className="screen wf-paper" style={{ alignItems: 'center', justifyContent: 'center', display: 'flex' }}>
    <div className="chrome-bar" style={{ position: 'absolute', top: 0, left: 0, right: 0 }}>
      <div className="chrome-dot" /><div className="chrome-dot" /><div className="chrome-dot" />
      <div className="mono" style={{ marginLeft: 12, fontSize: 9 }}>mikespizza.com</div>
    </div>
    <div style={{ textAlign: 'center', maxWidth: 460, padding: 40 }}>
      <div style={{ width: 56, height: 56, borderRadius: '50%', border: '1.5px solid var(--ink)', filter: 'url(#wobble-1)', margin: '0 auto 22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Glyph name="globe" size={22} color="var(--ink-3)" />
      </div>
      <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 28, margin: 0, letterSpacing: '-0.015em' }}>This site is paused.</h2>
      <p style={{ fontSize: 14, color: 'var(--ink-3)', marginTop: 12, lineHeight: 1.5 }}>
        Mike's Pizza is being updated and will be back shortly. If this is your site, sign in to restore it.
      </p>
      <div className="btn btn-soft" style={{ marginTop: 22, padding: '10px 18px' }}>Sign in to Onara</div>
      <div className="mono" style={{ marginTop: 26, color: 'var(--ink-4)' }}>Built with Onara · onara.tech</div>
    </div>
  </div>
);

window.AuthSplit = AuthSplit;
window.AuthCentered = AuthCentered;
window.AuthInline = AuthInline;
window.DomainConnect = DomainConnect;
window.RevisionRequest = RevisionRequest;
window.DowngradeOffline = DowngradeOffline;
window.PublicSuspended = PublicSuspended;
