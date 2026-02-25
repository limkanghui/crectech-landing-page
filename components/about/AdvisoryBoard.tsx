"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const advisors = [
  { name: "Sameer Kalra", img: "/images/advisors/sameer.png", linkedin: "https://www.linkedin.com/in/sameer-kalra-2a3b4b8" },
  { name: "Lim Heng Young", img: "/images/advisors/lim-heng-young.png", linkedin: "https://www.linkedin.com/in/hengyoung-lim/" },
  { name: "Saw Biing Huei", img: "/images/advisors/saw-biing-huei.png", linkedin: "https://www.linkedin.com/in/biingsaw/" },
  { name: "Colin Chua", img: "/images/advisors/colin-chua.png", linkedin: "https://www.linkedin.com/in/colin-chua-8a3878a3/" },
];

export default function AdvisoryBoard() {
  return (
    <section className="bg-bg-alt px-6 py-24 md:py-28">
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
            Board of <span className="text-primary">Advisory</span>
          </h2>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {advisors.map((a) => (
            <motion.div
              key={a.name}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 bg-white border border-primary/10 shadow-sm text-center"
            >
              <div className="relative w-40 h-40 mx-auto mb-4">
                <Image
                  src={a.img}
                  alt={a.name}
                  fill
                  className="rounded-full object-cover border-4 border-primary/15"
                />
              </div>
              <h3
                className="font-bold text-dark text-sm mb-3"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {a.name}
              </h3>
              <a
                href={a.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${a.name} on LinkedIn`}
                className="inline-flex items-center justify-center w-7 h-7 rounded bg-[#0077B5] text-white text-xs font-bold hover:opacity-90"
              >
                in
              </a>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
