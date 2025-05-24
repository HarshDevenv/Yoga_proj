import { HeroSection } from "@/components/sections/hero/hero-section";
import { ServicesSection } from "@/components/sections/services/services-section";
import { ProgramsSection } from "@/components/sections/programs/programs-section";
import { WorkshopsSection } from "@/components/sections/workshops/workshops-section";
import { FAQSection } from "@/components/sections/faq/faq-section";
import { TrainersSection } from "@/components/sections/trainers/trainers-section";
import { ContactSection } from "@/components/sections/contact/contact-section";

export default function Home() {
  return (
    <main className="flex flex-col w-full">
      <section className="w-full min-h-screen"><HeroSection /></section>
      <section className="w-full min-h-screen"><ServicesSection /></section>
      <section className="w-full min-h-screen"><ProgramsSection /></section>
      <section className="w-full min-h-screen"><WorkshopsSection /></section>
      <section className="w-full min-h-screen"><TrainersSection /></section>
      <section className="w-full min-h-screen"><FAQSection /></section>
      <section className="w-full min-h-screen"><ContactSection /></section>
    </main>
  );
}