"use client";

import { useEffect, useMemo, useState } from "react";
import { Area, AreaChart, ResponsiveContainer } from "recharts";

interface HeroChartPoint {
  idx: number;
  value: number;
}

function useHeroChartData(isActive: boolean) {
  const [data, setData] = useState<HeroChartPoint[]>([]);

  useEffect(() => {
    const seed: HeroChartPoint[] = Array.from({ length: 48 }, (_, idx) => ({
      idx,
      value: 12 + Math.sin(idx / 4) * 3 + Math.random() * 0.8,
    }));
    setData(seed);
  }, []);

  useEffect(() => {
    if (!isActive) return;

    const id = window.setInterval(() => {
      setData((prev) =>
        prev.map((point, index) =>
          index === prev.length - 1
            ? {
                ...point,
                value: Math.max(8, Math.min(18, point.value + (Math.random() - 0.5) * 1.2)),
              }
            : point
        )
      );
    }, 1800);

    return () => window.clearInterval(id);
  }, [isActive]);

  const stats = useMemo(() => {
    if (!data.length) return { value: 0, drift: 0 };
    const latest = data[data.length - 1].value;
    const base = data[0].value;
    return {
      value: latest,
      drift: latest - base,
    };
  }, [data]);

  return { data, stats };
}

interface HeroChartProps {
  active: boolean;
}

export function HeroChart({ active }: HeroChartProps) {
  const { data, stats } = useHeroChartData(active);

  if (!active) {
    return (
      <div className="flex h-full items-center justify-center rounded-[28px] border border-white/10 bg-black/50 p-10 text-center text-sm text-text-secondary">
        Live fills and latency metrics unlock on desktop.
      </div>
    );
  }

  return (
    <div className="relative h-full">
      <div className="absolute inset-0 rounded-[28px] bg-gradient-to-br from-accent/25 via-transparent to-transparent" />
      <div className="relative h-full rounded-[28px] border border-white/10 bg-black/55 p-6 backdrop-blur-xl">
        <div className="flex items-center justify-between text-[11px] uppercase tracking-[0.3em] text-text-tertiary/80">
          <span>Live Fill Quality</span>
          <span className="rounded-full border border-white/10 px-2 py-0.5 text-[10px] tracking-[0.2em] text-text-tertiary">
            Hyperliquid SDK
          </span>
        </div>
        <div className="mt-5 grid grid-cols-2 gap-4 text-sm">
          <div>
            <p className="text-text-tertiary">Slip vs Venue</p>
            <p className="mono text-2xl font-semibold text-text-primary">
              {stats.drift >= 0 ? "+" : ""}
              {stats.drift.toFixed(2)} bps
            </p>
          </div>
          <div>
            <p className="text-text-tertiary">Latency Rolling Avg</p>
            <p className="mono text-2xl font-semibold text-accent">42 ms</p>
          </div>
        </div>
        <div className="mt-6 h-48">
          <ResponsiveContainer width="100%" height="100%">
            <AreaChart data={data} margin={{ top: 10, right: 0, left: 0, bottom: 0 }}>
              <defs>
                <linearGradient id="heroArea" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="10%" stopColor="#34d399" stopOpacity={0.6} />
                  <stop offset="90%" stopColor="#34d399" stopOpacity={0} />
                </linearGradient>
              </defs>
              <Area
                type="monotone"
                dataKey="value"
                stroke="#34d399"
                strokeWidth={2}
                fill="url(#heroArea)"
                isAnimationActive={false}
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
        <div className="mt-6 grid grid-cols-3 gap-3 text-[11px] text-text-tertiary">
          {["BTC", "SOL", "ETH"].map((symbol, idx) => (
            <div
              key={symbol}
              className="flex flex-col gap-1 rounded-2xl border border-white/5 bg-white/5 px-3 py-2"
            >
              <span className="mono text-xs text-text-secondary">{symbol}-USD</span>
              <span className="mono text-sm text-text-primary">
                {stats.value.toFixed(1)}
                {idx === 0 ? "bps" : idx === 1 ? "liq" : "ms"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
