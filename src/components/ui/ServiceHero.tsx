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
    <header className="relative w-full min-h-[500px] md:min-h-[600px] flex items-center justify-center overflow-hidden pt-24 bg-[#1a1a1a]">
      {/* Content */}
      <div className="relative z-10 text-center px-4 w-full mx-auto">
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

        <h1 className="md:text-5xl lg:text-6xl leading-tight text-3xl font-medium text-white tracking-tight font-aboreto mb-10 drop-shadow-2xl">
          {title}
        </h1>

        <p className="text-white/80 text-lg md:text-xl font-light font-quicksand max-w-2xl mx-auto pb-16 md:pb-0">
          {subtitle}
        </p>
      </div>
    </header>
  );
}
