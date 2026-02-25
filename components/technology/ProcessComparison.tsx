"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

export default function ProcessComparison() {
  return (
    <section className="px-6 py-20 md:py-28 max-w-7xl mx-auto">
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
          Two <span className="text-primary">Processes</span>
        </h2>
        <p className="mt-3 max-w-2xl mx-auto" style={{ color: "var(--color-muted)" }}>
          CRecTech is pioneering low-carbon solutions through two key
          innovations: its advanced Steam Methane Reforming (SMR) process using
          the CRecREF<sup>TM</sup> catalyst, which reduces fuel use, water
          consumption, and CO&#8322; emissions; and its Bio-Methanol Process, which
          converts biogenic or waste feedstocks into renewable bio-methanol.
          Together, these technologies enable cleaner bio-methanol production,
          supporting a more sustainable and circular energy future.
        </p>
      </motion.div>

      {/* Two processes infographic */}
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={{ once: true, margin: "-80px" }}
        transition={fadeInUp.transition}
        className="mb-14"
      >
        <Image
          src="/images/technology/two-processes.png"
          alt="CRecTech two processes overview"
          width={800}
          height={700}
          className="w-full max-w-2xl mx-auto h-auto"
        />
      </motion.div>

      {/* Sub-headings + process diagram */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
        <motion.div
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInLeft.transition}
        >
          <h3
            className="text-xl md:text-2xl font-bold text-dark mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Low Carbon <span className="text-primary">Steam Methane Reforming</span>
          </h3>
          <h3
            className="text-xl md:text-2xl font-bold text-dark mb-5"
            style={{ fontFamily: "var(--font-display)" }}
          >
            CRecTech <span className="text-primary">Bio-methanol Process</span>
          </h3>
          <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
            CRecTech&apos;s solutions revolve around lowering CO&#8322; emissions
            without expensive carbon capture and storage (CCS) technologies,
            and yet still achieve greener alternative fuels production.
          </p>
        </motion.div>

        <motion.div
          initial={slideInRight.initial}
          whileInView={slideInRight.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInRight.transition}
        >
          <Image
            src="/images/technology/process-diagram.png"
            alt="CRecTech process diagram"
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
