import Image, { StaticImageData } from "next/image";
import { ChevronRight } from "lucide-react";

type FeatureSectionProps = {
  title: string;
  description: string;
  image: StaticImageData;
  isReversed?: boolean;
  index?: number;
};

export default function FeatureSection({
  title,
  description,
  image,
  isReversed = false,
}: FeatureSectionProps) {
  return (
    <div className="group grid overflow-hidden border-b border-cyan-400/10 md:grid-cols-2">
      {/* Image */}
      <div
        className={`relative h-80 overflow-hidden md:h-[350px] ${isReversed ? "md:order-2" : "md:order-1"
          }`}
        style={{ background: "#0a0a1e" }}
      >
        <Image
          src={image}
          alt={title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />

        {/* Fade into text */}
        <div
          className="absolute inset-0"
          style={{
            background: isReversed
              ? "linear-gradient(to left, transparent 55%, #07071a 100%)"
              : "linear-gradient(to right, transparent 55%, #07071a 100%)",
          }}
        />

        {/* Mobile bottom fade */}
        <div
          className="absolute inset-0 md:hidden"
          style={{
            background:
              "linear-gradient(to bottom, transparent 55%, #07071a 100%)",
          }}
        />

        {/* Watermark */}
        <div className="pointer-events-none absolute bottom-6 right-6 select-none text-8xl font-black text-cyan-400/10">
        </div>
      </div>

      {/* Text */}
      <div
        className={`flex flex-col justify-center px-8 py-16 md:px-14 md:py-20 ${isReversed ? "md:order-1" : "md:order-2"
          }`}
        style={{ background: "#07071a" }}
      >

        {/* Heading */}
        <h2 className="text-5xl font-black uppercase tracking-tight leading-[0.9] text-white md:text-6xl">
          {title}
        </h2>

        {/* Description */}
        <p className="mt-6 max-w-md text-lg leading-8 text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}