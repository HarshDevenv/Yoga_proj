import { HeroSection } from "@/components/sections/hero/hero-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { ProgramsSection } from "@/components/sections/programs/programs-section";
import { WorkshopsSection } from "@/components/sections/workshops/workshops-section";
import { FAQSection } from "@/components/sections/faq/faq-section";
import { TrainersSection } from "@/components/trainers-section";
import { FitnessJourney } from "@/components/fitness-journey";
import { FloatingActionMenu } from "@/components/floating-action-menu";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <ProgramsSection />
      <WorkshopsSection />
      <TrainersSection />
      <FitnessJourney />
      <FAQSection />
      <FloatingActionMenu />
    </>
  );
}