import ArticleCard from "./ArticleCard";
import type { HubNewsArticle } from "@/data/hubNews";

type Props = {
  articles: HubNewsArticle[];
};

export default function Articles({ articles }: Props) {
  if (articles.length === 0) {
    return (
      <div className="w-[960px] p-[32px] text-center">
        <p className="text-[16px] text-[#64748B]">
          No articles in this category yet. Try another filter.
        </p>
      </div>
    );
  }

  return (
    <div className="w-[960px] p-[32px] grid grid-cols-3 gap-[32px]">
      {articles.map((a) => (
        <ArticleCard
          key={a.slug}
          img={a.image.startsWith("http") ? "/featured-post.png" : a.image}
          header={a.category}
          timer={a.date}
          title={a.title}
          description={a.excerpt}
          href={`/resources/blog/${a.slug}`}
        />
      ))}
    </div>
  );
}
