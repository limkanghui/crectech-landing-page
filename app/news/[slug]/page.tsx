"use client";
import { useParams } from "next/navigation";
import { motion } from "framer-motion";
import Image from "next/image";
import { fadeInUp } from "@/lib/animations";
import { newsItems } from "@/lib/news";

export default function NewsArticlePage() {
  const params = useParams();
  const slug = params.slug as string;
  const article = newsItems.find((n) => n.slug === slug);

  if (!article) {
    return (
      <main className="pt-32 pb-20 text-center">
        <h1 className="text-2xl font-bold text-dark">Article not found</h1>
        <a href="/news" className="mt-4 inline-block text-primary font-semibold">
          &larr; Back to News
        </a>
      </main>
    );
  }

  return (
    <main>
      <section className="relative pt-28 pb-0 overflow-hidden bg-dark">
        <div className="relative w-full max-w-5xl mx-auto aspect-[21/9]">
          <Image
            src={article.image}
            alt={article.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-t from-dark/80 via-dark/30 to-transparent" />
        </div>
      </section>

      <section className="px-6 py-12 md:py-16 max-w-3xl mx-auto">
        <motion.div
          initial={fadeInUp.initial}
          animate={fadeInUp.animate}
          transition={fadeInUp.transition}
        >
          <a
            href="/news"
            className="inline-flex items-center gap-2 text-primary text-sm font-semibold mb-6 hover:gap-3 transition-all"
          >
            &larr; Back to News
          </a>

          <p className="text-primary text-sm font-semibold mb-3">{article.date}</p>

          <h1
            className="text-3xl md:text-4xl font-bold text-dark leading-tight mb-8"
            style={{ fontFamily: "var(--font-display)" }}
          >
            {article.title}
          </h1>

          <div className="space-y-5">
            {article.body.map((paragraph, i) => (
              <p
                key={i}
                className="text-base leading-relaxed"
                style={{ color: "var(--color-muted)" }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="mt-12 pt-8 border-t border-primary/10">
            <a
              href="/news"
              className="inline-flex items-center gap-2 text-primary text-sm font-semibold hover:gap-3 transition-all"
            >
              &larr; Back to all news
            </a>
          </div>
        </motion.div>
      </section>
    </main>
  );
}
