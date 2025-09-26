"use client";

import { motion, useInView, useMotionValue, useSpring } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import type { FormEvent, PointerEvent as ReactPointerEvent } from "react";
import { useEffect, useRef, useState } from "react";

import { TechTooltip, MetricTooltip } from "@/components/ui/Tooltip";
import { useVelocityAnimations } from "@/hooks/useScrollVelocity";
import { REQUEST_ACCESS_EVENT } from "@/lib/constants";
import { fadeUp, staggerChildren } from "@/lib/motion";
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
  const [shouldAnimate, setShouldAnimate] = useState(false);

  useEffect(() => {
    if (typeof window === "undefined") {
      return;
    }

    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    const evaluate = () => {
      const prefersReducedMotion = mediaQuery.matches;
      const isLargeScreen = window.innerWidth >= 768;
      setShouldAnimate(!prefersReducedMotion && isLargeScreen);
    };

    evaluate();
    mediaQuery.addEventListener("change", evaluate);
    window.addEventListener("resize", evaluate);

    return () => {
      mediaQuery.removeEventListener("change", evaluate);
      window.removeEventListener("resize", evaluate);
    };
  }, []);

  useEffect(() => {
    if (!isInView) return;
    if (!shouldAnimate) {
      setCount(end);
      return;
    }

    const duration = 2500;
    const startTime = Date.now();

    const updateCounter = () => {
      const elapsed = Date.now() - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      const currentValue = easeOut * end;

      setCount(currentValue);

      if (progress < 1) {
        requestAnimationFrame(updateCounter);
      }
    };

    requestAnimationFrame(updateCounter);
  }, [isInView, end, shouldAnimate]);

  useEffect(() => {
    if (!shouldAnimate) {
      setCount(end);
    }
  }, [shouldAnimate, end]);

  const formatValue = (value: number) => {
    if (suffix === "%") {
      return value.toFixed(2) + suffix;
    }
    if (suffix === "B+") {
      return `$${value.toFixed(1)}${suffix}`;
    }
    if (end.toString().includes(".")) {
      return value.toFixed(2);
    }
    return Math.floor(value).toString() + suffix;
  };

  return (
    <span ref={ref} className={className}>
      {formatValue(count)}
    </span>
  );
}

const containerVariants = staggerChildren;
const itemVariants = fadeUp;

