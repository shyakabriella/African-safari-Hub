"use client";

import { useState } from "react";
import { Building, Gem, House } from "lucide-react";

export default function FilterPills() {
  const [active, setActive] = useState("all");

  const filters = [
    { id: "all", label: "All Stories", icon: null },
    { id: "luxury", label: "Luxury", icon: Gem },
    { id: "boutique", label: "Boutique", icon: House },
    { id: "mid", label: "Mid-size", icon: Building },
  ];

  return (
    <div className="w-[1120px] flex gap-3 pb-8">
      {filters.map((filter) => {
        const Icon = filter.icon;
        const isActive = active === filter.id;

        return (
          <button
            key={filter.id}
            onClick={() => setActive(filter.id)}
            className={`flex items-center gap-2 px-6 h-[40px] rounded-full border transition-all duration-200
              ${
                isActive
                  ? "bg-[#8B4513] text-white border-[#8B4513]"
                  : "bg-white text-[#334155] border-[#E2E8F0] hover:bg-gray-50"
              }`}
          >
            {Icon && <Icon className="w-4 h-4" />}
            <span className="text-[14px] font-bold">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}