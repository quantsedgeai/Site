"use client";

import { motion } from "framer-motion";

import { RELEASE_NOTES, ROADMAP_MILESTONES } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

const statusStyles: Record<string, string> = {
  Released: "border-green-400/40 bg-green-400/10 text-green-200",
  "In QA": "border-blue-400/40 bg-blue-400/10 text-blue-200",
  Design: "border-amber-400/40 bg-amber-400/10 text-amber-200",
};

export function RoadmapSection() {
  return (
    <section id="roadmap" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="label mb-4 text-accent">Roadmap</p>
          <h2 className="display mb-4 text-4xl sm:text-5xl lg:text-display-md">
            Shipping fast, guided by trader feedback
          </h2>
          <p className="mx-auto max-w-3xl text-lg text-text-secondary">
            Follow what just landed, what’s in QA, and what the community is voting on next. We
            release weekly, with full transparency.
          </p>
        </div>

        <div className="grid gap-10 lg:grid-cols-[minmax(0,1.05fr)_minmax(0,0.95fr)]">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Milestones</h3>
              <span className="font-mono text-xs uppercase text-text-tertiary">Updated weekly</span>
            </div>
            <div className="space-y-4">
              {ROADMAP_MILESTONES.map((item) => (
                <div key={item.title} className="glass rounded-2xl border border-white/5 p-6">
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <span
                      className={`inline-flex items-center rounded-full border px-3 py-1 text-xs font-semibold ${
                        statusStyles[item.status] ?? "border-white/15 bg-white/5 text-text-tertiary"
                      }`}
                    >
                      {item.status}
                    </span>
                    <span className="rounded-full bg-white/5 px-3 py-1 font-mono text-xs text-text-tertiary">
                      {item.eta}
                    </span>
                  </div>
                  <h4 className="mt-4 text-lg font-semibold text-text-primary">{item.title}</h4>
                  <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                    {item.points.map((point) => (
                      <li key={point} className="flex items-start gap-2">
                        <span className="mt-1 size-1.5 rounded-full bg-accent" />
                        <span className="leading-snug">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            className="space-y-6"
          >
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-semibold">Release Notes</h3>
              <span className="font-mono text-xs uppercase text-text-tertiary">Last 60 days</span>
            </div>
            <div className="glass space-y-6 rounded-3xl border border-white/5 p-6 sm:p-8">
              {RELEASE_NOTES.map((note) => (
                <div
                  key={note.version}
                  className="border-b border-white/5 pb-5 last:border-none last:pb-0"
                >
                  <div className="flex flex-wrap items-center justify-between gap-3">
                    <p className="font-mono text-sm text-accent">{note.version}</p>
                    <span className="text-xs text-text-tertiary">{note.date}</span>
                  </div>
                  <ul className="mt-3 space-y-2 text-sm text-text-secondary">
                    {note.highlights.map((item) => (
                      <li key={item} className="flex items-start gap-2">
                        <span className="mt-1 text-accent">•</span>
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <div className="glass rounded-2xl border border-accent/20 bg-accent/5 p-5">
              <p className="text-sm font-semibold text-text-primary">Have feedback?</p>
              <p className="mt-2 text-xs text-text-secondary">
                Drop feature requests in our Telegram. The roadmap reshuffles every sprint based on
                your votes.
              </p>
              <a
                href="https://t.me/quantsedge"
                target="_blank"
                rel="noreferrer"
                className="mt-4 inline-flex items-center gap-2 rounded-full border border-accent/40 bg-accent/10 px-4 py-2 text-xs font-semibold text-accent transition-colors duration-200 hover:border-accent/60 hover:bg-accent/20"
              >
                <span>Join Telegram</span>
                <svg
                  className="h-3.5 w-3.5"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M21 3L10 14"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M21 3L14 21L10 14L3 10L21 3Z"
                    stroke="currentColor"
                    strokeWidth="1.6"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
