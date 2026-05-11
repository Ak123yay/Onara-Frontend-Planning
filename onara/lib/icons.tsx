import type { SVGAttributes } from "react";

type IconProps = Omit<SVGAttributes<SVGSVGElement>, "stroke" | "fill"> & {
  size?: number;
  stroke?: number;
  fill?: string;
};

function Svg({
  size = 16,
  stroke = 1.6,
  fill,
  className,
  children,
  ...rest
}: IconProps & { children: React.ReactNode }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill={fill ?? "none"}
      stroke="currentColor"
      strokeWidth={stroke}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...rest}
    >
      {children}
    </svg>
  );
}

export const SearchIcon = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="11" cy="11" r="7" />
    <path d="m20 20-3.5-3.5" />
  </Svg>
);

export const ArrowRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 12h14m-6-6 6 6-6 6" />
  </Svg>
);

export const ArrowLeft = (p: IconProps) => (
  <Svg {...p}>
    <path d="M19 12H5m6-6-6 6 6 6" />
  </Svg>
);

export const Check = ({ stroke = 2, ...p }: IconProps) => (
  <Svg stroke={stroke} {...p}>
    <path d="M4 12.5 9 17l11-11" />
  </Svg>
);

export const Plus = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 5v14M5 12h14" />
  </Svg>
);

export const X = (p: IconProps) => (
  <Svg {...p}>
    <path d="M6 6l12 12M18 6 6 18" />
  </Svg>
);

export const Pin = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 21s7-7.5 7-13a7 7 0 1 0-14 0c0 5.5 7 13 7 13z" />
    <circle cx="12" cy="8" r="2.5" />
  </Svg>
);

export const Star = ({ fill = "currentColor", stroke = 1.2, ...p }: IconProps) => (
  <Svg fill={fill} stroke={stroke} {...p}>
    <path d="m12 3 2.6 5.6 6.1.7-4.5 4.2 1.2 6-5.4-3.1-5.4 3.1 1.2-6L3.3 9.3l6.1-.7L12 3z" />
  </Svg>
);

export const Globe = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
  </Svg>
);

export const Edit = (p: IconProps) => (
  <Svg {...p}>
    <path d="M16.5 4.5 19.5 7.5 8 19l-4 1 1-4L16.5 4.5zM14 7l3 3" />
  </Svg>
);

export const Cog = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.8l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.8-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.8.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.8 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.8l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.8.3h0a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.8-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.8h0a1.7 1.7 0 0 0 1.5 1H21a2 2 0 1 1 0 4h-.1a1.7 1.7 0 0 0-1.5 1z" />
  </Svg>
);

export const Sparkle = ({ fill = "currentColor", stroke = 1.2, ...p }: IconProps) => (
  <Svg fill={fill} stroke={stroke} {...p}>
    {/* 4-point sparkle, centred on (12,12), with concave waist via cubic Béziers */}
    <path
      d="M12 2 C 12.6 9 14.5 10.4 22 12 C 14.5 13.6 12.6 15 12 22 C 11.4 15 9.5 13.6 2 12 C 9.5 10.4 11.4 9 12 2 Z"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Wand = ({ stroke = 1.5, ...p }: IconProps) => (
  <Svg stroke={stroke} {...p}>
    <path d="M3.5 20.5 L 14.6 9.4 l 0 0" strokeLinecap="round" />
    <path d="M14.6 9.4 l 1.5 -1.5" strokeLinecap="round" />
    <path d="M19 3 v 3 M19 9 v 3 M16 6 h 3 M20.5 6 h 2.5" opacity="0.9" />
    <path d="M5 14 l 0.4 1.6 1.6 0.4 -1.6 0.4 -0.4 1.6 -0.4 -1.6 -1.6 -0.4 1.6 -0.4 z" fill="currentColor" stroke="none" />
  </Svg>
);

export const Bolt = ({ fill = "currentColor", stroke = 0, ...p }: IconProps) => (
  <Svg fill={fill} stroke={stroke} {...p}>
    <path d="M13.2 2 L 4.5 13.5 h 5.6 L 8.6 22 l 8.7 -11.5 h -5.6 L 13.2 2 z" strokeLinejoin="round" />
  </Svg>
);

export const Quote = ({ stroke = 1.5, fill = "currentColor", ...p }: IconProps) => (
  <Svg stroke={stroke} fill={fill} {...p}>
    <path d="M7 7 h 3.4 v 3.4 H 7 c 0 2.6 0.6 4.5 1.8 5.7 L 7 17.5 c -2 -1.6 -3 -4 -3 -7.1 V 7 z" />
    <path d="M15 7 h 3.4 v 3.4 H 15 c 0 2.6 0.6 4.5 1.8 5.7 L 15 17.5 c -2 -1.6 -3 -4 -3 -7.1 V 7 z" />
  </Svg>
);

export const MousePointer = ({ stroke = 1.6, ...p }: IconProps) => (
  <Svg stroke={stroke} {...p}>
    <path d="M4 3 L 13.6 21 l 2.6 -7.4 7.4 -2.6 z" strokeLinejoin="round" fill="currentColor" />
    <path d="M14.5 14.5 L 19.5 19.5" strokeLinejoin="round" />
  </Svg>
);

export const Cursor = ({ stroke = 1.6, ...p }: IconProps) => (
  <Svg stroke={stroke} {...p}>
    <path d="M4 4 L 19 11.5 12 13 10 20 z" strokeLinejoin="round" />
  </Svg>
);

export const Eye = (p: IconProps) => (
  <Svg {...p}>
    <path d="M2 12s3.5-7 10-7 10 7 10 7-3.5 7-10 7S2 12 2 12z" />
    <circle cx="12" cy="12" r="3" />
  </Svg>
);

export const Menu = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 6h18M3 12h18M3 18h18" />
  </Svg>
);

