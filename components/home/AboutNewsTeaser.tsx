"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function AboutNewsTeaser() {
  return (
    <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* About Us — green card */}
        <motion.div
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInLeft.transition}
          className="relative rounded-3xl bg-primary text-white p-10 md:p-12 flex flex-col justify-between overflow-hidden min-h-[420px]"
        >
          {/* Decorative corner fold */}
          <div
            className="absolute top-0 left-0 w-24 h-24"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.15) 50%, transparent 50%)",
              borderTopLeftRadius: "1.5rem",
            }}
          />

          <div className="relative z-10">
            <h2
              className="text-3xl md:text-4xl font-bold mb-6"
              style={{ fontFamily: "var(--font-display)" }}
            >
              About US
            </h2>
            <p className="text-white/85 leading-relaxed text-[15px]">
              CRecTech is a deep-tech startup spun off from the National University
              of Singapore. Our team of dedicated individuals are focused on
              transforming waste CO&#8322; to green bio-methanol, a sustainable marine
              fuel for the maritime industry to decarbonise global shipping. We
              deliver affordable, scalable solutions to decarbonise shipping —
              recognised by Forbes, CNBC, and The Business Times.
            </p>
          </div>

          <a
            href="/about"
            className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors text-sm w-fit"
          >
            Read More →
          </a>
        </motion.div>

        {/* Right side — CEO portrait + heading */}
        <motion.div
          initial={slideInRight.initial}
          whileInView={slideInRight.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInRight.transition}
          className="flex flex-col items-center justify-start text-center"
        >
          <h3
            className="text-3xl md:text-4xl font-extrabold text-dark leading-tight mb-3"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From PhD to Startup: A Deep Tech Approach to Maritime Decarbonization
          </h3>
          <p className="text-sm font-medium mb-8" style={{ color: "var(--color-muted)" }}>
            Dr. Kang Hui LIM, Co-founder and CEO of CRecTech
          </p>

          {/* Portrait image — no circle, just the image as-is */}
          <div className="relative w-full max-w-sm mx-auto">
            <Image
              src="/images/home/ceo-portrait.png"
              alt="Dr. Kang Hui Lim, Co-founder and CEO of CRecTech"
              width={500}
              height={600}
              className="w-full h-auto"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
