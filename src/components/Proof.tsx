"use client";

import { motion } from "framer-motion";

const containerVariants = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

const proofStats = [
  {
    label: "Live Promotions (60d)",
    value: "146",
    detail: "Bots cleared the launch gates",
  },
  {
    label: "Latency Delta",
    value: "12ms",
    detail: "Paper to live gap on fills",
  },
  {
    label: "Guardrail Triggers",
    value: "41",
    detail: "Circuit breakers fired pre-threshold",
  },
];

const proofPillars = [
  {
    title: "Transparent Pilot Runs",
    description: "Promotion logs, parameter diffs, and telemetry exports stay one click away.",
  },
  {
    title: "Deterministic Backtests",
    description: "Locked data snapshots replay identical market states for every iteration.",
  },
];

const proofLogPreview = [
  "14:32:11Z | promotion passed | latency 42ms | variance 18bps",
  "14:32:12Z | order ack | size 1800 | policy ok",
  "14:32:14Z | guardrail check | drawdown 1.1% | clear",
  "14:32:22Z | fill logged | pnl +0.42% | webhook sent",
];

export function Proof() {
  return (
    <section id="proof" className="relative px-6 py-24">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-40" />
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 flex flex-col gap-12 lg:flex-row lg:items-center lg:justify-between">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="max-w-xl space-y-6"
          >
            <p className="label text-accent">Guardrails & Transparency</p>
            <h2 className="display text-4xl sm:text-5xl">
              Proof before promotion, receipts after every fill
            </h2>
            <p className="text-lg text-text-secondary">
              The pipeline emits artifacts at each gate—run logs, latency deltas, risk flags—so you
              can audit every step and keep compliance in the loop.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="glass w-full rounded-3xl p-6 sm:p-8 lg:max-w-md"
          >
            <div className="grid gap-4 sm:grid-cols-3 lg:grid-cols-1">
              {proofStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl border border-white/5 bg-black/30 p-4">
                  <p className="mono text-2xl font-semibold text-accent">{stat.value}</p>
                  <p className="mt-1 text-sm text-text-primary">{stat.label}</p>
                  <p className="mt-1 text-xs text-text-tertiary">{stat.detail}</p>
                </div>
              ))}
            </div>
          </motion.div>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {proofPillars.map((pillar) => (
            <motion.div
              key={pillar.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={containerVariants}
              className="glass h-full rounded-2xl p-6"
            >
              <p className="text-sm font-semibold uppercase tracking-wider text-accent">
                {pillar.title}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-text-secondary">
                {pillar.description}
              </p>
            </motion.div>
          ))}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="glass h-full rounded-2xl border border-white/10 bg-black/45 p-6 font-mono text-xs text-text-secondary"
          >
            <p className="text-sm font-semibold uppercase tracking-wider text-accent">
              Live Log Stream
            </p>
            <div className="mt-3 space-y-2 rounded-xl bg-black/40 p-4">
              {proofLogPreview.map((line) => (
                <p key={line} className="truncate text-text-tertiary">
                  {line}
                </p>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