export const Phone = (p: IconProps) => (
  <Svg {...p}>
    <path d="M5 4h4l2 5-2.5 1.5a12 12 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
  </Svg>
);

export const Layers = (p: IconProps) => (
  <Svg {...p}>
    <path d="M12 3 2 8l10 5 10-5-10-5zM2 13l10 5 10-5M2 18l10 5 10-5" />
  </Svg>
);

export const Mail = (p: IconProps) => (
  <Svg {...p}>
    <rect x="3" y="5" width="18" height="14" rx="2" />
    <path d="m3 7 9 7 9-7" />
  </Svg>
);

export const Copy = (p: IconProps) => (
  <Svg {...p}>
    <rect x="9" y="9" width="12" height="12" rx="2" />
    <path d="M5 15V5a2 2 0 0 1 2-2h10" />
  </Svg>
);

export const Clock = (p: IconProps) => (
  <Svg {...p}>
    <circle cx="12" cy="12" r="9" />
    <path d="M12 7v5l3 2" />
  </Svg>
);

export const ChevronDown = (p: IconProps) => (
  <Svg {...p}>
    <path d="m6 9 6 6 6-6" />
  </Svg>
);

export const ChevronRight = (p: IconProps) => (
  <Svg {...p}>
    <path d="m9 6 6 6-6 6" />
  </Svg>
);

export const TrendUp = (p: IconProps) => (
  <Svg {...p}>
    <path d="M3 17 9 11l4 4 8-8M14 5h7v7" />
  </Svg>
);

export const Sparkles = ({ fill = "currentColor", stroke = 0, ...p }: IconProps) => (
  <Svg fill={fill} stroke={stroke} {...p}>
    {/* Big sparkle */}
    <path d="M11 2.5 C 11.4 6.6 12.9 8.1 17 8.5 C 12.9 8.9 11.4 10.4 11 14.5 C 10.6 10.4 9.1 8.9 5 8.5 C 9.1 8.1 10.6 6.6 11 2.5 Z" strokeLinejoin="round" />
    {/* Mid sparkle */}
    <path d="M18.5 13 c 0.2 1.7 0.8 2.3 2.5 2.5 c -1.7 0.2 -2.3 0.8 -2.5 2.5 c -0.2 -1.7 -0.8 -2.3 -2.5 -2.5 c 1.7 -0.2 2.3 -0.8 2.5 -2.5 z" strokeLinejoin="round" />
    {/* Tiny sparkle */}
    <path d="M5.6 17.2 c 0.1 0.9 0.4 1.2 1.3 1.3 c -0.9 0.1 -1.2 0.4 -1.3 1.3 c -0.1 -0.9 -0.4 -1.2 -1.3 -1.3 c 0.9 -0.1 1.2 -0.4 1.3 -1.3 z" strokeLinejoin="round" />
  </Svg>
);

export const Heart = ({ fill = "none", stroke = 1.6, ...p }: IconProps) => (
  <Svg fill={fill} stroke={stroke} {...p}>
    <path d="M12 21s-7-4.5-9.5-9C1 9 2 5 6 5c2 0 3.5 1 4 2 .5-1 2-2 4-2 4 0 5 4 3.5 7-2.5 4.5-9.5 9-9.5 9z" />
  </Svg>
);

export const Lightning = ({ fill = "currentColor", stroke = 1, ...p }: IconProps) => (
  <Svg fill={fill} stroke={stroke} {...p}>
    <path d="M13 2 4 14h7l-1 8 9-12h-7l1-8z" />
  </Svg>
);

// Business glyphs — custom SVG icons that replace emoji usage.
export const Pizza = ({ stroke = 1.5, ...p }: IconProps) => (
  <Svg stroke={stroke} {...p}>
    {/* Slice — apex at top, arc'd crust at the bottom */}
    <path d="M12 3.2 L4.4 17.4 A 8.6 8.6 0 0 0 19.6 17.4 Z" strokeLinejoin="round" />
    {/* Crust separation line */}
    <path
      d="M5.5 15.6 A 7.4 7.4 0 0 0 18.5 15.6"
      opacity="0.45"
      strokeWidth={stroke - 0.2}
    />
    {/* Toppings — pepperoni */}
    <circle cx="9.6" cy="13.2" r="1.15" fill="currentColor" stroke="none" />
    <circle cx="14.2" cy="12.8" r="1.05" fill="currentColor" stroke="none" />
    <circle cx="12" cy="9.4" r="0.85" fill="currentColor" stroke="none" />
    <circle cx="11.6" cy="15.7" r="0.7" fill="currentColor" stroke="none" />
    <circle cx="15.4" cy="15.4" r="0.6" fill="currentColor" stroke="none" />
  </Svg>
);

