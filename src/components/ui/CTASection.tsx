import Link from "next/link";

interface CTASectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
}

export default function CTASection({
  title = "Redo att komma igång?",
  description = "Boka ett kostnadsfritt och förutsättningslöst samtal där vi går igenom din situation och ger dig ärliga råd.",
  buttonText = "Boka kostnadsfritt samtal",
  buttonLink = "/kontakt",
}: CTASectionProps) {
  return (
    <section className="bg-[#1a1a1a] py-20 px-6 md:px-12">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl text-white mb-6 tracking-tight font-aboreto font-medium">
          {title}
        </h2>
        <p className="text-white/70 text-base md:text-lg leading-relaxed font-light font-geist mb-10 max-w-xl mx-auto">
          {description}
        </p>
        <Link
          href={buttonLink}
          className="inline-block px-10 py-4 bg-[#cbbba0] hover:bg-[#b8a88d] text-[#1a1a1a] text-[0.7rem] uppercase tracking-[0.15em] font-medium rounded transition-colors duration-300 font-geist shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
        >
          {buttonText}
        </Link>
      </div>
    </section>
  );
}
