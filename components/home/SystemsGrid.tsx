"use client";
import { motion } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

export default function SystemsGrid() {
  return (
    <section className="bg-bg-alt py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={fadeInUp.transition}
          className="text-center mb-14"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-dark"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Our Unique{" "}
            <span className="text-primary">Systems</span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
          {/* Text content */}
          <motion.div
            initial={slideInLeft.initial}
            whileInView={slideInLeft.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={slideInLeft.transition}
            className="space-y-5"
          >
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              At CRecTech, our philosophy is to build a modular system which our
              main catalytic reactor is housed in no more than a shipping
              container unit. This enables a rapid deployment in a
              plug-and-play modus operandi tapping readily into the
              plant&apos;s existing resources such as biogas, heat and steam.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Our baseline system is capable of producing up to 10 kilo metric
              tonnes per annum and is easily scalable to meet your needs.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Our system is an ideal low CAPEX and OPEX model which can be
              deployed simultaneously in different far reaching locations to
              reduce reliance on single point of production source, reducing
              dependence on imported energy, and increase domestic production.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              At CRecTech we strive to provide a total carbon recycle solution.
            </p>
          </motion.div>

          {/* YouTube video embed */}
          <motion.div
            initial={slideInRight.initial}
            whileInView={slideInRight.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={slideInRight.transition}
          >
            <div className="relative w-full aspect-video rounded-xl overflow-hidden shadow-lg">
              <iframe
                src="https://www.youtube.com/embed/3e3UZNeTo1Q?autoplay=1&rel=0"
                title="CRecTech Systems Overview"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="absolute inset-0 w-full h-full"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
