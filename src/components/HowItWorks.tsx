"use client";

import { motion } from "framer-motion";

const steps = [
  {
    title: "Explore Ideas",
    summary: "Kick off a pre-configured environment tuned for Hyperliquid.",
    detail:
      "Pick a starter template, tweak parameters, and capture every change automatically—no servers to wire or data feeds to babysit.",
  },
  {
    title: "Prove It Safely",
    summary: "Run the no-risk checks using the same Hyperliquid SDK as live trading.",
    detail:
      "Backtests and paper trades replay real market moves through the Hyperliquid SDK, giving you a clear pass/fail read before you ever touch live capital.",
  },
  {
    title: "Launch With Guardrails",
    summary: "Flip the switch only after the protections are in place.",
    detail:
      "We route orders, watch limits, and alert your team the moment something drifts—while you keep the keys and final say.",
  },
];

const testimonials = [
  {
    quote:
      "We ditched spreadsheets for this pipeline. Now the dry runs and live fills land within a few basis points—much easier to explain to the team.",
    name: "Maya R.",
    title: "Head of Quant Strategy, Syndicate Labs",
  },
  {
    quote:
      "The built-in guardrails catch trouble before we do. Compliance finally has the logs they’ve been asking for, and we still move fast.",
    name: "Carlos M.",
    title: "CTO, Drift Collective",
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
            Every strategy walks the same three steps. Start experimenting, prove the idea without
            risking capital, then launch with training wheels that stay on in production.
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
                <div className="glass rounded-3xl border border-white/10 p-6 backdrop-blur-lg">
                  <h3 className="text-lg font-semibold text-text-primary">{step.title}</h3>
                  <p className="mt-2 text-sm text-text-secondary">{step.summary}</p>
                  <p className="mt-4 text-sm leading-relaxed text-text-tertiary">{step.detail}</p>
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
                Gates stay shut until drawdown &lt; 1.5%, fill variance &lt; 25 bps, and latency
                &lt; 50 ms—all enforced automatically.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-blue-400" />
                One approval signs the policy. The dispatcher then obeys position caps, leverage
                bands, and throttle rules per market.
              </li>
              <li className="flex items-start gap-3">
                <span className="mt-1 size-2 rounded-full bg-amber-400" />
                Every order, fill, and circuit-break fires into Slack, PagerDuty, or your webhook
                with full context for the desk.
              </li>
            </ul>
            <div className="rounded-2xl border border-white/10 bg-black/40 p-6">
              <p className="text-xs uppercase tracking-[0.3em] text-text-tertiary">Trader Signal</p>
              <p className="mt-2 text-base text-text-secondary">
                Power traders in preview average 1.7 live promotions per week once the pipeline is
                wired into their workflow.
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
              className="glass h-full rounded-3xl border border-white/10 p-8 text-left"
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
