import { useScroll, useTransform, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef, useState } from "react";

interface ScrollVelocityOptions {
  threshold?: number;
  smoothing?: number;
  maxVelocity?: number;
}

export function useScrollVelocity({
  threshold = 5,
  smoothing = 0.1,
  maxVelocity = 50,
}: ScrollVelocityOptions = {}) {
  const { scrollY } = useScroll();
  const [velocity, setVelocity] = useState(0);
  const [direction, setDirection] = useState<"up" | "down" | "idle">("idle");
  const [isScrolling, setIsScrolling] = useState(false);

  const prevScrollY = useRef(0);
  const scrollTimeout = useRef<NodeJS.Timeout>();

  useEffect(() => {
    const unsubscribe = scrollY.on("change", (latest) => {
      const delta = latest - prevScrollY.current;
      const currentVelocity = Math.abs(delta);

      // Smooth velocity calculation
      setVelocity((prev) => {
        const smoothedVelocity = prev + (currentVelocity - prev) * smoothing;
        return Math.min(smoothedVelocity, maxVelocity);
      });

      // Determine scroll direction
      if (Math.abs(delta) > threshold) {
        setDirection(delta > 0 ? "down" : "up");
        setIsScrolling(true);

        // Clear existing timeout
        if (scrollTimeout.current) {
          clearTimeout(scrollTimeout.current);
        }

        // Set scroll idle timeout
        scrollTimeout.current = setTimeout(() => {
          setIsScrolling(false);
          setDirection("idle");
          setVelocity(0);
        }, 150);
      }

      prevScrollY.current = latest;
    });

    return () => {
      unsubscribe();
      if (scrollTimeout.current) {
        clearTimeout(scrollTimeout.current);
      }
    };
  }, [scrollY, threshold, smoothing, maxVelocity]);

  return {
    velocity,
    direction,
    isScrolling,
    scrollY,
  };
}

// Enhanced scroll animations based on velocity
export function useVelocityAnimations() {
  const { velocity, direction, isScrolling } = useScrollVelocity();
  const smoothVelocity = useSpring(useMotionValue(velocity), {
    stiffness: 100,
    damping: 30,
  });

  // Transform velocity into animation values
  const backgroundOffset = useTransform(
    smoothVelocity,
    [0, 30],
    direction === "down" ? [0, -20] : [0, 20]
  );

  const cardScale = useTransform(smoothVelocity, [0, 20], [1, 0.98]);

  const textBlur = useTransform(smoothVelocity, [0, 25], [0, 0.5]);

  const parallaxSlow = useTransform(
    smoothVelocity,
    [0, 30],
    direction === "down" ? [0, -5] : [0, 5]
  );

  const parallaxMedium = useTransform(
    smoothVelocity,
    [0, 30],
    direction === "down" ? [0, -10] : [0, 10]
  );

  const parallaxFast = useTransform(
    smoothVelocity,
    [0, 30],
    direction === "down" ? [0, -15] : [0, 15]
  );

  return {
    velocity,
    direction,
    isScrolling,
    animations: {
      backgroundOffset,
      cardScale,
      textBlur,
      parallaxSlow,
      parallaxMedium,
      parallaxFast,
    },
  };
}
