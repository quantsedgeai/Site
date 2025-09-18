"use client";

import { useEffect } from "react";

import { analytics } from "@/lib/analytics";

export function AnalyticsProvider() {
  useEffect(() => {
    analytics.track("page_view");

    const handleVisibility = () => {
      if (document.visibilityState === "visible") {
        analytics.track("page_focus");
      }
    };

    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      const target = (event.target as HTMLElement)?.closest<HTMLElement>("[data-analytics-event]");
      if (target) {
        const eventName = target.dataset.analyticsEvent || "interaction";
        let payload = {};
        if (target.dataset.analyticsPayload) {
          try {
            payload = JSON.parse(target.dataset.analyticsPayload);
          } catch (error) {
            if (process.env.NODE_ENV !== "production") {
              // eslint-disable-next-line no-console
              console.warn("[analytics] invalid payload JSON", error);
            }
          }
        }
        analytics.track(eventName, payload);
      }
    };

    window.addEventListener("click", handleClick, { capture: true });
    return () => window.removeEventListener("click", handleClick, { capture: true });
  }, []);

  useEffect(() => {
    if (typeof window === "undefined") return;
    const locale = navigator.language;
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
    document.documentElement.dataset.locale = locale;
    document.documentElement.dataset.tz = timezone;
  }, []);

  return null;
}
