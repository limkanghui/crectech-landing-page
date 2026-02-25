"use client";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background image */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1500382017468-9049fed747ef?w=1600&q=80')`,
        }}
      />
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-dark/60" />

      {/* Subtle dot pattern */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `radial-gradient(circle at 2px 2px, #2ECC71 1px, transparent 0)`,
          backgroundSize: "48px 48px",
        }}
      />

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-28 pb-16">
        <motion.div
          variants={staggerContainer}
          initial="initial"
          animate="animate"
          className="max-w-3xl"
        >
          {/* Badge */}
          <motion.div variants={staggerItem} className="mb-6">
            <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 border border-primary/40 text-white text-sm font-medium backdrop-blur-sm">
              <span className="w-2 h-2 rounded-full bg-primary-light animate-pulse" />
              Welcome to CRecTech
            </span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            variants={staggerItem}
            className="text-5xl sm:text-6xl md:text-7xl font-bold text-white leading-tight mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Breakthrough{" "}
            <span className="text-primary-light">Catalytic</span>{" "}
            Technology
          </motion.h1>

          {/* Subline */}
          <motion.p
            variants={staggerItem}
            className="text-xl text-white/70 mb-8 max-w-xl"
          >
            In renewable bio-methanol production
          </motion.p>

          {/* CTAs */}
          <motion.div
            variants={staggerItem}
            className="flex flex-col sm:flex-row gap-4 items-start"
          >
            <a
              href="/contact"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors animate-cta-pulse"
            >
              Book a Meeting →
            </a>
            <a
              href="/technology"
              className="inline-flex items-center gap-2 px-7 py-3.5 rounded-lg border border-white/30 text-white font-semibold hover:bg-white/10 transition-colors backdrop-blur-sm"
            >
              Explore Our Technology ↓
            </a>
          </motion.div>

          {/* Email */}
          <motion.div
            variants={staggerItem}
            className="mt-8 flex items-center gap-3 text-white/60 text-sm"
          >
            <span className="text-lg">✉</span>
            <a href="mailto:contact@crectech.net" className="hover:text-white transition-colors">
              contact@crectech.net
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll hint */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-1 text-white/40 text-xs"
      >
        <span>scroll</span>
        <motion.div
          animate={{ y: [0, 6, 0] }}
          transition={{ repeat: Infinity, duration: 1.4 }}
        >
          ↓
        </motion.div>
      </motion.div>
    </section>
  );
}
