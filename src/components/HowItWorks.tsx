"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Explore Ideas",
    summary: "Spin up multi-market research environments in seconds.",
    bullets: [
      "Optuna-powered templates intelligently optimize strategy parameters using advanced Bayesian sampling.",
      "Data, features, and experiment results automatically log for complete research traceability across perpetuals and spot markets.",
    ],
  },
  {
    title: "Prove It Safely",
    summary: "Rehearse fills through production-grade SDKs for each venue.",
    bullets: [
      "Backtests and paper runs replay live market states from Hyperliquid, Uniswap, and PancakeSwap.",
      "Pass-fail snapshots drop straight into your chat with venue-specific performance metrics.",
    ],
  },
  {
    title: "Launch With Guardrails",
    summary: "Promote only after policies, alerts, and signers lock in.",
    bullets: [
      "Dispatcher obeys caps, throttles, and kill switch rules.",
      "Every order mirrors into logs you can track and audit.",
    ],
  },
];

const testimonials = [
  {
    quote:
      "All my exchange feeds land in one place, so I spot moves early and trade without hopping tabs.",
    name: 'Alex "Volt" Kim',
    title: "Retail Trader",
  },
  {
    quote:
      "If a bot slips, the guardrails pause it. I sleep fine knowing it won't drain my account overnight.",
    name: "Jordan H.",
    title: "Self-Directed Investor",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] } },
};

export function HowItWorks() {
  return (
    <section id="how-it-works" className="relative overflow-hidden px-6 py-24">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(16,185,129,0.08),transparent_55%),radial-gradient(circle_at_80%_0%,rgba(59,130,246,0.08),transparent_45%)]" />
      <div className="relative mx-auto max-w-7xl">
        <div className="mx-auto mb-16 max-w-3xl text-center">
          <p className="label mb-4 text-accent">How It Works</p>
          <h2 className="display mb-6 text-4xl sm:text-5xl lg:text-display-md">
            One pipeline from research to live execution
          </h2>
          <p className="text-lg text-text-secondary">
            Every strategy clears the same three checkpoints: experiment, verify inside the
            Hyperliquid sandbox, then push live with the guardrails still on.
          </p>
        </div>

        <div className="relative pl-10">
          <div className="absolute inset-y-0 left-4 w-px bg-white/10" />
          <div className="absolute left-4 top-0 h-10 w-px bg-gradient-to-b from-accent/80 to-transparent" />
          {steps.map((step, index) => (
            <motion.div
              key={step.title}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.4 }}
              variants={fadeUp}
              className="relative pb-12 last:pb-0"
            >
              <span className="absolute -left-10 top-0 flex size-8 items-center justify-center rounded-full border border-white/10 bg-black/60 text-sm font-semibold text-accent">
                {index + 1}
              </span>
              <div className="glass-premium magnetic touch-feedback rounded-3xl p-6 backdrop-blur-lg">
                <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                <p className="mt-2 text-sm text-text-secondary">{step.summary}</p>
                <ul className="mt-4 space-y-2 text-sm text-text-tertiary">
                  {step.bullets.map((bullet) => (
                    <li key={bullet} className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-accent" />
                      <span className="leading-snug">{bullet}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="mt-20 grid gap-6 lg:grid-cols-2">
          {testimonials.map((item) => (
            <motion.blockquote
              key={item.name}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp}
              className="glass-premium magnetic touch-feedback h-full rounded-3xl p-8 text-left"
            >
              <p className="text-lg leading-relaxed text-text-primary">“{item.quote}”</p>
              <footer className="mt-6 text-sm text-text-tertiary">
                <span className="font-semibold text-text-secondary">{item.name}</span>
                <span className="mt-1 block text-xs text-text-tertiary">{item.title}</span>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
