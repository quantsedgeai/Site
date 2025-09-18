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
    detail: "Strategies cleared the gates and hit Hyperliquid live",
  },
  {
    label: "Latency Delta",
    value: "12ms",
    detail: "Avg paper vs live gap on Hyperliquid fills",
  },
  {
    label: "Guardrail Triggers",
    value: "41",
    detail: "Circuit breakers fired before risk thresholds hit",
  },
];

const proofPillars = [
  {
    title: "Transparent Pilot Runs",
    description:
      "Share promotion logs, parameter diffs, and telemetry exports with your desk before anything goes live.",
  },
  {
    title: "Deterministic Backtests",
    description:
      "Replay identical market states with locked data snapshots so every iteration is provable and repeatable.",
  },
  {
    title: "Signal Containment",
    description:
      "Fork community alpha into private sandboxes while guardrails and approvals ensure no surprises in production.",
  },
];

export function Proof() {
  return (
    <section id="proof" className="relative py-24 px-6">
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-accent/5 to-transparent opacity-40" />
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-12 mb-16">
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
            <p className="text-text-secondary text-lg">
              The pipeline emits artifacts at each gate—run logs, latency deltas, risk flags—so you can audit every step and
              keep compliance in the loop.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariants}
            className="glass rounded-3xl p-6 sm:p-8 w-full lg:max-w-md"
          >
            <div className="grid sm:grid-cols-3 lg:grid-cols-1 gap-4">
              {proofStats.map((stat) => (
                <div key={stat.label} className="rounded-2xl bg-black/30 border border-white/5 p-4">
                  <p className="mono text-2xl font-semibold text-accent">{stat.value}</p>
                  <p className="text-sm text-text-primary mt-1">{stat.label}</p>
                  <p className="text-xs text-text-tertiary mt-1">{stat.detail}</p>
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
              className="glass rounded-2xl p-6 h-full"
            >
              <p className="text-sm font-semibold text-accent uppercase tracking-wider">{pillar.title}</p>
              <p className="text-text-secondary text-sm mt-3 leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
