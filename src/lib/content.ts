export interface PerformanceMetric {
  label: string;
  value: string;
  badge: string;
}

export interface ResearchCard {
  title: string;
  copy: string;
}

export interface ExecutionFeature {
  title: string;
  copy: string;
}

export interface WalletFeature {
  title: string;
  copy: string;
}

export interface DataFabricBullet {
  title: string;
  copy: string;
}

export interface DataFabricStat {
  label: string;
  value: string;
}

export interface TeamMember {
  name: string;
  role: string;
  bio: string;
  image: string;
  accentRing: string;
}

export interface RoadmapMilestone {
  title: string;
  eta: string;
  status: string;
  description: string;
}

export interface ReleaseNote {
  version: string;
  date: string;
  highlights: string[];
}

export const PERFORMANCE_METRICS: PerformanceMetric[] = [
  {
    label: "Model Sharpe (24M)",
    value: "2.34",
    badge: "↑ 0.12 QoQ after alpha retune",
  },
  {
    label: "Live Win Rate",
    value: "57.3%",
    badge: "+1.6% vs prior quarter",
  },
  {
    label: "Peak Drawdown",
    value: "-8.9%",
    badge: "Trailing 90d max excursion",
  },
  {
    label: "Average Leverage",
    value: "7.5x",
    badge: "Weighted across active markets",
  },
];

export const RESEARCH_CARDS: ResearchCard[] = [
  {
    title: "Optuna Hyperparameter Grid",
    copy: "Sweep leverage bands, indicator windows, and risk guards with pruning and early exits baked in.",
  },
  {
    title: "Unified Backtesting",
    copy: "Deterministic runners keep data, features, and metrics identical from research to promotion.",
  },
  {
    title: "Paper Trading Sandbox",
    copy: "Hyperliquid feeds plus your guardrails let you dry run in production conditions before you size up.",
  },
  {
    title: "Telemetry & Scoring",
    copy: "Auto-generated run logs compare iterations, flag anomalies, and highlight what’s ready for the next gate.",
  },
];

export const EXECUTION_FEATURES: ExecutionFeature[] = [
  {
    title: "Deterministic state",
    copy: "Position, PnL, and order books stay in sync with instant rollbacks on breach.",
  },
  {
    title: "Native Hyperliquid",
    copy: "SDK integration handles signatures so high-leverage bots never pause.",
  },
  {
    title: "Data fused",
    copy: "Uniswap, PancakeSwap, and centralized intel pipe into the same routing layer.",
  },
  {
    title: "Guardrails on",
    copy: "Kill-switches, throttles, and leverage bands stay attached per market.",
  },
];

export const WALLET_FEATURES: WalletFeature[] = [
  {
    title: "Automated Sub-Orgs",
    copy: "Dedicated orgs per user isolate keys, respect RP ID separation, and keep staging / prod siloed.",
  },
  {
    title: "Permissioned Signing",
    copy: "Server-side policy lets bots execute without prompts while honoring spending caps and rate limits.",
  },
  {
    title: "API-First Automation",
    copy: "Retail traders onboard fast while quants wire bots or monitoring through REST hooks.",
  },
  {
    title: "Resilience & Backoff",
    copy: "Built-in retry logic absorbs vendor hiccups and keeps execution timelines predictable.",
  },
];

export const DATA_FABRIC_BULLETS: DataFabricBullet[] = [
  {
    title: "Cross-venue coverage",
    copy: "Uniswap, PancakeSwap, and centralized feeds stream into a unified schema for arb and hedging models.",
  },
  {
    title: "Latency engineered",
    copy: "Ankr RPC mesh and regional edge caches keep signal propagation under 200 ms across venues.",
  },
  {
    title: "Explainable tooling",
    copy: "Feature attribution, scenario replays, and diff reports justify model updates for ops and compliance.",
  },
];

export const DATA_FABRIC_STATS: DataFabricStat[] = [
  { label: "Data uptime last 30d", value: "98.4%" },
  { label: "Median event latency", value: "42ms" },
  { label: "Venues actively streaming", value: "12" },
];

export const TEAM: TeamMember[] = [
  {
    name: "Harrison",
    role: "Founder",
    bio: "Pioneered account abstraction and gasless transaction rails long before the Ethereum merge—setting the blueprint for our custody-free architecture.",
    image: "/images/team-harrison.png",
    accentRing: "ring-accent/20",
  },
  {
    name: "Dmitry",
    role: "Lead Engineer",
    bio: "Previously engineered high-frequency trading systems for multi-billion-dollar hedge funds; now hardens QuantsEdge execution under real market stress.",
    image: "/images/team-dmitry.png",
    accentRing: "ring-purple-400/20",
  },
  {
    name: "Dan",
    role: "Head of AI",
    bio: "Ex-IBM TJ Watson quantitative researcher and UCLA PhD guiding our AI stack from signal discovery through production promotion.",
    image: "/images/team-dan.png",
    accentRing: "ring-blue-400/20",
  },
];

export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    title: "Hyperliquid Live Launch",
    eta: "Shipping now",
    status: "Released",
    description:
      "Production bots, risk guards, and monitoring dashboards are live on Hyperliquid perpetuals.",
  },
  {
    title: "Strategy Marketplace",
    eta: "Q4 2025",
    status: "In QA",
    description:
      "Discover, fork, and remix crowd-vetted alpha packs with performance-based revenue splits.",
  },
  {
    title: "On-Chain Options Support",
    eta: "Q1 2026",
    status: "Design",
    description:
      "Bring automated delta-neutral and vol surfaces online across leading options venues.",
  },
];

export const RELEASE_NOTES: ReleaseNote[] = [
  {
    version: "v2.4.1",
    date: "Sep 18, 2025",
    highlights: [
      "ExecutionDispatcher now supports dynamic leverage governors per market.",
      "Turnkey wallet provisioning trimmed to sub-2s with optimized sub-org caching.",
    ],
  },
  {
    version: "v2.3.0",
    date: "Aug 30, 2025",
    highlights: [
      "Paper Trading Sandbox powered by Hyperliquid SDK with live funding rates and liquidation thresholds.",
      "Expanded multi-chain data fabric with Base & Avalanche pools via Ankr RPC mesh.",
    ],
  },
  {
    version: "v2.2.5",
    date: "Aug 05, 2025",
    highlights: [
      "Optuna sweep templates for momentum and mean reversion bots bundled into research stack.",
      "New alerting webhooks for funding spikes and execution anomalies (< 200ms latency).",
    ],
  },
];
