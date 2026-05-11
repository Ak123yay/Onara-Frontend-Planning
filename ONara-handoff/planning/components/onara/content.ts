import {
  BarChart3,
  Clock3,
  CreditCard,
  Download,
  Edit3,
  Globe2,
  Home,
  Image,
  LayoutDashboard,
  Plus,
  RefreshCw,
  Search,
  Settings,
  Sparkles,
  UserRound,
  type LucideIcon,
} from "lucide-react";

export const featuredSites = [
  {
    name: "Mike's Pizza",
    type: "Italian · Austin TX",
    color: "#bd6f43",
    symbol: "Pizza",
    emoji: "🍕",
  },
  {
    name: "Bloom Florist",
    type: "Florist · Brooklyn NY",
    color: "#c5719a",
    symbol: "Florist",
    emoji: "✦",
  },
  {
    name: "Cedar Plumbing",
    type: "Plumber · Denver CO",
    color: "#5f7f9e",
    symbol: "Repair",
    emoji: "◆",
  },
  {
    name: "Aria Studio",
    type: "Photographer · Seattle",
    color: "#8472a5",
    symbol: "Studio",
    emoji: "◐",
  },
];

export const steps: Array<{
  number: string;
  title: string;
  description: string;
  icon: LucideIcon;
}> = [
  {
    number: "01",
    title: "Find your business",
    description:
      "Type your business name. We pull your real address, hours, photos and reviews from Google Maps.",
    icon: Search,
  },
  {
    number: "02",
    title: "10 agents build it",
    description:
      "Analyst, writer, designer, debugger, QA - ten small AIs collaborate on your site, live.",
    icon: Sparkles,
  },
  {
    number: "03",
    title: "Ship to a real URL",
    description:
      "We deploy to Cloudflare Pages. Share your link in 90 seconds, no DNS skills required.",
    icon: Globe2,
  },
];

export const stats = [
  ["90s", "name to live site"],
  ["10", "specialised AI agents"],
  ["$0", "first-site cost"],
  ["3 plans", "free, $12, $29"],
] as const;

export const demoUser = {
  name: "Rosa Mendez",
  email: "rosa@bloomflorist.com",
  plan: "Pro trial",
  trialDaysLeft: 11,
};

export const sampleBusinesses = [
  {
    id: "mikes-pizza",
    name: "Mike's Pizza",
    address: "218 Congress Ave, Austin TX",
    phone: "(512) 555-0182",
    rating: 4.6,
    reviews: 312,
    hours: "Open · closes 10pm",
    emoji: "🍕",
    color: "#bd6f43",
  },
  {
    id: "mikes-pizzeria",
    name: "Mike's Pizzeria",
    address: "5500 Burnet Rd, Austin TX",
    phone: "(512) 555-0244",
    rating: 4.3,
    reviews: 89,
    hours: "Closed · opens 11am",
    emoji: "🍕",
    color: "#9e6048",
  },
  {
    id: "mikes-mobile-pizza",
    name: "Mike's Mobile Pizza",
    address: "East 6th St, Austin TX",
    phone: "",
    rating: 4.8,
    reviews: 47,
    hours: "Hours vary",
    emoji: "▣",
    color: "#c59b54",
  },
];

export const agents = [
  { id: "analyst", name: "Business Analyst", model: "gpt-oss:20b", task: "Identifying what your industry needs" },
  { id: "writer", name: "Content Writer", model: "qwen3:8b", task: "Drafting headline, services, about copy" },
  { id: "style", name: "Style Agent", model: "qwen3:8b", task: "Choosing palette, fonts, layout DNA" },
  { id: "planner", name: "Planner", model: "glm-5.1", task: "Merging copy and style into a blueprint" },
  { id: "prompt", name: "Prompt Engineer", model: "glm-5.1", task: "Writing precise build instructions" },
  { id: "code", name: "Code Generator", model: "Copilot", task: "Generating HTML, CSS, JavaScript" },
  { id: "debug", name: "Debugger", model: "minimax-m2.7 + RAG", task: "Fixing tags, links, layout bugs" },
  { id: "seo", name: "SEO Agent", model: "qwen3:8b", task: "Adding meta, Open Graph, JSON-LD" },
  { id: "qa", name: "QA Agent", model: "minimax-m2.5 + RAG", task: "Running final quality checks" },
  { id: "mobile", name: "Mobile Optimizer", model: "qwen3:8b", task: "Refining tap targets, fonts, breakpoints" },
];

export const sites = [
  {
    id: "mikes-pizza",
    name: "Mike's Pizza",
    url: "mikes-pizza-a3f2.pages.dev",
    status: "live",
    visits: 312,
    trend: "+18%",
    emoji: "🍕",
    color: "#bd6f43",
    updated: "2 days ago",
    revisions: 3,
    custom: false,
  },
  {
    id: "bloom-florist",
    name: "Bloom Florist",
    url: "bloom-bk.onara.site",
    status: "live",
    visits: 189,
    trend: "+42%",
    emoji: "✦",
    color: "#c5719a",
    updated: "1 week ago",
    revisions: 1,
    custom: true,
  },
  {
    id: "old-crow-cafe",
    name: "Old Crow Cafe",
    url: "oldcrow-9c1d.pages.dev",
    status: "draft",
    visits: 0,
    trend: "",
    emoji: "☕",
    color: "#6d5e42",
    updated: "Just now",
    revisions: 0,
    custom: false,
  },
];

export const dashboardNav: Array<{ href: string; label: string; icon: LucideIcon }> = [
  { href: "/dashboard", label: "Overview", icon: LayoutDashboard },
  { href: "/sites", label: "My Sites", icon: Home },
  { href: "/build", label: "Build New", icon: Plus },
  { href: "/account", label: "Account", icon: UserRound },
];

export const quickActions: Array<{ icon: LucideIcon; label: string; hint: string; href: string }> = [
  { icon: Globe2, label: "Connect a custom domain", hint: "$10 one-time", href: "/domain" },
  { icon: Image, label: "Replace photos", hint: "Drag and drop", href: "/sites/mikes-pizza" },
  { icon: RefreshCw, label: "Re-pull from Google", hint: "Sync hours, photos", href: "/sites/mikes-pizza" },
  { icon: Download, label: "Download HTML", hint: "Take it elsewhere", href: "/sites/mikes-pizza" },
];

export const pricingPlans = [
  {
    tier: "Free",
    price: "$0",
    period: "forever",
    features: ["1 site", "onara.site subdomain", "Onara badge in footer", "Manual updates only"],
    cta: "Current plan",
  },
  {
    tier: "Pro",
    price: "$19",
    period: "/month",
    features: [
      "Unlimited sites",
      "Live public URLs",
      "Plain-English revisions",
      "Custom domain ($10 once)",
      "Auto-update from Google",
      "Remove Onara badge",
      "Email support",
    ],
    cta: "Start 14-day trial",
    highlight: true,
  },
  {
    tier: "Studio",
    price: "$49",
    period: "/month",
    features: ["Everything in Pro", "10 client sites included", "Client-billing handoff", "White-label option", "Priority support"],
    cta: "Talk to us",
  },
];

export const tabItems = [
  { id: "overview", label: "Overview", icon: BarChart3 },
  { id: "revisions", label: "Revisions", icon: Edit3 },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "settings", label: "Settings", icon: Settings },
];

export const accountCards = [
  { label: "Pro Trial", value: "11 days left", icon: Clock3 },
  { label: "Payment", value: "No card on file", icon: CreditCard },
  { label: "Sites", value: "2 live, 1 draft", icon: LayoutDashboard },
];
