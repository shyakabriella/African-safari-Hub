import Image from "next/image";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

type Props = {
  params: { slug: string };
};

export default function CaseStudyPage({ params }: Props) {
  const slug = params.slug;
  const cs = caseStudies.find((c) => c.id === slug);

  if (!cs) {
    return (
      <div className="w-full flex flex-col items-center py-20">
        <h1 className="text-2xl font-bold">Case study not found</h1>
        <Link href="/resources/case-studies" className="mt-4 text-[#8B4513] underline">
          Back to case studies
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto py-12 px-4">
      <div className="mb-6">
        <div className="text-sm font-bold text-[#8B4513]">{cs.category}</div>
        <h1 className="text-3xl font-bold mt-2">{cs.title}</h1>
        <div className="text-sm text-[#64748B] mt-2">{cs.rooms}</div>
      </div>

      {cs.image && (
        <div className="relative w-full h-[420px] mb-6">
          <Image src={cs.image} alt={cs.title} fill className="object-cover rounded-lg" />
        </div>
      )}

      <div className="prose max-w-none text-[#374151]">
        <p>{cs.summary}</p>

        {cs.metrics && cs.metrics.length > 0 && (
          <div className="mt-6">
            <h3 className="font-bold mb-2">Key metrics</h3>
            <ul>
              {cs.metrics.map((m) => (
                <li key={m.label}>
                  <strong>{m.value}</strong> — {m.label}
                </li>
              ))}
            </ul>
          </div>
        )}

        <div className="mt-8">
          <Link href="/resources/case-studies" className="text-[#8B4513] underline">
            ← Back to case studies
          </Link>
        </div>
      </div>
    </div>
  );
}
