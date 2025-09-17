"use client";

import { useEffect, useRef, useState } from "react";
import { motion, useInView } from "framer-motion";

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

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24">
      {/* Background Gradient */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 1.5 }}
          className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] rounded-full bg-gradient-radial from-accent/10 to-transparent blur-3xl"
        />
      </div>

      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        className="relative max-w-6xl mx-auto text-center"
      >
        {/* Badge */}
        <motion.div variants={itemVariants} className="inline-flex items-center space-x-2 px-4 py-1.5 rounded-full glass mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400"></span>
          </span>
          <span className="label text-text-secondary">LIVE TRADING • $4.2M VOLUME TODAY</span>
        </motion.div>

        {/* Headline */}
        <motion.h1 variants={itemVariants} className="display text-6xl sm:text-7xl lg:text-display-lg mb-6">
          Institutional Alpha
          <br />
          <span className="gradient-text">Through AI</span>
        </motion.h1>

        {/* Subheadline */}
        <motion.p
          variants={itemVariants}
          className="text-lg sm:text-xl text-text-secondary max-w-2xl mx-auto mb-12"
        >
          Where sophisticated traders access battle-tested quantitative strategies. Non-custodial.
          Transparent. Profitable.
        </motion.p>

        {/* CTAs */}
        <motion.div
          variants={itemVariants}
          className="flex flex-col sm:flex-row gap-4 justify-center mb-16"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-primary px-8 py-4 rounded-xl text-base font-semibold glow"
          >
            Request Access
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="btn btn-secondary px-8 py-4 rounded-xl text-base"
          >
            View Demo →
          </motion.button>
        </motion.div>

        {/* Stats */}
        <motion.div
          variants={itemVariants}
          className="grid grid-cols-2 md:grid-cols-3 gap-6"
        >
          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass rounded-xl p-6 card-hover"
          >
            <p className="mono text-2xl font-bold text-accent">
              <AnimatedCounter end={1.2} suffix="B+" />
            </p>
            <p className="label text-text-tertiary mt-1">Volume Traded</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass rounded-xl p-6 card-hover"
          >
            <p className="mono text-2xl font-bold">
              <AnimatedCounter end={2.34} suffix="" />
            </p>
            <p className="label text-text-tertiary mt-1">Sharpe Ratio</p>
          </motion.div>

          <motion.div
            whileHover={{ scale: 1.05, y: -4 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="glass rounded-xl p-6 card-hover col-span-2 md:col-span-1"
          >
            <p className="mono text-2xl font-bold text-green-400">
              <AnimatedCounter end={99.98} suffix="%" />
            </p>
            <p className="label text-text-tertiary mt-1">Uptime</p>
          </motion.div>
        </motion.div>
      </motion.div>
    </section>
  );
}