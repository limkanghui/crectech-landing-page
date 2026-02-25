import { newsItems } from "@/lib/news";
import NewsArticleClient from "./NewsArticleClient";

export function generateStaticParams() {
  return newsItems.map((item) => ({
    slug: item.slug,
  }));
}

export default function NewsArticlePage({ params }: { params: { slug: string } }) {
  return <NewsArticleClient slug={params.slug} />;
}
