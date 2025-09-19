"use client";

import { motion } from "framer-motion";
import type { FormEvent } from "react";
import { useRef, useState } from "react";

import { submitRequestAccess } from "@/lib/requestAccess";

export function EarlyAccess() {
  const formRef = useRef<HTMLFormElement>(null);
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const notes = formData.get("notes")?.toString().trim() ?? undefined;

    if (!name || !email) {
      setStatus("error");
      setMessage("Name and email are required.");
      return;
    }

    void (async () => {
      setStatus("loading");
      setMessage("");
      const response = await submitRequestAccess({
        name,
        email,
        notes,
        source: "partnerships",
      });

      if (response.success) {
        setStatus("success");
        setMessage(response.message);
        formRef.current?.reset();
      } else {
        setStatus("error");
        setMessage(response.message);
      }
    })();
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
          className="glass rounded-[32px] border border-white/10 p-8 backdrop-blur-2xl sm:p-12"
        >
          <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
            <div className="max-w-xl space-y-4">
              <p className="label text-accent">Partnerships & Collaborations</p>
              <h2 className="display text-3xl sm:text-4xl">Build with QuantsEdge</h2>
              <p className="text-base text-text-secondary">
                Ecosystem teams, tooling partners, and integrations—we’d love to jam. Drop us a note
                and we’ll carve out time to explore fit.
              </p>
              <div className="grid gap-4 text-sm text-text-secondary sm:grid-cols-2">
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-text-tertiary">
                    What works well
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-accent" />
                      Liquidity venues, execution tooling, or custody partners.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-blue-400" />
                      Data, analytics, or compliance infrastructure.
                    </li>
                  </ul>
                </div>
                <div className="rounded-2xl border border-white/10 bg-black/40 p-5">
                  <p className="text-xs uppercase tracking-[0.25em] text-text-tertiary">
                    Less ideal
                  </p>
                  <ul className="mt-3 space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-amber-400" />
                      Retail affiliate programs or paid placement requests.
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="mt-1 size-1.5 rounded-full bg-red-400" />
                      Cold pitch agencies or generic lead-gen.
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
                    className="btn btn-primary w-full rounded-xl px-8 py-3 font-semibold sm:w-auto"
                    disabled={status === "loading"}
                  >
                    {status === "loading"
                      ? "Sending…"
                      : status === "success"
                        ? "Message Sent"
                        : "Start the Conversation"}
                  </button>
                  <a
                    href="mailto:partners@quantsedge.ai"
                    className="text-sm text-text-secondary hover:text-text-primary"
                  >
                    Email us directly: partners@quantsedge.ai
                  </a>
                </div>
                {message && (
                  <p
                    className={`text-xs ${status === "success" ? "text-green-400" : "text-amber-400"}`}
                  >
                    {message}
                  </p>
                )}
              </form>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
