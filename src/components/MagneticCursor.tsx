"use client";

import { motion, useMotionValue, useSpring, AnimatePresence } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface CursorState {
  x: number;
  y: number;
  isHovering: boolean;
  hoverType: "default" | "button" | "link" | "chart";
}

export function MagneticCursor() {
  const [isDesktop, setIsDesktop] = useState(false);
  const [cursorState, setCursorState] = useState<CursorState>({
    x: 0,
    y: 0,
    isHovering: false,
    hoverType: "default",
  });

  useCursorHide(isDesktop);
  const cursorRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  // Smooth spring animation for cursor
  const springConfig = { damping: 25, stiffness: 700, mass: 0.5 };
  const cursorX = useSpring(x, springConfig);
  const cursorY = useSpring(y, springConfig);

  useEffect(() => {
    const checkDevice = () => {
      setIsDesktop(window.innerWidth > 768);
    };

    checkDevice();
    window.addEventListener("resize", checkDevice);

    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  useEffect(() => {
    if (!isDesktop) {
      return undefined;
    }

    const handlePointerMove = (event: MouseEvent) => {
      const target = event.target as HTMLElement | null;

      x.set(event.clientX);
      y.set(event.clientY);

      let hoverType: CursorState["hoverType"] = "default";
      if (target?.closest("button, .btn")) {
        hoverType = "button";
      } else if (target?.closest("a, .nav-link")) {
        hoverType = "link";
      } else if (target?.closest(".trading-chart, .chart-container")) {
        hoverType = "chart";
      }

      setCursorState({
        x: event.clientX,
        y: event.clientY,
        isHovering: hoverType !== "default",
        hoverType,
      });
    };

    const handlePointerLeave = () => {
      setCursorState((prev) => ({ ...prev, isHovering: false, hoverType: "default" }));
    };

    document.addEventListener("mousemove", handlePointerMove, { passive: true });
    document.addEventListener("mouseleave", handlePointerLeave);

    return () => {
      document.removeEventListener("mousemove", handlePointerMove);
      document.removeEventListener("mouseleave", handlePointerLeave);
    };
  }, [isDesktop, x, y]);

  // Custom cursor variants
  const getCursorVariant = () => {
    switch (cursorState.hoverType) {
      case "button":
        return {
          scale: 2.5,
          backgroundColor: "rgba(0, 255, 198, 0.8)",
          border: "2px solid #00FFC6",
        };
      case "link":
        return {
          scale: 1.8,
          backgroundColor: "transparent",
          border: "2px solid #00FFC6",
        };
      case "chart":
        return {
          scale: 1.5,
          backgroundColor: "rgba(0, 255, 198, 0.3)",
          border: "1px solid #00FFC6",
        };
      default:
        return {
          scale: 1,
          backgroundColor: "#00FFC6",
          border: "none",
        };
    }
  };

  return (
    <div className={isDesktop ? "block" : "hidden"}>
      <motion.div
        ref={cursorRef}
        className="pointer-events-none fixed z-[9999] rounded-full mix-blend-difference"
        style={{
          x: cursorX,
          y: cursorY,
          width: 10,
          height: 10,
          left: -5,
          top: -5,
        }}
        animate={getCursorVariant()}
        transition={{ type: "spring", stiffness: 500, damping: 28 }}
      />

      <AnimatePresence>
        {cursorState.isHovering && (
          <motion.div
            className="pointer-events-none fixed z-[9998] rounded-full border border-accent/30"
            style={{
              x: cursorX,
              y: cursorY,
              width: 40,
              height: 40,
              left: -20,
              top: -20,
            }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 400, damping: 25 }}
          />
        )}
      </AnimatePresence>

      {/* Trailing particles */}
      <AnimatePresence>
        {cursorState.hoverType === "button" && (
          <motion.div
            className="pointer-events-none fixed z-[9997]"
            style={{
              x: cursorX,
              y: cursorY,
              left: -2,
              top: -2,
            }}
          >
            {[...Array(3)].map((_, i) => (
              <motion.div
                key={i}
                className="absolute size-1 rounded-full bg-accent"
                initial={{ scale: 0, opacity: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  opacity: [0, 1, 0],
                  x: Math.random() * 40 - 20,
                  y: Math.random() * 40 - 20,
                }}
                transition={{
                  duration: 1,
                  repeat: Infinity,
                  delay: i * 0.2,
                }}
              />
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// Custom hook to hide default cursor
export function useCursorHide(enabled: boolean) {
  useEffect(() => {
    if (!enabled) {
      document.body.style.cursor = "auto";
      return undefined;
    }

    const applyCursor = () => {
      if (window.innerWidth > 768) {
        document.body.style.cursor = "none";
      } else {
        document.body.style.cursor = "auto";
      }
    };

    applyCursor();
    window.addEventListener("resize", applyCursor);

    return () => {
      document.body.style.cursor = "auto";
      window.removeEventListener("resize", applyCursor);
    };
  }, [enabled]);
}
