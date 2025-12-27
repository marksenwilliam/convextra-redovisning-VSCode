import Image from "next/image";
import Link from "next/link";
import { ChevronRight } from "lucide-react";

interface ServiceHeroProps {
  title: string;
  subtitle: string;
  backgroundImage: string;
  breadcrumb: string;
}

export default function ServiceHero({
  title,
  subtitle,
  backgroundImage,
  breadcrumb,
}: ServiceHeroProps) {
  return (
    <header className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-visible pt-24 bg-[#1a1a1a]">
      {/* Background Pattern - Bottom Right */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] md:w-[500px] md:h-[500px] z-0">
        <Image
          src={backgroundImage}
          alt=""
          fill
          className="object-contain object-bottom-right"
          priority
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
        {/* Breadcrumb */}
        <nav className="flex items-center justify-center gap-2 text-white/60 text-sm mb-8 font-geist">
          <Link href="/" className="hover:text-white transition-colors">
            Hem
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/tjanster" className="hover:text-white transition-colors">
            Tjänster
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-white/80">{breadcrumb}</span>
        </nav>

        <h1 className="md:text-5xl lg:text-6xl leading-tight text-3xl font-medium text-white tracking-tight font-aboreto mb-6 drop-shadow-2xl">
          {title}
        </h1>

        <p className="text-white/80 text-lg md:text-xl font-light font-quicksand max-w-2xl mx-auto">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
