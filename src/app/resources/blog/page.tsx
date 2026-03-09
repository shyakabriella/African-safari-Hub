import Articles from "@/components/resources/BlogsResource/Articles";
import BlogLoadMore from "@/components/resources/BlogsResource/BlogLoadMore";
import Category from "@/components/resources/BlogsResource/Category";
import FeaturedPosts from "@/components/resources/BlogsResource/FeaturedPosts";
import HospitalityInsight from "@/components/resources/BlogsResource/HospitalityInsight";
import NewsLetter from "@/components/resources/BlogsResource/NewsLetter";

export default function Blog() {
  return (
    <div className="w-full flex flex-col mt-5 justify-center items-center bg-[#8B4513]/10">
      <HospitalityInsight />
      <FeaturedPosts />
      <Category />
      <Articles />
      <BlogLoadMore />
      <NewsLetter />
    </div>
  )
}
