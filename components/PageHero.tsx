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
      className="relative pt-36 pb-24 overflow-hidden"
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
      {/* Green gradient overlay */}
      <div
        className="absolute inset-0"
        style={{
          background: "linear-gradient(135deg, #1D8348 0%, #145A32 60%, #0E3B22 100%)",
        }}
      />

      {/* Subtle pattern overlay */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: "radial-gradient(circle at 2px 2px, #fff 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Angled bottom edge */}
      <div
        className="absolute bottom-0 left-0 right-0 h-12 bg-bg"
        style={{ clipPath: "polygon(0 100%, 100% 0, 100% 100%)" }}
      />

      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-white">
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: "3rem" }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="h-1 bg-white/40 rounded-full mx-auto mb-5"
          />
          <h1
            className="text-4xl md:text-6xl font-bold tracking-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {title}
          </h1>
          {subtitle && (
            <p className="mt-4 text-white/70 text-lg max-w-xl mx-auto">{subtitle}</p>
          )}
        </motion.div>
      </div>
    </section>
  );
}
