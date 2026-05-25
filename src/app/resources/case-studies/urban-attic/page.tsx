import { caseStudies } from "@/data/caseStudies";
import CaseStudyDetails from "@/components/resources/CaseStudyResource/CaseStudyDetails";

const cs = caseStudies.find((c) => c.id === "urban-attic");

export default function UrbanAtticPage() {
  if (!cs) return null;

  return <CaseStudyDetails caseStudy={cs} />;
}
