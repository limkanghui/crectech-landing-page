"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { staggerContainer, staggerItem } from "@/lib/animations";
import { newsItems } from "@/lib/news";

const PAGE_SIZE = 9;

export default function NewsGrid() {
  const [visibleCount, setVisibleCount] = useState(PAGE_SIZE);

  const visibleItems = newsItems.slice(0, visibleCount);
  const hasMore = visibleCount < newsItems.length;

  return (
    <section className="px-6 py-24 md:py-32 max-w-7xl mx-auto">
      <motion.div
        variants={staggerContainer}
        initial="initial"
        animate="animate"
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
      >
        {visibleItems.map((item) => (
          <motion.a
            key={item.slug}
            href={"/news/" + item.slug}
            variants={staggerItem}
            whileHover={{ y: -4, scale: 1.01 }}
            className="rounded-2xl overflow-hidden bg-white border border-primary/10 shadow-sm block group"
          >
            <div className="relative w-full aspect-[16/10] overflow-hidden bg-gray-100">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="p-5">
              <p className="text-primary text-xs font-semibold mb-2">{item.date}</p>
              <h3
                className="font-bold text-dark text-sm leading-snug group-hover:text-primary transition-colors"
                style={{ fontFamily: "var(--font-display)" }}
              >
                {item.title}
              </h3>
            </div>
          </motion.a>
        ))}
      </motion.div>

      {hasMore && (
        <div className="mt-12 text-center">
          <button
            onClick={() => setVisibleCount((c) => c + PAGE_SIZE)}
            className="inline-flex items-center gap-2 px-8 py-3.5 rounded-lg bg-primary text-white font-semibold hover:bg-primary/90 transition-colors text-sm"
          >
            Load More
          </button>
        </div>
      )}
    </section>
  );
}
