import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { CalendarDays, ArrowLeft } from "lucide-react";
import { getHubNewsBySlug, HUB_NEWS_ARTICLES } from "@/data/hubNews";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return HUB_NEWS_ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const article = getHubNewsBySlug(slug);
  if (!article) return { title: "Article" };
  return {
    title: article.title,
    description: article.excerpt,
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const article = getHubNewsBySlug(slug);
  if (!article) notFound();

  return (
    <article className="min-w-0 bg-zinc-50 pb-20 pt-8">
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <Link
          href="/news"
          className="inline-flex items-center gap-2 text-sm font-semibold mt-20 text-blue-700 hover:text-blue-800"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Popular News
        </Link>

        <header className="mt-8 rounded-2xl bg-white p-8 ring-1 ring-zinc-100 sm:p-10">
          <p className="text-[12px] font-semibold tracking-[0.18em] text-zinc-500">
            {article.category}
          </p>
          <h1 className="mt-3 text-2xl font-semibold leading-tight text-zinc-900 sm:text-3xl">
            {article.title}
          </h1>
          <div className="mt-4 flex items-center gap-2 text-sm text-zinc-500">
            <CalendarDays className="h-4 w-4" />
            {article.date}
          </div>
        </header>

        <div className="mt-8 overflow-hidden rounded-2xl ring-1 ring-zinc-200">
          <img
            src={article.image}
            alt=""
            className="aspect-[21/9] w-full object-cover sm:aspect-[2/1]"
          />
        </div>

        <div className="mt-10 rounded-2xl bg-white p-8 ring-1 ring-zinc-100 sm:p-10">
          <p className="text-lg leading-relaxed text-zinc-700">{article.excerpt}</p>
          <div className="mt-8 space-y-5 text-[15px] leading-relaxed text-zinc-600">
            {article.body.map((para, i) => (
              <p key={i}>{para}</p>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
