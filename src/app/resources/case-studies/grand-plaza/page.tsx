import { caseStudies } from "@/data/caseStudies";
import CaseStudyDetails from "@/components/resources/CaseStudyResource/CaseStudyDetails";

const cs = caseStudies.find((c) => c.id === "grand-plaza");

export default function GrandPlazaPage() {
  if (!cs) return null;

  return <CaseStudyDetails caseStudy={cs} />;
}
