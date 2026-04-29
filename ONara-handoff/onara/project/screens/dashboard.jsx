// Onara — Dashboard (sites list + site detail)

const Sidebar = ({ active = 'sites', go }) => (
  <div className="sidebar">
    <div style={{ padding: '0 8px 18px' }}><Logo /></div>

    <button className="btn btn-accent btn-sm" style={{ marginBottom: 6 }} onClick={() => go('search')}>
      <Icon name="plus" size={12} color="white" stroke={2.2} /> New site
    </button>

    <div className="sb-section">Workspace</div>
    <div className={"sb-item " + (active === 'sites' ? 'active' : '')} onClick={() => go('dashboard')}>
      <Icon name="grid" size={14} /> My sites <span style={{ marginLeft: 'auto', fontSize: 11, color: 'var(--ink-4)' }}>3</span>
    </div>
    <div className="sb-item"><Icon name="layers" size={14} /> Drafts</div>
    <div className="sb-item"><Icon name="star" size={14} /> Templates</div>

    <div className="sb-section">Account</div>
    <div className="sb-item"><Icon name="card" size={14} /> Billing</div>
    <div className="sb-item"><Icon name="cog" size={14} /> Settings</div>
    <div className="sb-item"><Icon name="globe" size={14} /> Domains</div>

    <div style={{ flex: 1 }} />
    <div style={{ padding: 12, background: 'var(--paper)', borderRadius: 10, fontSize: 12, color: 'var(--ink-3)', border: '1px solid var(--rule-2)' }}>
      <div style={{ fontSize: 11, fontWeight: 500, color: 'var(--ink)', marginBottom: 4 }}>On free trial</div>
      <div style={{ marginBottom: 8 }}>23 days left</div>
      <div style={{ height: 4, background: 'var(--paper-2)', borderRadius: 100, overflow: 'hidden' }}>
        <div style={{ width: '23%', height: '100%', background: 'var(--accent)' }} />
      </div>
      <button className="btn btn-sm" style={{ width: '100%', marginTop: 10, fontSize: 11 }}>Upgrade for $24/mo</button>
    </div>
  </div>
);

const SITES = [
  { id: 1, name: "Lupita's Tacos", url: 'lupitastacos.com', status: 'live', visits: 1240, plan: 'Pro', img: '#5c2818' },
  { id: 2, name: "Pier 24 Coffee", url: 'pier24.onara.site', status: 'live', visits: 380, plan: 'Free', img: '#2c4a3e' },
  { id: 3, name: "Maru Ramen", url: 'maruramen.com', status: 'draft', visits: 0, plan: '—', img: '#3a2c4a' },
];

