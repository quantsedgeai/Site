import { EarlyAccess } from "@/components/EarlyAccess";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MagneticCursor } from "@/components/MagneticCursor";
import { Proof } from "@/components/Proof";
import { PerformanceSection } from "@/components/sections/PerformanceSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
import { SectionDivider } from "@/components/sections/SectionDivider";
import { TeamSection } from "@/components/sections/TeamSection";
import { TechnologySection } from "@/components/sections/TechnologySection";
import { StickyCTA } from "@/components/StickyCTA";

export default function Home() {
  return (
    <>
      <MagneticCursor />

      <a href="#main-content" className="skip-link">
        Skip to content
      </a>

      <Header />

      <main id="main-content" role="main">
        <Hero />
        <SectionDivider label="Flow" />
        <HowItWorks />
        <SectionDivider label="Proof" />
        <Proof />
        <SectionDivider label="Performance" />
        <PerformanceSection />
        <SectionDivider label="Stacks" />
        <TechnologySection />
        <SectionDivider label="Humans" />
        <TeamSection />
        <SectionDivider label="Roadmap" />
        <RoadmapSection />
        <EarlyAccess />
      </main>

      <StickyCTA />

      <Footer />
    </>
  );
}
