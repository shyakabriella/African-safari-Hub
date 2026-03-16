"use client";
import { useState } from "react";

export default function Category() {
  const [active, setActive] = useState("All Intelligence");

  const categories = [
    "All Intelligence",
    "Hospitality Trends",
    "Revenue Management",
    "Digital Marketing",
  ];

  return (
    <div className="w-[960px] h-[39px] border-b border-[#E2E8F0] mt-10 mb-10">
      <div className="w-full h-[38px] flex gap-[32px]">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setActive(cat)}
            className={`h-full pb-[16px] border-b-2 transition-all
              ${
                active === cat
                  ? "border-[#8B4513] text-[#8B4513]"
                  : "border-transparent text-[#64748B]"
              }`}
          >
            <span className="font-bold text-[14px] leading-[20px]">
              {cat}
            </span>
          </button>
        ))}
      </div>
    </div>
  );
}