"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Explore Ideas",
    summary: "Spin up a Hyperliquid-ready research lane in seconds.",
    bullets: [
      "Optuna starter templates cover the core alpha patterns.",
      "Data, features, and notes auto-log for every experiment.",
    ],
  },
  {
    title: "Prove It Safely",
    summary: "Rehearse fills through the very same Hyperliquid SDK.",
    bullets: [
      "Backtests and paper runs replay live market states.",
      "Pass-fail snapshots drop straight into your chat.",
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
      "Dry runs and live fills now land within a few basis points. The gap is finally predictable.",
    name: "Maya R.",
    title: "Power Trader, Syndicate Labs",
  },
  {
    quote: "Built-in guardrails catch trouble before we do, and we still get every log we need.",
    name: "Carlos M.",
    title: "Lead Trader, Drift Collective",
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

        <div className="grid gap-16 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
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

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.4 }}
            variants={fadeUp}
            className="glass space-y-6 rounded-3xl border border-white/10 p-8 backdrop-blur-xl"
          >
            <div className="flex items-center justify-between gap-4">
              <div>
                <p className="text-sm uppercase tracking-[0.35em] text-text-tertiary/80">
                  Promotion Control
                </p>
                <h3 className="mt-2 text-2xl font-semibold text-text-primary">
                  Median time to live: 58 minutes
                </h3>
              </div>
              <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-text-secondary">
                Preview cohort data
              </span>
            </div>
            <ul className="space-y-4 text-sm text-text-secondary">
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-green-400" />
                Drawdown &lt; 1.5%, fill variance &lt; 25 bps, and latency &lt; 50 ms must all
                clear.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-blue-400" />
                One approval locks policy. Dispatcher enforces caps, leverage, and throttle rules.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-amber-400" />
                Every order, fill, and circuit break mirrors into Slack, PagerDuty, or your webhook.
              </li>
            </ul>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-text-tertiary">Trader Signal</p>
              <p className="mt-2 text-base text-text-secondary">
                Power traders in preview average 1.7 live bot launches per week once dialed in.
              </p>
            </div>
          </motion.div>
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