const HERO_HIGHLIGHTS = [
  {
    title: "Multi-Venue Coverage",
    copy: "Deploy strategies across Hyperliquid perpetuals and major DEX spot markets.",
  },
  {
    title: "Unified Pipeline",
    copy: "Seamless progression from backtesting to paper trading to live execution.",
  },
  {
    title: "Enterprise Safeguards",
    copy: "Built-in risk controls, monitoring, and emergency stops.",
  },
];

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
        className="relative w-full max-w-lg overflow-hidden rounded-3xl border border-white/10 bg-black/80 p-8 shadow-[0_40px_120px_-45px_rgba(16,185,129,0.5)]"
      >
        <div className="pointer-events-none absolute -top-32 right-10 size-40 rounded-full bg-[radial-gradient(circle,_rgba(56,189,248,0.35)_0%,_rgba(56,189,248,0)_70%)] blur-3xl" />
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
          <h3 className="text-2xl font-semibold text-text-primary">Join Early Access Program</h3>
          <p className="text-sm text-text-secondary">
            Priority access for active Hyperliquid traders. Share your trading profile to expedite
            approval.
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
            Project or Stack
            <input
              type="text"
              placeholder="Token, strategy brand, or community"
              name="project"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary/60 focus:border-accent focus:outline-none"
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.25em] text-text-tertiary">
            Volume / Reach Snapshot
            <input
              type="text"
              placeholder="Daily notional, audience size, or liquidity managed"
              name="volume"
              className="mt-2 w-full rounded-xl border border-white/10 bg-black/40 px-4 py-3 text-sm text-text-primary placeholder:text-text-tertiary/60 focus:border-accent focus:outline-none"
            />
          </label>
          <label className="block text-xs uppercase tracking-[0.25em] text-text-tertiary">
            Notes
            <textarea
              rows={3}
              placeholder="Share your current workflow, targets, and timelines."
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
                ? "Opening Email…"
                : status === "success"
                  ? "Email Draft Ready"
                  : "Submit Request"}
            </button>
            <a
              href="mailto:partners@quantsedge.ai"
              className="text-sm text-text-secondary transition hover:text-text-primary"
            >
              Prefer email? partners@quantsedge.ai
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
  const sectionRef = useRef<HTMLElement>(null);
  const pointerX = useMotionValue(0);
  const pointerY = useMotionValue(0);
  const highlightX = useSpring(pointerX, { stiffness: 120, damping: 25 });
  const highlightY = useSpring(pointerY, { stiffness: 120, damping: 25 });

  // Enhanced scroll animations
  const { animations } = useVelocityAnimations();

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
  const showHighlight = showChart;
  const hoverLift = isDesktop ? { y: -4, scale: 1.02 } : undefined;
  const hoverScale = isDesktop ? { scale: 1.05 } : undefined;

  useEffect(() => {
    if (!showHighlight || !sectionRef.current) return;
    const bounds = sectionRef.current.getBoundingClientRect();
    pointerX.set(bounds.width / 2);
    pointerY.set(bounds.height / 2);
  }, [showHighlight, pointerX, pointerY]);

  const handlePointerMove = (event: ReactPointerEvent<HTMLElement>) => {
    if (!showHighlight || !sectionRef.current) return;
    const bounds = sectionRef.current.getBoundingClientRect();
    pointerX.set(event.clientX - bounds.left);
    pointerY.set(event.clientY - bounds.top);
  };

  return (
    <>
      <section
        ref={sectionRef}
        onPointerMove={handlePointerMove}
        className="relative flex min-h-screen items-center justify-center overflow-hidden px-6 pt-24"
      >
        {/* Enhanced Background with Parallax */}
        <div className="absolute inset-0 overflow-hidden">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.5 }}
            style={{ y: animations.parallaxSlow }}
            className="parallax absolute left-1/2 top-1/3 size-[900px] -translate-x-1/2 rounded-full bg-gradient-radial from-accent/10 via-transparent to-transparent blur-3xl"
          />
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1.2 }}
            style={{ y: animations.parallaxMedium }}
            className="parallax absolute inset-x-0 top-0 h-[420px] bg-gradient-to-b from-black/60 via-black/10 to-transparent"
          />
          {/* Additional parallax layers */}
          <motion.div
            style={{ y: animations.parallaxFast }}
            className="parallax pointer-events-none absolute left-1/4 top-1/4 size-[400px] rounded-full bg-gradient-radial from-blue-500/5 via-transparent to-transparent blur-2xl"
          />
          <motion.div
            style={{ y: animations.parallaxSlow }}
            className="parallax pointer-events-none absolute bottom-1/4 right-1/4 size-[300px] rounded-full bg-gradient-radial from-purple-500/5 via-transparent to-transparent blur-2xl"
          />
          {showHighlight && (
            <motion.div
              style={{ left: highlightX, top: highlightY }}
              className="pointer-events-none absolute size-[320px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(circle,_rgba(16,185,129,0.32)_0%,_rgba(16,185,129,0)_70%)] blur-3xl"
            />
          )}
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
                className="glass-premium floating inline-flex items-center space-x-3 rounded-full px-4 py-1.5"
              >
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex size-2 rounded-full bg-green-400"></span>
                </span>
                <span className="label text-text-secondary">
                  Preview Access • Hyperliquid Ready
                </span>
              </motion.div>

              {/* Headline */}
              <div className="space-y-6">
                <motion.h1
                  variants={itemVariants}
                  className="display text-5xl sm:text-7xl lg:text-display-lg"
                >
                  Deploy Bots At
                  <br />
                  <span className="gradient-text">Hyperliquid Speed</span>
                </motion.h1>

                <motion.div
                  variants={itemVariants}
                  className="mx-auto flex max-w-2xl flex-col gap-4 text-left text-base text-text-secondary sm:text-lg lg:mx-0"
                >
                  <div className="leading-relaxed">
                    Enterprise-grade platform for developing, testing, and deploying{" "}
                    <TechTooltip
                      definition="Automated trading algorithms that execute strategies without human intervention"
                      example="Market-making bots, arbitrage bots, momentum bots"
                    >
                      automated trading strategies
                    </TechTooltip>{" "}
                    across{" "}
                    <TechTooltip
                      definition="Perpetuals on Hyperliquid and spot trading on Uniswap, PancakeSwap, and other DEXs"
                      example="Trade perpetuals with leverage or spot tokens across multiple chains"
                    >
                      DeFi markets
                    </TechTooltip>
                    .
                  </div>
                  <div className="flex flex-wrap gap-3">
                    {HERO_HIGHLIGHTS.map((item) => (
                      <motion.div
                        key={item.title}
                        whileHover={hoverLift}
                        transition={{ type: "spring", stiffness: 260, damping: 18 }}
                        className="glass magnetic group flex min-w-[200px] flex-1 items-start gap-3 rounded-2xl px-4 py-3"
                      >
                        <span className="mt-1 inline-flex size-2 rounded-full bg-accent group-hover:shadow-[0_0_12px_rgba(16,185,129,0.6)]" />
                        <div className="space-y-1">
                          <p className="mono text-xs uppercase tracking-[0.25em] text-accent">
                            {item.title}
                          </p>
                          <p className="text-sm leading-snug text-text-tertiary">{item.copy}</p>
                        </div>
                      </motion.div>
                    ))}
                  </div>
                </motion.div>
              </div>

              {/* CTAs */}
              <motion.div
                variants={itemVariants}
                className="flex flex-col justify-center gap-4 sm:flex-row lg:justify-start"
              >
                <motion.button
                  type="button"
                  whileHover={hoverScale}
                  whileTap={isDesktop ? { scale: 0.95 } : undefined}
                  onClick={() => setIsRequestOpen(true)}
                  className="btn btn-primary glow magnetic touch-feedback touch-target rounded-xl px-8 py-4 text-base font-semibold"
                  data-analytics-event="cta_request_access"
                  data-analytics-payload={JSON.stringify({
                    location: "hero",
                    target: "request_form",
                  })}
                >
                  Request Access
                </motion.button>
                <motion.a
                  whileHover={hoverScale}
                  whileTap={isDesktop ? { scale: 0.95 } : undefined}
                  href="#how-it-works"
                  className="btn btn-secondary magnetic touch-feedback touch-target rounded-xl px-8 py-4 text-base"
                  data-analytics-event="cta_view_pipeline"
                  data-analytics-payload={JSON.stringify({
                    location: "hero",
                    target: "how_it_works",
                  })}
                >
                  See How It Works →
                </motion.a>
              </motion.div>

              {/* Partner attribution */}
              <motion.div
                variants={itemVariants}
                className="flex flex-wrap items-center justify-center gap-3 text-xs text-text-tertiary/80 sm:justify-start"
              >
                <Image
                  src="/partners/hyperliquid.svg"
                  alt="Hyperliquid"
                  width={160}
                  height={16}
                  className="h-4 w-auto opacity-80"
                />
                <span className="whitespace-nowrap">Secured by</span>
                <Image
                  src="/partners/turnkey.svg"
                  alt="Turnkey"
                  width={120}
                  height={31}
                  className="h-5 w-auto opacity-80"
                />
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
                label: "Early Access Traders",
                value: <AnimatedCounter end={420} suffix="+" />,
                accent: "text-accent",
                tooltip: {
                  value: "420+",
                  breakdown: [
                    { label: "Professional Traders", value: "180", color: "#00FFC6" },
                    { label: "Institutions", value: "95", color: "#60A5FA" },
                    { label: "Algorithm Developers", value: "145", color: "#C084FC" },
                  ],
                  trend: "Growing 15% weekly",
                },
              },
              {
                label: "Run-to-Live Success",
                value: <AnimatedCounter end={92} suffix="%" />,
                accent: "text-green-400",
                tooltip: {
                  value: "92.3%",
                  breakdown: [
                    { label: "Paper → Live Success", value: "92.3%", color: "#34D399" },
                    { label: "First Week Retention", value: "87.1%", color: "#60A5FA" },
                    { label: "Monthly Active", value: "78.4%", color: "#F59E0B" },
                  ],
                  trend: "Improved 3.2% this quarter",
                },
              },
              {
                label: "Median Fill Speed",
                value: <span className="mono text-2xl">42ms</span>,
                accent: "text-text-primary",
                tooltip: {
                  value: "42ms",
                  breakdown: [
                    { label: "Order Processing", value: "12ms", color: "#00FFC6" },
                    { label: "Network Latency", value: "18ms", color: "#60A5FA" },
                    { label: "Settlement", value: "12ms", color: "#C084FC" },
                  ],
                  trend: "Improved from 58ms last month",
                },
              },
              {
                label: "Bots Live Right Now",
                value: <AnimatedCounter end={6} suffix="" />,
                accent: "text-accent",
                tooltip: {
                  value: "6",
                  breakdown: [
                    { label: "Market Making", value: "2", color: "#00FFC6" },
                    { label: "Arbitrage", value: "2", color: "#60A5FA" },
                    { label: "Momentum", value: "2", color: "#C084FC" },
                  ],
                  trend: "Peak was 9 during NY session",
                },
              },
            ].map((stat) => (
              <MetricTooltip
                key={stat.label}
                value={stat.tooltip.value}
                breakdown={stat.tooltip.breakdown}
                trend={stat.tooltip.trend}
              >
                <motion.div
                  whileHover={{ scale: 1.05, y: -4 }}
                  transition={{ type: "spring", stiffness: 300, damping: 20 }}
                  className="glass-premium metric-card card-hover magnetic cursor-pointer rounded-2xl p-6"
                >
                  <p className={cn("mono text-2xl font-bold", stat.accent)}>{stat.value}</p>
                  <p className="label mt-2 text-text-tertiary">{stat.label}</p>
                </motion.div>
              </MetricTooltip>
            ))}
          </motion.div>
        </motion.div>
      </section>
      <RequestAccessModal open={isRequestOpen} onClose={() => setIsRequestOpen(false)} />
    </>
  );
}
