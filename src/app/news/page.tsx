import type { Metadata } from "next";
import Link from "next/link";
import { CalendarDays } from "lucide-react";
import { HUB_NEWS_ARTICLES } from "@/data/hubNews";

export const metadata: Metadata = {
  title: "News",
  description:
    "Popular hospitality and safari hub updates — direct bookings, channel management, operations, and growth.",
};

export default function NewsPage() {
  return (
    <div className="min-w-0 bg-zinc-50 pb-20 pt-8">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="rounded-2xl bg-white p-8 ring-1 ring-zinc-100 sm:p-10">
          <p className="text-[12px] font-semibold tracking-[0.2em] text-zinc-500">
            ASHBHUB
          </p>
          <h1 className="mt-3 text-3xl font-semibold tracking-tight text-zinc-900 sm:text-4xl">
            Popular News
          </h1>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-zinc-600">
            Practical notes for lodges, camps, and hotels — from direct booking
            strategy to channel sync, operations, and growth.
          </p>
        </div>

        <div className="mt-10 space-y-5">
          {HUB_NEWS_ARTICLES.map((article) => (
            <Link
              key={article.slug}
              href={`/post/${article.slug}`}
              className="group flex flex-col gap-5 rounded-2xl bg-white p-6 ring-1 ring-zinc-100 transition hover:ring-zinc-200 sm:flex-row sm:items-start sm:gap-6 sm:p-7"
            >
              <div className="relative shrink-0">
                <div className="h-20 w-20 overflow-hidden rounded-full ring-2 ring-zinc-200 sm:h-[88px] sm:w-[88px]">
                  <img
                    src={article.image}
                    alt=""
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="min-w-0 flex-1">
                <div className="text-[12px] tracking-[0.18em] text-zinc-500">
                  {article.category}
                </div>
                <h2 className="mt-1 text-lg font-semibold leading-snug text-zinc-900 transition group-hover:text-blue-700 sm:text-xl">
                  {article.title}
                </h2>
                <p className="mt-2 text-sm leading-relaxed text-zinc-600 sm:text-[15px]">
                  {article.excerpt}
                </p>
                <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-zinc-500">
                  <span className="inline-flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 shrink-0" />
                    {article.date}
                  </span>
                  <span className="font-semibold text-blue-700 transition group-hover:text-blue-800">
                    Read article →
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
