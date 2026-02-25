"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp, staggerContainer, staggerItem } from "@/lib/animations";

const founders = [
  {
    name: "Dr. Kang Hui LIM",
    title: "Co-Founder & Chief Executive Officer",
    img: "/images/team/kang-hui.png",
    bio: "Dr. Kang Hui Lim holds a Ph.D. in Chemical Engineering from the National University of Singapore, where he was a President\u2019s Graduate Fellow. His expertise includes thermal and non-thermal catalysis, catalytic process modeling, technoeconomic analysis and system optimization. He has published over 50 papers in leading journals such as JACS, Advanced Materials, and ACS Catalysis. He also holds dual first-class honours degrees in Chemical Engineering and Quantitative Economics from NUS and is a Forbes 30 Under 30 honoree. At CRecTech, he leads the company\u2019s business and scale-up strategy for its renewable bio-methanol technology.",
    linkedin: "https://www.linkedin.com/in/lim-kang-hui/",
  },
  {
    name: "Dr. Kok Giap Haw",
    title: "Co-Founder & Chief Technology Officer",
    img: "/images/team/kok-giap.png",
    bio: "Dr. Kok Giap Haw received his Ph.D. degree in chemistry from the University of Caen (UNICAEN), France, in 2015. He gained an extensive research background as a post-doctoral researcher in France, Belgium, China, and Singapore. Notably, he had a stint with TotalEnergies to develop scalable and commercially viable fluid catalytic cracking catalysts during his Ph.D. study. His primary research expertise is devoted to synthesizing and modifying zeolites and other porous materials that can be used for catalysis, adsorption, and separation, having published in top journals ranging from Angewandte Chemie, ACS Catalysis, etc. With more than ten years of experience in these areas, he is passionate about bringing new catalytic technologies to market.",
    linkedin: "https://www.linkedin.com/in/kghaw/",
  },
  {
    name: "KK Lai",
    title: "Vice President, Business Development",
    img: "/images/team/kk-lai.png",
    bio: "KK Lai brings over 40 years of global agricultural supply chain and logistics experience in grains, proteins, and edible oils with ADM, Conagra, FE Zuellig, FCStone, and Yugrusi.",
    linkedin: "https://www.linkedin.com/in/kk-lai-16394b15a/",
  },
];

const engineers = [
  { name: "Patnam Ramalingam", title: "Senior Process Engineer", img: "/images/team/rama.png", linkedin: "https://www.linkedin.com/in/patnam-ramalingam-3a10a815/" },
  { name: "Muhammad Syahid Bin Husuhaimi", title: "Process Engineer", img: "/images/team/syahid.png", linkedin: "https://www.linkedin.com/in/msyahidbh/" },
  { name: "Kyle Tye Hao Fei", title: "Process Engineer", img: "/images/team/kyle.png", linkedin: "https://www.linkedin.com/in/tyehaofei/" },
];

export default function TeamGrid() {
  return (
    <section className="px-6 py-24 md:py-28">
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
            We are a talented team committed to turning our ambitions of a carbon
            renewable technology a reality.
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
                target="_blank"
                rel="noopener noreferrer"
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
                target="_blank"
                rel="noopener noreferrer"
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
