"use client";
import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const VIDEO_ID = "3e3UZNeTo1Q";
const VIDEO_TITLE = "CRecTech Revolutionary Bio-methanol Technology";
const VIDEO_THUMB = "https://img.youtube.com/vi/" + VIDEO_ID + "/maxresdefault.jpg";

export default function SystemsGrid() {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = useCallback(() => {
    setIsOpen(true);
    document.body.style.overflow = "hidden";
  }, []);

  const handleClose = useCallback(() => {
    setIsOpen(false);
    document.body.style.overflow = "";
  }, []);

  // ESC key to close
  useEffect(() => {
    if (!isOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") handleClose();
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [isOpen, handleClose]);

  return (
    <>
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
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
            {/* Text content */}
            <motion.div
              initial={slideInLeft.initial}
              whileInView={slideInLeft.animate}
              viewport={{ once: true, margin: "-80px" }}
              transition={slideInLeft.transition}
              className="space-y-5"
            >
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
              <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
                Our system is an ideal low CAPEX and OPEX model which can be
                deployed simultaneously in different far reaching locations to
                reduce reliance on single point of production source, reducing
                dependence on imported energy, and increase domestic production.
              </p>
              <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
                At CRecTech we strive to provide a total carbon recycle solution.
              </p>
            </motion.div>

            {/* Video thumbnail - click to pop out */}
            <motion.div
              initial={slideInRight.initial}
              whileInView={slideInRight.animate}
              viewport={{ once: true, margin: "-80px" }}
              transition={slideInRight.transition}
            >
              <div
                className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-dark group cursor-pointer"
                onClick={handleOpen}
              >
                <img
                  src={VIDEO_THUMB}
                  alt={VIDEO_TITLE}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                {/* Dark overlay */}
                <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/15 transition-colors duration-300" />
                {/* Animated play button */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <motion.div
                    whileHover={{ scale: 1.12 }}
                    whileTap={{ scale: 0.92 }}
                    className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-primary/30"
                  >
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                      <path d="M8 5v14l11-7z" />
                    </svg>
                  </motion.div>
                </div>
                {/* Video title */}
                <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark/80 to-transparent">
                  <p className="text-white text-sm font-medium">{VIDEO_TITLE}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Fullscreen pop-out overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="video-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
            className="fixed inset-0 z-50 bg-dark/95 backdrop-blur-lg"
            onClick={handleClose}
            onWheel={(e) => {
              if (Math.abs(e.deltaY) > 30) handleClose();
            }}
          >
            {/* Close button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onClick={handleClose}
              className="absolute top-6 right-6 z-10 w-11 h-11 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors"
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12" />
              </svg>
            </motion.button>

            {/* Centered iframe - pops up from thumbnail scale */}
            <div className="flex items-center justify-center h-full px-4 md:px-10">
              <motion.div
                initial={{ scale: 0.55, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.8, opacity: 0, y: 80 }}
                transition={{
                  duration: 0.55,
                  ease: [0.22, 1, 0.36, 1],
                }}
                className="w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl shadow-black/50"
                onClick={(e) => e.stopPropagation()}
              >
                <iframe
                  src={"https://www.youtube.com/embed/" + VIDEO_ID + "?autoplay=1&rel=0"}
                  title={VIDEO_TITLE}
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full"
                />
              </motion.div>
            </div>

            {/* Scroll-down hint */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2, duration: 0.6 }}
              className="absolute bottom-8 left-0 right-0 text-center pointer-events-none"
            >
              <p className="text-white/40 text-xs tracking-wide mb-2">Scroll to close</p>
              <motion.div
                animate={{ y: [0, 6, 0] }}
                transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="1.5" strokeLinecap="round" className="mx-auto opacity-30">
                  <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
                </svg>
              </motion.div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
