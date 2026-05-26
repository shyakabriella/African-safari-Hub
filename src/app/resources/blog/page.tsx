"use client";

import { useState } from "react";
import Articles from "@/components/resources/BlogsResource/Articles";
import BlogLoadMore from "@/components/resources/BlogsResource/BlogLoadMore";
import Category from "@/components/resources/BlogsResource/Category";
import FeaturedPosts from "@/components/resources/BlogsResource/FeaturedPosts";
import HospitalityInsight from "@/components/resources/BlogsResource/HospitalityInsight";
import NewsLetter from "@/components/resources/BlogsResource/NewsLetter";
import {
  HUB_NEWS_ARTICLES,
  type BlogFilterCategory,
  getHubNewsByFilter,
} from "@/data/hubNews";

export default function Blog() {
  const [active, setActive] = useState<BlogFilterCategory>("All Intelligence");

  const filtered = getHubNewsByFilter(active);
  const featured = filtered[0] ?? HUB_NEWS_ARTICLES[0];

  return (
    <div className="w-full flex flex-col mt-5 justify-center items-center bg-[#8B4513]/10">
      <HospitalityInsight />
      <FeaturedPosts featured={featured} />
      <Category active={active} onChange={setActive} />
      <Articles articles={filtered} />
      <BlogLoadMore showing={filtered.length} total={HUB_NEWS_ARTICLES.length} />
      <NewsLetter />
    </div>
  );
}
