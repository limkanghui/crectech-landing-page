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
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" as const },
  },
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
  const scrollRef = useRef<HTMLDivElement>(null);
  const videoWrapRef = useRef<HTMLDivElement>(null);
  const mountedRef = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const container = scrollRef.current;
    const wrapper = videoWrapRef.current;
    if (!container || !wrapper) return;

    let ticking = false;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const ch = container.offsetHeight;
      const vh = window.innerHeight;

      // 0 = container top at viewport bottom, 1 = container bottom at viewport top
      const raw = -rect.top / (ch - vh);
      const p = Math.max(0, Math.min(1, raw));

      // Fade in: 0 to 20%
      const fadeIn = Math.min(1, p / 0.2);
      // Stay visible: 20% to 70%
      // Dissolve: 70% to 92%
      const fadeOut = p > 0.7 ? Math.max(0, 1 - (p - 0.7) / 0.22) : 1;

      const opacity = fadeIn * fadeOut;
      const scale = 0.88 + fadeIn * 0.12;

      wrapper.style.opacity = String(opacity);
      wrapper.style.transform = "scale(" + scale + ")";

      if (p > 0.02 && !mountedRef.current) {
        mountedRef.current = true;
        setIsMounted(true);
      }

      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    update();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Cinematic dark section with heading + feature cards */}
      <section className="relative bg-dark py-24 md:py-36 overflow-hidden">
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, white 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />

        <div className="relative max-w-7xl mx-auto px-6">
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

      {/* Fullscreen cinematic video - sticky scroll effect */}
      <div ref={scrollRef} style={{ height: "220vh" }} className="relative bg-dark">
        <div className="sticky top-0 h-screen w-full overflow-hidden">
          <div
            ref={videoWrapRef}
            className="w-full h-full"
            style={{
              opacity: 0,
              transform: "scale(0.88)",
              willChange: "opacity, transform",
            }}
          >
            {isMounted && (
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
          </div>
        </div>
      </div>

      {/* Closing tagline after video */}
      <section className="bg-bg-alt py-12">
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="text-center px-6 italic"
          style={{ color: "var(--color-muted)" }}
        >
          At CRecTech we strive to provide a total carbon recycle solution.
        </motion.p>
      </section>
    </>
  );
}
