"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { fadeInUp, slideInLeft, slideInRight } from "@/lib/animations";

const videos = [
  {
    id: "3e3UZNeTo1Q",
    title: "CRecTech Revolutionary Bio-methanol Technology",
    thumb: "https://img.youtube.com/vi/3e3UZNeTo1Q/maxresdefault.jpg",
  },
  {
    id: "ibW1T-Gr-0g",
    title: "CRecTech Bio-methanol Technology Introduction",
    thumb: "https://img.youtube.com/vi/ibW1T-Gr-0g/maxresdefault.jpg",
  },
  {
    id: "qp-vzf8ctJk",
    title: "CRecTech Green Bio-Methanol Technology",
    thumb: "https://img.youtube.com/vi/qp-vzf8ctJk/maxresdefault.jpg",
  },
];

export default function SystemsGrid() {
  const [activeVideo, setActiveVideo] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);

  return (
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

          {/* Interactive video showcase */}
          <motion.div
            initial={slideInRight.initial}
            whileInView={slideInRight.animate}
            viewport={{ once: true, margin: "-80px" }}
            transition={slideInRight.transition}
            className="space-y-4"
          >
            {/* Main video player */}
            <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl bg-dark group">
              <AnimatePresence mode="wait">
                {isPlaying ? (
                  <motion.iframe
                    key={"iframe-" + videos[activeVideo].id}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    src={"https://www.youtube.com/embed/" + videos[activeVideo].id + "?autoplay=1&rel=0"}
                    title={videos[activeVideo].title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="absolute inset-0 w-full h-full"
                  />
                ) : (
                  <motion.div
                    key={"thumb-" + videos[activeVideo].id}
                    initial={{ opacity: 0, scale: 1.05 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                    className="absolute inset-0 cursor-pointer"
                    onClick={() => setIsPlaying(true)}
                  >
                    {/* Thumbnail */}
                    <img
                      src={videos[activeVideo].thumb}
                      alt={videos[activeVideo].title}
                      className="w-full h-full object-cover"
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-dark/30 group-hover:bg-dark/20 transition-colors duration-300" />
                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <motion.div
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.95 }}
                        className="w-20 h-20 rounded-full bg-primary/90 backdrop-blur-sm flex items-center justify-center shadow-2xl shadow-primary/30"
                      >
                        <svg width="32" height="32" viewBox="0 0 24 24" fill="white">
                          <path d="M8 5v14l11-7z" />
                        </svg>
                      </motion.div>
                    </div>
                    {/* Video title overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4 bg-gradient-to-t from-dark/80 to-transparent">
                      <p className="text-white text-sm font-medium">{videos[activeVideo].title}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>

            {/* Video selector thumbnails */}
            <div className="grid grid-cols-3 gap-3">
              {videos.map((v, i) => (
                <motion.button
                  key={v.id}
                  whileHover={{ scale: 1.03 }}
                  whileTap={{ scale: 0.97 }}
                  onClick={() => { setActiveVideo(i); setIsPlaying(false); }}
                  className={"relative rounded-lg overflow-hidden aspect-video shadow-md transition-all duration-300 " + (i === activeVideo ? "ring-2 ring-primary ring-offset-2" : "opacity-70 hover:opacity-100")}
                >
                  <img
                    src={v.thumb}
                    alt={v.title}
                    className="w-full h-full object-cover"
                  />
                  {i === activeVideo && (
                    <div className="absolute inset-0 bg-primary/10" />
                  )}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className={"w-8 h-8 rounded-full flex items-center justify-center " + (i === activeVideo ? "bg-primary" : "bg-dark/50")}>
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="white">
                        <path d="M8 5v14l11-7z" />
                      </svg>
                    </div>
                  </div>
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
