"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function AboutNewsTeaser() {
  return (
    <section className="px-6 py-10 md:py-14 max-w-6xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
        {/* About Us — green card */}
        <motion.div
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInLeft.transition}
          className="relative rounded-3xl bg-primary text-white p-7 md:p-8 flex flex-col overflow-hidden"
        >
          {/* Decorative corner fold */}
          <div
            className="absolute top-0 left-0 w-20 h-20"
            style={{
              background: "linear-gradient(135deg, rgba(255,255,255,0.15) 50%, transparent 50%)",
              borderTopLeftRadius: "1.5rem",
            }}
          />

          <div className="relative z-10">
            <h2
              className="text-3xl font-bold mb-3"
              style={{ fontFamily: "var(--font-display)" }}
            >
              About US
            </h2>
            <p className="text-white/85 leading-relaxed text-sm">
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
            className="mt-5 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-white text-primary font-semibold hover:bg-white/90 transition-colors text-sm w-fit"
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
          className="flex flex-col items-center text-center"
        >
          <h3
            className="text-xl md:text-2xl font-extrabold text-dark leading-snug mb-1"
            style={{ fontFamily: "var(--font-display)" }}
          >
            From PhD to Startup: A Deep Tech Approach to Maritime Decarbonization
          </h3>
          <p className="text-xs font-medium mb-3" style={{ color: "var(--color-muted)" }}>
            Dr. Kang Hui LIM, Co-founder and CEO of CRecTech
          </p>

          
            <Image
              src="/images/home/ceo-portrait.png"
              alt="Dr. Kang Hui Lim, Co-founder and CEO of CRecTech"
              width={500}
              height={600}
              className="w-full max-w-[340px] h-auto"
            />
        </motion.div>
      </div>
    </section>
  );
}
