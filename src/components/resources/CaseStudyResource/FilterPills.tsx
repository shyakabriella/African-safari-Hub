"use client";

import { Building, Gem, House } from "lucide-react";

type Filter = {
  id: string;
  label: string;
  icon: any | null;
};

type Props = {
  active?: string;
  setActive?: (id: string) => void;
};

export default function FilterPills({ active = "All Stories", setActive }: Props) {
  const filters: Filter[] = [
    { id: "All Stories", label: "All Stories", icon: null },
    { id: "Luxury", label: "Luxury", icon: Gem },
    { id: "Boutique", label: "Boutique", icon: House },
    { id: "Mid-size", label: "Mid-size", icon: Building },
  ];

  const handleClick = (id: string) => {
    if (setActive) setActive(id);
  };

  return (
    <div className="w-[1120px] flex gap-3 pb-8">
      {filters.map((filter) => {
        const Icon = filter.icon;
        const isActive = active === filter.id;

        return (
          <button
            key={filter.id}
            onClick={() => handleClick(filter.id)}
            className={`flex items-center gap-2 px-6 h-[40px] rounded-full border transition-all duration-200
              ${
                isActive
                  ? "bg-[#8B4513] text-white border-[#8B4513]"
                  : "bg-white text-[#334155] border-[#E2E8F0] hover:bg-gray-50"
              }`}>
            {Icon && <Icon className="w-4 h-4" />}
            <span className="text-[14px] font-bold">{filter.label}</span>
          </button>
        );
      })}
    </div>
  );
}