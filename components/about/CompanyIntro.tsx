"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { slideInLeft, slideInRight, fadeInUp } from "@/lib/animations";

export default function CompanyIntro() {
  return (
    <>
      {/* About Us Section */}
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
              About <span className="text-primary">US</span>
            </h2>
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              <strong>CRecTech</strong> is a deep-tech startup from the National
              University of Singapore turning CO₂ into green bio-methanol, a
              sustainable marine fuel. Backed by global partners including
              Breakthrough Energy (founded by Bill Gates) and recognized in{" "}
              <em>Forbes</em>, <em>CNBC</em>, <em>The Business Times and Manifold Times</em>,
              we deliver affordable, scalable solutions to decarbonize shipping.
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
              alt="CRecTech team photo"
              width={600}
              height={420}
              className="rounded-xl object-cover w-full shadow-lg"
            />
          </motion.div>
        </div>
      </section>

      {/* Our Revolutionary Tech Section */}
      <section className="bg-bg-alt px-6 py-24 md:py-28">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14 items-center">
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
              Our Revolutionary <span className="text-primary">Tech</span>
            </h2>
            <p className="leading-relaxed mb-6" style={{ color: "var(--color-muted)" }}>
              Our novel <strong>CRecREF™</strong> catalyst reduces biogas to
              methanol conversion method from conventional 4 steps to just 2
              steps, significantly lowering capital and operating costs to
              achieve favourable return on investment.
            </p>
            <a
              href="/technology"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors"
            >
              Read More →
            </a>
          </motion.div>

          <motion.div
            initial={slideInRight.initial}
            whileInView={slideInRight.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={slideInRight.transition}
            className="text-center md:text-left"
          >
            <h3
              className="text-2xl md:text-3xl font-bold text-dark mb-4"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Vision:{" "}
              <span className="text-primary">From Waste to Worth</span>
            </h3>
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Recycling and reconstituting waste biogas to sustainable and viable
              carbon neutral bio-methanol.
            </p>
          </motion.div>
        </div>
      </section>
    </>
  );
}
