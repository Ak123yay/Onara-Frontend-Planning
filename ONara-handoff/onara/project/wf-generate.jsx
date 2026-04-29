// === Generation progress wireframes — 4 directions for the 60-120s wait ===

const AGENTS = [
  { n: 1, name: 'Business Analyst', desc: 'Reading your industry signals', tool: 'gpt-oss:20b' },
  { n: 2, name: 'Content Writer', desc: 'Drafting your headlines & copy', tool: 'qwen3:8b' },
  { n: 3, name: 'Style Agent', desc: 'Choosing colors & type', tool: 'qwen3:8b' },
  { n: 4, name: 'Planner', desc: 'Drawing your site blueprint', tool: 'glm-5.1' },
  { n: 5, name: 'Prompt Engineer', desc: 'Briefing the code agent', tool: 'glm-5.1' },
  { n: 6, name: 'Code Generator', desc: 'Writing HTML, CSS, JS', tool: 'Copilot' },
  { n: 7, name: 'Debugger', desc: 'Linting & fixing issues', tool: 'minimax-m2.7 + RAG' },
  { n: 8, name: 'SEO Agent', desc: 'Adding meta & schema', tool: 'qwen3:8b' },
  { n: 9, name: 'QA Agent', desc: 'Final approval', tool: 'minimax-m2.5 + RAG' },
  { n: 10, name: 'Mobile Optimizer', desc: 'Polishing for phones', tool: 'qwen3:8b' },
];

const ShellHeaderG = () => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '18px 32px', borderBottom: '1px solid var(--rule-2)' }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <div style={{ width: 22, height: 22, border: '1.5px solid var(--ink)', borderRadius: '50%', filter: 'url(#wobble-1)' }} />
      <span style={{ fontFamily: 'var(--serif)', fontSize: 18, fontWeight: 500 }}>Onara</span>
    </div>
    <div className="mono">Mike's Pizza · generating</div>
    <div style={{ display: 'flex', alignItems: 'center', gap: 12, fontSize: 12, color: 'var(--ink-3)' }}>
      <span>Cancel</span>
      <div className="ph-circle" style={{ width: 28, height: 28 }} />
    </div>
  </div>
);

// V1 — Vertical checklist of 10 agents, current one highlighted, descriptive
const GenerateV1 = () => (
  <div className="screen wf-paper">
    <ShellHeaderG />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '380px 1fr' }}>
      <div style={{ padding: '32px 28px', borderRight: '1px solid var(--rule-2)' }}>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 26, margin: 0, letterSpacing: '-0.01em' }}>Building your site</h2>
        <div className="mono" style={{ marginTop: 6 }}>~ 47 seconds remaining</div>
        <div style={{ marginTop: 22, position: 'relative' }}>
          {/* connecting spine */}
          <div style={{ position: 'absolute', left: 11, top: 8, bottom: 8, width: 1, background: 'var(--rule)' }} />
          {AGENTS.map((a, i) => {
            const state = i < 3 ? 'done' : i === 3 ? 'on' : 'pending';
            return (
              <div key={a.n} style={{ display: 'flex', gap: 14, padding: '10px 0', position: 'relative' }}>
                <span className={`sdot ${state === 'done' ? 'sdot-done' : state === 'on' ? 'sdot-on' : 'sdot-pending'}`} style={{ marginTop: 6, zIndex: 1, outline: '4px solid var(--paper)' }} />
                <div style={{ flex: 1, opacity: state === 'pending' ? 0.5 : 1 }}>
                  <div style={{ display: 'flex', alignItems: 'baseline', gap: 8 }}>
                    <span className="mono" style={{ fontSize: 9 }}>0{a.n}</span>
                    <span style={{ fontSize: 13, fontWeight: 500, color: state === 'on' ? 'var(--accent-ink)' : 'var(--ink)' }}>{a.name}</span>
                    {state === 'on' && <span className="hand hand-accent" style={{ fontSize: 14 }}>···</span>}
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 2 }}>{a.desc}</div>
                </div>
                {state === 'done' && <Glyph name="check" size={12} color="var(--ink-3)" />}
              </div>
            );
          })}
        </div>
      </div>

      <div style={{ padding: '40px 60px', position: 'relative' }}>
        <div className="mono" style={{ marginBottom: 8 }}>Live preview · filling in</div>
        <div className="sk sk-2" style={{ height: '85%', overflow: 'hidden' }}>
          <div className="chrome-bar">
            <div className="chrome-dot" /><div className="chrome-dot" /><div className="chrome-dot" />
            <div className="mono" style={{ marginLeft: 12, fontSize: 9 }}>preview · mikes-pizza</div>
          </div>
          <div style={{ padding: 32 }}>
            <div className="bar" style={{ width: '50%', marginBottom: 8 }} />
            <div className="bar bar-thin" style={{ width: '80%', marginBottom: 18 }} />
            <div className="ph" style={{ height: 200, marginBottom: 18 }}>hero · choosing photo</div>
            <div className="bar bar-thin" style={{ width: '30%', marginBottom: 10 }} />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 10 }}>
              <div className="ph" style={{ height: 90 }}>menu</div>
              <div className="ph" style={{ height: 90 }}>hours</div>
              <div className="hatch-soft" style={{ height: 90, border: '1px dashed var(--rule)' }} />
            </div>
            <div className="hatch-soft" style={{ marginTop: 18, height: 90, border: '1px dashed var(--rule)' }} />
          </div>
        </div>
        <div className="anno" style={{ top: 120, right: 80, transform: 'rotate(2deg)' }}>
          ↑ preview fills as agents finish
        </div>
      </div>
    </div>
  </div>
);

