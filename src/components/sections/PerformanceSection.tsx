"use client";

import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useRef, useState } from "react";

import type { PerformanceMetric } from "@/lib/content";
import { PERFORMANCE_METRICS } from "@/lib/content";

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

const TradingChart = dynamic(
  () => import("@/components/TradingChart").then((mod) => mod.TradingChart),
  {
    ssr: false,
    loading: () => (
      <div className="glass rounded-3xl border border-white/10 p-10 text-center text-sm text-text-secondary">
        Loading performance chart…
      </div>
    ),
  }
);

export function PerformanceSection() {
  const chartRef = useRef<HTMLDivElement>(null);
  const isChartInView = useInView(chartRef, { once: true, margin: "0px 0px -120px 0px" });
  const [enableChart, setEnableChart] = useState(false);

  useEffect(() => {
    if (window.innerWidth >= 768) {
      setEnableChart(true);
    }
  }, []);

  return (
    <section id="performance" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="label mb-4 text-accent">Performance & Control</p>
          <h2 className="display mb-4 text-4xl sm:text-5xl lg:text-display-md">
            The numbers traders watch before sizing up
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Live fill quality, risk envelope, and capital efficiency metrics stream straight from
            Hyperliquid so you can scale positions with conviction.
          </p>
        </div>

        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-text-tertiary">Desk Snapshot</p>
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {PERFORMANCE_METRICS.map((metric: PerformanceMetric) => (
            <motion.div
              key={metric.label}
              variants={cardVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className="glass rounded-2xl border border-white/10 p-6"
            >
              <p className="mono text-3xl font-semibold text-text-primary">{metric.value}</p>
              <p className="mt-2 text-sm text-text-secondary">{metric.label}</p>
              <p className="mt-3 text-xs text-green-400">{metric.badge}</p>
            </motion.div>
          ))}
        </div>

        <div ref={chartRef}>
          {enableChart && isChartInView ? (
            <TradingChart />
          ) : (
            <div className="glass rounded-3xl border border-white/10 p-10 text-center text-sm text-text-secondary">
              Performance chart unlocks on larger screens.
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
