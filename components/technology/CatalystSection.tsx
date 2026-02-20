"use client";
import { motion } from "framer-motion";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function CatalystSection() {
  return (
    <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInLeft.transition}
        >
          <p className="text-primary text-sm uppercase tracking-widest font-semibold mb-3">
            Bio-methanol from waste biogas using
          </p>
          <h2
            className="text-3xl md:text-4xl font-bold text-primary mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Innovative Catalyst Technology
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>
            CRecTech has developed a breakthrough catalyst,{" "}
            <span className="text-primary font-semibold">CRecREF™</span>, that
            turns raw biogas — made up of methane and carbon dioxide — directly
            into renewable bio-methanol in just two steps instead of the
            conventional four step process.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>
            Our catalyst not only prevents carbon build-up but also puts CO₂ to
            work as part of the reaction, producing the perfect gas mixture
            needed to make methanol.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
            This means we skip expensive cleaning and conditioning steps,
            cutting production costs by up to{" "}
            <strong className="text-dark">50%</strong>. The result is a highly
            sustainable way to turn biomass wastes into affordable green fuel
            for the shipping industry and beyond.
          </p>
        </motion.div>

        <motion.div
          initial={slideInRight.initial}
          whileInView={slideInRight.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInRight.transition}
          className="relative"
        >
          <div className="absolute -top-4 -right-4 w-full h-full bg-primary/10 rounded-xl -z-10" />
          <div
            className="rounded-xl w-full shadow-lg"
            style={{
              height: "380px",
              backgroundImage: "url('https://images.unsplash.com/photo-1532187863486-abf9dbad1b69?w=800&q=80')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          />
        </motion.div>
      </div>
    </section>
  );
}
