import type { Site } from "@/components/dashboard/SiteCard";
import type { GlyphName } from "@/lib/icons";

export const MOCK_SITES: Site[] = [
  {
    id: "mikes",
    name: "Mike's Pizza",
    url: "mikes-pizza-a3f2.pages.dev",
    custom: "mikespizza.com",
    live: true,
    rev: "7 / unlimited",
    visits: 312,
    trend: "+18%",
    glyph: "pizza",
    bg: "oklch(0.62 0.13 50)",
    type: "Italian · Austin TX",
    updated: "2 days ago",
  },
  {
    id: "bloom",
    name: "Bloom Florist",
    url: "bloom-florist.pages.dev",
    custom: "bloom-bk.onara.site",
    live: true,
    rev: "2 / unlimited",
    visits: 189,
    trend: "+42%",
    glyph: "flower",
    bg: "oklch(0.78 0.10 350)",
    type: "Florist · Brooklyn NY",
    updated: "1 week ago",
  },
  {
    id: "cedar",
    name: "Cedar Plumbing",
    url: "cedar-plumbing.pages.dev",
    live: false,
    rev: "0 / unlimited",
    visits: 0,
    trend: null,
    glyph: "wrench",
    bg: "oklch(0.55 0.08 230)",
    type: "Plumber · Denver CO",
    updated: "Just now",
  },
];

export const FEATURED_SITES: {
  name: string;
  type: string;
  color: string;
  glyph: GlyphName;
  url: string;
}[] = [
  {
    name: "Mike's Pizza",
    type: "Italian · Austin TX",
    color: "oklch(0.62 0.13 50)",
    glyph: "pizza",
    url: "mikes-pizza.pages.dev",
  },
  {
    name: "Bloom Florist",
    type: "Florist · Brooklyn NY",
    color: "oklch(0.65 0.10 350)",
    glyph: "flower",
    url: "bloom.pages.dev",
  },
  {
    name: "Cedar Plumbing",
    type: "Plumber · Denver CO",
    color: "oklch(0.55 0.08 230)",
    glyph: "wrench",
    url: "cedar.pages.dev",
  },
  {
    name: "Aria Studio",
    type: "Photographer · Seattle",
    color: "oklch(0.58 0.06 280)",
    glyph: "camera",
    url: "aria.pages.dev",
  },
];

export const REVISIONS = [
  { v: "v7", when: "2 days ago", what: "Updated weekend hours", live: true },
  { v: "v6", when: "5 days ago", what: "Added catering section" },
  { v: "v5", when: "Mar 14", what: "Changed phone number" },
  { v: "v4", when: "Mar 02", what: "Hero copy: \"Austin's slowest pizza dough\"" },
  { v: "v3", when: "Feb 21", what: "Synced 3 photos from Google" },
];

export const AGENTS = [
  { id: 1, name: "Business Analyst", desc: "Reading 312 reviews, photos, and your menu", model: "gpt-oss:20b" },
  { id: 2, name: "Content Writer", desc: "Drafting hero copy, about page, menu descriptions", model: "qwen3:8b" },
  { id: 3, name: "Style Agent", desc: "Choosing palette, fonts, layout DNA from your photos", model: "qwen3:8b" },
  { id: 4, name: "Planner", desc: "Merging copy + style into a blueprint", model: "glm-5.1" },
  { id: 5, name: "Prompt Engineer", desc: "Writing the precise build instructions", model: "glm-5.1" },
  { id: 6, name: "Code Generator", desc: "Generating HTML, CSS, JavaScript", model: "Copilot" },
  { id: 7, name: "Debugger", desc: "Fixing tags, links, layout bugs", model: "minimax-m2.7 + RAG" },
  { id: 8, name: "SEO Agent", desc: "Adding meta, Open Graph, JSON-LD", model: "qwen3:8b" },
  { id: 9, name: "QA Agent", desc: "Final quality check", model: "minimax-m2.5 + RAG" },
  { id: 10, name: "Mobile Optimizer", desc: "Tap targets, fonts, breakpoints", model: "qwen3:8b" },
];
