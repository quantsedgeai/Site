"use client";

import { motion } from "framer-motion";

import { fadeIn } from "@/lib/motion";

export function SectionDivider({ label }: { label?: string }) {
  return (
    <motion.div
      variants={fadeIn}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      className="px-6"
    >
      <div className="mx-auto flex max-w-6xl items-center gap-3">
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="h-px flex-1 origin-center bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        />
        {label ? (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4, ease: [0.4, 0, 0.2, 1] }}
            className="rounded-full border border-white/10 bg-black/60 px-3 py-1 text-xs uppercase tracking-[0.3em] text-text-tertiary"
          >
            {label}
          </motion.span>
        ) : null}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 0.6 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
          className="h-px flex-1 origin-center bg-gradient-to-r from-transparent via-accent/40 to-transparent"
        />
      </div>
    </motion.div>
  );
}
