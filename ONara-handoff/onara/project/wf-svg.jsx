// Shared SVG defs — wobble turbulence filters that give .sk borders a hand-drawn feel
const WfSvgDefs = () => (
  <svg width="0" height="0" style={{ position: 'absolute' }} aria-hidden="true">
    <defs>
      <filter id="wobble-1">
        <feTurbulence type="fractalNoise" baseFrequency="0.02" numOctaves="2" seed="3" />
        <feDisplacementMap in="SourceGraphic" scale="1.5" />
      </filter>
      <filter id="wobble-2">
        <feTurbulence type="fractalNoise" baseFrequency="0.04" numOctaves="2" seed="7" />
        <feDisplacementMap in="SourceGraphic" scale="2" />
      </filter>
      <filter id="wobble-3">
        <feTurbulence type="fractalNoise" baseFrequency="0.03" numOctaves="2" seed="13" />
        <feDisplacementMap in="SourceGraphic" scale="2.5" />
      </filter>
    </defs>
  </svg>
);

// Hand-drawn arrow connector
const SkArrow = ({ d, dash = false, color = 'var(--accent-ink)', width = 1.4, head = true, style = {} }) => (
  <svg
    style={{ position: 'absolute', overflow: 'visible', pointerEvents: 'none', ...style }}
    width="100%"
    height="100%"
  >
    <defs>
      <marker id={`arrh-${color.replace(/[^a-z]/gi, '')}`} viewBox="0 0 10 10" refX="8" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
        <path d="M0,0 L10,5 L0,10" fill="none" stroke={color} strokeWidth="1.2" strokeLinecap="round" strokeLinejoin="round" />
      </marker>
    </defs>
    <path
      d={d}
      fill="none"
      stroke={color}
      strokeWidth={width}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeDasharray={dash ? '4 4' : undefined}
      markerEnd={head ? `url(#arrh-${color.replace(/[^a-z]/gi, '')})` : undefined}
      style={{ filter: 'url(#wobble-1)' }}
    />
  </svg>
);

// Decorative corner mark
const CornerMark = ({ where = 'tl' }) => {
  const map = {
    tl: { top: -8, left: -8, transform: 'rotate(0deg)' },
    tr: { top: -8, right: -8, transform: 'rotate(90deg)' },
    bl: { bottom: -8, left: -8, transform: 'rotate(-90deg)' },
    br: { bottom: -8, right: -8, transform: 'rotate(180deg)' },
  };
  return (
    <svg width="14" height="14" viewBox="0 0 14 14" style={{ position: 'absolute', ...map[where] }}>
      <path d="M2 7 L2 2 L7 2" fill="none" stroke="var(--ink)" strokeWidth="1.5" strokeLinecap="round" />
    </svg>
  );
};

// Lo-fi heart / star / etc — kept simple
const Glyph = ({ name, size = 14, color = 'var(--ink)' }) => {
  const stroke = { fill: 'none', stroke: color, strokeWidth: 1.4, strokeLinecap: 'round', strokeLinejoin: 'round' };
  if (name === 'search') return (
    <svg width={size} height={size} viewBox="0 0 16 16"><circle cx="7" cy="7" r="4.5" {...stroke} /><path d="M10.5 10.5 L14 14" {...stroke} /></svg>
  );
  if (name === 'arrow-r') return <svg width={size} height={size} viewBox="0 0 16 16"><path d="M3 8 H13 M9 4 L13 8 L9 12" {...stroke} /></svg>;
  if (name === 'check') return <svg width={size} height={size} viewBox="0 0 16 16"><path d="M3 8 L7 12 L13 4" {...stroke} /></svg>;
  if (name === 'plus') return <svg width={size} height={size} viewBox="0 0 16 16"><path d="M8 3 V13 M3 8 H13" {...stroke} /></svg>;
  if (name === 'x') return <svg width={size} height={size} viewBox="0 0 16 16"><path d="M4 4 L12 12 M12 4 L4 12" {...stroke} /></svg>;
  if (name === 'pin') return <svg width={size} height={size} viewBox="0 0 16 16"><path d="M8 14 C 8 14 3 9 3 6 a5 5 0 0 1 10 0 c0 3 -5 8 -5 8 z" {...stroke} /><circle cx="8" cy="6" r="1.5" {...stroke} /></svg>;
  if (name === 'star') return <svg width={size} height={size} viewBox="0 0 16 16"><path d="M8 2 L9.8 6 L14 6.5 L11 9.5 L11.8 13.5 L8 11.5 L4.2 13.5 L5 9.5 L2 6.5 L6.2 6 Z" {...stroke} /></svg>;
  if (name === 'sparkle') return (
    <svg width={size} height={size} viewBox="0 0 16 16">
      <path d="M8 2 L9 7 L14 8 L9 9 L8 14 L7 9 L2 8 L7 7 Z" {...stroke} />
    </svg>
  );
  if (name === 'cog') return <svg width={size} height={size} viewBox="0 0 16 16"><circle cx="8" cy="8" r="2.5" {...stroke} /><circle cx="8" cy="8" r="5.5" {...stroke} /></svg>;
  if (name === 'globe') return <svg width={size} height={size} viewBox="0 0 16 16"><circle cx="8" cy="8" r="6" {...stroke} /><path d="M2 8 H14 M8 2 C 5 5 5 11 8 14 M8 2 C 11 5 11 11 8 14" {...stroke} /></svg>;
  if (name === 'menu') return <svg width={size} height={size} viewBox="0 0 16 16"><path d="M3 4 H13 M3 8 H13 M3 12 H13" {...stroke} /></svg>;
  if (name === 'phone') return <svg width={size} height={size} viewBox="0 0 16 16"><path d="M5 2 L11 2 L11 14 L5 14 Z M7 12.5 H9" {...stroke} /></svg>;
  if (name === 'edit') return <svg width={size} height={size} viewBox="0 0 16 16"><path d="M11 2 L14 5 L6 13 L2 14 L3 10 Z" {...stroke} /></svg>;
  if (name === 'eye') return <svg width={size} height={size} viewBox="0 0 16 16"><path d="M2 8 C 4 4 12 4 14 8 C 12 12 4 12 2 8 Z" {...stroke} /><circle cx="8" cy="8" r="2" {...stroke} /></svg>;
  return null;
};

window.WfSvgDefs = WfSvgDefs;
window.SkArrow = SkArrow;
window.CornerMark = CornerMark;
window.Glyph = Glyph;
