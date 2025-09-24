"use client";

import { useInView } from "framer-motion";
import { useState, useEffect, useRef, Suspense, type ReactNode, type ComponentType } from "react";

interface LazySectionProps {
  children?: ReactNode;
  fallback?: ReactNode;
  threshold?: number;
  className?: string;
}

interface LazyComponentProps<T extends Record<string, unknown> = Record<string, unknown>> {
  component: () => Promise<{ default: ComponentType<T> }>;
  props?: T;
  fallback?: ReactNode;
  threshold?: number;
  className?: string;
}

// Intersection Observer based lazy section wrapper
export function LazySection({
  children,
  fallback = <div className="min-h-[400px] animate-pulse rounded-xl bg-white/5" />,
  threshold = 0.1,
  className = "",
}: LazySectionProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const [shouldRender, setShouldRender] = useState(false);

  useEffect(() => {
    if (isInView) {
      // Small delay to ensure smooth loading
      const timeout = setTimeout(() => setShouldRender(true), 50);
      return () => clearTimeout(timeout);
    }
  }, [isInView]);

  return (
    <div ref={ref} className={className}>
      {shouldRender ? children : fallback}
    </div>
  );
}

// Dynamic import based lazy component wrapper
export function LazyComponent<T extends Record<string, unknown> = Record<string, unknown>>({
  component,
  props = {} as T,
  fallback = <div className="min-h-[400px] animate-pulse rounded-xl bg-white/5" />,
  threshold = 0.1,
  className = "",
}: LazyComponentProps<T>) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const [LazyLoadedComponent, setLazyLoadedComponent] = useState<ComponentType<T> | null>(null);

  useEffect(() => {
    if (isInView && !LazyLoadedComponent) {
      component()
        .then((module) => {
          setLazyLoadedComponent(() => module.default);
        })
        .catch((error) => {
          console.warn("Failed to load lazy component:", error);
        });
    }
  }, [isInView, component, LazyLoadedComponent]);

  return (
    <div ref={ref} className={className}>
      {LazyLoadedComponent ? (
        <Suspense fallback={fallback}>
          <LazyLoadedComponent {...props} />
        </Suspense>
      ) : (
        fallback
      )}
    </div>
  );
}

// Preload utility for critical components
export function preloadComponent(
  componentImport: () => Promise<{ default: ComponentType<unknown> }>
) {
  // Start loading the component without mounting it
  componentImport().catch(() => {
    // Silently handle preload failures
  });
}

// Hook for intersection-based loading
export function useIntersectionLoader(threshold = 0.1) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, amount: threshold });
  const [shouldLoad, setShouldLoad] = useState(false);

  useEffect(() => {
    if (isInView && !shouldLoad) {
      // Micro delay for smooth user experience
      requestAnimationFrame(() => setShouldLoad(true));
    }
  }, [isInView, shouldLoad]);

  return { ref, shouldLoad };
}
