"use client";
import PageHero from "@/components/PageHero";
import NewsGrid from "@/components/news/NewsGrid";

export default function NewsPage() {
  return (
    <main>
      <PageHero title="News" />
      <NewsGrid />
    </main>
  );
}
