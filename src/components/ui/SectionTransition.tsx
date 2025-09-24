"use client";

import { motion, useInView } from "framer-motion";
import { useRef, type ReactNode } from "react";

interface SectionTransitionProps {
  children: ReactNode;
  className?: string;
  variant?: "default" | "fade" | "slide" | "scale" | "blur";
  triggerOnce?: boolean;
  threshold?: number;
  delay?: number;
}

export function SectionTransition({
  children,
  className = "",
  variant = "default",
  triggerOnce = true,
  threshold = 0.1,
  delay = 0,
}: SectionTransitionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: triggerOnce, amount: threshold });

  const getVariantAnimation = () => {
    const baseDelay = delay;

    switch (variant) {
      case "fade":
        return {
          initial: { opacity: 0 },
          animate: { opacity: isInView ? 1 : 0 },
          transition: { duration: 0.8, delay: baseDelay, ease: [0.4, 0, 0.2, 1] },
        };

      case "slide":
        return {
          initial: { opacity: 0, y: 60 },
          animate: {
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 60,
          },
          transition: {
            duration: 0.8,
            delay: baseDelay,
            ease: [0.4, 0, 0.2, 1],
          },
        };

      case "scale":
        return {
          initial: { opacity: 0, scale: 0.8 },
          animate: {
            opacity: isInView ? 1 : 0,
            scale: isInView ? 1 : 0.8,
          },
          transition: {
            duration: 0.8,
            delay: baseDelay,
            type: "spring",
            stiffness: 100,
            damping: 15,
          },
        };

      case "blur":
        return {
          initial: { opacity: 0, filter: "blur(10px)" },
          animate: {
            opacity: isInView ? 1 : 0,
            filter: isInView ? "blur(0px)" : "blur(10px)",
          },
          transition: {
            duration: 1,
            delay: baseDelay,
            ease: [0.4, 0, 0.2, 1],
          },
        };

      default:
        return {
          initial: { opacity: 0, y: 30 },
          animate: {
            opacity: isInView ? 1 : 0,
            y: isInView ? 0 : 30,
          },
          transition: {
            duration: 0.6,
            delay: baseDelay,
            ease: [0.4, 0, 0.2, 1],
          },
        };
    }
  };

  const animation = getVariantAnimation();

  return (
    <motion.div ref={ref} className={className} {...animation}>
      {children}
    </motion.div>
  );
}

// Staggered children animation
export function StaggeredSection({
  children,
  className = "",
  staggerDelay = 0.1,
  childVariant = "slide",
}: {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  childVariant?: "fade" | "slide" | "scale";
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: 0.1 });

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: staggerDelay,
      },
    },
  };

  const itemVariants = {
    fade: {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
      },
    },
    slide: {
      hidden: { opacity: 0, y: 20 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.6, ease: [0.4, 0, 0.2, 1] },
      },
    },
    scale: {
      hidden: { opacity: 0, scale: 0.8 },
      visible: {
        opacity: 1,
        scale: 1,
        transition: { duration: 0.6, type: "spring", stiffness: 100, damping: 15 },
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      variants={containerVariants}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      className={className}
    >
      {Array.isArray(children) ? (
        children.map((child, index) => (
          <motion.div key={index} variants={itemVariants[childVariant]}>
            {child}
          </motion.div>
        ))
      ) : (
        <motion.div variants={itemVariants[childVariant]}>{children}</motion.div>
      )}
    </motion.div>
  );
}
