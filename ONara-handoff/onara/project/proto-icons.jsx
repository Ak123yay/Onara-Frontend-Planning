// Onara hi-fi prototype — small icon set
const Icon = ({ name, size = 16, color = 'currentColor', stroke = 1.6 }) => {
  const s = { fill: 'none', stroke: color, strokeWidth: stroke, strokeLinecap: 'round', strokeLinejoin: 'round' };
  const map = {
    search: <><circle cx="7" cy="7" r="5" {...s} /><path d="M11 11 L15 15" {...s} /></>,
    arrow: <path d="M3 8 H13 M9 4 L13 8 L9 12" {...s} />,
    arrowL: <path d="M13 8 H3 M7 4 L3 8 L7 12" {...s} />,
    check: <path d="M3 8 L7 12 L13 4" {...s} />,
    plus: <path d="M8 3 V13 M3 8 H13" {...s} />,
    x: <path d="M4 4 L12 12 M12 4 L4 12" {...s} />,
    pin: <><path d="M8 14 C 8 14 3 9 3 6 a5 5 0 0 1 10 0 c0 3 -5 8 -5 8 z" {...s} /><circle cx="8" cy="6" r="1.5" {...s} /></>,
    star: <path d="M8 2 L9.7 6 L14 6.5 L11 9.5 L11.7 13.5 L8 11.5 L4.3 13.5 L5 9.5 L2 6.5 L6.3 6 Z" {...s} />,
    sparkle: <path d="M8 2 L9 7 L14 8 L9 9 L8 14 L7 9 L2 8 L7 7 Z" {...s} />,
    globe: <><circle cx="8" cy="8" r="6" {...s} /><path d="M2 8 H14 M8 2 C 5 5 5 11 8 14 M8 2 C 11 5 11 11 8 14" {...s} /></>,
    edit: <path d="M11 2 L14 5 L6 13 L2 14 L3 10 Z" {...s} />,
    eye: <><path d="M2 8 C 4 4 12 4 14 8 C 12 12 4 12 2 8 Z" {...s} /><circle cx="8" cy="8" r="2" {...s} /></>,
    cog: <><circle cx="8" cy="8" r="2.5" {...s} /><circle cx="8" cy="8" r="5.5" {...s} /></>,
    home: <path d="M3 7 L8 3 L13 7 V13 H3 Z M7 13 V9 H9 V13" {...s} />,
    grid: <><rect x="2" y="2" width="5" height="5" {...s} /><rect x="9" y="2" width="5" height="5" {...s} /><rect x="2" y="9" width="5" height="5" {...s} /><rect x="9" y="9" width="5" height="5" {...s} /></>,
    layers: <path d="M8 2 L14 6 L8 10 L2 6 Z M2 10 L8 14 L14 10" {...s} />,
    card: <><rect x="2" y="4" width="12" height="9" rx="1.5" {...s} /><path d="M2 7 H14" {...s} /></>,
    phone: <><rect x="5" y="2" width="6" height="13" rx="1" {...s} /><path d="M7 13 H9" {...s} /></>,
    menu: <path d="M3 5 H13 M3 8 H13 M3 11 H13" {...s} />,
    copy: <><rect x="5" y="5" width="9" height="9" rx="1" {...s} /><path d="M5 11 H3 a1 1 0 0 1 -1 -1 V3 a1 1 0 0 1 1 -1 H10 a1 1 0 0 1 1 1 V5" {...s} /></>,
    arrowR: <path d="M5 8 H11 M8 5 L11 8 L8 11" {...s} />,
  };
  return <svg width={size} height={size} viewBox="0 0 16 16" style={{ flexShrink: 0 }}>{map[name]}</svg>;
};

const Logo = () => (
  <span className="logo"><span className="logo-mark" />Onara</span>
);

window.Icon = Icon;
window.Logo = Logo;
