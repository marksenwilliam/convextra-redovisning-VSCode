import Image from "next/image";
import Link from "next/link";
import { ArrowDown, SquarePen, Lightbulb, Send, Check, Clock, Users, Calculator, FileText, Building2 } from "lucide-react";

export default function Home() {
  return (
    <main>
      {/* Hero Section */}
      <header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">
        {/* Background Image with Overlay */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/assets/hero-desktop.jpeg"
            alt="Business Meeting"
            fill
            className="w-full h-full object-cover object-center scale-105"
            priority
          />
          <div className="absolute inset-0 bg-black/40"></div>
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/60 mix-blend-multiply"></div>
          <div className="bg-gradient-to-b from-black/30 via-transparent to-black/60 absolute top-0 right-0 bottom-0 left-0"></div>
        </div>

        {/* Content */}
        <div className="relative z-10 text-center px-4 max-w-5xl mx-auto mt-20">
          <h2 className="text-white/80 text-lg md:text-xl lg:text-2xl tracking-widest mb-6 drop-shadow-md font-aboreto font-medium">
            Redovisningsbyrå Västerås
          </h2>

          <h1 className="md:text-6xl lg:text-7xl leading-tight text-4xl font-medium text-white tracking-tight font-aboreto mb-8 drop-shadow-2xl">
            Convextra Redovisning AB
          </h1>

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
      <section className="bg-[#f5f3ef] py-24 px-6 md:px-12 relative z-20 text-[#1a1a1a]">
        <div className="max-w-[1200px] mr-auto ml-auto">
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
      <section className="relative bg-[#f5f3ef] pt-12 pb-24 px-6 md:px-12 text-[#1a1a1a] overflow-hidden">
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

      {/* Pricing Section */}
      <section className="bg-white relative py-24 md:py-32 px-6 md:px-12 text-[#1a1a1a] border-t border-gray-100/50">
        <div className="max-w-[1200px] mr-auto ml-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-5xl lg:text-6xl text-[#111827] uppercase tracking-tight font-aboreto font-medium">
              Priser
            </h2>
            <p className="mt-6 text-gray-500 font-light text-base md:text-lg max-w-2xl mx-auto font-geist">
              Transparent prissättning anpassad för din verksamhets storlek och behov.
            </p>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 z-10 max-w-5xl mr-auto ml-auto relative">
            {/* Package: Start */}
            <div className="flex flex-col md:p-10 hover:border-[#8c7b60]/30 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 group bg-white border-gray-200 border rounded-2xl p-8 min-h-[750px]">
              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-2 tracking-tight font-playfair font-medium">
                  Convextra Start
                </h3>
                <p className="text-sm text-gray-500 font-normal font-geist">
                  Perfekt för: Ensamföretagare, frilansare
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-gray-100">
                <span className="text-3xl md:text-4xl text-gray-900 tracking-tight font-playfair font-medium">
                  1 499
                </span>
                <span className="text-sm font-medium text-gray-500 font-geist">SEK/månad</span>
              </div>

              <ul className="flex-grow text-base font-light text-gray-600 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-green-700" strokeWidth={2.5} />
                  </div>
                  <span className="font-geist">Bokföring upp till 50 transaktioner/månad</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-green-700" strokeWidth={2.5} />
                  </div>
                  <span className="font-geist">Momsrapportering (kvartalsvis)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-green-700" strokeWidth={2.5} />
                  </div>
                  <span className="font-geist">Enkel årsredovisning</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-green-700" strokeWidth={2.5} />
                  </div>
                  <span className="font-geist">E-post-support 5h/månad</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-green-50 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-green-700" strokeWidth={2.5} />
                  </div>
                  <span className="font-geist">Perfekt för: Ensamföretagare, frilansare</span>
                </li>
              </ul>

              <div className="mt-8 pt-6">
                <Link
                  href="/kontakt"
                  className="block w-full py-4 text-center rounded-lg border border-gray-200 text-gray-900 text-xs uppercase tracking-[0.15em] font-medium hover:bg-gray-50 transition-colors font-geist"
                >
                  Välj paket
                </Link>
              </div>
            </div>

            {/* Package: Growth */}
            <div className="flex flex-col md:p-10 overflow-hidden bg-[#fffcf8] border-[#8c7b60] border rounded-2xl p-8 relative shadow-[0_8px_30px_rgb(0,0,0,0.06)] min-h-[750px]">
              <div className="absolute top-0 right-0 bg-[#8c7b60] text-white text-[0.6rem] uppercase tracking-widest py-1.5 px-4 rounded-bl-lg font-medium font-geist">
                Populärast
              </div>

              <div className="mb-6">
                <h3 className="text-2xl md:text-3xl text-[#1a1a1a] mb-2 tracking-tight font-playfair font-medium">
                  Convextra Growth
                </h3>
                <p className="text-sm text-gray-500 font-normal font-geist">
                  Perfekt för: Växande företag med 5-10 anställda
                </p>
              </div>

              <div className="flex items-baseline gap-1 mb-8 pb-8 border-b border-[#8c7b60]/20">
                <span className="text-3xl md:text-4xl text-gray-900 tracking-tight font-playfair font-medium">
                  5 500
                </span>
                <span className="text-sm font-medium text-gray-500 font-geist">SEK/månad</span>
              </div>

              <ul className="flex-grow text-base font-light text-gray-600 space-y-4">
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8c7b60]/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-[#8c7b60]" strokeWidth={2.5} />
                  </div>
                  <span className="font-geist">Bokföring obegränsade antal transaktioner/månad</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8c7b60]/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-[#8c7b60]" strokeWidth={2.5} />
                  </div>
                  <span className="font-geist">Momsrapportering (valfri frekvens)</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8c7b60]/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-[#8c7b60]" strokeWidth={2.5} />
                  </div>
                  <span className="font-geist">Löneadministration för 3-8 personer</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8c7b60]/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-[#8c7b60]" strokeWidth={2.5} />
                  </div>
                  <span className="font-geist">Årsredovisning + bokslut</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8c7b60]/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-[#8c7b60]" strokeWidth={2.5} />
                  </div>
                  <span className="font-geist">2h strategisk rådgivning per kvartal</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8c7b60]/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-[#8c7b60]" strokeWidth={2.5} />
                  </div>
                  <span className="font-geist">Skatteplanering</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8c7b60]/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-[#8c7b60]" strokeWidth={2.5} />
                  </div>
                  <span className="font-geist">Prioriterad support</span>
                </li>
                <li className="flex items-start gap-3">
                  <div className="w-5 h-5 rounded-full bg-[#8c7b60]/10 flex items-center justify-center mt-0.5 shrink-0">
                    <Check className="w-3 h-3 text-[#8c7b60]" strokeWidth={2.5} />
                  </div>
                  <span className="font-geist">Perfekt för: Växande företag med 5-10 anställda</span>
                </li>
              </ul>

              <div className="mt-8 pt-6">
                <Link
                  href="/kontakt"
                  className="block w-full py-4 text-center rounded-lg bg-[#8c7b60] text-white text-xs uppercase tracking-[0.15em] font-medium hover:bg-[#7a6b53] transition-colors shadow-lg shadow-[#8c7b60]/20 font-geist"
                >
                  Välj paket
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Shape Divider */}
        <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none z-10 translate-y-[1px]">
          <svg
            className="relative block w-[150%] h-[60px] md:h-[120px] left-[-25%]"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M0,120 L1200,120 L1200,0 C1200,0 900,100 600,100 C300,100 0,0 0,0 Z"
              className="fill-[#f5f3ef]"
            />
          </svg>
        </div>
      </section>

      {/* Additional Services Section */}
      <section className="bg-[#f5f3ef] pt-12 pb-32 px-6">
        <div className="max-w-[1300px] mx-auto">
          <div className="text-center mb-16">
            <h3 className="text-3xl md:text-4xl text-[#1a1a1a] tracking-tight font-playfair font-medium">
              Tilläggstjänster
            </h3>
          </div>

          {/* Modern Grid Layout for Additional Services */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Item 1 */}
            <div className="group bg-white/50 border border-transparent hover:border-gray-200 hover:bg-white rounded-xl p-6 text-center transition-all duration-300">
              <div className="w-10 h-10 mx-auto bg-white border border-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Clock className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
              </div>
              <div className="text-gray-900 font-medium text-sm mb-1 tracking-tight font-geist">
                Timpris
              </div>
              <div className="text-gray-500 text-xs font-light font-geist">550 SEK/timme</div>
            </div>

            {/* Item 2 */}
            <div className="group bg-white/50 border border-transparent hover:border-gray-200 hover:bg-white rounded-xl p-6 text-center transition-all duration-300">
              <div className="w-10 h-10 mx-auto bg-white border border-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Users className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
              </div>
              <div className="text-gray-900 font-medium text-sm mb-1 tracking-tight font-geist">
                Rådgivning
              </div>
              <div className="text-gray-500 text-xs font-light font-geist">550 SEK/timme</div>
            </div>

            {/* Item 3 */}
            <div className="group bg-white/50 border border-transparent hover:border-gray-200 hover:bg-white rounded-xl p-6 text-center transition-all duration-300">
              <div className="w-10 h-10 mx-auto bg-white border border-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Calculator className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
              </div>
              <div className="text-gray-900 font-medium text-sm mb-1 tracking-tight font-geist">
                Extra lönekörning
              </div>
              <div className="text-gray-500 text-xs font-light font-geist">250 SEK/person</div>
            </div>

            {/* Item 4 */}
            <div className="group bg-white/50 border border-transparent hover:border-gray-200 hover:bg-white rounded-xl p-6 text-center transition-all duration-300">
              <div className="w-10 h-10 mx-auto bg-white border border-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <FileText className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
              </div>
              <div className="text-gray-900 font-medium text-sm mb-1 tracking-tight font-geist">
                Årsredovisning
              </div>
              <div className="text-gray-500 text-xs font-light font-geist">
                Enskild firma: 4 900 SEK
              </div>
            </div>

            {/* Item 5 */}
            <div className="group bg-white/50 border border-transparent hover:border-gray-200 hover:bg-white rounded-xl p-6 text-center transition-all duration-300">
              <div className="w-10 h-10 mx-auto bg-white border border-gray-100 rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-sm">
                <Building2 className="w-4 h-4 text-gray-600" strokeWidth={1.5} />
              </div>
              <div className="text-gray-900 font-medium text-sm mb-1 tracking-tight font-geist">
                Årsredovisning
              </div>
              <div className="text-gray-500 text-xs font-light font-geist">
                Aktiebolag: 9 900 SEK
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
