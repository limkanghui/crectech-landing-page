"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";

const VIDEO_ID = "3e3UZNeTo1Q";
const VIDEO_TITLE = "CRecTech Revolutionary Bio-methanol Technology";

const features = [
  {
    title: "Modular Design",
    desc: "Catalytic reactor housed in a shipping container for rapid plug-and-play deployment into existing plant resources.",
    icon: "box",
  },
  {
    title: "Scalable Production",
    desc: "Baseline capacity of 10 kilo metric tonnes per annum, easily scalable and deployable across multiple locations.",
    icon: "scale",
  },
  {
    title: "Cost Efficient",
    desc: "Low CAPEX and OPEX model reducing dependence on imported energy and single-point production sources.",
    icon: "cost",
  },
];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

function BoxIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 16V8a2 2 0 00-1-1.73l-7-4a2 2 0 00-2 0l-7 4A2 2 0 003 8v8a2 2 0 001 1.73l7 4a2 2 0 002 0l7-4A2 2 0 0021 16z" />
      <polyline points="3.27 6.96 12 12.01 20.73 6.96" />
      <line x1="12" y1="22.08" x2="12" y2="12" />
    </svg>
  );
}

function ScaleIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="20" x2="12" y2="4" />
      <polyline points="6 10 12 4 18 10" />
      <line x1="4" y1="20" x2="20" y2="20" />
    </svg>
  );
}

function CostIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
      <line x1="12" y1="1" x2="12" y2="23" />
      <path d="M17 5H9.5a3.5 3.5 0 000 7h5a3.5 3.5 0 010 7H6" />
    </svg>
  );
}

const iconMap: Record<string, React.FC> = { box: BoxIcon, scale: ScaleIcon, cost: CostIcon };

export default function SystemsGrid() {
  const videoRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasEntered, setHasEntered] = useState(false);

  useEffect(() => {
    const el = videoRef.current;
    if (!el) return;

    let exitTimer: ReturnType<typeof setTimeout> | null = null;
    let enteredOnce = false;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          if (exitTimer) {
            clearTimeout(exitTimer);
            exitTimer = null;
          }
          enteredOnce = true;
          setHasEntered(true);
          setIsVisible(true);
        } else if (enteredOnce) {
          exitTimer = setTimeout(() => {
            setIsVisible(false);
          }, 500);
        }
      },
      { threshold: 0.12 }
    );

    observer.observe(el);
    return () => {
      observer.disconnect();
      if (exitTimer) clearTimeout(exitTimer);
    };
  }, []);

  return (
    <>
      {/* Cinematic dark section with heading + feature cards */}
      <section className="relative bg-dark py-24 md:py-36 overflow-hidden">
        {/* Subtle dot pattern */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
          {/* Heading */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-80px" }}
            transition={{ duration: 0.7 }}
            className="text-center mb-5"
          >
            <h2
              className="text-3xl md:text-5xl font-bold text-white"
              style={{ fontFamily: "var(--font-display)" }}
            >
              Our Unique <span className="text-primary-light">Systems</span>
            </h2>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center text-white/50 text-lg mb-16 max-w-2xl mx-auto"
          >
            A total carbon recycle solution built for rapid deployment
          </motion.p>

          {/* Feature cards */}
          <motion.div
            variants={stagger}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            className="grid grid-cols-1 md:grid-cols-3 gap-5"
          >
            {features.map((f, i) => {
              const Icon = iconMap[f.icon];
              return (
                <motion.div
                  key={i}
                  variants={fadeUp}
                  whileHover={{ y: -4, transition: { duration: 0.25 } }}
                  className="bg-white/[0.04] backdrop-blur-sm rounded-xl p-6 border border-white/[0.08] hover:bg-white/[0.07] transition-colors duration-300"
                >
                  <div className="w-12 h-12 rounded-lg bg-primary/20 text-primary-light flex items-center justify-center mb-4">
                    <Icon />
                  </div>
                  <h3
                    className="text-white font-semibold text-lg mb-2"
                    style={{ fontFamily: "var(--font-display)" }}
                  >
                    {f.title}
                  </h3>
                  <p className="text-white/50 text-sm leading-relaxed">{f.desc}</p>
                </motion.div>
              );
            })}
          </motion.div>
        </div>
      </section>

      {/* Video section - preserved exactly as is */}
      <section className="bg-bg-alt pt-12 md:pt-16 pb-12 md:pb-20">
        <div ref={videoRef} className="px-4 md:px-8 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50, scale: 0.94 }}
            animate={
              isVisible
                ? { opacity: 1, y: 0, scale: 1 }
                : { opacity: 0, y: -20, scale: 0.97 }
            }
            transition={{
              duration: 1,
              ease: [0.25, 0.46, 0.45, 0.94],
            }}
            className="max-w-6xl mx-auto aspect-video rounded-2xl overflow-hidden shadow-2xl bg-dark"
          >
            {hasEntered && (
              <iframe
                src={
                  "https://www.youtube.com/embed/" +
                  VIDEO_ID +
                  "?autoplay=1&mute=1&rel=0&loop=1&playlist=" +
                  VIDEO_ID
                }
                title={VIDEO_TITLE}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full"
              />
            )}
          </motion.div>
        </div>

        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center mt-10 px-6"
          style={{ color: "var(--color-muted)" }}
        >
          At CRecTech we strive to provide a total carbon recycle solution.
        </motion.p>
      </section>
    </>
  );
}
