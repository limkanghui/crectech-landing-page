"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function AboutNewsTeaser() {
  return (
    <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* About Us text */}
        <motion.div
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInLeft.transition}
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-dark mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About <span className="text-primary">Us</span>
          </h2>
          <p className="leading-relaxed mb-6" style={{ color: "var(--color-muted)" }}>
            CRecTech is a deep-tech startup spun off from the National University
            of Singapore. Our team of dedicated individuals are focused on
            transforming waste CO&#8322; to green bio-methanol, a sustainable marine
            fuel for the maritime industry to decarbonise global shipping.
          </p>
          <p className="leading-relaxed mb-8" style={{ color: "var(--color-muted)" }}>
            We are backed by global partners including Breakthrough Energy
            (founded by Bill Gates), and recognized in{" "}
            <em>Forbes, CNBC, The Business Times</em> and{" "}
            <em>Manifold Times</em>.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors text-sm"
          >
            Read More →
          </a>
        </motion.div>

        {/* CEO portrait + heading */}
        <motion.div
          initial={slideInRight.initial}
          whileInView={slideInRight.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInRight.transition}
          className="text-center"
        >
          <h3
            className="text-xl md:text-2xl font-bold text-dark mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From PhD to Startup
          </h3>
          <p className="text-primary font-semibold mb-6">Dr. Kang Hui Lim</p>
          <div className="relative w-full max-w-md mx-auto">
            <Image
              src="/images/home/ceo-portrait.png"
              alt="Dr. Kang Hui Lim, Co-founder and CEO of CRecTech"
              width={500}
              height={600}
              className="rounded-xl w-full"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
