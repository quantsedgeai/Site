"use client";

import { motion } from "framer-motion";

import {
  DATA_FABRIC_BULLETS,
  DATA_FABRIC_STATS,
  EXECUTION_FEATURES,
  RESEARCH_CARDS,
  WALLET_FEATURES,
} from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export function TechnologySection() {
  return (
    <section id="technology" className="relative px-6 py-24">
      <div className="absolute inset-0 opacity-5">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23FFFFFF' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="label mb-4 text-accent">Technology</p>
          <h2 className="display mb-4 text-4xl sm:text-5xl lg:text-display-md">
            AI-native infrastructure, battle-tested in production
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-text-secondary">
            From hyperparameter sweeps to non-custodial execution, QuantsEdge automates the full
            strategy lifecycle while keeping power traders in control.
          </p>
        </div>

        <div className="mb-12 grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,1.2fr)_minmax(0,1fr)]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="glass card-hover rounded-3xl p-8 sm:p-10"
          >
            <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="flex size-12 items-center justify-center rounded-xl bg-accent/15">
                  <span className="text-2xl text-accent">🧠</span>
                </div>
                <h3 className="text-2xl font-semibold">Strategy Research Stack</h3>
              </div>
              <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs uppercase text-text-tertiary">
                Optuna + PyTorch
              </span>
            </div>
            <p className="mb-6 text-text-secondary">
              Automated pipelines spin through ideas, score them fast, and surface only the bots
              worth sizing.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              {RESEARCH_CARDS.map((card) => (
                <div key={card.title} className="rounded-2xl border border-white/5 bg-black/30 p-5">
                  <p className="text-sm font-semibold text-text-primary">{card.title}</p>
                  <p className="mt-2 text-xs leading-snug text-text-tertiary">{card.copy}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="glass flex flex-col gap-6 rounded-3xl p-8 sm:p-10"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-purple-500/15">
                <span className="text-2xl text-purple-300">📡</span>
              </div>
              <h3 className="text-2xl font-semibold">Signal & Data Fabric</h3>
            </div>
            <p className="text-text-secondary">
              High-throughput ingestion normalizes order books, swaps, and funding into a single
              analytics bus powering dashboards, alerts, and automation.
            </p>
            <div className="space-y-4 text-sm text-text-secondary">
              {DATA_FABRIC_BULLETS.map((item) => (
                <div key={item.title} className="flex items-start gap-3">
                  <span className="mt-1.5 inline-flex size-2 rounded-full bg-purple-400" />
                  <div>
                    <p className="font-semibold text-text-primary">{item.title}</p>
                    <p className="mt-1 text-xs text-text-tertiary">{item.copy}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-5 text-xs text-text-tertiary">
              <p className="uppercase tracking-[0.3em] text-text-tertiary/80">Stream health</p>
              <div className="mt-3 flex flex-wrap gap-4 text-text-secondary">
                {DATA_FABRIC_STATS.map((stat) => (
                  <div key={stat.label}>
                    <p className="mono text-lg text-text-primary">{stat.value}</p>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="glass card-hover rounded-3xl p-8 sm:p-10"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-green-400/15">
                <span className="text-2xl text-green-300">🔐</span>
              </div>
              <h3 className="text-2xl font-semibold">Turnkey Wallet Mesh</h3>
            </div>
            <p className="mb-5 text-text-secondary">
              Non-custodial wallets are provisioned instantly with Turnkey APIs, giving every trader
              passkey-secured access without seed phrases.
            </p>
            <div className="grid gap-4 text-xs text-text-tertiary sm:grid-cols-2">
              {WALLET_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-xl border border-white/5 bg-black/30 p-4"
                >
                  <p className="text-sm font-semibold text-text-primary">{feature.title}</p>
                  <p className="mt-2 leading-relaxed">{feature.copy}</p>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="glass flex flex-col gap-6 rounded-3xl p-8 sm:p-10"
          >
            <div className="flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl bg-blue-500/20">
                <span className="text-2xl text-blue-300">⚡</span>
              </div>
              <h3 className="text-2xl font-semibold">Execution Dispatcher</h3>
            </div>
            <p className="text-text-secondary">
              One routing brain moves bots from backtest to live, carrying the exact risk settings
              you approved.
            </p>
            <div className="grid gap-3 text-sm text-text-secondary sm:grid-cols-2">
              {EXECUTION_FEATURES.map((feature) => (
                <div
                  key={feature.title}
                  className="rounded-2xl border border-white/5 bg-white/5 p-4"
                >
                  <p className="text-sm font-semibold text-text-primary">{feature.title}</p>
                  <p className="mt-2 text-xs leading-snug text-text-tertiary">{feature.copy}</p>
                </div>
              ))}
            </div>
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4 text-xs text-blue-100">
              <p className="text-sm font-semibold text-blue-200">Realtime feed</p>
              <p className="mt-1 leading-relaxed">
                User stream events push fills, funding updates, and liquidations into our telemetry
                bus in under 200ms.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
