import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { TradingChart } from "@/components/TradingChart";
import { Proof } from "@/components/Proof";
import { MagneticCursor } from "@/components/MagneticCursor";
import { EarlyAccess } from "@/components/EarlyAccess";
import { StickyCTA } from "@/components/StickyCTA";
import { Footer } from "@/components/Footer";

export default function Home() {
  const roadmapMilestones = [
    {
      title: "Hyperliquid Live Launch",
      eta: "Shipping now",
      status: "Released",
      description: "Production bots, risk guards, and monitoring dashboards are live on Hyperliquid perpetuals.",
    },
    {
      title: "Strategy Marketplace",
      eta: "Q4 2025",
      status: "In QA",
      description: "Discover, fork, and remix crowd-vetted alpha packs with performance-based revenue splits.",
    },
    {
      title: "On-Chain Options Support",
      eta: "Q1 2026",
      status: "Design",
      description: "Bring automated delta-neutral and vol surfaces online across leading options venues.",
    },
  ];

  const releaseNotes = [
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

  return (
    <>
      <MagneticCursor />
      
      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main-content" role="main">
        <Hero />
        <HowItWorks />
        <Proof />
        
        {/* Performance Section */}
        <section id="performance" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="label text-accent mb-4">Performance & Control</p>
              <h2 className="display text-4xl sm:text-5xl lg:text-display-md mb-4">
                The numbers traders watch before sizing up
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Live fill quality, risk envelope, and capital efficiency metrics stream straight from Hyperliquid so you can
                scale positions with conviction.
              </p>
            </div>

            <p className="text-xs uppercase tracking-[0.35em] text-text-tertiary mb-4">Desk Snapshot</p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4 mb-12">
              {[
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
              ].map((item) => (
                <div key={item.label} className="glass rounded-2xl p-6 border border-white/10">
                  <p className="mono text-3xl font-semibold text-text-primary">{item.value}</p>
                  <p className="text-sm text-text-secondary mt-2">{item.label}</p>
                  <p className="text-xs text-green-400 mt-3">{item.badge}</p>
                </div>
              ))}
            </div>

            {/* Advanced Trading Chart */}
            <TradingChart />
          </div>
        </section>

        {/* Technology Section */}
        <section id="technology" className="py-24 px-6 relative">
          {/* Background Pattern */}
          <div className="absolute inset-0 opacity-5">
            <div
              className="absolute inset-0"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
              }}
            />
          </div>

          <div className="max-w-7xl mx-auto relative">
            <div className="text-center mb-16">
              <p className="label text-accent mb-4">Technology</p>
              <h2 className="display text-4xl sm:text-5xl lg:text-display-md mb-4">
                AI-native infrastructure, battle-tested in production
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                From hyperparameter sweeps to non-custodial execution, QuantsEdge automates the full strategy lifecycle while keeping power traders in control.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)] gap-8 mb-12">
              <div className="glass rounded-3xl p-8 sm:p-10 card-hover">
                <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-3">
                    <div className="w-12 h-12 rounded-xl bg-accent/15 flex items-center justify-center">
                      <span className="text-accent text-2xl">🧠</span>
                    </div>
                    <h3 className="text-2xl font-semibold">Strategy Research Stack</h3>
                  </div>
                  <span className="text-xs font-mono uppercase text-text-tertiary bg-white/5 px-3 py-1 rounded-full">
                    Optuna + PyTorch
                  </span>
                </div>
                <p className="text-text-secondary mb-6">
                  Automated pipelines spin through ideas, score them fast, and surface only the bots worth sizing.
                </p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="rounded-2xl bg-black/30 border border-white/5 p-5">
                    <p className="text-sm font-semibold text-text-primary">Optuna Hyperparameter Grid</p>
                    <p className="text-xs text-text-tertiary mt-2 leading-snug">
                      Sweep leverage bands, indicator windows, and risk guards with pruning and early exits baked in.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-black/30 border border-white/5 p-5">
                    <p className="text-sm font-semibold text-text-primary">Unified Backtesting</p>
                    <p className="text-xs text-text-tertiary mt-2 leading-snug">
                      Deterministic runners keep data, features, and metrics identical from research to promotion.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-black/30 border border-white/5 p-5">
                    <p className="text-sm font-semibold text-text-primary">Paper Trading Sandbox</p>
                    <p className="text-xs text-text-tertiary mt-2 leading-snug">
                      Hyperliquid feeds plus your guardrails let you dry run in production conditions before you size up.
                    </p>
                  </div>
                  <div className="rounded-2xl bg-black/30 border border-white/5 p-5">
                    <p className="text-sm font-semibold text-text-primary">Telemetry & Scoring</p>
                    <p className="text-xs text-text-tertiary mt-2 leading-snug">
                      Auto-generated run logs compare iterations, flag anomalies, and highlight what’s ready for the next gate.
                    </p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-3xl p-8 sm:p-10 flex flex-col justify-between gap-8">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-xl bg-blue-500/20 flex items-center justify-center">
                      <span className="text-blue-300 text-2xl">⚡</span>
                    </div>
                    <h3 className="text-2xl font-semibold">Execution Dispatcher</h3>
                  </div>
                  <p className="text-text-secondary mb-6">
                    One routing brain moves bots from backtest to live, carrying the exact risk settings you approved.
                  </p>
                  <div className="grid sm:grid-cols-2 gap-3 text-sm text-text-secondary">
                    {[
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
                    ].map((item) => (
                      <div key={item.title} className="rounded-2xl border border-white/5 bg-white/5 p-4">
                        <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                        <p className="text-xs text-text-tertiary mt-2 leading-snug">{item.copy}</p>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="rounded-2xl bg-blue-500/10 border border-blue-500/20 p-4 text-xs text-blue-100">
                  <p className="font-semibold text-sm text-blue-200">Realtime feed</p>
                  <p className="mt-1 leading-relaxed">
                    User stream events push fills, funding updates, and liquidations into our telemetry bus in under 200ms.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="glass rounded-3xl p-8 sm:p-10 card-hover">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-green-400/15 flex items-center justify-center">
                    <span className="text-green-300 text-2xl">🔐</span>
                  </div>
                  <h3 className="text-2xl font-semibold">Turnkey Wallet Mesh</h3>
                </div>
                <p className="text-text-secondary mb-5">
                  Non-custodial wallets are provisioned instantly with Turnkey APIs, giving every trader passkey-secured access without seed phrases.
                </p>
                <div className="grid sm:grid-cols-2 gap-4 text-xs text-text-tertiary">
                  <div className="rounded-xl bg-black/30 border border-white/5 p-4">
                    <p className="font-semibold text-text-primary text-sm">Automated Sub-Orgs</p>
                    <p className="mt-2 leading-relaxed">Dedicated orgs per user isolate keys, respect RP ID separation, and keep staging / prod fully siloed.</p>
                  </div>
                  <div className="rounded-xl bg-black/30 border border-white/5 p-4">
                    <p className="font-semibold text-text-primary text-sm">Permissioned Signing</p>
                    <p className="mt-2 leading-relaxed">Server-side policy lets bots execute without prompts while honoring user-set spending caps and rate limits.</p>
                  </div>
                  <div className="rounded-xl bg-black/30 border border-white/5 p-4">
                    <p className="font-semibold text-text-primary text-sm">API-First Automation</p>
                    <p className="mt-2 leading-relaxed">Retail traders onboard fast while quants wire bots or monitoring through REST hooks.</p>
                  </div>
                  <div className="rounded-xl bg-black/30 border border-white/5 p-4">
                    <p className="font-semibold text-text-primary text-sm">Resilience & Backoff</p>
                    <p className="mt-2 leading-relaxed">Built-in retry logic absorbs vendor hiccups and keeps execution timelines predictable.</p>
                  </div>
                </div>
              </div>

              <div className="glass rounded-3xl p-8 sm:p-10 flex flex-col gap-6">
                <div className="flex items-center gap-3">
                  <div className="w-12 h-12 rounded-xl bg-purple-500/15 flex items-center justify-center">
                    <span className="text-purple-300 text-2xl">📡</span>
                  </div>
                  <h3 className="text-2xl font-semibold">Signal & Data Fabric</h3>
                </div>
                <p className="text-text-secondary">
                  High-throughput ingestion normalizes order books, swaps, and funding into a single analytics bus powering dashboards, alerts, and automation.
                </p>
                <div className="space-y-4 text-sm text-text-secondary">
                  {[
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
                  ].map((item) => (
                    <div key={item.title} className="flex items-start gap-3">
                      <span className="mt-1.5 inline-flex h-2 w-2 rounded-full bg-purple-400" />
                      <div>
                        <p className="font-semibold text-text-primary">{item.title}</p>
                        <p className="text-xs text-text-tertiary mt-1">{item.copy}</p>
                      </div>
                    </div>
                  ))}
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-xs text-text-tertiary">
                  <p className="uppercase tracking-[0.3em] text-text-tertiary/80">Stream health</p>
                  <div className="mt-3 flex flex-wrap gap-4 text-text-secondary">
                    <div>
                      <p className="mono text-lg text-text-primary">98.4%</p>
                      <p>Data uptime last 30d</p>
                    </div>
                    <div>
                      <p className="mono text-lg text-text-primary">42ms</p>
                      <p>Median event latency</p>
                    </div>
                    <div>
                      <p className="mono text-lg text-text-primary">12</p>
                      <p>Venues actively streaming</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="label text-accent mb-4">Team</p>
              <h2 className="display text-4xl sm:text-5xl lg:text-display-md mb-4">
                Built by Veterans
              </h2>
              <p className="text-lg text-text-secondary max-w-2xl mx-auto">
                Former executives from leading trading firms and tech companies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-accent/20">
                  <img
                    src="/images/team-harrison.png"
                    alt="Harrison"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Harrison</h3>
                <p className="text-accent text-sm font-medium mb-2">Co-Founder & CEO</p>
                <p className="text-text-tertiary text-sm">
                  Former Goldman Sachs VP, 12+ years in quantitative trading
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-purple-400/20">
                  <img
                    src="/images/team-dmitry.png"
                    alt="Dmitry"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dmitry</h3>
                <p className="text-purple-400 text-sm font-medium mb-2">Co-Founder & CTO</p>
                <p className="text-text-tertiary text-sm">
                  Former Google Senior Engineer, PhD in Machine Learning
                </p>
              </div>

              <div className="text-center">
                <div className="w-32 h-32 rounded-full overflow-hidden mx-auto mb-4 ring-2 ring-blue-400/20">
                  <img
                    src="/images/team-dan.png"
                    alt="Dan"
                    className="w-full h-full object-cover"
                  />
                </div>
                <h3 className="text-xl font-semibold mb-2">Dan</h3>
                <p className="text-blue-400 text-sm font-medium mb-2">Head of Research</p>
                <p className="text-text-tertiary text-sm">
                  Former Citadel Quantitative Researcher, MIT PhD
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Roadmap Section */}
        <section id="roadmap" className="py-24 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <p className="label text-accent mb-4">Roadmap</p>
              <h2 className="display text-4xl sm:text-5xl lg:text-display-md mb-4">
                Shipping fast, guided by trader feedback
              </h2>
              <p className="text-lg text-text-secondary max-w-3xl mx-auto">
                Follow what just landed, what’s in QA, and what the community is voting on next. We release weekly, with full transparency.
              </p>
            </div>

            <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Milestones</h3>
                  <span className="text-xs font-mono uppercase text-text-tertiary">Updated weekly</span>
                </div>
                <div className="space-y-4">
                  {roadmapMilestones.map((item) => (
                    <div key={item.title} className="glass rounded-2xl p-6 border border-white/5">
                      <div className="flex items-center justify-between gap-3 flex-wrap">
                        <div>
                          <p className="text-sm text-accent uppercase tracking-wide">{item.status}</p>
                          <h4 className="text-lg font-semibold text-text-primary mt-1">{item.title}</h4>
                        </div>
                        <span className="text-xs font-mono text-text-tertiary bg-white/5 px-3 py-1 rounded-full">
                          {item.eta}
                        </span>
                      </div>
                      <p className="text-sm text-text-secondary mt-4 leading-relaxed">{item.description}</p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <h3 className="text-xl font-semibold">Release Notes</h3>
                  <span className="text-xs font-mono uppercase text-text-tertiary">Last 60 days</span>
                </div>
                <div className="glass rounded-3xl p-6 sm:p-8 border border-white/5 space-y-6">
                  {releaseNotes.map((note) => (
                    <div key={note.version} className="border-b border-white/5 pb-5 last:border-none last:pb-0">
                      <div className="flex items-center justify-between flex-wrap gap-3">
                        <p className="text-sm font-mono text-accent">{note.version}</p>
                        <span className="text-xs text-text-tertiary">{note.date}</span>
                      </div>
                      <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                        {note.highlights.map((item) => (
                          <li key={item} className="flex items-start gap-2">
                            <span className="text-accent mt-1">•</span>
                            <span className="leading-relaxed">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                <div className="glass rounded-2xl p-5 border border-accent/20 bg-accent/5">
                  <p className="text-sm font-semibold text-text-primary">Have feedback?</p>
                  <p className="text-xs text-text-secondary mt-2">
                    Drop feature requests in our Telegram or submit a pull request to the docs. The roadmap reshuffles every sprint based on your votes.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <EarlyAccess />
      </main>

      <StickyCTA />

      <Footer />
    </>
  );
}