const Dashboard = ({ go }) => {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar active="sites" go={go} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 32px', borderBottom: '1px solid var(--rule-2)' }}>
          <div>
            <h1 className="serif" style={{ fontSize: 28, margin: 0, fontWeight: 400 }}>My sites</h1>
            <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>3 sites · 1,620 visits this month</div>
          </div>
          <div style={{ display: 'flex', gap: 8, alignItems: 'center' }}>
            <div style={{ position: 'relative' }}>
              <span style={{ position: 'absolute', left: 12, top: '50%', transform: 'translateY(-50%)' }}><Icon name="search" size={14} color="var(--ink-3)" /></span>
              <input className="input" placeholder="Search sites…" style={{ padding: '8px 14px 8px 34px', width: 220, fontSize: 13 }} />
            </div>
            <button className="btn btn-accent btn-sm" onClick={() => go('search')}>
              <Icon name="plus" size={12} color="white" stroke={2.2} /> New site
            </button>
          </div>
        </div>

        <div style={{ flex: 1, overflow: 'auto', padding: '24px 32px' }}>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16 }}>
            {SITES.map(s => (
              <div key={s.id} className="card" style={{ padding: 0, overflow: 'hidden', cursor: 'pointer', transition: 'transform 0.15s, box-shadow 0.15s' }}
                onClick={() => s.id === 1 && go('siteDetail')}
                onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 28px rgba(0,0,0,0.06)'; }}
                onMouseLeave={e => { e.currentTarget.style.transform = ''; e.currentTarget.style.boxShadow = ''; }}>
                <div style={{ height: 140, background: `linear-gradient(135deg, ${s.img} 0%, ${s.img}dd 100%)`, position: 'relative', display: 'flex', alignItems: 'flex-end', padding: 16 }}>
                  <span style={{ fontFamily: 'var(--serif)', color: 'white', fontSize: 22, fontWeight: 500 }}>{s.name}</span>
                  <span style={{ position: 'absolute', top: 12, right: 12, padding: '4px 10px', borderRadius: 100, background: s.status === 'live' ? 'rgba(255,255,255,0.95)' : 'rgba(0,0,0,0.6)', fontSize: 10, fontWeight: 500, color: s.status === 'live' ? '#1a1815' : 'white', display: 'inline-flex', alignItems: 'center', gap: 5 }}>
                    {s.status === 'live' && <span className="sdot sdot-on" style={{ width: 6, height: 6 }} />}
                    {s.status}
                  </span>
                </div>
                <div style={{ padding: 16 }}>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Icon name="globe" size={11} /> {s.url}
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: 14, fontSize: 12 }}>
                    <span style={{ color: 'var(--ink-3)' }}>{s.visits ? `${s.visits.toLocaleString()} visits / mo` : 'Unpublished'}</span>
                    <span className="mono" style={{ fontSize: 9 }}>{s.plan}</span>
                  </div>
                </div>
              </div>
            ))}

            {/* Empty slot */}
            <div onClick={() => go('search')} style={{ border: '1.5px dashed var(--rule)', borderRadius: 16, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', padding: 40, cursor: 'pointer', transition: 'all 0.15s', minHeight: 240 }}
              onMouseEnter={e => { e.currentTarget.style.borderColor = 'var(--accent)'; e.currentTarget.style.background = 'var(--accent-soft-2)'; }}
              onMouseLeave={e => { e.currentTarget.style.borderColor = 'var(--rule)'; e.currentTarget.style.background = ''; }}>
              <Icon name="plus" size={20} color="var(--ink-3)" stroke={1.4} />
              <div style={{ fontSize: 13, marginTop: 10, color: 'var(--ink-2)' }}>Build another site</div>
              <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 4 }}>~ 90 seconds</div>
            </div>
          </div>

          {/* Activity */}
          <div style={{ marginTop: 36 }}>
            <h2 style={{ fontSize: 13, fontWeight: 500, color: 'var(--ink-3)', textTransform: 'uppercase', letterSpacing: '0.06em', marginBottom: 14 }}>Recent activity</h2>
            <div className="card" style={{ padding: 0 }}>
              {[
                ['Auto-synced hours from Google', "Lupita's Tacos", '2h ago', 'sparkle'],
                ['New 5-star review · "Best al pastor in LA"', "Lupita's Tacos", 'Yesterday', 'star'],
                ['Site published', 'Pier 24 Coffee', '3 days ago', 'globe'],
                ['Revision applied · "make hero photo bigger"', "Lupita's Tacos", '5 days ago', 'edit'],
              ].map(([t, s, w, ic], i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 14, padding: '14px 18px', borderTop: i ? '1px solid var(--rule-2)' : 'none' }}>
                  <span style={{ width: 30, height: 30, borderRadius: '50%', background: 'var(--paper-2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Icon name={ic} size={13} color="var(--ink-2)" /></span>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontSize: 13 }}>{t}</div>
                    <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 2 }}>{s}</div>
                  </div>
                  <div style={{ fontSize: 11, color: 'var(--ink-4)' }}>{w}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

// SITE DETAIL ────────────────────────────────────────────────────
const SiteDetail = ({ go }) => {
  return (
    <div style={{ display: 'flex', height: '100%' }}>
      <Sidebar active="sites" go={go} />
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        <div style={{ padding: '20px 32px', borderBottom: '1px solid var(--rule-2)' }}>
          <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', alignItems: 'center', gap: 6, marginBottom: 6 }}>
            <a className="link-arrow" onClick={() => go('dashboard')} style={{ fontSize: 12, color: 'var(--ink-3)' }}>My sites</a>
            <span>›</span>
            <span>Lupita's Tacos</span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <h1 className="serif" style={{ fontSize: 28, margin: 0, fontWeight: 400 }}>Lupita's Tacos</h1>
              <div style={{ fontSize: 12, color: 'var(--ink-3)', display: 'flex', gap: 12, marginTop: 6, alignItems: 'center' }}>
                <span className="sdot sdot-on" style={{ width: 7, height: 7 }} /> Live · lupitastacos.com
                <span style={{ color: 'var(--rule)' }}>·</span>
                <span>Pro plan</span>
                <span style={{ color: 'var(--rule)' }}>·</span>
                <span>Last updated 2h ago</span>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 8 }}>
              <button className="btn btn-soft btn-sm"><Icon name="eye" size={12} /> View live</button>
              <button className="btn btn-soft btn-sm" onClick={() => go('domain')}><Icon name="globe" size={12} /> Domain</button>
              <button className="btn btn-accent btn-sm" onClick={() => go('revision')}><Icon name="edit" size={12} color="white" /> Request changes</button>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, overflow: 'auto', padding: 32 }}>
          <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 24 }}>
            {/* Stats */}
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 18 }}>
                <span className="mono">Last 30 days</span>
                <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>vs. previous · <span style={{ color: 'var(--accent)' }}>+18%</span></span>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 24 }}>
                <Metric n="1,240" l="visits" t="+18%" />
                <Metric n="84" l="menu views" t="+24%" />
                <Metric n="32" l="direction taps" t="+9%" />
              </div>
              {/* Mini chart */}
              <svg viewBox="0 0 400 80" style={{ width: '100%', height: 80 }}>
                <path d="M0,60 L20,55 L40,50 L60,52 L80,48 L100,42 L120,45 L140,38 L160,40 L180,32 L200,30 L220,35 L240,28 L260,25 L280,30 L300,22 L320,18 L340,20 L360,15 L380,12 L400,10 L400,80 L0,80 Z" fill="var(--accent-soft)" />
                <path d="M0,60 L20,55 L40,50 L60,52 L80,48 L100,42 L120,45 L140,38 L160,40 L180,32 L200,30 L220,35 L240,28 L260,25 L280,30 L300,22 L320,18 L340,20 L360,15 L380,12 L400,10" fill="none" stroke="var(--accent)" strokeWidth="1.5" />
              </svg>
            </div>

            {/* Pages */}
            <div className="card">
              <div className="mono" style={{ marginBottom: 14 }}>Pages</div>
              {[
                ['Home', '/', 720],
                ['Menu', '/menu', 380],
                ['Story', '/story', 88],
                ['Visit', '/visit', 52],
              ].map(([n, p, v], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '12px 0', borderTop: i ? '1px solid var(--rule-2)' : 'none' }}>
                  <div>
                    <div style={{ fontSize: 13, fontWeight: 500 }}>{n}</div>
                    <div className="mono" style={{ fontSize: 9, marginTop: 2 }}>{p}</div>
                  </div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)' }}>{v} visits</div>
                </div>
              ))}
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginTop: 24 }}>
            {/* Auto-sync */}
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div>
                  <div className="serif" style={{ fontSize: 18 }}>Auto-sync from Google</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>We update your site when your listing changes.</div>
                </div>
                <span className="chip chip-accent" style={{ background: 'var(--accent-soft)', color: 'var(--accent)', border: 'none' }}>On</span>
              </div>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <SyncRow label="Hours" last="Synced 2h ago" />
                <SyncRow label="Menu items" last="Synced yesterday" />
                <SyncRow label="Photos (38)" last="Synced 3 days ago" />
                <SyncRow label="Reviews badge" last="Updated weekly" />
              </div>
            </div>

            {/* Revisions */}
            <div className="card">
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 16 }}>
                <div>
                  <div className="serif" style={{ fontSize: 18 }}>Revisions</div>
                  <div style={{ fontSize: 12, color: 'var(--ink-3)', marginTop: 4 }}>Describe a change in plain English.</div>
                </div>
                <span style={{ fontSize: 11, color: 'var(--ink-3)' }}>4 of unlimited used</span>
              </div>
              {[
                ['Make the hero photo bigger', '5 days ago', 'applied'],
                ['Add a private events section', '12 days ago', 'applied'],
                ['Use warmer colors throughout', '23 days ago', 'applied'],
              ].map(([t, w, s], i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderTop: i ? '1px solid var(--rule-2)' : 'none' }}>
                  <div style={{ fontSize: 13 }}>"{t}"</div>
                  <div style={{ fontSize: 11, color: 'var(--ink-3)' }}>{w}</div>
                </div>
              ))}
              <button className="btn btn-soft btn-sm" style={{ width: '100%', marginTop: 14 }} onClick={() => go('revision')}>
                <Icon name="edit" size={12} /> Request a change
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Metric = ({ n, l, t }) => (
  <div>
    <div className="serif" style={{ fontSize: 32, lineHeight: 1, fontWeight: 400 }}>{n}</div>
    <div style={{ fontSize: 11, color: 'var(--ink-3)', marginTop: 4, display: 'flex', gap: 6, alignItems: 'center' }}>
      <span>{l}</span>
      <span style={{ color: 'var(--accent)' }}>{t}</span>
    </div>
  </div>
);
const SyncRow = ({ label, last }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', fontSize: 12 }}>
    <span style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
      <Icon name="check" size={12} color="var(--accent)" stroke={2.2} />
      <span>{label}</span>
    </span>
    <span style={{ color: 'var(--ink-3)' }}>{last}</span>
  </div>
);

window.Dashboard = Dashboard;
window.SiteDetail = SiteDetail;
