"use client";
import { motion } from "framer-motion";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { newsItems } from "@/lib/news";

export default function NewsGrid() {
  return (
    <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {newsItems.map((item) => (
          <motion.a
            key={item.title}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            variants={staggerItem}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl overflow-hidden bg-white border border-primary/10 shadow-sm block group"
          >
            <div
              className="h-36 flex flex-col items-start justify-end p-5 relative overflow-hidden"
              style={{
                background: `linear-gradient(135deg, ${item.coverColor} 0%, ${item.coverColorDark} 100%)`,
              }}
            >
              {/* Subtle dot texture */}
              <div
                className="absolute inset-0 opacity-10"
                style={{
                  backgroundImage: "radial-gradient(circle at 2px 2px, rgba(255,255,255,0.8) 1px, transparent 0)",
                  backgroundSize: "20px 20px",
                }}
              />
              <span className="relative text-white/50 text-xs uppercase tracking-widest font-medium">
                {item.source}
              </span>
            </div>
            <div className="p-6">
              <p className="text-primary text-xs font-semibold mb-2">{item.date}</p>
              <h3
                className="font-bold text-dark text-sm leading-snug mb-2 group-hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h3>
              <p className="text-xs leading-relaxed" style={{ color: "var(--color-muted)" }}>
                {item.excerpt}
              </p>
            </div>
          </motion.a>
        ))}
      </motion.div>
    </section>
  );
}
