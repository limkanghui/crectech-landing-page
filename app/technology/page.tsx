"use client";
import PageHero from "@/components/PageHero";
import CatalystSection from "@/components/technology/CatalystSection";
import SMRStats from "@/components/technology/SMRStats";
import ProcessComparison from "@/components/technology/ProcessComparison";
import ModularSystem from "@/components/technology/ModularSystem";

export default function TechnologyPage() {
  return (
    <main>
      <PageHero title="Technology" />
      <CatalystSection />
      <SMRStats />
      <ProcessComparison />
      <ModularSystem />
    </main>
  );
}
