"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

interface PageHeroProps {
  title: string;
  subtitle?: string;
  bgImage?: string;
}

export default function PageHero({ title, subtitle, bgImage }: PageHeroProps) {
  return (
    <section
      className="relative pt-28 pb-20 overflow-hidden"
      style={
        bgImage
          ? {
              backgroundImage: `url(${bgImage})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
            }
          : undefined
      }
    >
      {/* Green overlay */}
      <div className="absolute inset-0 bg-primary/85" />

      {/* Angled bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-10 bg-bg"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          <p className="text-white/70 text-sm uppercase tracking-widest mb-2">
            CRecTech · Carbon Recycle Technologies
          </p>
          <h1
            className="text-4xl md:text-5xl font-bold"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-3 text-white/75 text-lg">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
