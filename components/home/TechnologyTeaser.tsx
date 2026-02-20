"use client";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function TechnologyTeaser() {
  return (
    <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image placeholder with green accent */}
        <motion.div
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInLeft.transition}
          className="relative"
        >
          <div className="absolute -top-4 -left-4 w-16 h-full bg-primary/20 rounded-xl -z-10" />
          <div
            className="rounded-xl w-full shadow-lg bg-bg-alt"
            style={{ height: "320px", backgroundImage: "url('https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?w=800&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
          />
        </motion.div>

        {/* Text */}
        <motion.div
          initial={slideInRight.initial}
          whileInView={slideInRight.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInRight.transition}
        >
          <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">
            Our Revolutionary
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-dark mb-4"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Technology
          </h2>
          <p className="leading-relaxed mb-3" style={{ color: "var(--color-muted)" }}>
            Our novel{" "}
            <span className="text-primary font-semibold">CRecREF™</span>{" "}
            catalyst reduces the biogas-to-methanol conversion from the
            conventional 4 steps to just{" "}
            <strong>2 steps</strong>, significantly lowering capital and
            operating costs to achieve a favourable return on investment.
          </p>
          <p className="leading-relaxed mb-6" style={{ color: "var(--color-muted)" }}>
            By converting waste biogas into bio-methanol, our systems close the
            carbon loop and provide a sustainable marine fuel that can cut
            shipping emissions by up to{" "}
            <strong className="text-dark">95%</strong>.
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
