"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function VisionCard() {
  return (
    <section className="bg-bg-alt py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={slideInLeft.initial}
            whileInView={slideInLeft.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={slideInLeft.transition}
          >
            <Image
              src="/images/home/vision-diagram.webp"
              alt="CRecTech vision diagram"
              width={985}
              height={665}
              className="rounded-xl w-full"
            />
          </motion.div>

          {/* Text */}
          <motion.div
            initial={slideInRight.initial}
            whileInView={slideInRight.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={slideInRight.transition}
          >
            <h2
              className="text-2xl md:text-3xl font-bold text-dark mb-2"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Vision
            </h2>
            <h3
              className="text-3xl md:text-4xl font-bold text-dark mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Turning Waste to{" "}
              <span className="text-primary">Worth</span>
            </h3>
            <p className="leading-relaxed mb-6" style={{ color: "var(--color-muted)" }}>
              Recycling and reconstituting waste biogas to sustainable and viable
              carbon neutral bio-methanol.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors text-sm"
            >
              Read More →
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
