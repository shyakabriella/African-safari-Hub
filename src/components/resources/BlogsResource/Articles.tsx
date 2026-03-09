import ArticleCard from "./ArticleCard";

export default function Articles() {
  return (
    <div className="w-[960px] h-[887.72px] p-[32px] grid grid-cols-3 gap-[32px]">
      <ArticleCard 
        img="/article-grid-one.png"
        header="DIGITAL MARKETING"
        timer="5 min read"
        title="5 Critical Digital Marketing Trends for 2024"
        description="Master the latest in cookieless attribution and meta-search…"
      />
      <ArticleCard 
        img="/article-grid-two.png"
        header="GUEST EXPERIENCE"
        timer="8 min read"
        title="Optimizing Journey via Mobile-First Touchpoints"
        description="How hyper-personalization through mobile apps is redefining the guest…"
      />
      <ArticleCard 
        img="/article-grid-three.png"
        header="REVENUE MANAGEMENT"
        timer="6 min read"
        title="Data-Driven Decisions in Modern Hospitality"
        description="Moving beyond occupancy: why RevPAM and GOPPAR are the new…"
      />
      <ArticleCard 
        img="/article-grid-four.png"
        header="OPERATIONS"
        timer="10 min read"
        title="Sustainable Tech: Reducing Footprints via IoT"
        description="Implementing smart energy management systems to cut costs…"
      />
      <ArticleCard 
        img="/article-grid-five.png"
        header="TRENDS"
        timer="8 min read"
        title="The Rise of Workation-Ready Resorts"
        description="How luxury hotels are pivoting to serve the booming digital nomad and…"
      />
      <ArticleCard 
        img="/article-grid-six.png"
        header="MARKET ANALYSIS"
        timer="12 min read"
        title="Global Hospitality Market Outlook 2025"
        description="A comprehensive deep-dive into macroeconomic shifts and travel…"
      />
    </div>
  )
}
