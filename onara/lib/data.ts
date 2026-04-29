import type { Site } from "@/components/dashboard/SiteCard";

export const MOCK_SITES: Site[] = [
  {
    id: "lupitas",
    name: "Lupita's Tacos",
    url: "lupitas.pages.dev",
    custom: "lupitastacos.com",
    live: true,
    rev: "7 / unlimited",
  },
  {
    id: "bloom",
    name: "Bloom Florist",
    url: "bloom-florist.pages.dev",
    live: true,
    rev: "2 / unlimited",
  },
  {
    id: "cedar",
    name: "Cedar Plumbing",
    url: "cedar-plumbing.pages.dev",
    live: false,
    rev: "0 / unlimited",
  },
];

export const REVISIONS = [
  { v: "v7", when: "2 days ago", what: "Updated weekend hours", live: true },
  { v: "v6", when: "5 days ago", what: "Added catering section" },
  { v: "v5", when: "Mar 14", what: "Changed phone number" },
  { v: "v4", when: "Mar 02", what: 'Hero copy: "best tacos in east LA"' },
  { v: "v3", when: "Feb 21", what: "Synced 3 photos from Google" },
];
