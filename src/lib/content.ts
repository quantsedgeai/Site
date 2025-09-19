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
    copy: "Auto-scan leverage, indicator windows, and risk caps with smart pruning.",
  },
  {
    title: "Unified Backtesting",
    copy: "Replay identical data + features so research matches live behavior.",
  },
  {
    title: "Paper Trading Sandbox",
    copy: "Hyperliquid feeds and your guardrails for no-risk proving grounds.",
  },
  {
    title: "Telemetry & Scoring",
    copy: "Run logs flag anomalies and highlight bots ready to ship.",
  },
];

export const EXECUTION_FEATURES: ExecutionFeature[] = [
  {
    title: "Deterministic state",
    copy: "Position, PnL, and order books stay in sync with instant rollbacks.",
  },
  {
    title: "Native Hyperliquid",
    copy: "Native SDK signing handles fills so bots fire without wallet pop-ups.",
  },
  {
    title: "Data fused",
    copy: "DEX + CEX liquidity and intel feed one routing brain.",
  },
  {
    title: "Guardrails on",
    copy: "Kill-switches, throttles, and leverage bands stick per market.",
  },
];

export const WALLET_FEATURES: WalletFeature[] = [
  {
    title: "Automated Sub-Orgs",
    copy: "Turnkey spins up per-user orgs instantly, keeping keys and environments separated.",
  },
  {
    title: "Permissioned Signing",
    copy: "Turnkey policy engine signs on your behalf while respecting the limits you set.",
  },
  {
    title: "API-First Automation",
    copy: "Quick onboarding with REST hooks for bots, monitoring, and alerting.",
  },
  {
    title: "Resilience & Backoff",
    copy: "Retries and backoff absorb vendor hiccups, keeping execution predictable.",
  },
];

export const DATA_FABRIC_BULLETS: DataFabricBullet[] = [
  {
    title: "Cross-venue coverage",
    copy: "Uniswap spot, PancakeSwap spot, and Hyperliquid perps unify for fast cross-market plays.",
  },
  {
    title: "Latency engineered",
    copy: "Edge caches + RPC mesh keep signals under 200 ms end-to-end.",
  },
  {
    title: "Explainable tooling",
    copy: "Feature attribution and scenario replays show why a model changed.",
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
    bio: "Pioneered account abstraction and gasless transactions ahead of the Ethereum merge, laying the groundwork for our custody-free architecture.",
    image: "/images/team-harrison.png",
    accentRing: "ring-accent/20",
  },
  {
    name: "Dmitry",
    role: "Lead Engineer",
    bio: "Built high-frequency trading engines for major crypto desks and now keeps QuantsEdge execution battle ready.",
    image: "/images/team-dmitry.png",
    accentRing: "ring-purple-400/20",
  },
  {
    name: "Dan",
    role: "Head of AI",
    bio: "Former IBM TJ Watson researcher and UCLA PhD guiding our AI stack from signal ideas to production bots.",
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
