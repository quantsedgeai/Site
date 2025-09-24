"use client";

import { motion, useInView } from "framer-motion";
import dynamic from "next/dynamic";
import { useEffect, useMemo, useRef, useState } from "react";

import { MetricTooltip } from "@/components/ui/Tooltip";
import { useVelocityAnimations } from "@/hooks/useScrollVelocity";
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
  const { animations } = useVelocityAnimations();

  // Enhanced metric data with detailed breakdowns
  const enhancedMetrics = PERFORMANCE_METRICS.map((metric) => ({
    ...metric,
    tooltip: getMetricTooltipData(metric.label, metric.value, metric.badge),
  }));

  function getMetricTooltipData(label: string, value: string, badge: string) {
    switch (label) {
      case "Model Sharpe (24M)":
        return {
          value,
          breakdown: [
            { label: "Returns", value: "18.2%", color: "#00FFC6" },
            { label: "Volatility", value: "7.8%", color: "#60A5FA" },
            { label: "Risk-Free Rate", value: "5.1%", color: "#C084FC" },
          ],
          trend: badge,
        };
      case "Live Win Rate":
        return {
          value,
          breakdown: [
            { label: "Long Positions", value: "59.1%", color: "#00FFC6" },
            { label: "Short Positions", value: "55.7%", color: "#F59E0B" },
            { label: "Neutral Strategies", value: "61.2%", color: "#60A5FA" },
          ],
          trend: badge,
        };
      case "Peak Drawdown":
        return {
          value,
          breakdown: [
            { label: "Duration", value: "12 days", color: "#F59E0B" },
            { label: "Recovery Time", value: "8 days", color: "#00FFC6" },
            { label: "Max Daily Loss", value: "-2.1%", color: "#EF4444" },
          ],
          trend: badge,
        };
      case "Average Leverage":
        return {
          value,
          breakdown: [
            { label: "ETH Perps", value: "8.2x", color: "#00FFC6" },
            { label: "BTC Perps", value: "6.8x", color: "#F59E0B" },
            { label: "Alt Perps", value: "7.5x", color: "#60A5FA" },
          ],
          trend: badge,
        };
      default:
        return {
          value,
          breakdown: [{ label: "Current", value, color: "#00FFC6" }],
          trend: badge,
        };
    }
  }

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
            Numbers that matter before you size up
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Live fill quality, risk metrics, and capital efficiency stream straight from Hyperliquid
            so you can scale with confidence.
          </p>
        </div>

        <p className="mb-4 text-xs uppercase tracking-[0.35em] text-text-tertiary">Live Metrics</p>
        <div className="mb-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {enhancedMetrics.map((metric) => (
            <MetricTooltip
              key={metric.label}
              value={metric.tooltip.value}
              breakdown={metric.tooltip.breakdown}
              trend={metric.tooltip.trend}
            >
              <motion.div
                variants={cardVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                whileHover={{ scale: 1.02, y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="glass-premium metric-card magnetic group cursor-pointer rounded-2xl p-6"
                style={{ scale: animations.cardScale }}
                onHoverStart={() => {}}
                onHoverEnd={() => {}}
              >
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <p className="mono text-3xl font-semibold text-text-primary">{metric.value}</p>
                    <p className="mt-2 text-sm text-text-secondary">{metric.label}</p>
                  </div>
                  <div className="relative rounded-xl bg-white/5 p-2 text-accent shadow-[0_6px_24px_rgba(16,185,129,0.15)] transition-all duration-300 group-hover:shadow-[0_12px_36px_rgba(16,185,129,0.25)]">
                    <svg
                      width={sparklineBounds.width}
                      height={sparklineBounds.height}
                      viewBox={`0 0 ${sparklineBounds.width} ${sparklineBounds.height}`}
                      fill="none"
                      aria-hidden="true"
                      className="block transition-transform duration-300 group-hover:scale-105"
                    >
                      <defs>
                        <filter id={`glow-${metric.label.replace(/\s/g, "-")}`}>
                          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
                          <feMerge>
                            <feMergeNode in="coloredBlur" />
                            <feMergeNode in="SourceGraphic" />
                          </feMerge>
                        </filter>
                      </defs>
                      <path
                        d={buildSparklinePath(metric.trend)}
                        stroke="currentColor"
                        strokeWidth={2}
                        strokeLinejoin="round"
                        strokeLinecap="round"
                        className="transition-all duration-300 group-hover:drop-shadow-[0_0_8px_rgba(16,185,129,0.6)]"
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
                <p className="mt-4 text-xs text-green-400 transition-colors duration-300 group-hover:text-accent">
                  {metric.badge}
                </p>
              </motion.div>
            </MetricTooltip>
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
