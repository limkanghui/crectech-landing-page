"use client";
import { motion } from "framer-motion";
import Image from "next/image";
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
          <h2
            className="text-2xl md:text-3xl font-bold text-dark mb-5 leading-tight"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Bio-methanol from waste biogas using Innovative catalyst{" "}
            <span className="text-primary">technology</span>
          </h2>
          <p className="leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>
            CRecTech has developed a breakthrough catalyst,{" "}
            <span className="text-primary font-semibold">
              CRecREF<sup>TM</sup>
            </span>
            , that turns raw biogas, made up of methane and carbon dioxide,
            directly into renewable bio-methanol in just two steps instead of the
            conventional four step process. Our catalyst not only prevents carbon
            build-up but also puts CO&#8322; to work as part of the reaction,
            producing the perfect gas mixture needed to make methanol.
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
        >
          <Image
            src="/images/technology/catalyst.jpg"
            alt="CRecTech catalyst"
            width={800}
            height={600}
            className="rounded-xl w-full shadow-lg"
          />
        </motion.div>
      </div>
    </section>
  );
}
