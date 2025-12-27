import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Våra Tjänster | Convextra Redovisning",
  description:
    "Upptäck våra tjänster inom bokföring, löneadministration, bokslut, rådgivning och digitalisering. Convextra Redovisning i Västerås.",
};

const services = [
  {
    number: "01",
    title: "Löpande bokföring & redovisning",
    description:
      "Vi tar hand om all löpande bokföring och ger dig aktuella ekonomiska rapporter varje månad. Med moderna digitala verktyg får du realtidsöverblick över kassaflöde, resultat och ekonomisk status.",
    href: "/tjanster/lopande-bokforing",
  },
  {
    number: "02",
    title: "Bokslut, årsredovisning och deklaration",
    description:
      "Vi säkerställer att ditt bokslut och årsredovisning blir korrekt upprättade och levererade i tid. Våra specialister hanterar alla deklarationer och ser till att du följer Skatteverkets krav.",
    href: "/tjanster/bokslut-arsredovisning",
  },
  {
    number: "03",
    title: "Löneadministration",
    description:
      "Vi sköter hela lönehanteringen från A till Ö – löner, semester, sjukfrånvaro, skatter och arbetsgivardeklarationer. Dina anställda får rätt ersättning i tid varje månad.",
    href: "/tjanster/loneadministration",
  },
  {
    number: "04",
    title: "Rådgivning inom ekonomi, skatt och bolagsfrågor",
    description:
      "Få strategisk hjälp med skatteplanering, bolagsstruktur, företagsköp och andra affärskritiska beslut. Vi är din rådgivare som hjälper dig optimera ekonomin.",
    href: "/tjanster/radgivning",
  },
  {
    number: "05",
    title: "Digitalisering och effektivisering av ekonomiflöden",
    description:
      "Vi hjälper dig modernisera och automatisera dina ekonomiflöden med rätt digitala verktyg. Genom smart integration mellan system sparar du tid och minskar risken för fel.",
    href: "/tjanster/digitalisering",
  },
];

export default function TjansterPage() {
  return (
    <main>
      {/* Hero */}
      <header className="bg-[#1a1a1a] pt-32 pb-20 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl text-white font-aboreto font-medium tracking-tight mb-6">
            Våra Tjänster
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light font-geist max-w-2xl mx-auto">
            Vi erbjuder ett komplett utbud av redovisningstjänster för företag i alla storlekar
          </p>
        </div>
      </header>

      {/* Services Grid */}
      <section className="bg-[#f5f3ef] py-20 md:py-32 px-6 md:px-12">
        <div className="max-w-[1400px] mx-auto">
          {/* First Row - 3 services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {services.slice(0, 3).map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group"
              >
                <div className="relative p-8 pt-6 rounded-lg group-hover:bg-[#3a3a3a] group-hover:-translate-y-2 transition-all duration-500 ease-out">
                  <span className="block text-[5rem] md:text-[6rem] leading-none text-[#e2e0dc] group-hover:text-white/20 select-none tracking-tighter font-playfair font-medium transition-all duration-500 ease-out mb-2">
                    {service.number}.
                  </span>
                  <h2 className="text-2xl text-[#1a1a1a] group-hover:text-white mb-4 tracking-tight leading-tight font-playfair font-medium transition-colors duration-500 ease-out">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 group-hover:text-white/80 text-sm md:text-base leading-relaxed font-light font-geist transition-colors duration-500 ease-out">
                    {service.description}
                  </p>
                  <span className="inline-block mt-6 text-[#8c7b60] group-hover:text-[#cbbba0] text-sm font-geist font-medium transition-colors duration-500 ease-out">
                    Läs mer →
                  </span>
                </div>
              </Link>
            ))}
          </div>

          {/* Second Row - 2 services centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-8 max-w-[900px] mx-auto">
            {services.slice(3, 5).map((service) => (
              <Link
                key={service.number}
                href={service.href}
                className="group"
              >
                <div className="relative p-8 pt-6 rounded-lg group-hover:bg-[#3a3a3a] group-hover:-translate-y-2 transition-all duration-500 ease-out">
                  <span className="block text-[5rem] md:text-[6rem] leading-none text-[#e2e0dc] group-hover:text-white/20 select-none tracking-tighter font-playfair font-medium transition-all duration-500 ease-out mb-2">
                    {service.number}.
                  </span>
                  <h2 className="text-2xl text-[#1a1a1a] group-hover:text-white mb-4 tracking-tight leading-tight font-playfair font-medium transition-colors duration-500 ease-out">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 group-hover:text-white/80 text-sm md:text-base leading-relaxed font-light font-geist transition-colors duration-500 ease-out">
                    {service.description}
                  </p>
                  <span className="inline-block mt-6 text-[#8c7b60] group-hover:text-[#cbbba0] text-sm font-geist font-medium transition-colors duration-500 ease-out">
                    Läs mer →
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#1a1a1a] py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6 tracking-tight font-aboreto font-medium">
            Osäker på vad du behöver?
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed font-light font-geist mb-10">
            Boka ett kostnadsfritt samtal så hjälper vi dig hitta rätt lösning för ditt företag.
          </p>
          <Link
            href="/kontakt"
            className="inline-block px-10 py-4 bg-[#cbbba0] hover:bg-[#b8a88d] text-[#1a1a1a] text-[0.7rem] uppercase tracking-[0.15em] font-medium rounded transition-colors duration-300 font-geist"
          >
            Boka kostnadsfritt samtal
          </Link>
        </div>
      </section>
    </main>
  );
}
