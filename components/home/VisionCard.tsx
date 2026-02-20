"use client";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function VisionCard() {
  return (
    <section className="bg-bg-alt py-24 md:py-28">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          {/* Vision text — now on left */}
          <motion.div
            initial={slideInLeft.initial}
            whileInView={slideInLeft.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={slideInLeft.transition}
          >
            <p className="text-primary text-xs uppercase tracking-widest font-semibold mb-3">
              Our Vision
            </p>
            <h2
              className="text-3xl md:text-4xl font-bold text-dark mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Turning Waste to{" "}
              <span className="text-primary">Worth</span>
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: "var(--color-muted)" }}>
              Recycling and reconstituting waste biogas to sustainable and viable
              carbon neutral bio-methanol. At CRecTech we strive to provide a
              total carbon recycle solution.
            </p>
            <a
              href="/about"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-primary text-primary font-semibold hover:bg-primary/5 transition-colors text-sm"
            >
              Read More →
            </a>
          </motion.div>

          {/* Image — now on right */}
          <motion.div
            initial={slideInRight.initial}
            whileInView={slideInRight.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={slideInRight.transition}
          >
            <div
              className="rounded-xl w-full shadow-lg"
              style={{ height: "320px", backgroundImage: "url('https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=800&q=80')", backgroundSize: "cover", backgroundPosition: "center" }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
