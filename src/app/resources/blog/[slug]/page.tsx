import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { getHubNewsBySlug, HUB_NEWS_ARTICLES } from "@/data/hubNews";

type Props = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return HUB_NEWS_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getHubNewsBySlug(slug);
  if (!article) return { title: "Article not found" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function BlogArticle({ params }: Props) {
  const { slug } = await params;
  const article = getHubNewsBySlug(slug);

  if (!article) {
    notFound();
  }

  return (
    <div className="w-full flex justify-center bg-[#8B4513]/5 pb-16">
      <div className="w-full max-w-[960px] py-10 px-4 sm:px-6">
        <Link
          href="/resources/blog"
          className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B4513] hover:text-[#6f3610] transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Hospitality Insights
        </Link>

        <header className="mt-8 rounded-2xl border border-[#E2E8F0] bg-white p-8 sm:p-10 shadow-sm">
          <p className="text-xs font-bold tracking-[0.2em] text-[#8B4513]">{article.category}</p>
          <h1 className="mt-3 text-3xl font-extrabold leading-tight text-[#0F172A] sm:text-4xl">
            {article.title}
          </h1>
          <p className="mt-3 text-sm text-[#64748B]">{article.date}</p>
          <p className="mt-6 text-lg leading-relaxed text-[#475569]">{article.excerpt}</p>
        </header>

        <div className="mt-8 overflow-hidden rounded-2xl border border-[#E2E8F0] shadow-sm">
          <img
            src={article.image}
            alt={article.title}
            className="aspect-[21/9] w-full object-cover"
          />
        </div>

        {article.keyPoints && article.keyPoints.length > 0 && (
          <div className="mt-8 rounded-2xl border border-[#8B4513]/20 bg-white p-8 shadow-sm">
            <h2 className="text-sm font-bold uppercase tracking-[0.16em] text-[#8B4513]">
              Why this matters
            </h2>
            <ul className="mt-4 space-y-3">
              {article.keyPoints.map((point) => (
                <li key={point} className="flex gap-3 text-[#0F172A]">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-[#10B981]" />
                  <span className="text-[15px] leading-relaxed text-[#334155]">{point}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        <article className="mt-8 space-y-6 rounded-2xl border border-[#E2E8F0] bg-white p-8 sm:p-10 shadow-sm">
          {article.body.map((p, i) => (
            <p key={i} className="text-[16px] leading-[28px] text-[#334155]">
              {p}
            </p>
          ))}
        </article>

        {article.closingNote && (
          <blockquote className="mt-8 rounded-2xl border-l-4 border-[#8B4513] bg-white px-8 py-6 shadow-sm">
            <p className="text-[17px] font-medium italic leading-relaxed text-[#0F172A]">
              {article.closingNote}
            </p>
          </blockquote>
        )}

        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-between">
          <Link
            href="/resources/blog"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#8B4513] px-8 text-sm font-semibold text-white transition hover:bg-[#6f3610]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to all insights
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-[#8B4513] px-8 text-sm font-semibold text-[#8B4513] transition hover:bg-[#8B4513]/5"
          >
            Talk to our team
          </Link>
        </div>
      </div>
    </div>
  );
}
