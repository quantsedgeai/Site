"use client";

import Lenis from "lenis";
import type { ReactNode } from "react";
import { useEffect } from "react";

interface SmoothScrollProps {
  children: ReactNode;
}

export function SmoothScroll({ children }: SmoothScrollProps) {
  useEffect(() => {
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const isDesktop = window.innerWidth >= 1024;
    const reduceMotion = mediaQuery.matches;

    if (!isDesktop || reduceMotion) {
      return undefined;
    }

    const lenis = new Lenis({
      duration: 1,
      easing: (t: number) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let rafId: number;

    const raf = (time: number) => {
      lenis.raf(time);
      rafId = requestAnimationFrame(raf);
    };

    rafId = requestAnimationFrame(raf);

    const handleChange = () => {
      if (mediaQuery.matches) {
        cancelAnimationFrame(rafId);
        lenis.destroy();
      }
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      cancelAnimationFrame(rafId);
      mediaQuery.removeEventListener("change", handleChange);
      lenis.destroy();
    };
  }, []);

  return <>{children}</>;
}
