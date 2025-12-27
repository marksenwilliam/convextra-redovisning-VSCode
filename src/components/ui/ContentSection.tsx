import Image from "next/image";
import { ReactNode } from "react";

interface ContentSectionProps {
  title: string;
  content: ReactNode;
  image?: string;
  imageAlt?: string;
  imagePosition?: "left" | "right";
  backgroundColor?: "white" | "cream";
  children?: ReactNode;
}

export default function ContentSection({
  title,
  content,
  image,
  imageAlt = "",
  imagePosition = "right",
  backgroundColor = "white",
  children,
}: ContentSectionProps) {
  const bgClass = backgroundColor === "white" ? "bg-white" : "bg-[#f5f3ef]";

  return (
    <section className={`${bgClass} py-16 md:py-24 px-6 md:px-12`}>
      <div className="max-w-[1200px] mx-auto">
        {image ? (
          <div
            className={`grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center ${
              imagePosition === "left" ? "lg:grid-flow-dense" : ""
            }`}
          >
            {/* Text Content */}
            <div className={imagePosition === "left" ? "lg:col-start-2" : ""}>
              <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-6 tracking-tight font-playfair font-medium">
                {title}
              </h2>
              <div className="text-gray-600 text-base leading-relaxed font-light font-geist space-y-4">
                {content}
              </div>
              {children}
            </div>

            {/* Image */}
            <div
              className={`relative h-[300px] md:h-[400px] lg:h-[500px] rounded-lg overflow-hidden ${
                imagePosition === "left" ? "lg:col-start-1 lg:row-start-1" : ""
              }`}
            >
              <Image
                src={image}
                alt={imageAlt}
                fill
                className="object-cover"
              />
            </div>
          </div>
        ) : (
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl md:text-3xl lg:text-4xl text-[#1a1a1a] mb-6 tracking-tight font-playfair font-medium">
              {title}
            </h2>
            <div className="text-gray-600 text-base leading-relaxed font-light font-geist space-y-4">
              {content}
            </div>
            {children}
          </div>
        )}
      </div>
    </section>
  );
}
