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
            variants={staggerItem}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl overflow-hidden bg-white border border-primary/10 shadow-sm block group"
          >
            <div
              className="h-36 flex items-center justify-center p-6"
              style={{ backgroundColor: item.coverColor }}
            >
              <span className="text-white font-bold text-sm text-center leading-snug opacity-80">
                CRecTech
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
