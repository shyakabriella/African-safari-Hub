import CategoryStrip from "@/components/home/CategoryStrip";
import FeaturedWithSidebar from "@/components/home/FeaturedWithSidebar";
import WhatsNewSection from "@/components/home/whatsnew/WhatsNewSection";
import LatestNews from "@/components/home/LatestNews";
import NewsletterHero from "@/components/home/NewsletterHero";

export default function Home() {
  return (
    <div className="w-full">
      <CategoryStrip className="mt-8" />
      <FeaturedWithSidebar />
      <WhatsNewSection />
      <NewsletterHero />
      <LatestNews />
      
    </div>
  );
}