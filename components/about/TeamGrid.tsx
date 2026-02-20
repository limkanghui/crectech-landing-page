"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const founders = [
  {
    name: "Dr. Kang Hui LIM",
    title: "Co-Founder & Chief Executive Officer",
    img: "/images/team/kang-hui.png",
    bio: "Ph.D. Chemical Engineering, NUS (President's Graduate Fellow). Forbes 30 Under 30. 50+ papers in JACS, Advanced Materials, ACS Catalysis.",
    linkedin: "#",
  },
  {
    name: "Dr. Kok Giap Haw",
    title: "Co-Founder & Chief Technology Officer",
    img: "/images/team/kok-giap.png",
    bio: "Ph.D. Chemistry, University of Caen (2015). Post-doctoral researcher across France, Belgium, China, and Singapore. Expert in catalysis and porous materials.",
    linkedin: "#",
  },
  {
    name: "KK Lai",
    title: "Vice President, Business Development",
    img: "/images/team/kk-lai.png",
    bio: "40+ years of global agricultural supply chain and logistics experience with ADM, Conagra, FE Zuellig, FCStone, and Yugrusi.",
    linkedin: "#",
  },
];

const engineers = [
  { name: "Patnam Ramalingam", title: "Senior Process Engineer", img: "/images/team/rama.png", linkedin: "#" },
  { name: "Muhammad Syahid Bin Husuhaimi", title: "Process Engineer", img: "/images/team/syahid.png", linkedin: "#" },
  { name: "Kyle Tye Hao Fei", title: "Process Engineer", img: "/images/team/kyle.png", linkedin: "#" },
];

export default function TeamGrid() {
  return (
    <section className="bg-bg-alt py-24 md:py-28 px-6">
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
            Our <span className="text-primary">Team</span>
          </h2>
          <p className="mt-3 max-w-lg mx-auto" style={{ color: "var(--color-muted)" }}>
            A talented team committed to turning our ambitions of a carbon
            renewable technology into reality.
          </p>
        </motion.div>

        {/* Founders */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10"
        >
          {founders.map((m) => (
            <motion.div
              key={m.name}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-6 bg-white border border-primary/10 shadow-sm text-center"
            >
              <div className="relative w-24 h-24 mx-auto mb-4">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="rounded-full object-cover border-4 border-primary/20"
                />
              </div>
              <h3
                className="font-bold text-dark text-base"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.name}
              </h3>
              <p className="text-primary text-xs font-semibold mt-0.5 mb-3">{m.title}</p>
              <p className="text-xs leading-relaxed mb-4" style={{ color: "var(--color-muted)" }}>{m.bio}</p>
              <a
                href={m.linkedin}
                aria-label={`${m.name} on LinkedIn`}
                className="inline-flex items-center justify-center w-8 h-8 rounded bg-[#0077B5] text-white text-xs font-bold hover:opacity-90"
              >
                in
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Engineers */}
        <motion.div
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true, margin: "-80px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {engineers.map((m) => (
            <motion.div
              key={m.name}
              variants={staggerItem}
              whileHover={{ y: -4 }}
              className="rounded-2xl p-5 bg-white border border-primary/10 shadow-sm text-center"
            >
              <div className="relative w-20 h-20 mx-auto mb-3">
                <Image
                  src={m.img}
                  alt={m.name}
                  fill
                  className="rounded-full object-cover border-4 border-primary/10"
                />
              </div>
              <h3
                className="font-bold text-dark text-sm"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {m.name}
              </h3>
              <p className="text-primary text-xs font-semibold mt-0.5 mb-3">{m.title}</p>
              <a
                href={m.linkedin}
                aria-label={`${m.name} on LinkedIn`}
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
