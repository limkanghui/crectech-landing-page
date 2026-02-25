"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function AboutNewsTeaser() {
  return (
    <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-[1.1fr_0.9fr] gap-10 items-center">
        {/* About Us — green card */}
        <motion.div
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInLeft.transition}
          className="rounded-3xl bg-primary text-white p-10 md:p-14 flex flex-col"
        >
          <h2
            className="text-4xl md:text-5xl font-bold mb-6"
            style={{ fontFamily: "var(--font-display)" }}
          >
            About US
          </h2>
          <p className="text-white/90 leading-relaxed text-base md:text-lg mb-8">
            <strong>CRecTech</strong> is a deep-tech startup from the National
            University of Singapore turning CO&#8322; into green bio-methanol, a
            sustainable marine fuel. Backed by global partners including
            Breakthrough Energy (founded by Bill Gates) and recognized in{" "}
            <em>Forbes</em>, <em>CNBC</em>, <em>The Business Times</em>,{" "}
            <em>Manifold Times</em>, we deliver affordable, scalable solutions
            to decarbonize shipping.
          </p>
          <a
            href="/about"
            className="inline-flex items-center gap-3 px-7 py-3.5 rounded-lg bg-white text-dark font-semibold hover:bg-white/90 transition-colors text-base w-fit"
          >
            Read More <span className="text-lg">&rarr;</span>
          </a>
        </motion.div>

        {/* Right side — heading + CEO portrait */}
        <motion.div
          initial={slideInRight.initial}
          whileInView={slideInRight.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInRight.transition}
          className="flex flex-col items-center text-center"
        >
          <h3
            className="text-2xl md:text-3xl font-extrabold text-dark leading-tight mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From PhD to Startup: A Deep Tech Approach to Maritime Decarbonization
          </h3>
          <p className="text-sm md:text-base font-medium mb-6" style={{ color: "var(--color-muted)" }}>
            Dr. Kang Hui LIM, Co-founder and CEO of CRecTech
          </p>
          <Image
            src="/images/home/ceo-portrait.png"
            alt="Dr. Kang Hui Lim, Co-founder and CEO of CRecTech"
            width={500}
            height={600}
            className="w-full max-w-[360px] h-auto"
          />
        </motion.div>
      </div>
    </section>
  );
}
