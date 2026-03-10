import { LucideIcon } from "lucide-react";
import { ReactNode } from "react";

interface FAQCategoryProps {
  icon: LucideIcon;
  title: string;
  children: ReactNode;
}

export default function FAQCategory({
  icon: Icon,
  title,
  children,
}: FAQCategoryProps) {
  return (
    <div className="mb-12">

      <div className="flex items-center gap-3 mb-6">
        <div className="w-1 h-8 bg-[#8B4513] rounded-full" />
        <Icon className="w-6 h-6 text-[#8B4513]" />
        <h2 className="text-2xl font-bold text-[#1a1a1a]">
          {title}
        </h2>
      </div>

      <div className="space-y-4">{children}</div>

    </div>
  );
}