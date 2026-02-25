"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

export default function TaglineBanner() {
  return (
    <section className="bg-primary py-16 md:py-20">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.p
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={fadeInUp.transition}
          className="text-2xl md:text-3xl font-bold text-white"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Breakthrough catalytic technology for renewable bio-methanol production
        </motion.p>
      </div>
    </section>
  );
}
