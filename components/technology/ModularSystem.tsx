"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    title: "Modular & Rapid Deployment",
    desc: "Modular units with a small land footprint, enabling fast setup near feedstock sources.",
    img: "/images/technology/modular-unit.jpg",
  },
  {
    title: "Plug and Play Integration",
    desc: "Connects seamlessly to existing biogas, heat, and storage infrastructure with minimal disruption.",
    img: "/images/technology/plug-and-play.jpg",
  },
  {
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
          className="text-center mb-14"
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
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {features.map((f) => (
            <motion.div
              key={f.title}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl overflow-hidden bg-white shadow-sm border border-primary/10"
            >
              <div className="relative w-full aspect-[16/10]">
                <Image
                  src={f.img}
                  alt={f.title}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3
                  className="text-lg font-bold text-dark mb-2"
                  style={{ fontFamily: "var(--font-display)" }}
                >
                  {f.title}
                </h3>
                <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
