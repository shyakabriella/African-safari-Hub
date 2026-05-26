import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { CaseStudy } from "@/data/caseStudies";

type Props = {
  caseStudy: CaseStudy;
};

export default function CaseStudyDetails({ caseStudy }: Props) {
  return (
    <div className="max-w-5xl mx-auto py-12 px-4 sm:px-6 lg:px-8">
      <Link
        href="/resources/case-studies"
        className="inline-flex items-center gap-2 text-sm font-semibold text-[#8B4513] hover:text-[#6f3610] transition-colors"
      >
        <ArrowLeft className="h-4 w-4" />
        Back to success stories
      </Link>

      <div className="mb-8 mt-6 space-y-4">
        <p className="text-sm font-semibold text-[#8B4513] uppercase tracking-[0.24em]">{caseStudy.category}</p>
        <h1 className="text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">{caseStudy.title}</h1>
        {caseStudy.rooms && <p className="text-sm text-[#64748B]">{caseStudy.rooms}</p>}
        <p className="max-w-3xl text-lg text-[#475569]">{caseStudy.summary}</p>
      </div>

      {caseStudy.image && (
        <div className="relative w-full h-[420px] overflow-hidden rounded-3xl mb-10">
          <Image src={caseStudy.image} alt={caseStudy.title} fill className="object-cover" />
        </div>
      )}

      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.9fr]">
        <div className="space-y-12">
          {caseStudy.challenge && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#0F172A]">The challenge</h2>
              <p className="text-[#475569] leading-8">{caseStudy.challenge}</p>
            </section>
          )}

          {caseStudy.solution && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#0F172A]">Our solution</h2>
              <p className="text-[#475569] leading-8">{caseStudy.solution}</p>
            </section>
          )}

          {caseStudy.results && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#0F172A]">Results</h2>
              <p className="text-[#475569] leading-8">{caseStudy.results}</p>
            </section>
          )}

          {caseStudy.highlights && caseStudy.highlights.length > 0 && (
            <section className="space-y-4">
              <h2 className="text-2xl font-semibold text-[#0F172A]">What this meant for the property</h2>
              <ul className="list-inside list-disc space-y-2 text-[#475569]">
                {caseStudy.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </section>
          )}
        </div>

        <aside className="space-y-8 rounded-[28px] border border-[#E2E8F0] bg-white p-8 shadow-sm">
          {caseStudy.metrics && caseStudy.metrics.length > 0 && (
            <div className="space-y-4">
              <h3 className="text-xl font-semibold text-[#0F172A]">Key outcomes</h3>
              <div className="grid gap-4 sm:grid-cols-2">
                {caseStudy.metrics.map((metric) => (
                  <div key={metric.label} className="rounded-3xl bg-[#F8FAFC] p-5">
                    <p className="text-3xl font-extrabold text-[#0F172A]">{metric.value}</p>
                    <p className="text-sm uppercase tracking-[0.16em] text-[#64748B]">{metric.label}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {caseStudy.testimonial && (
            <div className="rounded-3xl bg-[#8B4513]/5 p-6">
              <p className="text-[#0F172A] text-sm leading-7">"{caseStudy.testimonial}"</p>
            </div>
          )}

          <Link
            href="/resources/case-studies"
            className="inline-flex w-full items-center justify-center gap-2 rounded-3xl bg-[#8B4513] px-5 py-3 text-sm font-semibold text-white transition hover:bg-[#6f3610]"
          >
            <ArrowLeft className="h-4 w-4" />
            Back to success stories
          </Link>
        </aside>
      </div>

      <div className="mt-12 flex justify-center border-t border-[#E2E8F0] pt-8">
        <Link
          href="/resources/case-studies"
          className="inline-flex h-12 items-center justify-center gap-2 rounded-xl bg-[#8B4513] px-8 text-sm font-semibold text-white transition hover:bg-[#6f3610]"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to all case studies
        </Link>
      </div>
    </div>
  );
}
