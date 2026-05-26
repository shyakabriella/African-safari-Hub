import CaseStudyDetails from "@/components/resources/CaseStudyResource/CaseStudyDetails";
import Link from "next/link";
import { caseStudies } from "@/data/caseStudies";

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  return caseStudies.map((c) => ({ slug: c.id }));
}

export default async function CaseStudyPage({ params }: Props) {
  const { slug } = await params;
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

  return <CaseStudyDetails caseStudy={cs} />;
}
