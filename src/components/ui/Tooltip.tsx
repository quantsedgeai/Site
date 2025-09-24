"use client";

import { motion, AnimatePresence } from "framer-motion";
import type { ReactNode } from "react";
import { useRef, useState, useEffect } from "react";

interface TooltipProps {
  children: ReactNode;
  content: ReactNode;
  delay?: number;
  placement?: "top" | "bottom" | "left" | "right";
  variant?: "default" | "tech" | "metric";
  className?: string;
}

export function Tooltip({
  children,
  content,
  delay = 500,
  placement = "top",
  variant = "default",
  className = "",
}: TooltipProps) {
  const [isVisible, setIsVisible] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const timeoutRef = useRef<NodeJS.Timeout>();
  const triggerRef = useRef<HTMLDivElement>(null);

  const showTooltip = () => {
    timeoutRef.current = setTimeout(() => {
      if (triggerRef.current) {
        const rect = triggerRef.current.getBoundingClientRect();
        const scrollX = window.scrollX;
        const scrollY = window.scrollY;

        let x = rect.left + scrollX + rect.width / 2;
        let y = rect.top + scrollY;

        switch (placement) {
          case "top":
            y = rect.top + scrollY - 10;
            break;
          case "bottom":
            y = rect.bottom + scrollY + 10;
            break;
          case "left":
            x = rect.left + scrollX - 10;
            y = rect.top + scrollY + rect.height / 2;
            break;
          case "right":
            x = rect.right + scrollX + 10;
            y = rect.top + scrollY + rect.height / 2;
            break;
        }

        setPosition({ x, y });
        setIsVisible(true);
      }
    }, delay);
  };

  const hideTooltip = () => {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
    setIsVisible(false);
  };

  useEffect(() => {
    return () => {
      if (timeoutRef.current) {
        clearTimeout(timeoutRef.current);
      }
    };
  }, []);

  const variantStyles = {
    default: "glass-premium text-text-primary text-sm",
    tech: "glass-premium border-accent/20 bg-accent/5 text-accent text-sm font-mono",
    metric: "glass-premium border-blue-400/20 bg-blue-400/5 text-blue-100 text-xs",
  };

  const getTransformOrigin = () => {
    switch (placement) {
      case "top":
        return "bottom center";
      case "bottom":
        return "top center";
      case "left":
        return "right center";
      case "right":
        return "left center";
      default:
        return "center center";
    }
  };

  return (
    <>
      <span
        ref={triggerRef}
        className={`inline-block cursor-help ${className}`}
        onMouseEnter={showTooltip}
        onMouseLeave={hideTooltip}
        onFocus={showTooltip}
        onBlur={hideTooltip}
      >
        {children}
      </span>

      <AnimatePresence>
        {isVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: placement === "top" ? 10 : -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.8, y: placement === "top" ? 10 : -10 }}
            transition={{
              duration: 0.2,
              ease: [0.4, 0, 0.2, 1],
            }}
            className={`
              pointer-events-none fixed z-[100] max-w-xs rounded-xl px-3 py-2 shadow-2xl
              backdrop-blur-2xl
              ${variantStyles[variant]}
            `}
            style={{
              left: position.x,
              top: position.y,
              transform: `translate(-50%, ${placement === "top" ? "-100%" : placement === "bottom" ? "0%" : "-50%"})`,
              transformOrigin: getTransformOrigin(),
            }}
          >
            {content}

            {/* Arrow */}
            <div
              className={`
                absolute size-2 rotate-45 border border-white/5 bg-white/10
                ${placement === "top" ? "bottom-[-4px] left-1/2 -translate-x-1/2" : ""}
                ${placement === "bottom" ? "left-1/2 top-[-4px] -translate-x-1/2" : ""}
                ${placement === "left" ? "right-[-4px] top-1/2 -translate-y-1/2" : ""}
                ${placement === "right" ? "left-[-4px] top-1/2 -translate-y-1/2" : ""}
              `}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

// Technical term tooltip with definition
export function TechTooltip({
  children,
  definition,
  example,
}: {
  children: ReactNode;
  definition: string;
  example?: string;
}) {
  return (
    <Tooltip
      variant="tech"
      content={
        <div className="space-y-2">
          <div className="text-text-primary">{definition}</div>
          {example && (
            <div className="text-xs text-text-tertiary">
              <span className="text-accent">Example:</span> {example}
            </div>
          )}
        </div>
      }
    >
      <span className="border-b border-dotted border-accent/40 transition-colors hover:border-accent">
        {children}
      </span>
    </Tooltip>
  );
}

// Metric tooltip with detailed breakdown
export function MetricTooltip({
  children,
  value,
  breakdown,
  trend,
}: {
  children: ReactNode;
  value: string;
  breakdown: Array<{ label: string; value: string; color?: string }>;
  trend?: string;
}) {
  return (
    <Tooltip
      variant="metric"
      placement="top"
      content={
        <div className="min-w-[200px] space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-xs text-text-secondary">Current Value</span>
            <span className="font-mono font-semibold text-blue-100">{value}</span>
          </div>

          <div className="space-y-1.5">
            {breakdown.map((item, index) => (
              <div key={index} className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  {item.color && (
                    <div className="size-2 rounded-full" style={{ backgroundColor: item.color }} />
                  )}
                  <span className="text-text-tertiary">{item.label}</span>
                </div>
                <span className="font-mono text-text-secondary">{item.value}</span>
              </div>
            ))}
          </div>

          {trend && (
            <div className="border-t border-white/10 pt-2">
              <p className="text-xs text-text-tertiary">
                <span className="text-green-400">Trend:</span> {trend}
              </p>
            </div>
          )}
        </div>
      }
    >
      {children}
    </Tooltip>
  );
}
