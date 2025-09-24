"use client";

import { motion } from "framer-motion";
import Image from "next/image";

import { TEAM } from "@/lib/content";

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
  },
};

export function TeamSection() {
  return (
    <section id="team" className="px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 text-center">
          <p className="label mb-4 text-accent">Team</p>
          <h2 className="display mb-4 text-4xl sm:text-5xl lg:text-display-md">
            Built by Veterans
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-text-secondary">
            Battle-tested builders from crypto's front lines.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              whileHover={{ scale: 1.02, y: -4 }}
              transition={{ type: "spring", stiffness: 300, damping: 20 }}
              className="magnetic touch-feedback -m-6 rounded-2xl p-6 text-center"
            >
              <div
                className={`mx-auto mb-4 size-32 overflow-hidden rounded-full ring-2 ${member.accentRing}`}
              >
                <Image
                  src={member.image}
                  alt={member.name}
                  width={128}
                  height={128}
                  className="size-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-xl font-semibold">{member.name}</h3>
              <p className="mb-2 text-sm font-medium text-accent">{member.role}</p>
              <p className="text-sm text-text-tertiary">{member.bio}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
