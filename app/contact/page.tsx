"use client";
import PageHero from "@/components/PageHero";
import ContactSection from "@/components/contact/ContactSection";

export default function ContactPage() {
  return (
    <main>
      <PageHero
        title="Contact"
        subtitle="We welcome enquiries and collaborations."
      />
      <ContactSection />
    </main>
  );
}
