"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";
import StatCounter from "@/components/ui/StatCounter";

export default function SMRStats() {
  return (
    <section className="bg-bg-alt py-20 md:py-28">
      <div className="max-w-6xl mx-auto px-6">
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
            Steam Methane Reforming{" "}
            <span className="text-primary">Problems</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ color: "var(--color-muted)" }}>
            Steam Methane Reforming (SMR) faces challenges like high CO&#8322;
            emissions, catalyst degradation, and energy inefficiency.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-14">
          <motion.div
            initial={slideInLeft.initial}
            whileInView={slideInLeft.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={slideInLeft.transition}
          >
            <Image
              src="/images/technology/smr-problems.png"
              alt="Steam Methane Reforming Problems infographic"
              width={600}
              height={464}
              className="w-full h-auto"
            />
          </motion.div>

          <motion.div
            initial={slideInRight.initial}
            whileInView={slideInRight.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={slideInRight.transition}
            className="grid grid-cols-1 gap-8"
          >
            <StatCounter value={81} suffix=" Million" label="Ton Natural Gas Fuel Per Annum" />
            <StatCounter value={270} suffix=" Million" label="Ton Water Per Annum" />
            <StatCounter value={420} suffix=" Million" label="Ton CO₂ Emission Per Annum" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
