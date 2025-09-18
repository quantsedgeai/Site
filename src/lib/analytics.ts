type AnalyticsPayload = Record<string, unknown>;

const ANALYTICS_ENDPOINT = process.env.NEXT_PUBLIC_ANALYTICS_ENDPOINT;
const ANALYTICS_KEY = process.env.NEXT_PUBLIC_ANALYTICS_KEY;

const getSessionId = () => {
  if (typeof window === "undefined") return "server";
  const storageKey = "quantsedge:session";
  let sessionId = window.sessionStorage.getItem(storageKey);
  if (!sessionId) {
    sessionId =
      typeof crypto !== "undefined" && "randomUUID" in crypto
        ? crypto.randomUUID()
        : Math.random().toString(36).slice(2);
    window.sessionStorage.setItem(storageKey, sessionId);
  }
  return sessionId;
};

const buildEnvelope = (event: string, payload: AnalyticsPayload = {}) => {
  if (typeof window === "undefined") return null;
  const timestamp = new Date().toISOString();
  const basePayload = {
    event,
    timestamp,
    sessionId: getSessionId(),
    path: window.location.pathname,
    search: window.location.search,
    referrer: document.referrer || null,
    userAgent: navigator.userAgent,
    timezone: Intl.DateTimeFormat().resolvedOptions().timeZone,
    language: navigator.language,
  };

  return { ...basePayload, ...payload };
};

const send = (event: string, payload?: AnalyticsPayload) => {
  const envelope = buildEnvelope(event, payload);
  if (!envelope || typeof window === "undefined") return;

  if (!ANALYTICS_ENDPOINT || !ANALYTICS_KEY) {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.debug("[analytics]", event, envelope);
    }
    return;
  }

  const body = JSON.stringify({ key: ANALYTICS_KEY, ...envelope });

  if (navigator.sendBeacon) {
    navigator.sendBeacon(ANALYTICS_ENDPOINT, body);
    return;
  }

  fetch(ANALYTICS_ENDPOINT, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body,
    keepalive: true,
  }).catch(() => {
    if (process.env.NODE_ENV !== "production") {
      // eslint-disable-next-line no-console
      console.warn("[analytics] fallback delivery failed", event);
    }
  });
};

export const analytics = {
  track: send,
  identify: (traits: AnalyticsPayload) => send("identify", traits),
  userProperties: (properties: AnalyticsPayload) => send("user_properties", properties),
};
