"use client";

import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

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

  const sparklineBounds = useMemo(() => ({ width: 72, height: 30 }), []);

  const buildSparklinePath = (values: number[]) => {
    if (!values.length) return "";
    const { width, height } = sparklineBounds;
    const max = Math.max(...values);
    const min = Math.min(...values);
    const range = max - min || 1;
    const step = values.length > 1 ? width / (values.length - 1) : 0;

    return values
      .map((value, index) => {
        const x = step * index;
        const y = height - ((value - min) / range) * height;
        const command = index === 0 ? "M" : "L";
        return `${command}${x.toFixed(2)},${Number.isFinite(y) ? y.toFixed(2) : (height / 2).toFixed(2)}`;
      })
      .join(" ");
  };

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
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="mono text-3xl font-semibold text-text-primary">{metric.value}</p>
                  <p className="mt-2 text-sm text-text-secondary">{metric.label}</p>
                </div>
                <div className="relative rounded-xl bg-white/5 p-2 text-accent shadow-[0_6px_24px_rgba(16,185,129,0.15)]">
                  <svg
                    width={sparklineBounds.width}
                    height={sparklineBounds.height}
                    viewBox={`0 0 ${sparklineBounds.width} ${sparklineBounds.height}`}
                    fill="none"
                    aria-hidden="true"
                    className="block"
                  >
                    <path
                      d={buildSparklinePath(metric.trend)}
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinejoin="round"
                      strokeLinecap="round"
                    />
                    {metric.trend.length > 0 &&
                      (() => {
                        const { width, height } = sparklineBounds;
                        const max = Math.max(...metric.trend);
                        const min = Math.min(...metric.trend);
                        const range = max - min || 1;
                        const last = metric.trend[metric.trend.length - 1];
                        const step =
                          metric.trend.length > 1 ? width / (metric.trend.length - 1) : 0;
                        const cx = step * (metric.trend.length - 1);
                        const cy = height - ((last - min) / range) * height;
                        return (
                          <circle
                            cx={cx}
                            cy={Number.isFinite(cy) ? cy : height / 2}
                            r={2.5}
                            fill="currentColor"
                            opacity={0.9}
                          />
                        );
                      })()}
                  </svg>
                </div>
              </div>
              <p className="mt-4 text-xs text-green-400">{metric.badge}</p>
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