export const Flower = ({ stroke = 1.5, ...p }: IconProps) => (
  <Svg stroke={stroke} {...p}>
    {/* 5 petals around a center */}
    <ellipse cx="12" cy="7.2" rx="2.1" ry="3.1" />
    <ellipse cx="12" cy="7.2" rx="2.1" ry="3.1" transform="rotate(72 12 12)" />
    <ellipse cx="12" cy="7.2" rx="2.1" ry="3.1" transform="rotate(144 12 12)" />
    <ellipse cx="12" cy="7.2" rx="2.1" ry="3.1" transform="rotate(216 12 12)" />
    <ellipse cx="12" cy="7.2" rx="2.1" ry="3.1" transform="rotate(288 12 12)" />
    {/* Center */}
    <circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" />
    <circle cx="12" cy="12" r="2.4" />
  </Svg>
);

export const Wrench = ({ stroke = 1.5, ...p }: IconProps) => (
  <Svg stroke={stroke} {...p}>
    {/* Pipe-wrench head with open jaws + offset handle */}
    <path
      d="M14.6 4.3 a 4.4 4.4 0 0 0 -3.3 7.6 L 4.5 18.7 a 1.5 1.5 0 0 0 2.1 2.1 l 6.8 -6.8 a 4.4 4.4 0 0 0 7.6 -3.3 l -2.6 2.6 -2.6 -2.6 z"
      strokeLinejoin="round"
    />
  </Svg>
);

export const Camera = ({ stroke = 1.5, ...p }: IconProps) => (
  <Svg stroke={stroke} {...p}>
    {/* Body */}
    <rect x="3" y="7.5" width="18" height="12.5" rx="2.2" />
    {/* Viewfinder hump */}
    <path d="M8 7.5 L 9.4 4.8 h 5.2 L 16 7.5" strokeLinejoin="round" />
    {/* Lens — outer + inner */}
    <circle cx="12" cy="13.7" r="3.6" />
    <circle cx="12" cy="13.7" r="1.6" />
    {/* Flash dot */}
    <circle cx="17.6" cy="10.2" r="0.7" fill="currentColor" stroke="none" />
  </Svg>
);

export const Cup = ({ stroke = 1.5, ...p }: IconProps) => (
  <Svg stroke={stroke} {...p}>
    {/* Mug body */}
    <path
      d="M5 9 h 11 v 5.5 a 4.5 4.5 0 0 1 -4.5 4.5 h -2 A 4.5 4.5 0 0 1 5 14.5 z"
      strokeLinejoin="round"
    />
    {/* Handle */}
    <path d="M16 11 h 2 a 2.2 2.2 0 0 1 0 4.4 h -2" strokeLinejoin="round" />
    {/* Saucer */}
    <path d="M3.5 21 h 14" />
    {/* Steam */}
    <path
      d="M8.5 3 c -1 1.5 1 2.5 0 4 M11.5 3 c -1 1.5 1 2.5 0 4 M14 3 c -1 1.5 1 2.5 0 4"
      opacity="0.55"
    />
  </Svg>
);

export const Storefront = ({ stroke = 1.5, ...p }: IconProps) => (
  <Svg stroke={stroke} {...p}>
    {/* Awning */}
    <path d="M3 9 L 4.6 5.5 h 14.8 L 21 9 Z" strokeLinejoin="round" />
    {/* Awning stripes */}
    <path d="M7.6 5.6 L 6.2 9 M 11.6 5.6 L 10.6 9 M 15.6 5.6 L 15 9 M 19 5.6 L 18.4 9" opacity="0.45" strokeWidth={stroke - 0.2} />
    {/* Building */}
    <path d="M5 9 v 11 h 14 V 9" strokeLinejoin="round" />
    {/* Door */}
    <path d="M10 20 v -5 h 4 v 5" strokeLinejoin="round" />
    {/* Door knob */}
    <circle cx="13" cy="17.6" r="0.4" fill="currentColor" stroke="none" />
    {/* Windows */}
    <rect x="6.5" y="11.5" width="2.4" height="2.4" />
    <rect x="15.1" y="11.5" width="2.4" height="2.4" />
  </Svg>
);

export type GlyphName =
  | "pizza"
  | "flower"
  | "wrench"
  | "camera"
  | "cup"
  | "storefront";

const GLYPHS: Record<GlyphName, (p: IconProps) => React.ReactElement> = {
  pizza: Pizza,
  flower: Flower,
  wrench: Wrench,
  camera: Camera,
  cup: Cup,
  storefront: Storefront,
};

export function Glyph({
  name,
  size = 32,
  stroke = 1.6,
  ...rest
}: { name: GlyphName } & IconProps) {
  const Icon = GLYPHS[name] ?? Storefront;
  return <Icon size={size} stroke={stroke} {...rest} />;
}
