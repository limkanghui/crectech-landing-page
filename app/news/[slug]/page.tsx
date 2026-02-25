import { newsItems } from "@/lib/news";
import NewsArticleClient from "./NewsArticleClient";

export function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export default async function NewsArticlePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  return <NewsArticleClient slug={slug} />;
}
