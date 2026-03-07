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
      className={`flex justify-evenly md:flex-row items-center ${
        reverse ? "md:flex-row-reverse" : "md:flex-row"
      } gap-4 md:gap-6`}
    >
      {/* Text Column */}
      <div className="max-w-[440px] flex flex-col gap-6">
        <h2 className="font-bold text-[36px] leading-[40px] text-[#0F172A]">
          {header}
        </h2>

        <div className="flex flex-col gap-4">
          {features.map((feature, index) => (
            <div key={index} className="flex items-center gap-3">
              <span className="text-[#8B4513] mr-3">{feature.icon}</span>
              <div className="flex flex-col">
                <span className="font-bold text-[16px] text-[#0F172A]">
                  {feature.title}
                </span>
                <span className="text-[16px] text-[#475569]">
                  {feature.description}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Image */}
      {imageSrc && (
        <div className="w-[420px] h-[300px] flex-shrink-0 relative">
          <img
            src={imageSrc}
            alt={header}
            className="w-full h-full object-cover rounded-lg"
          />
        </div>
      )}
    </div>
  );
}