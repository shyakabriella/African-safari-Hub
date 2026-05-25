import { caseStudies } from "@/data/caseStudies";
import CaseStudyDetails from "@/components/resources/CaseStudyResource/CaseStudyDetails";

const cs = caseStudies.find((c) => c.id === "metro-business");

export default function MetroBusinessPage() {
  if (!cs) return null;

  return <CaseStudyDetails caseStudy={cs} />;
}
