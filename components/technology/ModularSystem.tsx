"use client";
import { motion } from "framer-motion";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const features = [
  {
    num: "01",
    title: "Modular & Rapid Deployment",
    desc: "Modular units with a small land footprint, enabling fast setup near feedstock sources.",
    img: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
  },
  {
    num: "02",
    title: "Plug and Play Integration",
    desc: "Connects seamlessly to existing biogas, heat, and storage infrastructure with minimal disruption.",
    img: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=600&q=80",
  },
  {
    num: "03",
    title: "Low CAPEX & OPEX",
    desc: "Baseline system produces up to 10 kMT per annum. Easily scalable to meet your needs.",
    img: "https://images.unsplash.com/photo-1497435334941-8c899ee9e8e9?w=600&q=80",
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
            Modular solutions converting waste to renewable bio-methanol.
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
              <div
                className={`rounded-xl shadow-md ${i % 2 === 1 ? "md:order-1" : ""}`}
                style={{
                  height: "300px",
                  backgroundImage: `url('${f.img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                }}
              />
            </motion.div>
          ))}
        </motion.div>

        {/* YouTube videos */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ ...fadeInUp.transition, delay: 0.2 }}
          className="mt-20"
        >
          <h3
            className="text-xl font-semibold text-dark mb-8 text-center"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Watch Our Technology in Action
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { id: "3e3UZNeTo1Q", title: "CRecTech Revolutionary Bio-methanol Technology" },
              { id: "ibW1T-Gr-0g", title: "CRecTech Bio-methanol Technology Introduction" },
              { id: "qp-vzf8ctJk", title: "CRecTech Green Bio-Methanol Technology" },
            ].map((v) => (
              <div key={v.id} className="rounded-2xl overflow-hidden shadow-lg">
                <iframe
                  className="w-full aspect-video"
                  src={`https://www.youtube.com/embed/${v.id}`}
                  title={v.title}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            ))}
          </div>
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
            href="/contact"
            className="inline-flex items-center gap-2 px-8 py-4 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors animate-cta-pulse text-base"
          >
            Book a Meeting →
          </a>
        </motion.div>
      </div>
    </section>
  );
}
