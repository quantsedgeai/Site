export interface PerformanceMetric {
  label: string;
  value: string;
  badge: string;
  trend: number[];
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
  points: string[];
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
    trend: [1.92, 2.05, 2.14, 2.28, 2.34],
  },
  {
    label: "Live Win Rate",
    value: "57.3%",
    badge: "+1.6% vs prior quarter",
    trend: [53.8, 54.6, 55.2, 56.1, 57.3],
  },
  {
    label: "Peak Drawdown",
    value: "-8.9%",
    badge: "Trailing 90d max excursion",
    trend: [-12.4, -11.6, -10.3, -9.4, -8.9],
  },
  {
    label: "Average Leverage",
    value: "7.5x",
    badge: "Weighted across active markets",
    trend: [6.2, 6.8, 7.1, 7.3, 7.5],
  },
];

export const RESEARCH_CARDS: ResearchCard[] = [
  {
    title: "Optuna Hyperparameter Optimization",
    copy: "AI-driven Bayesian optimization learns from each test to intelligently suggest the next best parameters to try. Instead of testing every combination randomly, this machine learning approach finds optimal strategy settings (leverage, windows, risk caps) faster by building a probabilistic model of what works.",
  },
  {
    title: "Unified Backtesting",
    copy: "Test strategies with identical live market data and feature sets for accurate performance prediction.",
  },
  {
    title: "Multi-Venue Paper Trading",
    copy: "Risk-free validation using real market conditions across Hyperliquid, Uniswap, PancakeSwap, and more.",
  },
  {
    title: "Performance Analytics",
    copy: "Comprehensive metrics tracking and bot readiness validation.",
  },
];

export const EXECUTION_FEATURES: ExecutionFeature[] = [
  {
    title: "Deterministic State",
    copy: "Positions, PnL, and order books maintain perfect synchronization with instant rollback capability.",
  },
  {
    title: "Native Integration",
    copy: "Direct Hyperliquid SDK integration enables seamless execution without wallet interruptions.",
  },
  {
    title: "Unified Data Layer",
    copy: "Combined DEX and CEX liquidity feeds power intelligent order routing decisions.",
  },
  {
    title: "Built-in Safeguards",
    copy: "Automated kill switches, rate limits, and leverage controls enforce risk management per market.",
  },
];

export const WALLET_FEATURES: WalletFeature[] = [
  {
    title: "Isolated Environments",
    copy: "Turnkey automatically provisions secure, isolated sub-organizations for each user with separated keys and environments.",
  },
  {
    title: "Policy-Based Signing",
    copy: "Advanced policy engine executes trades within your predefined risk parameters while maintaining full custody control.",
  },
  {
    title: "API-First Integration",
    copy: "Streamlined REST APIs enable rapid bot deployment, real-time monitoring, and instant alerting.",
  },
  {
    title: "Enterprise Reliability",
    copy: "Built-in retry logic and exponential backoff ensure consistent execution despite network volatility.",
  },
];

export const DATA_FABRIC_BULLETS: DataFabricBullet[] = [
  {
    title: "Multi-Venue Coverage",
    copy: "Unified data streams from Uniswap, PancakeSwap, and Hyperliquid enable sophisticated cross-market arbitrage strategies.",
  },
  {
    title: "Ultra-Low Latency",
    copy: "Advanced edge caching and optimized RPC mesh architecture maintain sub-200ms signal processing.",
  },
  {
    title: "Model Transparency",
    copy: "Complete feature attribution and scenario replay capabilities provide full insight into model decision-making.",
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
    bio: "Architect of account abstraction and gasless transaction systems pre-Ethereum merge. Pioneered the custody-free infrastructure powering QuantsEdge.",
    image: "/images/team-harrison.jpg",
    accentRing: "ring-accent/20",
  },
  {
    name: "Dmitry",
    role: "Lead Engineer",
    bio: "Former HFT systems architect for institutional crypto funds. Delivers microsecond-precision execution infrastructure.",
    image: "/images/team-dmitry.jpg",
    accentRing: "ring-purple-400/20",
  },
  {
    name: "Dan",
    role: "Head of AI",
    bio: "IBM TJ Watson Research alumnus, UCLA PhD. Transforms cutting-edge ML research into production-ready trading algorithms.",
    image: "/images/team-dan.jpg",
    accentRing: "ring-blue-400/20",
  },
];

export const ROADMAP_MILESTONES: RoadmapMilestone[] = [
  {
    title: "Production Launch",
    eta: "Live Now",
    status: "Released",
    points: [
      "Full production environment with enterprise-grade risk management across Hyperliquid perpetuals and major DEX spot markets.",
      "Real-time monitoring dashboards with comprehensive fill tracking and risk alert systems.",
    ],
  },
  {
    title: "Strategy Marketplace",
    eta: "Q4 2025",
    status: "In Development",
    points: [
      "Curated marketplace for discovering and licensing proven trading strategies.",
      "Performance-based revenue sharing with transparent benchmark validation.",
    ],
  },
  {
    title: "Options Infrastructure",
    eta: "Q1 2026",
    status: "Design Phase",
    points: [
      "Native support for delta-neutral strategies and automated volatility surface trading.",
      "Integration with leading on-chain options protocols through unified API layer.",
    ],
  },
];

export const RELEASE_NOTES: ReleaseNote[] = [
  {
    version: "v2.4.1",
    date: "Sep 18, 2025",
    highlights: [
      "ExecutionDispatcher adds dynamic leverage governors per market.",
      "Turnkey wallet provisioning trimmed to sub-2s via sub-org caching.",
    ],
  },
  {
    version: "v2.3.0",
    date: "Aug 30, 2025",
    highlights: [
      "Paper sandbox now mirrors funding rates and liquidation thresholds.",
      "Expanded data fabric covers ETH, Base, BSC, Avalanche, and Arbitrum spot venues.",
    ],
  },
  {
    version: "v2.2.5",
    date: "Aug 05, 2025",
    highlights: [
      "Optuna sweep templates for momentum and mean reversion bots now bundled.",
      "Alerting webhooks fire on funding spikes and execution anomalies under 200 ms.",
    ],
  },
];
