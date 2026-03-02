"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const VIDEO_ID = "3e3UZNeTo1Q";
const VIDEO_TITLE = "CRecTech Revolutionary Bio-methanol Technology";

export default function SystemsGrid() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const hasEnteredRef = useRef(false);
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    const container = scrollContainerRef.current;
    const wrapper = videoWrapperRef.current;
    if (!container || !wrapper) return;

    let ticking = false;

    const update = () => {
      const rect = container.getBoundingClientRect();
      const containerH = container.offsetHeight;
      const vh = window.innerHeight;

      // progress 0 = container top at viewport bottom
      // progress 1 = container bottom at viewport top
      const raw = -rect.top / (containerH - vh);
      const p = Math.max(0, Math.min(1, raw));

      // Fade in: 0% to 18% of scroll
      const fadeIn = Math.min(1, p / 0.18);
      // Stay visible: 18% to 72%
      // Dissolve out: 72% to 92% (delayed dissolve)
      const fadeOut = p > 0.72 ? Math.max(0, 1 - (p - 0.72) / 0.2) : 1;

      const opacity = fadeIn * fadeOut;
      const scale = 0.85 + fadeIn * 0.15;

      wrapper.style.opacity = String(opacity);
      wrapper.style.transform = "scale(" + scale + ")";

      if (p > 0.03 && !hasEnteredRef.current) {
        hasEnteredRef.current = true;
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
    <section className="bg-bg-alt pt-24 md:pt-32">
      <div className="max-w-7xl mx-auto px-6 pb-12">
        {/* Section heading */}
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
        </motion.div>

        {/* Text content - two columns on desktop */}
        <motion.div
          initial={fadeInUp.initial}
          whileInView={fadeInUp.animate}
          viewport={{ once: true, margin: "-80px" }}
          transition={fadeInUp.transition}
          className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-5"
        >
          <div className="space-y-5">
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              At CRecTech, our philosophy is to build a modular system which our
              main catalytic reactor is housed in no more than a shipping
              container unit. This enables a rapid deployment in a
              plug-and-play modus operandi tapping readily into the
              plant&apos;s existing resources such as biogas, heat and steam.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Our baseline system is capable of producing up to 10 kilo metric
              tonnes per annum and is easily scalable to meet your needs.
            </p>
          </div>
          <div className="space-y-5">
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              Our system is an ideal low CAPEX and OPEX model which can be
              deployed simultaneously in different far reaching locations to
              reduce reliance on single point of production source, reducing
              dependence on imported energy, and increase domestic production.
            </p>
            <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
              At CRecTech we strive to provide a total carbon recycle solution.
            </p>
          </div>
        </motion.div>
      </div>

      {/* Tall scroll container for sticky fullscreen video effect */}
      <div ref={scrollContainerRef} style={{ height: "200vh" }} className="relative">
        <div className="sticky top-0 h-screen flex items-center justify-center bg-dark overflow-hidden">
          <div
            ref={videoWrapperRef}
            className="w-full h-full"
            style={{
              opacity: 0,
              transform: "scale(0.85)",
              transition: "opacity 0.12s ease-out, transform 0.12s ease-out",
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
    </section>
  );
}