// V2 — Single big focal agent card that morphs per step
const GenerateV2 = () => (
  <div className="screen wf-paper">
    <ShellHeaderG />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 80px', position: 'relative' }}>
      <div className="mono" style={{ marginBottom: 24 }}>04 / 10 · ~47s left</div>

      {/* Big focal card */}
      <div className="sk sk-2 stack" style={{ width: 540, padding: 36, textAlign: 'center', background: 'var(--paper)', position: 'relative' }}>
        <div style={{ width: 64, height: 64, borderRadius: '50%', border: '1.5px solid var(--ink)', filter: 'url(#wobble-2)', margin: '0 auto 22px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <Glyph name="sparkle" size={26} color="var(--accent-ink)" />
        </div>
        <div className="mono" style={{ marginBottom: 8, color: 'var(--accent-ink)' }}>Agent 4 · Planner</div>
        <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 32, lineHeight: 1.15, margin: 0, letterSpacing: '-0.015em' }}>
          Drawing your site<br/>blueprint…
        </h2>
        <p style={{ fontSize: 13, color: 'var(--ink-3)', marginTop: 14, lineHeight: 1.5 }}>
          Merging your tone, color choices, and copy into one floor plan for the code agent.
        </p>
        <div className="squiggle squiggle-accent" style={{ marginTop: 28 }} />
      </div>

      {/* tiny ticker below */}
      <div style={{ marginTop: 36, display: 'flex', gap: 6 }}>
        {AGENTS.map((a, i) => (
          <div key={a.n} title={a.name} style={{ width: 34, height: 6, background: i < 3 ? 'var(--ink)' : i === 3 ? 'var(--accent)' : 'var(--rule)', filter: 'url(#wobble-1)' }} />
        ))}
      </div>
      <div className="mono" style={{ marginTop: 12 }}>Analyst · Writer · Style · <span style={{ color: 'var(--accent-ink)' }}>Planner</span> · Prompt · Code · Debug · SEO · QA · Mobile</div>

      <div className="anno" style={{ top: 200, left: 60, transform: 'rotate(-3deg)' }}>
        morphs to next agent<br/>each ~6s
      </div>
    </div>
  </div>
);

// V3 — Single progress bar + caption + reassuring copy
const GenerateV3 = () => (
  <div className="screen wf-paper">
    <ShellHeaderG />
    <div style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: '40px 80px', position: 'relative' }}>
      <div className="ph-circle" style={{ width: 80, height: 80, marginBottom: 28, background: 'var(--paper-2)' }} />
      <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 300, fontSize: 56, letterSpacing: '-0.025em', margin: 0, textAlign: 'center', maxWidth: 700 }}>
        Hang tight — your site<br/>is taking shape.
      </h2>
      <p style={{ fontSize: 15, color: 'var(--ink-3)', marginTop: 18, maxWidth: 460, textAlign: 'center', lineHeight: 1.5 }}>
        We'll email you when it's ready, or you can stay on this page. Most sites take under two minutes.
      </p>

      <div style={{ marginTop: 50, width: 520 }}>
        <div className="sk" style={{ height: 8, padding: 0, background: 'var(--paper-2)', overflow: 'hidden', borderColor: 'var(--rule)' }}>
          <div style={{ width: '38%', height: '100%', background: 'var(--accent)' }} />
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 10 }}>
          <span className="mono">38% · agent 4 of 10</span>
          <span className="mono">Drawing blueprint…</span>
        </div>
      </div>

      <div className="anno anno-multi" style={{ bottom: 80, right: 80, transform: 'rotate(2deg)' }}>
        cleanest option;<br/>least info but lowest stress
      </div>
    </div>
  </div>
);

