"use client";
import { useRef, useState, useEffect } from "react";
import { motion } from "framer-motion";
import { fadeInUp } from "@/lib/animations";

const VIDEO_ID = "3e3UZNeTo1Q";
const VIDEO_TITLE = "CRecTech Revolutionary Bio-methanol Technology";

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
          // Entering viewport - clear any pending dissolve
          if (exitTimer) {
            clearTimeout(exitTimer);
            exitTimer = null;
          }
          enteredOnce = true;
          setHasEntered(true);
          setIsVisible(true);
        } else if (enteredOnce) {
          // Leaving viewport - dissolve with a small delay
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
    <section className="bg-bg-alt pt-24 md:pt-32 pb-12 md:pb-20">
      <div className="max-w-7xl mx-auto px-6">
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

      {/* Full-width video - fades in on scroll, dissolves on exit */}
      <div ref={videoRef} className="mt-16 px-4 md:px-8 lg:px-12">
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
    </section>
  );
}
