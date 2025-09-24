// Performance monitoring utilities
export interface PerformanceMetrics {
  fcp: number; // First Contentful Paint
  lcp: number; // Largest Contentful Paint
  fid: number; // First Input Delay
  cls: number; // Cumulative Layout Shift
  ttfb: number; // Time to First Byte
}

export class PerformanceMonitor {
  private metrics: Partial<PerformanceMetrics> = {};
  private observers: PerformanceObserver[] = [];

  constructor() {
    if (typeof window !== "undefined") {
      this.initializeObservers();
      this.measureTTFB();
    }
  }

  private initializeObservers() {
    try {
      // Largest Contentful Paint
      const lcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        const lastEntry = entries[entries.length - 1] as PerformanceEntry & {
          renderTime?: number;
          loadTime?: number;
        };
        this.metrics.lcp = lastEntry.renderTime || lastEntry.loadTime || 0;
      });
      lcpObserver.observe({ entryTypes: ["largest-contentful-paint"] });
      this.observers.push(lcpObserver);

      // First Input Delay
      const fidObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          const fidEntry = entry as PerformanceEntry & { processingStart: number };
          this.metrics.fid = fidEntry.processingStart - entry.startTime;
        });
      });
      fidObserver.observe({ entryTypes: ["first-input"] });
      this.observers.push(fidObserver);

      // Cumulative Layout Shift
      let clsValue = 0;
      const clsObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          const clsEntry = entry as PerformanceEntry & { hadRecentInput: boolean; value: number };
          if (!clsEntry.hadRecentInput) {
            clsValue += clsEntry.value;
            this.metrics.cls = clsValue;
          }
        });
      });
      clsObserver.observe({ entryTypes: ["layout-shift"] });
      this.observers.push(clsObserver);

      // First Contentful Paint
      const fcpObserver = new PerformanceObserver((entryList) => {
        const entries = entryList.getEntries();
        entries.forEach((entry) => {
          if (entry.name === "first-contentful-paint") {
            this.metrics.fcp = entry.startTime;
          }
        });
      });
      fcpObserver.observe({ entryTypes: ["paint"] });
      this.observers.push(fcpObserver);
    } catch (error) {
      console.warn("Performance monitoring not supported:", error);
    }
  }

  private measureTTFB() {
    try {
      const navigation = performance.getEntriesByType(
        "navigation"
      )[0] as PerformanceNavigationTiming;
      if (navigation) {
        this.metrics.ttfb = navigation.responseStart - navigation.fetchStart;
      }
    } catch (error) {
      console.warn("TTFB measurement failed:", error);
    }
  }

  public getMetrics(): Partial<PerformanceMetrics> {
    return { ...this.metrics };
  }

  public logMetrics() {
    if (process.env.NODE_ENV === "development") {
      // eslint-disable-next-line no-console
      console.group("🚀 Performance Metrics");
      // eslint-disable-next-line no-console
      console.table(this.metrics);
      // eslint-disable-next-line no-console
      console.groupEnd();
    }
  }

  public getPerformanceScore(): number {
    const { fcp = 0, lcp = 0, fid = 0, cls = 0, ttfb = 0 } = this.metrics;

    // Score calculation based on Core Web Vitals
    let score = 100;

    // LCP scoring (< 2.5s = good)
    if (lcp > 4000) score -= 30;
    else if (lcp > 2500) score -= 15;

    // FID scoring (< 100ms = good)
    if (fid > 300) score -= 25;
    else if (fid > 100) score -= 10;

    // CLS scoring (< 0.1 = good)
    if (cls > 0.25) score -= 25;
    else if (cls > 0.1) score -= 10;

    // FCP scoring (< 1.8s = good)
    if (fcp > 3000) score -= 15;
    else if (fcp > 1800) score -= 7;

    // TTFB scoring (< 600ms = good)
    if (ttfb > 1500) score -= 10;
    else if (ttfb > 600) score -= 5;

    return Math.max(0, score);
  }

  public reportToAnalytics() {
    const metrics = this.getMetrics();
    const score = this.getPerformanceScore();

    // Send to analytics service (example)
    if (typeof window !== "undefined" && "gtag" in window) {
      const gtag = (window as typeof window & { gtag: (...args: unknown[]) => void }).gtag;
      gtag("event", "performance_metrics", {
        custom_map: { metric1: "lcp", metric2: "fid", metric3: "cls" },
        metric1: metrics.lcp,
        metric2: metrics.fid,
        metric3: metrics.cls,
        value: score,
      });
    }

    return { metrics, score };
  }

  public destroy() {
    this.observers.forEach((observer) => observer.disconnect());
    this.observers = [];
  }
}

// Utility functions for performance optimization
export function preloadCriticalResources() {
  const criticalImages = [
    "/images/team-harrison.jpg",
    "/images/team-dmitry.jpg",
    "/images/team-dan.jpg",
  ];

  criticalImages.forEach((src) => {
    const link = document.createElement("link");
    link.rel = "preload";
    link.as = "image";
    link.href = src;
    document.head.appendChild(link);
  });
}

export function optimizeForInteraction() {
  // Reduce animation duration for slower devices
  const isSlowDevice = navigator.hardwareConcurrency && navigator.hardwareConcurrency <= 2;

  if (isSlowDevice) {
    document.documentElement.style.setProperty("--animation-duration", "0.3s");
    document.documentElement.style.setProperty("--transition-duration", "0.2s");
  }

  // Respect reduced motion preference
  const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  if (prefersReducedMotion) {
    document.documentElement.style.setProperty("--animation-duration", "0.1s");
    document.documentElement.style.setProperty("--transition-duration", "0.1s");
  }
}

export function measureResourceTiming(resourceName: string) {
  const resources = performance.getEntriesByName(resourceName);
  if (resources.length > 0) {
    const resource = resources[0] as PerformanceResourceTiming;
    return {
      duration: resource.duration,
      size: resource.transferSize,
      cached: resource.transferSize === 0,
    };
  }
  return null;
}

// Global performance monitor instance
export const performanceMonitor = typeof window !== "undefined" ? new PerformanceMonitor() : null;

// Development helpers
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
  // Auto-log metrics after page load
  window.addEventListener("load", () => {
    setTimeout(() => {
      performanceMonitor?.logMetrics();
    }, 2000);
  });

  // Add global access for debugging
  (window as typeof window & { perfMonitor: PerformanceMonitor | null }).perfMonitor =
    performanceMonitor;
}
