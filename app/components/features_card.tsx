import Image, { StaticImageData } from 'next/image'

type FeatureCardProps = {
  title: string;
  image: StaticImageData;
  className?: string;
  imageClassName?: string;
};

export default function FeatureCard({
  title,
  image,
  className,
  imageClassName,
}: FeatureCardProps) {
  return (
    <div className={`absolute ${className}`}>
      <Image
        src={image}
        alt={title}
        className={`rounded-xl ${imageClassName}`}
      />

      <h3 className="mt-3 text-center font-bold uppercase">
        {title}
      </h3>
    </div>
  );
}