"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const systems = [
  {
    num: "01",
    title: "Modular & Rapid Deployment",
    desc: "Our catalytic reactor is housed in no more than a shipping container unit, enabling rapid deployment in a plug-and-play modus operandi.",
    color: "#1D8348",
  },
  {
    num: "02",
    title: "Plug and Play Integration",
    desc: "Connects seamlessly to existing biogas, heat, and storage infrastructure with minimal disruption to plant operations.",
    color: "#D4950A",
  },
  {
    num: "03",
    title: "Low CAPEX & OPEX Model",
    desc: "Our baseline system produces up to 10 kMT per annum and is easily scalable — an ideal model for reducing dependence on imported energy.",
    color: "#1D8348",
  },
];

export default function SystemsGrid() {
  return (
    <section className="bg-bg-alt py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
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
            Our Unique{" "}
            <span className="text-primary">Systems</span>
          </h2>
          <p className="mt-3 max-w-xl mx-auto" style={{ color: "var(--color-muted)" }}>
            At CRecTech, our philosophy is to build a modular system enabling
            rapid deployment tapping readily into the plant&apos;s existing resources.
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {systems.map((s) => (
            <motion.div
              key={s.num}
              variants={staggerItem}
              whileHover={{ scale: 1.02, y: -4 }}
              className="rounded-2xl p-8 bg-white shadow-sm border-l border-r border-b border-primary/10"
              style={{ borderTop: `3px solid ${s.color}` }}
            >
              <span className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-primary text-white font-bold text-sm mb-4">
                {s.num}
              </span>
              <h3
                className="text-lg font-bold text-dark mb-2"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {s.title}
              </h3>
              <p className="text-sm leading-relaxed" style={{ color: "var(--color-muted)" }}>{s.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
