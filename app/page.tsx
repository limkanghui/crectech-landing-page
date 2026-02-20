"use client";
import Hero from "@/components/home/Hero";
import PartnersBar from "@/components/home/PartnersBar";
import TechnologyTeaser from "@/components/home/TechnologyTeaser";
import VisionCard from "@/components/home/VisionCard";
import SystemsGrid from "@/components/home/SystemsGrid";
import AboutNewsTeaser from "@/components/home/AboutNewsTeaser";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <PartnersBar />
      <TechnologyTeaser />
      <VisionCard />
      <SystemsGrid />
      <AboutNewsTeaser />
    </main>
  );
}
