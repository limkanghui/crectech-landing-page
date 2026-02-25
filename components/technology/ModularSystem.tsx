"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    num: "01",
    title: "Modular & Rapid Deployment",
    desc: "Modular units with a small land footprint, enabling fast setup near feedstock sources.",
    img: "/images/technology/modular-unit.jpg",
  },
  {
    num: "02",
    title: "Plug and Play Integration",
    desc: "Connects seamlessly to existing biogas, heat, and storage infrastructure with minimal disruption.",
    img: "/images/technology/plug-and-play.jpg",
  },
  {
    num: "03",
    title: "Cost Efficient CAPEX",
    desc: "Standardized modular design lowers upfront investment, making renewable bio-methanol production economical.",
    img: "/images/technology/cost-efficient.webp",
  },
];

export default function ModularSystem() {
  return (
    <section className="px-6 py-24 md:py-32 bg-bg-alt">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={fadeInUp.transition}
          className="text-center mb-16"
        >
          <h2
            className="text-3xl md:text-4xl font-bold text-dark"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Renewable{" "}
            <span className="text-primary">Bio-Methanol</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ color: "var(--color-muted)" }}>
            Modular Solutions Converting Waste to Renewable Bio-Methanol
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="space-y-12"
        >
          {features.map((f, i) => (
            <motion.div
              key={f.num}
              variants={staggerItem}
              className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center"
            >
              <div className={i % 2 === 1 ? "md:order-2" : ""}>
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-sm mb-4">
                  {f.num}
                </span>
                <h3
                  className="text-xl font-bold text-dark mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.title}
                </h3>
                <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>{f.desc}</p>
              </div>
              <div className={`relative rounded-xl shadow-md overflow-hidden ${i % 2 === 1 ? "md:order-1" : ""}`} style={{ height: "300px" }}>
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  className="object-cover"
                />
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={{ ...fadeInUp.transition, delay: 0.1 }}
          className="mt-16 text-center"
        >
          <p className="mb-4" style={{ color: "var(--color-muted)" }}>
            Ready to explore deployment for your operations?
          </p>
          <a
            href="mailto:khlim@crectech.net?subject=Meeting%20Request%20-%20CRecTech"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors animate-cta-pulse text-base"
          >
            Book a Meeting →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
