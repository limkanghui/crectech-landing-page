"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function CompanyIntro() {
  return (
    <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
        <motion.div
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInLeft.transition}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-dark mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About <span className="text-primary">Us</span>
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>
            <strong>CRecTech</strong> is a deep-tech startup from the National
            University of Singapore turning CO₂ into green bio-methanol, a
            sustainable marine fuel.
          </p>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>
            Backed by global partners including Breakthrough Energy (founded by
            Bill Gates) and recognized in{" "}
            <em>Forbes, CNBC, The Business Times</em> and{" "}
            <em>Manifold Times</em>, we deliver affordable, scalable solutions
            to decarbonize shipping.
          </p>
          <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
            Our vision:{" "}
            <strong className="text-dark">Turning Waste to Worth</strong> —
            recycling and reconstituting waste biogas to sustainable and viable
            carbon neutral bio-methanol.
          </p>
        </motion.div>

        <motion.div
          initial={slideInRight.initial}
          whileInView={slideInRight.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInRight.transition}
          className="relative"
        >
          <div className="absolute -top-4 -right-4 w-12 h-full bg-primary/15 rounded-xl -z-10" />
          <Image
            src="/images/team/Team-photo.png"
            alt="CRecTech team in the lab"
            width={600}
            height={420}
            className="rounded-xl object-cover w-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
