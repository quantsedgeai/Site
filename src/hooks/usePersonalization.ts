"use client";

import { useEffect, useState } from "react";

type Region = "us" | "eu" | "apac" | "latam" | "global";

interface Personalization {
  region: Region;
  locale: string;
  timezone: string;
  localTime: string;
  greeting: string;
}

const regionFromLocale = (locale: string): Region => {
  if (!locale) return "global";
  const normalized = locale.toLowerCase();

  if (normalized.includes("en-us") || normalized.includes("es-us")) return "us";
  if (normalized.includes("pt-br") || normalized.includes("es-")) return "latam";
  if (normalized.includes("en-gb") || normalized.includes("fr") || normalized.includes("de") || normalized.includes("it") || normalized.includes("es")) return "eu";
  if (normalized.includes("zh") || normalized.includes("ja") || normalized.includes("ko") || normalized.includes("en-au") || normalized.includes("en-nz")) return "apac";
  return "global";
};

const greetingFromHour = (hour: number) => {
  if (hour >= 5 && hour < 12) return "Good morning";
  if (hour >= 12 && hour < 17) return "Good afternoon";
  if (hour >= 17 && hour < 22) return "Good evening";
  return "Trading late?";
};

export function usePersonalization(): Personalization {
  const [personalization, setPersonalization] = useState<Personalization>({
    region: "global",
    locale: "en-US",
    timezone: "UTC",
    localTime: "--:--",
    greeting: "Welcome back",
  });

  useEffect(() => {
    if (typeof window === "undefined") return;

    const locale = navigator.language || "en-US";
    const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone || "UTC";
    const now = new Date();
    const formatter = new Intl.DateTimeFormat(locale, {
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
      timeZone: timezone,
    });
    const localTime = formatter.format(now);
    const hourFormatter = new Intl.DateTimeFormat(locale, {
      hour: "numeric",
      hour12: false,
      timeZone: timezone,
    });
    const hour = parseInt(hourFormatter.format(now), 10);

    setPersonalization({
      region: regionFromLocale(locale),
      locale,
      timezone,
      localTime,
      greeting: greetingFromHour(hour),
    });
  }, []);

  return personalization;
}
