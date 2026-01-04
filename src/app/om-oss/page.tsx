import { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, Users, Target, Award, Heart } from "lucide-react";

export const metadata: Metadata = {
  title: "Om oss | Convextra Redovisning - Digital redovisningsbyrå Västerås",
  description:
    "Vi är en digital redovisningsbyrå som kombinerar modern teknik med personlig rådgivning. Med bas i Västerås hjälper vi företag i hela Sverige.",
  keywords: [
    "redovisningsbyrå Västerås",
    "om Convextra",
    "digital redovisning",
    "bokföringsbyrå",
  ],
  alternates: {
    canonical: "/om-oss",
  },
};

export default function OmOssPage() {
  const services = [
    "Löpande bokföring & redovisning",
    "Bokslut, årsredovisning & deklarationer",
    "Lönehantering och arbetsgivardeklarationer",
    "Rådgivning inom ekonomi, skatt & bolagsfrågor",
    "Digitalisering och automatisering av ekonomiflöden",
  ];

  const values = [
    {
      icon: Target,
      title: "Struktur",
      description:
        "Ordning och reda i varje detalj, så du kan fokusera på din verksamhet.",
    },
    {
      icon: Users,
      title: "Personligt",
      description:
        "En dedikerad kontaktperson som lär känna dig och ditt företag.",
    },
    {
      icon: Award,
      title: "Proaktivt",
      description:
        "Vi väntar inte på problem – vi förebygger dem och ger råd i tid.",
    },
    {
      icon: Heart,
      title: "Tillgängligt",
      description: "Korta svarstider och tydlig kommunikation, alltid.",
    },
  ];

  return (
    <main>
      {/* Hero */}
      <header className="bg-[#1a1a1a] pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-aboreto font-medium tracking-tight mb-6">
            Välkommen till Convextra Redovisning
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light font-geist max-w-3xl mx-auto leading-relaxed">
            Vi är en digital redovisningsbyrå som kombinerar modern teknik med
            personlig rådgivning. Med bas i Västerås hjälper vi företag i hela
            Sverige att få kontroll på siffrorna, frigöra tid och fatta bättre
            beslut – utan krångel.
          </p>
        </div>
      </header>

      {/* Who We Are */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mb-6 tracking-tight font-aboreto font-medium">
                Vilka vi är
              </h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light font-geist mb-6">
                Convextra Redovisning är en modern redovisningsbyrå som brinner
                för ordning, struktur och tydlighet.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light font-geist">
                Vi arbetar helt digitalt men finns nära dig som kund – med korta
                svarstider, tydlig kommunikation och en dedikerad kontaktperson.
                Oavsett om du driver ett mindre bolag eller ett växande företag
                får du en partner som håller koll på detaljerna och ser helheten
                i din ekonomi.
              </p>
            </div>
            <div className="bg-[#f5f3ef] rounded-lg p-8 md:p-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full bg-[#1a1a1a] flex items-center justify-center">
                  <span className="text-[#cbbba0] text-xl font-playfair">C</span>
                </div>
                <div>
                  <p className="text-[#1a1a1a] font-medium font-geist">
                    Convextra Redovisning
                  </p>
                  <p className="text-gray-500 text-sm font-geist">
                    Västerås, Sverige
                  </p>
                </div>
              </div>
              <div className="space-y-3">
                <p className="text-gray-600 text-sm font-geist flex items-center gap-2">
                  <span className="text-[#8c7b60]">📍</span>
                  Västerås
                </p>
                <p className="text-gray-600 text-sm font-geist flex items-center gap-2">
                  <span className="text-[#8c7b60]">📧</span>
                  info@convextraredovisning.se
                </p>
                <p className="text-gray-600 text-sm font-geist flex items-center gap-2">
                  <span className="text-[#8c7b60]">📞</span>
                  (+46) 73-627 79 77
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Mission */}
      <section className="bg-[#f5f3ef] py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mb-6 tracking-tight font-aboreto font-medium">
            Vårt uppdrag
          </h2>
          <p className="text-gray-600 text-lg md:text-xl leading-relaxed font-light font-geist max-w-3xl mx-auto mb-8">
            Vårt uppdrag är att göra din ekonomi enkel, trygg och värdeskapande.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light font-geist max-w-3xl mx-auto">
            Vi vill att redovisning och löner inte bara ska vara något du
            &ldquo;måste&rdquo; göra, utan ett strategiskt verktyg för tillväxt.
            Genom korrekta underlag, proaktiv rådgivning och smarta digitala
            lösningar hjälper vi dig att planera framåt, undvika onödiga
            kostnader och ta bättre beslut i rätt tid.
          </p>
        </div>
      </section>

      {/* What We Do */}
      <section className="bg-white py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mb-12 tracking-tight font-aboreto font-medium text-center">
            Det här gör vi
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex items-start gap-4 p-6 bg-[#f5f3ef] rounded-lg"
              >
                <CheckCircle className="w-5 h-5 text-[#8c7b60] flex-shrink-0 mt-0.5" />
                <span className="text-[#1a1a1a] font-geist">{service}</span>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/tjanster"
              className="inline-block text-[#8c7b60] hover:text-[#6d634f] text-sm font-medium font-geist underline underline-offset-4"
            >
              Se alla våra tjänster →
            </Link>
          </div>
        </div>
      </section>

      {/* Our Values */}
      <section className="bg-[#1a1a1a] py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl text-white mb-6 tracking-tight font-aboreto font-medium text-center">
            Varför välja Convextra?
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed font-light font-geist max-w-3xl mx-auto text-center mb-16">
            Vi vet att ekonomi och löner måste fungera – varje månad, utan
            strul. Därför kombinerar vi digitala arbetssätt med personlig
            rådgivning och hög tillgänglighet.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-7 h-7 text-[#cbbba0]" />
                </div>
                <h3 className="text-white text-lg font-medium font-geist mb-3">
                  {value.title}
                </h3>
                <p className="text-white/60 text-sm font-light font-geist leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-white py-20 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-[#1a1a1a] mb-6 tracking-tight font-aboreto font-medium">
            Vill du veta mer?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed font-light font-geist mb-10">
            Boka ett kostnadsfritt samtal så berättar vi mer om hur vi kan hjälpa
            just ditt företag.
          </p>
          <Link
            href="/kontakt"
            className="inline-block px-10 py-4 bg-[#1a1a1a] hover:bg-[#333] text-white text-[0.7rem] uppercase tracking-[0.15em] font-medium rounded transition-colors duration-300 font-geist"
          >
            Boka kostnadsfritt samtal
          </Link>
        </div>
      </section>
    </main>
  );
}
