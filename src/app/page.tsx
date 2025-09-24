import dynamic from "next/dynamic";

import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { SectionDivider } from "@/components/sections/SectionDivider";
import { LazySection } from "@/components/ui/LazySection";

// Critical above-the-fold components loaded immediately
const Proof = dynamic(() => import("@/components/Proof").then((mod) => ({ default: mod.Proof })), {
  loading: () => <div className="mx-6 min-h-[500px] animate-pulse rounded-xl bg-white/5" />,
});

// Heavy chart/visualization components with aggressive lazy loading
const PerformanceSection = dynamic(
  () =>
    import("@/components/sections/PerformanceSection").then((mod) => ({
      default: mod.PerformanceSection,
    })),
  {
    loading: () => <div className="mx-6 min-h-[600px] animate-pulse rounded-xl bg-white/5" />,
  }
);

const TechnologySection = dynamic(
  () =>
    import("@/components/sections/TechnologySection").then((mod) => ({
      default: mod.TechnologySection,
    })),
  {
    loading: () => <div className="mx-6 min-h-[500px] animate-pulse rounded-xl bg-white/5" />,
  }
);

const TeamSection = dynamic(
  () => import("@/components/sections/TeamSection").then((mod) => ({ default: mod.TeamSection })),
  {
    loading: () => <div className="mx-6 min-h-[400px] animate-pulse rounded-xl bg-white/5" />,
  }
);

const RoadmapSection = dynamic(
  () =>
    import("@/components/sections/RoadmapSection").then((mod) => ({ default: mod.RoadmapSection })),
  {
    loading: () => <div className="mx-6 min-h-[500px] animate-pulse rounded-xl bg-white/5" />,
  }
);

const EarlyAccess = dynamic(
  () => import("@/components/EarlyAccess").then((mod) => ({ default: mod.EarlyAccess })),
  {
    loading: () => <div className="mx-6 min-h-[400px] animate-pulse rounded-xl bg-white/5" />,
  }
);

const Footer = dynamic(
  () => import("@/components/Footer").then((mod) => ({ default: mod.Footer })),
  {
    loading: () => <div className="min-h-[300px] animate-pulse rounded-xl bg-white/5" />,
  }
);

const StickyCTA = dynamic(
  () => import("@/components/StickyCTA").then((mod) => ({ default: mod.StickyCTA })),
  {
    ssr: false,
    loading: () => null,
  }
);

// Non-critical interactive elements
const MagneticCursor = dynamic(
  () => import("@/components/MagneticCursor").then((mod) => ({ default: mod.MagneticCursor })),
  {
    ssr: false,
    loading: () => null,
  }
);

export default function Home() {
  return (
    <>
      <MagneticCursor />

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main-content" role="main">
        {/* Above-the-fold content - load immediately */}
        <Hero />

        <SectionDivider label="Flow" />
        <HowItWorks />

        <SectionDivider label="Proof" />
        <LazySection rootMargin="100px">
          <Proof />
        </LazySection>

        <SectionDivider label="Performance" />
        <LazySection rootMargin="150px">
          <PerformanceSection />
        </LazySection>

        <SectionDivider label="Stacks" />
        <LazySection rootMargin="100px">
          <TechnologySection />
        </LazySection>

        <SectionDivider label="Team" />
        <LazySection rootMargin="100px">
          <TeamSection />
        </LazySection>

        <SectionDivider label="Roadmap" />
        <LazySection rootMargin="100px">
          <RoadmapSection />
        </LazySection>

        <LazySection rootMargin="50px">
          <EarlyAccess />
        </LazySection>
      </main>

      <StickyCTA />

      <LazySection rootMargin="0px">
        <Footer />
      </LazySection>
    </>
  );
}
