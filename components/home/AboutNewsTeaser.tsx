"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInLeft, slideInRight } from "@/lib/animations";

export default function AboutNewsTeaser() {
  return (
    <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* About card — green */}
        <motion.div
          initial={slideInLeft.initial}
          whileInView={slideInLeft.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInLeft.transition}
          className="rounded-2xl p-10 bg-primary text-white flex flex-col justify-between min-h-64"
        >
          <div>
            <h2
              className="text-3xl font-bold mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              About Us
            </h2>
            <p className="text-white/80 leading-relaxed text-sm">
              <strong>CRecTech</strong> is a deep-tech startup from the National
              University of Singapore turning CO₂ into green bio-methanol, a
              sustainable marine fuel. Backed by global partners including
              Breakthrough Energy (founded by Bill Gates) and recognized in{" "}
              <em>Forbes, CNBC, The Business Times</em> and{" "}
              <em>Manifold Times</em>.
            </p>
          </div>
          <a
            href="/about"
            className="mt-6 inline-flex items-center gap-2 px-5 py-2.5 rounded-lg border border-white/40 text-white text-sm font-semibold hover:bg-white/10 transition-colors w-fit"
          >
            Read More →
          </a>
        </motion.div>

        {/* Featured news card */}
        <motion.div
          initial={slideInRight.initial}
          whileInView={slideInRight.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={slideInRight.transition}
          className="rounded-2xl overflow-hidden bg-white border border-primary/10 shadow-sm"
        >
          <div className="bg-dark/90 p-6 flex items-start gap-4">
            <Image
              src="/images/team/kang-hui.png"
              alt="Dr. Kang Hui Lim"
              width={72}
              height={72}
              className="rounded-full w-16 h-16 object-cover shrink-0"
            />
            <div>
              <h3 className="text-white font-bold text-sm leading-snug">
                From PhD to Startup: A Deep Tech Approach to Maritime
                Decarbonization
              </h3>
              <p className="text-white/60 text-xs mt-1">
                Dr. Kang Hui LIM, Co-founder and CEO of CRecTech
              </p>
            </div>
          </div>
          <div className="p-6">
            <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
              CRecTech delivers affordable, scalable solutions to decarbonize
              shipping — recognized by Forbes, CNBC, and The Business Times.
            </p>
            <a
              href="/news"
              className="mt-4 inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
            >
              View All News →
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
