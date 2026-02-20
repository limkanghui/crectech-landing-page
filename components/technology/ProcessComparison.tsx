"use client";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const conventional = [
  "Biogas cleaning",
  "CO₂ removal",
  "Steam reforming",
  "Methanol synthesis",
];
const crectech = [
  "Biogas input",
  "CRecREF™ direct conversion → Bio-methanol",
];

export default function ProcessComparison() {
  return (
    <section className="px-6 py-20 max-w-5xl mx-auto">
      <motion.div
        initial={fadeInUp.initial}
        whileInView={fadeInUp.animate}
        viewport={{ once: true, margin: "-80px" }}
        transition={fadeInUp.transition}
        className="text-center mb-12"
      >
        <h2
          className="text-3xl md:text-4xl font-bold text-dark"
          style={{ fontFamily: "var(--font-display)" }}
        >
          Two <span className="text-primary">Processes</span>
        </h2>
        <p className="mt-3 max-w-lg mx-auto" style={{ color: "var(--color-muted)" }}>
          CRecTech is pioneering low-carbon solutions through two key
          innovations — reducing fuel use, water consumption, and CO₂ emissions.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Conventional */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={{ ...fadeInUp.transition, delay: 0 }}
          className="rounded-2xl p-8 bg-white border border-red-100 shadow-sm"
        >
          <h3
            className="font-bold text-dark mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            Conventional SMR
          </h3>
          <p className="text-sm mb-5" style={{ color: "var(--color-muted)" }}>
            4 steps · High cost · High emissions
          </p>
          <ol className="space-y-3">
            {conventional.map((step, i) => (
              <li key={i} className="flex items-center gap-3 text-sm text-dark/70">
                <span className="w-6 h-6 rounded-full bg-red-50 border border-red-200 text-red-500 text-xs font-bold flex items-center justify-center shrink-0">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-5 pt-5 border-t border-red-50 text-xs" style={{ color: "var(--color-muted)" }}>
            ~50% higher production cost · 420M ton CO₂/yr
          </div>
        </motion.div>

        {/* CRecTech */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true }}
          transition={{ ...fadeInUp.transition, delay: 0.15 }}
          className="rounded-2xl p-8 bg-white shadow-sm border-l border-r border-b border-primary/10"
          style={{ borderTop: "3px solid #1D8348", boxShadow: "0 4px 32px 0 rgba(29,131,72,0.10)" }}
        >
          <h3
            className="font-bold text-dark mb-2"
            style={{ fontFamily: "var(--font-display)" }}
          >
            CRecTech · CRecREF™ Process
          </h3>
          <p className="text-primary text-sm font-semibold mb-5">
            2 steps · 50% lower cost · Carbon neutral
          </p>
          <ol className="space-y-3">
            {crectech.map((step, i) => (
              <li key={i} className="flex items-start gap-3 text-sm text-dark/70">
                <span className="w-6 h-6 rounded-full bg-primary text-white text-xs font-bold flex items-center justify-center shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {step}
              </li>
            ))}
          </ol>
          <div className="mt-5 pt-5 border-t border-primary/10 text-xs text-primary font-semibold">
            No CCS required · CO₂ used as reactant · 95% shipping emission cut
          </div>
        </motion.div>
      </div>
    </section>
  );
}
