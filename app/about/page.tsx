"use client";
import PageHero from "@/components/PageHero";
import CompanyIntro from "@/components/about/CompanyIntro";
import TeamGrid from "@/components/about/TeamGrid";
import AdvisoryBoard from "@/components/about/AdvisoryBoard";

export default function AboutPage() {
  return (
    <main>
      <PageHero title="About Us" />
      <CompanyIntro />
      <TeamGrid />
      <AdvisoryBoard />
    </main>
  );
}
