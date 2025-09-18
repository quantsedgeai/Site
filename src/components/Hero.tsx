"use client";

import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import type { FormEvent } from "react";
import { useEffect, useRef, useState } from "react";

import { REQUEST_ACCESS_EVENT } from "@/lib/constants";
import { submitRequestAccess } from "@/lib/requestAccess";
import { cn } from "@/lib/utils";

interface CounterProps {
  end: number;
  suffix: string;
  className?: string;
}

function AnimatedCounter({ end, suffix, className = "" }: CounterProps) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  useEffect(() => {
    if (!isInView) return;

    const duration = 2500;
    const startTime = Date.now();
    const startValue = 0;

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);

      // Easing function (ease-out cubic)
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = startValue + (end - startValue) * easeOut;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, end]);

  const formatValue = (value: number) => {
    if (suffix === "%") {
      return value.toFixed(2) + suffix;
    } else if (suffix === "B+") {
      return "$" + value.toFixed(1) + suffix;
    } else if (end.toString().includes(".")) {
      return value.toFixed(2);
    }
    return Math.floor(value).toString();
  };

  return (
    <span ref={ref} className={className}>
      {formatValue(count)}
    </span>
  );
}

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.4, 0, 0.2, 1],
    },
  },
};
const HeroChart = dynamic(() => import("./HeroChart").then((mod) => mod.HeroChart), {
  ssr: false,
  loading: () => (
    <div className="flex h-full items-center justify-center rounded-[28px] border border-white/10 bg-black/50 p-10 text-center text-sm text-text-secondary">
      Loading live metrics…
    </div>
  ),
});

interface RequestAccessModalProps {
  open: boolean;
  onClose: () => void;
}

function RequestAccessModal({ open, onClose }: RequestAccessModalProps) {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [message, setMessage] = useState<string>("");
  const formRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
      setStatus("idle");
      setMessage("");
      formRef.current?.reset();
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const name = formData.get("name")?.toString().trim() ?? "";
    const email = formData.get("email")?.toString().trim() ?? "";
    const project = formData.get("project")?.toString().trim() ?? undefined;
    const volume = formData.get("volume")?.toString().trim() ?? undefined;
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
        project,
        volume,
        notes,
        source: "hero",
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

  if (!open) {
    return null;
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-[60] flex items-center justify-center bg-black/70 px-6 backdrop-blur-md"
      role="dialog"
      aria-modal="true"
    >
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        exit={{ opacity: 0, y: 20 }}
        transition={{ duration: 0.35, ease: [0.4, 0, 0.2, 1] }}
        className="relative w-full max-w-lg rounded-3xl border border-white/10 bg-black/80 p-8 shadow-[0_40px_120px_-45px_rgba(16,185,129,0.5)]"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-text-tertiary transition hover:text-text-secondary"
          aria-label="Close request access form"
        >
          ×
        </button>
        <div className="mb-6 space-y-2">
          <p className="text-xs uppercase tracking-[0.35em] text-text-tertiary">Request Access</p>
          <h3 className="text-2xl font-semibold text-text-primary">Tap into the preview cohort</h3>
          <p className="text-sm text-text-secondary">
            We prioritize major projects and KOLs actively trading Hyperliquid. Share context so we
            can line up access fast.
          </p>
        </div>
        <form ref={formRef} onSubmit={handleSubmit} className="space-y-4">
          <label className="block text-xs uppercase tracking-[0.25em] text-text-tertiary">
            Name or Handle
            <input
              type="text"
              required
              placeholder="Your name / KOL handle"
              name="name"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary/60 focus:border-accent focus:outline-none"
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.25em] text-text-tertiary">
            Email
            <input
              type="email"
              required
              placeholder="you@project.xyz"
              name="email"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary/60 focus:border-accent focus:outline-none"
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.25em] text-text-tertiary">
            Project or Desk
            <input
              type="text"
              placeholder="Token/project name, trading desk, or network"
              name="project"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary/60 focus:border-accent focus:outline-none"
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.25em] text-text-tertiary">
            Volume / Reach Snapshot
            <input
              type="text"
              placeholder="Avg daily notional, liquidity managed, audience size"
              name="volume"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary/60 focus:border-accent focus:outline-none"
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.25em] text-text-tertiary">
            Notes
            <textarea
              rows={3}
              placeholder="Share what you’re building, why you want access, and timelines."
              name="notes"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary/60 focus:border-accent focus:outline-none"
            />
          </label>
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <button
              type="submit"
              className="btn btn-primary rounded-xl px-6 py-3 font-semibold"
              disabled={status === "loading"}
            >
              {status === "loading"
                ? "Submitting…"
                : status === "success"
                  ? "Request Received"
                  : "Submit Request"}
            </button>
            <a
              href="mailto:access@quantsedge.xyz"
              className="text-sm text-text-secondary transition hover:text-text-primary"
            >
              Prefer email? access@quantsedge.xyz
            </a>
          </div>
          {message && (
            <p className={`text-xs ${status === "success" ? "text-green-400" : "text-amber-400"}`}>
              {message}
            </p>
          )}
        </form>
      </motion.div>
    </motion.div>
  );
}

