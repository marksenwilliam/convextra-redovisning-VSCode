import Image from "next/image";
import Link from "next/link";
import { ArrowDown, SquarePen, Lightbulb, Send, Check } from "lucide-react";
import { Metadata } from "next";

export const metadata: Metadata = {
  alternates: {
    canonical: "/",
  },
};

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-desktop.jpeg"
            alt="Convextra Redovisning - Professionell redovisningsbyrå i Västerås"
            fill
            sizes="100vw"
            quality={85}
            priority
            fetchPriority="high"
            className="w-full h-full object-cover object-center"
          />
          {/* Single optimized overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/70"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <h1 className="text-white/80 text-lg md:text-xl lg:text-2xl tracking-widest mb-6 drop-shadow-md font-aboreto font-medium">
            Redovisningsbyrå Västerås
          </h1>

          <h2 className="md:text-6xl lg:text-7xl leading-tight text-4xl font-medium text-white tracking-tight font-aboreto mb-8 drop-shadow-2xl">
            Convextra Redovisning AB
          </h2>

          <div className="flex items-center justify-center gap-5 text-white/80 font-playfair text-lg md:text-xl lg:text-2xl tracking-widest font-light drop-shadow-md">
            <span className="w-12 h-[1px] bg-white/60 inline-block"></span>
            <span className="font-normal font-quicksand">Med dig över hela världen</span>
            <span className="w-12 h-[1px] bg-white/60 inline-block"></span>
          </div>

          <div className="mt-12 flex justify-center gap-6">
            <button className="group flex items-center gap-2 text-white/70 hover:text-white transition-colors duration-300">
              <span className="text-xs uppercase tracking-[0.2em] font-light font-geist">
                Läs mer
              </span>
              <ArrowDown className="w-4 h-4 animate-bounce mt-1" />
            </button>
          </div>
        </div>
      </header>

      {/* Engagement & Cards Section */}
      <section className="bg-[#f5f3ef] py-24 px-6 md:px-12 relative z-20 text-[#1a1a1a] md:overflow-hidden">
        {/* Fortnox Logo Background */}
        <div className="absolute -bottom-28 left-1/2 -translate-x-1/2 w-full h-full max-w-[180px] max-h-[180px] z-50 md:z-0 md:top-8 md:bottom-auto md:right-8 md:left-auto md:translate-x-0 md:max-w-[450px] md:max-h-[450px] pointer-events-none">
          <div className="relative w-full h-full">
            <Image
              src="/assets/fortnox-partner.png"
              alt="Fortnox Partner - Auktoriserad redovisningsbyrå"
              fill
              sizes="(max-width: 768px) 180px, 450px"
              priority
              className="object-contain opacity-50 md:opacity-30"
            />
          </div>
        </div>

        <div className="max-w-[1200px] mr-auto ml-auto relative z-10">
          {/* Header Text */}
          <div className="text-center max-w-5xl mx-auto mb-16">
            <h2 className="md:text-3xl lg:text-4xl uppercase leading-tight text-2xl font-medium text-[#1a1a1a] tracking-wide font-aboreto mb-8">
              Redovisningsbyrå i Västerås med personligt
              <br className="hidden md:block" /> engagemang
            </h2>
            <p className="md:text-base leading-relaxed text-sm font-light text-gray-500 font-geist max-w-2xl mr-auto ml-auto">
              Vi jobbar med företag över hela Sverige, stora som små. Alla våra kunder som
              jobbar med oss får en redovisningsbyrå som både hanterar siffrorna löpande och
              tänker strategiskt kring företagets framtid.
            </p>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {/* Card 1: Digital Precision */}
            <div className="bg-white hover:bg-[#3a3a3a] p-10 shadow-sm border border-transparent hover:shadow-md hover:-translate-y-2 transition-all duration-500 ease-out group h-full rounded-lg">
              <div className="mb-6">
                <SquarePen className="w-9 h-9 text-[#333] group-hover:text-white transition-colors duration-500 ease-out" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1a1a1a] group-hover:text-white mb-5 font-playfair font-medium transition-colors duration-500 ease-out">
                Digital precision
              </h3>
              <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed font-geist font-light transition-colors duration-500 ease-out">
                Modern bokföring och redovisning i Västerås, Uppsala och Eskilstuna, med
                kunder över hela Sverige. Vi ger dig realtidsrapporter och automatiserade
                flöden och ger dig alltid aktuell ekonomisk överblick.
              </p>
            </div>

            {/* Card 2: Personlig Rådgivning */}
            <div className="bg-white hover:bg-[#3a3a3a] p-10 shadow-sm border border-transparent hover:shadow-md hover:-translate-y-2 transition-all duration-500 ease-out group h-full rounded-lg">
              <div className="mb-6">
                <Lightbulb className="w-9 h-9 text-[#333] group-hover:text-white transition-colors duration-500 ease-out" strokeWidth={1} />
              </div>
              <h3 className="text-2xl text-[#1a1a1a] group-hover:text-white mb-5 font-playfair font-medium transition-colors duration-500 ease-out">
                Personlig rådgivning
              </h3>
              <p className="leading-relaxed text-sm font-light text-gray-500 group-hover:text-white/80 font-geist transition-colors duration-500 ease-out">
                En dedikerad redovisningskonsult som känner ditt företag. Vi är tillgängliga
                när du behöver oss - via telefon, mail eller personliga möten. Inte bara vid
                bokslut.
              </p>
            </div>

            {/* Card 3: Strategiskt Fokus */}
            <div className="bg-white hover:bg-[#3a3a3a] p-10 shadow-sm border border-transparent hover:shadow-md hover:-translate-y-2 transition-all duration-500 ease-out group h-full rounded-lg">
              <div className="mb-6">
                <Send className="w-9 h-9 text-[#333] group-hover:text-white transition-colors duration-500 ease-out" strokeWidth={1.5} />
              </div>
              <h3 className="text-2xl text-[#1a1a1a] group-hover:text-white mb-5 font-playfair font-medium transition-colors duration-500 ease-out">
                Strategiskt fokus
              </h3>
              <p className="text-gray-500 group-hover:text-white/80 text-sm leading-relaxed font-geist font-light transition-colors duration-500 ease-out">
                Vi hjälper dig inte bara följa regler - vi visar hur ekonomin kan driva
                tillväxt. Proaktiv rådgivning om skatteoptimering, investeringar och
                lönsamhet.
              </p>
            </div>
          </div>

          {/* CTA Button */}
          <div className="text-center">
            <Link
              href="/kontakt"
              className="inline-block px-10 py-4 bg-[#e09e58] hover:bg-[#d08d48] text-white text-[0.7rem] uppercase tracking-[0.15em] font-medium rounded transition-colors duration-300 font-geist shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Kostnadsfri konsultation
            </Link>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="relative bg-[#f5f3ef] pt-36 md:pt-12 pb-24 px-6 md:px-12 text-[#1a1a1a] overflow-hidden">
        <div className="max-w-[1400px] mx-auto">
          {/* Section Header */}
          <div className="text-center mb-24">
            <span className="block text-xs uppercase tracking-[0.25em] text-gray-500 mb-4 font-medium font-geist">
              Bokföring Västerås
            </span>
            <h2 className="md:text-5xl uppercase text-4xl font-medium text-[#1a1a1a] tracking-tight font-aboreto">
              Våra Tjänster
            </h2>
          </div>

          {/* Services Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">
            {/* Service 01 */}
            <Link href="/tjanster/lopande-bokforing" className="group">
              <div className="relative p-8 pt-6 rounded-lg group-hover:bg-[#3a3a3a] group-hover:-translate-y-2 transition-all duration-500 ease-out">
                <span className="block text-[5rem] md:text-[6rem] leading-none text-[#e2e0dc] group-hover:text-white/20 select-none tracking-tighter font-playfair font-medium transition-all duration-500 ease-out mb-2">
                  01.
                </span>
                <h3 className="text-2xl text-[#1a1a1a] group-hover:text-white mb-4 tracking-tight leading-tight font-playfair font-medium transition-colors duration-500 ease-out">
                  Löpande bokföring & redovisning
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 text-sm md:text-base leading-relaxed font-light font-geist transition-colors duration-500 ease-out">
                  Vi tar hand om all löpande bokföring och ger dig aktuella ekonomiska
                  rapporter varje månad. Med moderna digitala verktyg får du realtidsöverblick
                  över kassaflöde, resultat och ekonomisk status.
                </p>
              </div>
            </Link>

            {/* Service 02 */}
            <Link href="/tjanster/bokslut-arsredovisning" className="group">
              <div className="relative p-8 pt-6 rounded-lg group-hover:bg-[#3a3a3a] group-hover:-translate-y-2 transition-all duration-500 ease-out">
                <span className="block text-[5rem] md:text-[6rem] leading-none text-[#e2e0dc] group-hover:text-white/20 select-none tracking-tighter font-playfair font-medium transition-all duration-500 ease-out mb-2">
                  02.
                </span>
                <h3 className="text-2xl text-[#1a1a1a] group-hover:text-white mb-4 tracking-tight leading-tight font-playfair font-medium transition-colors duration-500 ease-out">
                  Bokslut, årsredovisning och deklaration
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 text-sm md:text-base leading-relaxed font-light font-geist transition-colors duration-500 ease-out">
                  Vi säkerställer att ditt bokslut och årsredovisning blir korrekt upprättade
                  och levererade i tid. Våra specialister hanterar alla deklarationer och ser
                  till att du följer Skatteverkets krav.
                </p>
              </div>
            </Link>

            {/* Service 03 */}
            <Link href="/tjanster/loneadministration" className="group">
              <div className="relative p-8 pt-6 rounded-lg group-hover:bg-[#3a3a3a] group-hover:-translate-y-2 transition-all duration-500 ease-out">
                <span className="block text-[5rem] md:text-[6rem] leading-none text-[#e2e0dc] group-hover:text-white/20 select-none tracking-tighter font-playfair font-medium transition-all duration-500 ease-out mb-2">
                  03.
                </span>
                <h3 className="text-2xl text-[#1a1a1a] group-hover:text-white mb-4 tracking-tight leading-tight font-playfair font-medium transition-colors duration-500 ease-out">
                  Löneadministration
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 text-sm md:text-base leading-relaxed font-light font-geist transition-colors duration-500 ease-out">
                  Vi sköter hela lönehanteringen från A till Ö – löner, semester, sjukfrånvaro,
                  skatter och arbetsgivardeklarationer. Dina anställda får rätt ersättning i
                  tid varje månad.
                </p>
              </div>
            </Link>
          </div>

          {/* Second Row - Centered */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-12 mt-8 max-w-[900px] mx-auto">
            {/* Service 04 */}
            <Link href="/tjanster/radgivning" className="group">
              <div className="relative p-8 pt-6 rounded-lg group-hover:bg-[#3a3a3a] group-hover:-translate-y-2 transition-all duration-500 ease-out">
                <span className="block text-[5rem] md:text-[6rem] leading-none text-[#e2e0dc] group-hover:text-white/20 select-none tracking-tighter font-playfair font-medium transition-all duration-500 ease-out mb-2">
                  04.
                </span>
                <h3 className="text-2xl text-[#1a1a1a] group-hover:text-white mb-4 tracking-tight leading-tight font-playfair font-medium transition-colors duration-500 ease-out">
                  Rådgivning inom ekonomi, skatt och bolagsfrågor
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 text-sm md:text-base leading-relaxed font-light font-geist transition-colors duration-500 ease-out">
                  Få strategisk hjälp med skatteplanering, bolagsstruktur, företagsköp och
                  andra affärskritiska beslut. Vi är din rådgivare som hjälper dig optimera
                  ekonomin.
                </p>
              </div>
            </Link>

            {/* Service 05 */}
            <Link href="/tjanster/digitalisering" className="group">
              <div className="relative p-8 pt-6 rounded-lg group-hover:bg-[#3a3a3a] group-hover:-translate-y-2 transition-all duration-500 ease-out">
                <span className="block text-[5rem] md:text-[6rem] leading-none text-[#e2e0dc] group-hover:text-white/20 select-none tracking-tighter font-playfair font-medium transition-all duration-500 ease-out mb-2">
                  05.
                </span>
                <h3 className="text-2xl text-[#1a1a1a] group-hover:text-white mb-4 tracking-tight leading-tight font-playfair font-medium transition-colors duration-500 ease-out">
                  Digitalisering och effektivisering av ekonomiflöden
                </h3>
                <p className="text-gray-600 group-hover:text-white/80 text-sm md:text-base leading-relaxed font-light font-geist transition-colors duration-500 ease-out">
                  Vi hjälper dig modernisera och automatisera dina ekonomiflöden med rätt
                  digitala verktyg. Genom smart integration mellan system sparar du tid och
                  minskar risken för fel.
                </p>
              </div>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
