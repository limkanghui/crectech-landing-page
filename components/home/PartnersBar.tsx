"use client";
import Image from "next/image";

const partners = [
  { src: "/images/partners/nus-grip.png", alt: "NUS GRIP" },
  { src: "/images/partners/startup-sg.png", alt: "Startup SG Founder" },
  { src: "/images/partners/sginnovate.png", alt: "SGInnovate" },
  { src: "/images/partners/temasek.png", alt: "Temasek" },
  { src: "/images/partners/breakthrough-energy.png", alt: "Breakthrough Energy" },
];

const items = [...partners, ...partners];

export default function PartnersBar() {
  return (
    <section className="py-10 bg-bg-alt border-y border-primary/10 overflow-hidden">
      <p className="text-center text-xs uppercase tracking-widest mb-6 font-medium" style={{ color: "var(--color-muted)" }}>
        Backed &amp; recognised by
      </p>
      <div className="flex animate-marquee whitespace-nowrap">
        {items.map((p, i) => (
          <div
            key={i}
            className="inline-flex items-center justify-center mx-10 shrink-0"
          >
            <Image
              src={p.src}
              alt={p.alt}
              width={140}
              height={48}
              className="h-10 w-auto object-contain opacity-70 hover:opacity-100 transition-opacity grayscale hover:grayscale-0"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
