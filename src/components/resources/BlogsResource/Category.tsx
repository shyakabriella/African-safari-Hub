"use client";

import { BLOG_FILTER_CATEGORIES, type BlogFilterCategory } from "@/data/hubNews";

type Props = {
  active: BlogFilterCategory;
  onChange: (category: BlogFilterCategory) => void;
};

export default function Category({ active, onChange }: Props) {
  return (
    <div className="w-[960px] h-[39px] border-b border-[#E2E8F0] mt-10 mb-10">
      <div className="w-full h-[38px] flex gap-[32px]">
        {BLOG_FILTER_CATEGORIES.map((cat) => (
          <button
            key={cat}
            type="button"
            onClick={() => onChange(cat)}
            className={`h-full pb-[16px] border-b-2 transition-all
              ${
                active === cat
                  ? "border-[#8B4513] text-[#8B4513]"
                  : "border-transparent text-[#64748B] hover:text-[#334155]"
              }`}
          >
            <span className="font-bold text-[14px] leading-[20px]">{cat}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