export function Hero() {
  const [isRequestOpen, setIsRequestOpen] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(false);

  useEffect(() => {
    const handleOpen = () => setIsRequestOpen(true);
    window.addEventListener(REQUEST_ACCESS_EVENT, handleOpen);

    return () => {
      window.removeEventListener(REQUEST_ACCESS_EVENT, handleOpen);
    };
  }, []);

  useEffect(() => {
    const updateSize = () => {
      setIsDesktop(window.innerWidth >= 1024);
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updatePreference = () => setPrefersReducedMotion(mediaQuery.matches);

    updatePreference();
    mediaQuery.addEventListener("change", updatePreference);
    return () => mediaQuery.removeEventListener("change", updatePreference);
  }, []);

  const showChart = isDesktop && !prefersReducedMotion;

  return (
    <>
      <section className="relative flex min-h-screen items-center justify-center px-6 pt-24">
        {/* Background Gradient */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute left-1/2 top-1/3 size-[900px] -translate-x-1/2 rounded-full bg-gradient-radial from-accent/10 via-transparent to-transparent blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            className="absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-black/60 via-black/10 to-transparent"
          />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="relative mx-auto w-full max-w-7xl"
        >
          <div className="grid items-center gap-12 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.1fr)]">
            <div className="space-y-10 text-center lg:text-left">
              {/* Badge */}
              <motion.div
                variants={itemVariants}
                className="glass inline-flex items-center space-x-3 rounded-full px-4 py-1.5"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-green-400"></span>
                </span>
                <span className="label text-text-secondary">
                  Preview Access • Hyperliquid Verified
                </span>
              </motion.div>

              {/* Headline */}
              <div className="space-y-6">
                <motion.h1
                  variants={itemVariants}
                  className="display text-5xl sm:text-7xl lg:text-display-lg"
                >
                  Ship Bots At
                  <br />
                  <span className="gradient-text">Hyperliquid Speed</span>
                </motion.h1>

                <motion.p
                  variants={itemVariants}
                  className="text-xs uppercase tracking-[0.35em] text-text-tertiary"
                >
                  Why It Matters
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="mx-auto max-w-2xl text-lg text-text-secondary sm:text-xl lg:mx-0"
                >
                  Build, test, and ship on the same stack our desk trades. Backtests stay
                  deterministic, paper fills run through the Hyperliquid SDK, and every launch keeps
                  the guardrails you configure.
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="text-xs uppercase tracking-[0.35em] text-text-tertiary"
                >
                  Time To Live
                </motion.p>
                <motion.p
                  variants={itemVariants}
                  className="mx-auto max-w-xl text-sm text-text-tertiary sm:text-base lg:mx-0"
                >
                  Move from research to production in under an hour with venue-grade telemetry
                  following every order.
                </motion.p>
              </div>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#early-access"
                  className="btn btn-primary glow rounded-xl px-8 py-4 text-base font-semibold"
                  data-analytics-event="cta_request_access"
                  data-analytics-payload={JSON.stringify({
                    location: "hero",
                    target: "early_access",
                  })}
                >
                  Request Access
                </motion.a>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  href="#how-it-works"
                  className="btn btn-secondary rounded-xl px-8 py-4 text-base"
                  data-analytics-event="cta_view_pipeline"
                  data-analytics-payload={JSON.stringify({
                    location: "hero",
                    target: "how_it_works",
                  })}
                >
                  See How It Works →
                </motion.a>
              </motion.div>

              {/* Proof Bar */}
              <motion.div
                variants={itemVariants}
                className="grid gap-4 text-left sm:grid-cols-3 lg:gap-6"
              >
                {[
                  {
                    title: "Deterministic Research",
                    copy: "Lock data snapshots, compare diffs, and export promotion-ready run logs.",
                  },
                  {
                    title: "Proof Before Live",
                    copy: "Paper executions route through the Hyperliquid SDK with latency insights.",
                  },
                  {
                    title: "Your Keys, Your Flows",
                    copy: "We automate logic only—wallets stay yours, custody-free forever.",
                  },
                ].map((item) => (
                  <div key={item.title} className="glass rounded-xl p-4">
                    <p className="text-sm font-semibold text-text-primary">{item.title}</p>
                    <p className="mt-1 text-xs leading-relaxed text-text-tertiary">{item.copy}</p>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* Hero Media */}
            <motion.div variants={itemVariants} className="relative">
              <div className="pointer-events-none absolute -inset-6 bg-accent/10 opacity-60 blur-3xl" />
              {showChart ? (
                <HeroChart active />
              ) : (
                <div className="flex h-full items-center justify-center rounded-[28px] border border-white/10 bg-black/50 p-10 text-center text-sm text-text-secondary">
                  Live fills unlock on larger displays.
                </div>
              )}
            </motion.div>
          </div>

          {/* Stats */}
          <motion.div
            variants={itemVariants}
            className="mt-16 grid grid-cols-2 gap-4 lg:grid-cols-4"
          >
            {[
              {
                label: "Cumulative Volume",
                value: <AnimatedCounter end={1.2} suffix="B+" />,
                accent: "text-accent",
              },
              {
                label: "Trader Retention",
                value: <AnimatedCounter end={87} suffix="%" />,
                accent: "text-green-400",
              },
              {
                label: "Median Fill Speed",
                value: <span className="mono text-2xl">42ms</span>,
                accent: "text-text-primary",
              },
              {
                label: "Strategies Synced",
                value: <AnimatedCounter end={312} suffix="" />,
                accent: "text-accent",
              },
            ].map((stat) => (
              <motion.div
                key={stat.label}
                whileHover={{ scale: 1.05, y: -4 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass card-hover rounded-2xl p-6"
              >
                <p className={cn("mono text-2xl font-bold", stat.accent)}>{stat.value}</p>
                <p className="label mt-2 text-text-tertiary">{stat.label}</p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <RequestAccessModal open={isRequestOpen} onClose={() => setIsRequestOpen(false)} />
    </>
  );
}
