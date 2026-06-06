import { getHubNewsBySlug, HUB_NEWS_ARTICLES } from '@/data/hubNews';

export async function generateStaticParams() {
  return HUB_NEWS_ARTICLES.map((a) => ({ slug: a.slug }));
}

export default function BlogArticle({ params }: { params: { slug: string } }) {
  const article = getHubNewsBySlug(params.slug);

  if (!article) {
    return (
      <div className="w-full py-20 text-center">
        <h2 className="text-xl font-bold">Article not found</h2>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center bg-white">
      <div className="w-[960px] py-12">
        <div className="mb-4 text-sm text-[#64748B]">{article.category} • {article.date}</div>
        <h1 className="text-3xl font-extrabold text-[#0F172A] mb-6">{article.title}</h1>

        <div className="w-full h-[420px] mb-8 overflow-hidden rounded-lg">
          <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
        </div>

        <p className="text-lg text-[#475569] mb-8">{article.excerpt}</p>

        <article className="prose max-w-none text-[#0F172A]">
          {article.body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </article>
      </div>
    </div>
  );
}
