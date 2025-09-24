import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import Script from "next/script";

import { AnalyticsProvider } from "@/components/AnalyticsProvider";
import { SmoothScroll } from "@/components/SmoothScroll";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
  display: "swap",
});

export const metadata: Metadata = {
  title: "QuantsEdge | AI-Powered Alpha for Institutional Traders",
  description:
    "Institutional trading platform delivering 2.3+ Sharpe ratio with $1.2B+ volume. Non-custodial AI strategies for sophisticated funds and family offices.",
  keywords: ["quantsedge", "trading", "ai", "cryptocurrency", "defi", "institutional"],
  authors: [{ name: "QuantsEdge" }],
  creator: "QuantsEdge",
  metadataBase: new URL("https://quantsedge.ai"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://quantsedge.ai",
    title: "QuantsEdge | AI-Powered Alpha for Institutional Traders",
    description:
      "Institutional trading platform delivering 2.3+ Sharpe ratio with $1.2B+ volume. Non-custodial AI strategies for sophisticated funds.",
    siteName: "QuantsEdge",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "QuantsEdge - Institutional AI Trading Platform Performance Dashboard",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "QuantsEdge | AI-Powered Alpha for Institutional Traders",
    description: "Institutional trading platform delivering 2.3+ Sharpe ratio with $1.2B+ volume.",
    images: ["/og-image.png"],
  },
  icons: {
    icon: "/favicon.svg",
    apple: "/favicon.svg",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-site-verification",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrainsMono.variable}`}>
      <head>
        {/* Critical resource hints */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//cdn.jsdelivr.net" />
      </head>
      <body className="min-h-screen bg-black font-sans text-text-primary antialiased">
        {/* Performance monitoring */}
        <Script id="performance-init" strategy="beforeInteractive">
          {`
            // Critical performance optimizations
            if ('requestIdleCallback' in window) {
              requestIdleCallback(() => {
                import('/src/lib/performance.js').then(({ optimizeForInteraction, preloadCriticalResources }) => {
                  optimizeForInteraction();
                  preloadCriticalResources();
                }).catch(() => {});
              });
            }

            // Preload critical images
            const criticalImages = ['/images/team-harrison.jpg', '/images/team-dmitry.jpg', '/images/team-dan.jpg'];
            criticalImages.forEach(src => {
              const link = document.createElement('link');
              link.rel = 'preload';
              link.as = 'image';
              link.href = src;
              document.head.appendChild(link);
            });
          `}
        </Script>

        {/* Noise texture overlay */}
        <div className="pointer-events-none fixed inset-0 z-[1] bg-noise opacity-[0.03]" />

        {/* Main content */}
        <SmoothScroll>
          <div className="relative z-[2]">{children}</div>
        </SmoothScroll>
        <AnalyticsProvider />
      </body>
    </html>
  );
}
