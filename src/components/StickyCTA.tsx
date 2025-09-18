"use client";

import { motion } from "framer-motion";
import { REQUEST_ACCESS_EVENT } from "@/lib/constants";

export function StickyCTA() {
  const handleClick = () => {
    if (typeof window !== "undefined") {
      window.dispatchEvent(new Event(REQUEST_ACCESS_EVENT));
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 1.2, duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="fixed bottom-6 right-6 z-40 hidden md:flex"
    >
      <button
        onClick={handleClick}
        className="group inline-flex items-center gap-3 rounded-2xl border border-white/10 bg-black/70 px-5 py-3 text-sm text-text-secondary backdrop-blur-xl shadow-[0_18px_60px_-30px_rgba(16,185,129,0.7)] hover:border-accent/40 hover:text-text-primary transition"
        type="button"
      >
        <span className="relative flex h-2 w-2">
          <span className="absolute inline-flex h-full w-full rounded-full bg-accent opacity-60 animate-ping" />
          <span className="relative inline-flex h-2 w-2 rounded-full bg-accent" />
        </span>
        <span className="font-semibold text-text-primary">Request Access</span>
        <span className="text-xs uppercase tracking-[0.3em] text-text-tertiary group-hover:text-accent">Live</span>
      </button>
    </motion.div>
  );
}
