"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

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

interface FeatureAccordionProps {
  title: string;
  copy: string;
  defaultOpen?: boolean;
}

function FeatureAccordion({ title, copy, defaultOpen = false }: FeatureAccordionProps) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <details
      open={open}
      onToggle={(event) => setOpen((event.target as HTMLDetailsElement).open)}
      className="group rounded-2xl border border-white/10 bg-black/40 p-4 transition hover:border-accent/40"
    >
      <summary className="flex cursor-pointer items-center justify-between text-sm font-semibold text-text-primary">
        <span>{title}</span>
        <span className="text-accent transition group-open:rotate-45">＋</span>
      </summary>
      <p className="mt-2 text-xs leading-relaxed text-text-tertiary lg:group-open:block">{copy}</p>
    </details>
  );
}

export function TechnologySection() {
  return (
    <section id="technology" className="relative overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(56,189,248,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(16,185,129,0.1),transparent_45%)]" />

      <div className="relative mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="label mb-4 text-accent">Technology</p>
          <h2 className="display mb-4 text-4xl sm:text-5xl lg:text-display-md">
            The stack that keeps you shipping
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-text-secondary">
            Every piece clicks into the next so you can explore an idea, dry-run it, and go live
            without bouncing between tools.
          </p>
        </div>

        <motion.div
          variants={fadeUp}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          className="mb-12 overflow-hidden rounded-[36px] border border-white/10 bg-gradient-to-br from-black/70 via-black/40 to-black/70 p-1"
        >
          <div className="grid gap-6 rounded-[32px] bg-black/60 p-8 sm:p-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,0.6fr)]">
            <div className="space-y-4 text-left">
              <p className="text-xs uppercase tracking-[0.3em] text-accent">Snapshot</p>
              <h3 className="text-2xl font-semibold text-text-primary sm:text-3xl">
                Research, data, wallets, execution — stitched into a single lane.
              </h3>
              <p className="max-w-2xl text-sm text-text-secondary sm:text-base">
                Bots graduate through the same guardrails they were trained on. Nothing gets lost,
                nothing needs to be rebuilt.
              </p>
            </div>
            <div className="grid gap-3 sm:grid-cols-3">
              {DATA_FABRIC_STATS.map((stat) => (
                <div
                  key={stat.label}
                  className="rounded-2xl border border-white/10 bg-black/40 px-4 py-3"
                >
                  <p className="mono text-lg text-text-primary">{stat.value}</p>
                  <p className="text-xs text-text-tertiary">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="glass card-hover rounded-3xl p-8 sm:p-10"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl border border-accent/30 bg-accent/10 p-2">
                <Image
                  src="/technology/optuna.svg"
                  alt="Optuna hyperparameter tuning"
                  width={32}
                  height={32}
                  className="h-auto w-full"
                />
              </div>
              <h3 className="text-2xl font-semibold">Strategy Research</h3>
            </div>
            <p className="mb-4 text-sm text-text-secondary">
              Optuna sweeps plug straight into our backtesting lane so promising configs surface
              fast.
            </p>
            <div className="space-y-3">
              {RESEARCH_CARDS.map((feature, index) => (
                <FeatureAccordion
                  key={feature.title}
                  title={feature.title}
                  copy={feature.copy}
                  defaultOpen={index === 0}
                />
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
              <div className="flex size-12 items-center justify-center rounded-xl border border-purple-400/30 bg-purple-400/10">
                <span className="block size-6 rounded-full bg-gradient-to-br from-purple-300 via-sky-400 to-emerald-300" />
              </div>
              <h3 className="text-2xl font-semibold">Signal Fabric</h3>
            </div>
            <p className="text-sm text-text-secondary">
              Order books, swaps, and funding pipe into one stream for bots, alerts, and dashboards.
            </p>
            <div className="space-y-3">
              {DATA_FABRIC_BULLETS.map((feature, index) => (
                <FeatureAccordion
                  key={feature.title}
                  title={feature.title}
                  copy={feature.copy}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
          </motion.div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-6 md:grid-cols-2">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="glass card-hover rounded-3xl p-8 sm:p-10"
          >
            <div className="mb-4 flex items-center gap-3">
              <div className="flex size-12 items-center justify-center rounded-xl border border-green-400/30 bg-green-400/10 p-2">
                <Image
                  src="/technology/turnkey-badge.svg"
                  alt="Turnkey secure wallets"
                  width={32}
                  height={32}
                  className="h-auto w-full"
                />
              </div>
              <h3 className="text-2xl font-semibold">Wallet Mesh</h3>
            </div>
            <p className="mb-4 text-sm text-text-secondary">
              Turnkey handles wallet provisioning and policy controls so signatures stay fast and
              fenced in.
            </p>
            <div className="space-y-3">
              {WALLET_FEATURES.map((feature, index) => (
                <FeatureAccordion
                  key={feature.title}
                  title={feature.title}
                  copy={feature.copy}
                  defaultOpen={index === 0}
                />
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
              <div className="flex size-12 items-center justify-center rounded-xl border border-blue-500/30 bg-blue-500/10">
                <span className="block size-6 rounded-[10px] bg-gradient-to-br from-blue-300 via-sky-400 to-cyan-500" />
              </div>
              <h3 className="text-2xl font-semibold">Execution Dispatcher</h3>
            </div>
            <p className="text-sm text-text-secondary">
              Promote bots with the same rules they trained on. Alerts fire the second something
              drifts.
            </p>
            <div className="space-y-3">
              {EXECUTION_FEATURES.map((feature, index) => (
                <FeatureAccordion
                  key={feature.title}
                  title={feature.title}
                  copy={feature.copy}
                  defaultOpen={index === 0}
                />
              ))}
            </div>
            <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-4 text-xs text-blue-100">
              <p className="text-sm font-semibold text-blue-200">Realtime Feed</p>
              <p className="mt-1 leading-relaxed">
                Hyperliquid fills, funding moves, and liquidations hit your webhooks and chat in
                under 200 ms.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
