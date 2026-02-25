"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function TechnologyTeaser() {
  return (
    <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image */}
        <motion.div
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInLeft.transition}
        >
          <Image
            src="/images/home/tech-diagram.webp"
            alt="CRecTech revolutionary technology diagram"
            width={654}
            height={408}
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
            className="text-3xl md:text-4xl font-bold text-dark mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Revolutionary <span className="text-primary">Technology</span>
          </h2>
          <p className="leading-relaxed mb-6" style={{ color: "var(--color-muted)" }}>
            Our novel{" "}
            <span className="text-primary font-semibold">CRecREF<sup>TM</sup></span>{" "}
            catalyst reduces biogas to methanol conversion method from
            conventional 4 steps to just 2 steps, significantly lowering
            capital and operating costs to achieve favourable return on
            investment.
          </p>
          <a
            href="/technology"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors text-sm"
          >
            Read More →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
