import { EarlyAccess } from "@/components/EarlyAccess";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { HowItWorks } from "@/components/HowItWorks";
import { MagneticCursor } from "@/components/MagneticCursor";
import { Proof } from "@/components/Proof";
import { PerformanceSection } from "@/components/sections/PerformanceSection";
import { RoadmapSection } from "@/components/sections/RoadmapSection";
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
        <HowItWorks />
        <Proof />
        <PerformanceSection />
        <TechnologySection />
        <TeamSection />
        <RoadmapSection />
        <EarlyAccess />
      </main>

      <StickyCTA />

      <Footer />
    </>
  );
}