// V4 — Live agent log + timeline (more transparent / "nerdy" feel)
const GenerateV4 = () => (
  <div className="screen wf-paper">
    <ShellHeaderG />
    <div style={{ flex: 1, display: 'grid', gridTemplateColumns: '1fr 360px' }}>
      <div style={{ padding: '32px 50px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 22 }}>
          <div>
            <div className="mono">progress</div>
            <h2 style={{ fontFamily: 'var(--serif)', fontWeight: 400, fontSize: 32, margin: 0, marginTop: 4 }}>4 of 10 · Planner</h2>
          </div>
          <div style={{ fontFamily: 'var(--mono)', fontSize: 28, color: 'var(--accent-ink)' }}>00:47</div>
        </div>

        {/* horizontal timeline */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
          {AGENTS.map((a, i) => (
            <div key={a.n} style={{ flex: 1, position: 'relative' }}>
              <div className="sk sk-thin" style={{ height: 22, padding: 0, background: i < 3 ? 'var(--ink)' : i === 3 ? 'var(--accent)' : 'var(--paper-2)', borderColor: i < 4 ? 'var(--ink)' : 'var(--rule)' }} />
              <div className="mono" style={{ fontSize: 8, marginTop: 6, textAlign: 'center', whiteSpace: 'nowrap' }}>{a.name.split(' ')[0]}</div>
            </div>
          ))}
        </div>

        {/* terminal-style log */}
        <div className="sk sk-rule" style={{ marginTop: 32, padding: 18, background: 'var(--paper-2)', fontFamily: 'var(--mono)', fontSize: 11, lineHeight: 1.7, height: 360, overflow: 'hidden' }}>
          <div style={{ color: 'var(--ink-3)' }}>00:02 <span style={{ color: 'var(--ink)' }}>→ analyst</span> reading industry…</div>
          <div style={{ color: 'var(--ink-3)' }}>00:09 <span style={{ color: 'var(--ink)' }}>✓ analyst</span> industryType=pizzeria, urgency=medium</div>
          <div style={{ color: 'var(--ink-3)' }}>00:09 <span style={{ color: 'var(--ink)' }}>→ writer + style</span> running in parallel</div>
          <div style={{ color: 'var(--ink-3)' }}>00:21 <span style={{ color: 'var(--ink)' }}>✓ writer</span> 6 sections drafted (heroHeadline + 5)</div>
          <div style={{ color: 'var(--ink-3)' }}>00:24 <span style={{ color: 'var(--ink)' }}>✓ style</span> warm palette · #b15a3a + Fraunces</div>
          <div style={{ color: 'var(--ink-3)' }}>00:25 <span style={{ color: 'var(--accent-ink)' }}>→ planner</span> merging 3 outputs into blueprint…</div>
          <div style={{ color: 'var(--accent-ink)' }}>00:29 <span className="hand hand-accent" style={{ fontSize: 14 }}>···</span></div>
        </div>
      </div>

      {/* preview rail */}
      <div style={{ borderLeft: '1px solid var(--rule-2)', padding: 24, background: 'var(--paper-2)' }}>
        <div className="mono" style={{ marginBottom: 12 }}>Decisions so far</div>
        <div className="sk sk-rule sk-thin" style={{ padding: 12, background: 'var(--paper)' }}>
          <div className="mono" style={{ fontSize: 9 }}>Tone</div>
          <div style={{ fontSize: 13, marginBottom: 10 }}>Friendly, family-run</div>
          <div className="mono" style={{ fontSize: 9 }}>Palette</div>
          <div style={{ display: 'flex', gap: 4, marginTop: 4, marginBottom: 10 }}>
            <div style={{ flex: 1, height: 22, background: '#b15a3a' }} />
            <div style={{ flex: 1, height: 22, background: '#e6c19c' }} />
            <div style={{ flex: 1, height: 22, background: '#f7ede0' }} />
          </div>
          <div className="mono" style={{ fontSize: 9 }}>Type</div>
          <div style={{ fontFamily: 'var(--serif)', fontSize: 18, marginTop: 2 }}>Fraunces · Inter</div>
        </div>
        <div className="mono" style={{ marginTop: 24, marginBottom: 8 }}>Heads up</div>
        <div className="sk sk-rule sk-thin" style={{ padding: 12, background: 'var(--paper)', fontSize: 12, color: 'var(--ink-2)' }}>
          We'll publish at <span style={{ fontFamily: 'var(--mono)', fontSize: 11 }}>mikes-pizza.pages.dev</span>. Your custom domain can be added on the next screen.
        </div>
      </div>
    </div>
  </div>
);

window.GenerateV1 = GenerateV1;
window.GenerateV2 = GenerateV2;
window.GenerateV3 = GenerateV3;
window.GenerateV4 = GenerateV4;
