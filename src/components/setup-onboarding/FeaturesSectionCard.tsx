import React from "react";

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
}

interface FeaturesSectionCardProps {
  header: string;
  imageSrc?: string;
  reverse?: boolean;
  features: FeatureItem[];
}

export default function FeaturesSectionCard({
  header,
  imageSrc,
  reverse = false,
  features,
}: FeaturesSectionCardProps) {
  return (
    <div
      className={`flex justify-between md:flex-row items-start ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-12 md:gap-16`}
    >
      {/* Text Column */}
      <div className="max-w-[600px] flex flex-col gap-8">
        <h2 className="font-extrabold text-[48px] leading-[1.1] text-[#0F172A]">
          {header}
        </h2>

        <div className="flex flex-col gap-6">
          {features.map((feature, index) => (
            <div key={index} className="flex items-start gap-4">
              <span className="text-[#8B4513] mt-1">{feature.icon}</span>
              <div className="flex flex-col">
                <span className="font-bold text-[18px] text-[#0F172A]">
                  {feature.title}
                </span>
                <span className="text-[18px] text-[#475569]">
                  {feature.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      {imageSrc && (
        <div className="w-[540px] h-[360px] flex-shrink-0 relative">
          <img
            src={imageSrc}
            alt={header}
            className="w-full h-full object-cover rounded-2xl"
          />
        </div>
      )}
    </div>
  );
}