"use client";

import Link from "next/link";
import { Clock, Eye } from "lucide-react";

export type Post = {
  title: string;
  href: string;
  image: string; // online or /public image

  /** ✅ make these optional so marketing cards can pass without them */
  readTime?: string;
  views?: string | number;

  /** ✅ optional (if you ever want to reuse the type elsewhere) */
  tag?: string;
  description?: string;
};

export default function SidebarPosts({
  top,
  list,
}: {
  top: Post;
  list: Post[];
}) {
  return (
    <aside className="h-full rounded-2xl bg-zinc-50 p-5 ring-1 ring-zinc-100 flex flex-col">
      <Link href={top.href} className="group block">
        <div className="overflow-hidden rounded-xl">
          <div className="relative aspect-[16/10] w-full">
            <img
              src={top.image}
              alt={top.title}
              className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
          </div>
        </div>

        <h3 className="mt-4 text-xl font-semibold leading-snug text-zinc-900 transition-colors duration-300 group-hover:text-blue-700">
          {top.title}
        </h3>

        {/* ✅ show meta only if readTime/views exist */}
        {(top.readTime || top.views) && (
          <div className="mt-3 flex flex-wrap items-center gap-x-5 gap-y-2 text-sm text-zinc-600">
            {top.readTime && (
              <span className="inline-flex items-center gap-2">
                <Clock className="h-4 w-4 text-zinc-500" />
                {top.readTime}
              </span>
            )}

            {top.views && (
              <span className="inline-flex items-center gap-2">
                <Eye className="h-4 w-4 text-zinc-500" />
                {typeof top.views === "number"
                  ? `${top.views.toLocaleString()}`
                  : top.views}
              </span>
            )}
          </div>
        )}
      </Link>

      <div className="mt-6 space-y-5 flex-1">
        {list.map((p) => (
          <Link key={p.href} href={p.href} className="group flex items-start gap-4">
            <div className="relative h-16 w-24 shrink-0 overflow-hidden rounded-lg">
              <img
                src={p.image}
                alt={p.title}
                className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-[1.05]"
              />
            </div>

            <div className="min-w-0">
              <h4 className="text-[15px] font-semibold leading-snug text-zinc-900 transition-colors duration-300 group-hover:text-blue-700">
                {p.title}
              </h4>

              {/* ✅ show meta only if exists */}
              {(p.readTime || p.views) && (
                <div className="mt-1 flex flex-wrap items-center gap-x-4 gap-y-1 text-sm text-zinc-600">
                  {p.readTime && (
                    <span className="inline-flex items-center gap-2">
                      <Clock className="h-4 w-4 text-zinc-500" />
                      {p.readTime}
                    </span>
                  )}

                  {p.views && (
                    <span className="inline-flex items-center gap-2">
                      <Eye className="h-4 w-4 text-zinc-500" />
                      {typeof p.views === "number"
                        ? `${p.views.toLocaleString()}`
                        : p.views}
                    </span>
                  )}
                </div>
              )}
            </div>
          </Link>
        ))}
      </div>
    </aside>
  );
}