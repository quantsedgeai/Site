"use client";

import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { useRef } from "react";

export function EarlyAccess() {
  const formRef = useRef<HTMLFormElement>(null);
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const notes = formData.get("notes")?.toString().trim() ?? undefined;

    if (!name || !email) {
      return;
    }

    const subject = encodeURIComponent("QuantsEdge partnership inquiry");
    const lines = [
      `Name or Team: ${name}`,
      `Email: ${email}`,
      notes ? `Notes: ${notes}` : undefined,
    ].filter(Boolean);
    const body = encodeURIComponent(lines.join("\n"));

    if (typeof window !== "undefined") {
      window.location.href = `mailto:partners@quantsedge.ai?subject=${subject}&body=${body}`;
    }

    formRef.current?.reset();
  };

  return (
    <section id="early-access" className="relative overflow-hidden px-6 py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(16,185,129,0.12),transparent_55%),radial-gradient(circle_at_bottom_right,rgba(59,130,246,0.1),transparent_45%)] opacity-80" />
      <div className="relative mx-auto max-w-5xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.4 }}
          transition={{ duration: 0.7, ease: [0.4, 0, 0.2, 1] }}
          className="glass-premium magnetic rounded-[32px] p-8 backdrop-blur-2xl sm:p-12"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-4">
              <p className="label text-accent">Partnerships & Collaborations</p>
              <h2 className="display text-3xl sm:text-4xl">Build with QuantsEdge</h2>
              <p className="text-base text-text-secondary">
                Ecosystem teams, tooling partners, and integrations: we’d love to jam. Drop us a
                note and we’ll carve out time to explore fit.
              </p>
              <div className="grid gap-4 text-sm text-text-secondary sm:grid-cols-2">
                <div className="glass magnetic touch-feedback group rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-text-tertiary transition-colors group-hover:text-accent">
                    For project teams
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-accent" />
                      Co-launch trading bots or tooling with hands-on support from our engineers.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-blue-400" />
                      Integrate data, custody, or execution rails through shared roadmaps.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-purple-400" />
                      Plan co-marketing drops for new features or market launches.
                    </li>
                  </ul>
                </div>
                <div className="glass magnetic touch-feedback group rounded-2xl p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-text-tertiary transition-colors group-hover:text-accent">
                    For KOLs & communities
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-green-400" />
                      Host strategy walkthroughs or AMAs with access to curated dashboards.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-amber-400" />
                      Share partner links tied to performance-based rewards for your audience.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-pink-400" />
                      Spin up exclusive bot templates for your community to clone and iterate.
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="w-full max-w-md">
              <form
                ref={formRef}
                onSubmit={handleSubmit}
                className="space-y-4"
                aria-label="Partnership inquiry"
              >
                <label className="block text-xs uppercase tracking-[0.2em] text-text-tertiary">
                  Name or Team
                  <input
                    type="text"
                    name="name"
                    placeholder="Your name or project"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary/60 focus:border-accent focus:outline-none focus:ring-0"
                    required
                  />
                </label>
                <label className="block text-xs uppercase tracking-[0.2em] text-text-tertiary">
                  Email
                  <input
                    type="email"
                    name="email"
                    placeholder="hello@partner.co"
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary/60 focus:border-accent focus:outline-none focus:ring-0"
                    required
                  />
                </label>
                <label className="block text-xs uppercase tracking-[0.2em] text-text-tertiary">
                  How can we help?
                  <textarea
                    name="notes"
                    placeholder="Share what you’re building or the integration you have in mind."
                    rows={4}
                    className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary/60 focus:border-accent focus:outline-none focus:ring-0"
                  />
                </label>
                <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
                  <button
                    type="submit"
                    className="btn btn-primary magnetic touch-feedback touch-target w-full rounded-xl px-8 py-3 font-semibold sm:w-auto"
                  >
                    Start the Conversation
                  </button>
                  <a
                    href="mailto:partners@quantsedge.ai"
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    Email us directly: partners@quantsedge.ai
                  </a>
                </div>
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
