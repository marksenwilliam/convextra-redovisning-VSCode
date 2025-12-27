import { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Vad är löpande bokföring? | Convextra Redovisning",
  description:
    "Löpande bokföring är något alla svenska företag måste sköta. Läs vår kompletta guide om vad det innebär, hur det fungerar och när du bör ta hjälp.",
  keywords: [
    "löpande bokföring",
    "bokföring",
    "vad är bokföring",
    "bokföring företag",
    "redovisning",
    "Västerås",
  ],
};

export default function VadArLopandeBokforingPage() {
  return (
    <main>
      {/* Article Hero */}
      <header className="bg-[#1a1a1a] pt-32 pb-16 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <Link
            href="/blogg"
            className="inline-flex items-center gap-2 text-[#cbbba0] hover:text-white text-sm font-geist mb-8 transition-colors"
          >
            ← Tillbaka till bloggen
          </Link>
          <div className="flex items-center gap-4 text-xs text-white/50 font-geist mb-6">
            <span>15 december 2024</span>
            <span>•</span>
            <span>8 min läsning</span>
          </div>
          <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-aboreto font-medium tracking-tight mb-6">
            Vad är löpande bokföring?
          </h1>
          <p className="text-white/70 text-lg md:text-xl font-light font-geist leading-relaxed">
            En komplett guide för dig som vill förstå (eller slippa)
            pappersarbetet
          </p>
        </div>
      </header>

      {/* Article Content */}
      <article className="bg-white py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[700px] mx-auto prose prose-lg prose-gray font-geist">
          <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
            Löpande bokföring är något alla svenska företag måste sköta, men hur
            du gör det är upp till dig. Med dagens smarta bokföringsprogram och
            AI-verktyg är det fullt möjligt att hantera det själv – men det
            kräver tid, kunskap och disciplin.
          </p>

          <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
            Det här ingår i den löpande bokföringen
          </h2>
          <ul className="space-y-3 text-gray-600 list-none pl-0">
            <li className="flex items-start gap-3">
              <span className="text-[#8c7b60] mt-1">•</span>
              <span>
                <strong>Registrering av inkommande fakturor</strong> – allt du
                köper in till verksamheten
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8c7b60] mt-1">•</span>
              <span>
                <strong>Utställda fakturor</strong> – det du fakturerar dina
                kunder
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8c7b60] mt-1">•</span>
              <span>
                <strong>Bankavstämningar</strong> – att kontrollera att
                bokföringen stämmer med bankkontot
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8c7b60] mt-1">•</span>
              <span>
                <strong>Kvittohantering</strong> – ja, även det där kaffet på
                väg till kundmötet
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8c7b60] mt-1">•</span>
              <span>
                <strong>Momsredovisning</strong> – beroende på din omsättning,
                månads-, kvartals- eller årsvis
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8c7b60] mt-1">•</span>
              <span>
                <strong>Lönehantering</strong> – om du har anställda
              </span>
            </li>
          </ul>
          <p className="text-gray-600 mt-4">
            Allt detta lägger sedan grunden för din årsredovisning och
            deklaration.
          </p>

          <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
            Hur fungerar det i praktiken?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            2025 ser bokföringsvärlden väldigt annorlunda ut jämfört med för
            bara tio år sedan. Pärmar fyllda med papper har ersatts av
            molnbaserade bokföringsprogram, och AI-funktioner börjar ta över
            allt fler manuella moment.
          </p>

          <h3 className="text-xl font-playfair font-medium text-[#1a1a1a] mt-10 mb-4">
            Moderna verktyg gör jobbet enklare
          </h3>
          <p className="text-gray-600 leading-relaxed">
            Program som Fortnox, Visma eEkonomi och Bokio har revolutionerat hur
            småföretagare hanterar sin bokföring. Du kan fotografera kvitton med
            mobilen, koppla bankkontot för automatisk import av transaktioner,
            och låta programmet föreslå konteringar baserat på tidigare mönster.
          </p>
          <p className="text-gray-600 leading-relaxed italic mt-4">
            Det låter nästan för bra för att vara sant, eller hur?
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Och när något låter för bra för att vara sant, då är det ofta det…
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Även om verktygen blivit smartare krävs det fortfarande att någon
            förstår vad som händer bakom kulisserna. Automatiseringen hjälper
            dig att spara tid, men den kan inte:
          </p>
          <ul className="space-y-2 text-gray-600 list-none pl-0 mt-4">
            <li className="flex items-start gap-3">
              <span className="text-[#8c7b60] mt-1">✗</span>
              <span>Avgöra om en kostnad är avdragsgill eller inte</span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8c7b60] mt-1">✗</span>
              <span>
                Förstå skillnaden mellan representation och personlig
                konsumtion
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8c7b60] mt-1">✗</span>
              <span>
                Fånga upp felaktigheter innan de blir problem hos Skatteverket
              </span>
            </li>
            <li className="flex items-start gap-3">
              <span className="text-[#8c7b60] mt-1">✗</span>
              <span>Ge dig strategiska råd kring företagets ekonomi</span>
            </li>
          </ul>
          <p className="text-gray-600 leading-relaxed mt-6">
            Här kommer vi in på den stora frågan.
          </p>

          <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
            Kan du sköta bokföringen själv?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Absolut. Många småföretagare, särskilt enskilda firmor och mindre
            aktiebolag, hanterar sin löpande bokföring på egen hand. Med rätt
            bokföringsprogram och lite tålamod kommer du långt.
          </p>

          <div className="bg-[#f5f3ef] rounded-lg p-6 mt-8">
            <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-4">
              Fördelar med att göra det själv:
            </h4>
            <ul className="space-y-2 text-gray-600 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Du sparar pengar på redovisningstjänster</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Du får bättre koll på företagets ekonomi</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-green-600 mt-1">✓</span>
                <span>Du lär dig förstå siffrorna bakom verksamheten</span>
              </li>
            </ul>
          </div>

          <div className="bg-[#1a1a1a] rounded-lg p-6 mt-6">
            <h4 className="text-lg font-playfair font-medium text-white mb-4">
              Men det finns baksidor:
            </h4>
            <ul className="space-y-2 text-white/80 list-none pl-0">
              <li className="flex items-start gap-3">
                <span className="text-[#cbbba0] mt-1">✗</span>
                <span>
                  Det tar tid – tid som du kanske hellre lägger på att driva och
                  utveckla företaget
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#cbbba0] mt-1">✗</span>
                <span>
                  Misstag kostar – fel i bokföringen kan leda till skattetillägg
                  och förseningsavgifter
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#cbbba0] mt-1">✗</span>
                <span>
                  Regelverket ändras – att hålla sig uppdaterad kräver energi
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#cbbba0] mt-1">✗</span>
                <span>
                  Stressen – många företagare beskriver bokföringen som en
                  ständig källa till oro
                </span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mt-8 font-medium">
            Och här är sanningen som få pratar om: även om du kan göra allt
            själv, betyder det inte att du bör göra det.
          </p>

          <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
            När är det dags att ta hjälp?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Det finns några tydliga tecken på att det kan vara läge att prata
            med en redovisningskonsult eller revisor:
          </p>

          <div className="border-l-4 border-[#cbbba0] pl-6 my-8">
            <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
              1. Du skjuter ständigt upp bokföringen
            </h4>
            <p className="text-gray-600">
              Om kvittona samlas i högar och du får ångest varje gång du tänker
              på det, är det ett tecken på att något behöver förändras.
            </p>
          </div>

          <div className="border-l-4 border-[#cbbba0] pl-6 my-8">
            <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
              2. Företaget växer
            </h4>
            <p className="text-gray-600">
              Fler transaktioner, anställda, eller kanske en ny verksamhetsgren?
              Komplexiteten ökar snabbt.
            </p>
          </div>

          <div className="border-l-4 border-[#cbbba0] pl-6 my-8">
            <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
              3. Du är osäker på reglerna
            </h4>
            <p className="text-gray-600">
              Moms, arbetsgivaravgifter, avdrag – om du ofta googlar eller
              gissar, tar du onödiga risker.
            </p>
          </div>

          <div className="border-l-4 border-[#cbbba0] pl-6 my-8">
            <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
              4. Du vill fokusera på det du är bra på
            </h4>
            <p className="text-gray-600">
              Din tid har ett värde. Varje timme du lägger på bokföring är en
              timme du inte lägger på kunder, produktutveckling eller
              försäljning.
            </p>
          </div>

          <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
            Vad kostar det att anlita en redovisningsbyrå?
          </h2>
          <p className="text-gray-600 leading-relaxed">
            Priset varierar beroende på företagets storlek, antal transaktioner
            och vilka tjänster du behöver. En enskild firma med få transaktioner
            kan komma undan med någon tusenlapp i månaden, medan ett aktiebolag
            med anställda och mer komplex verksamhet betalar mer.
          </p>
          <p className="text-gray-600 leading-relaxed mt-4">
            Men räkna inte bara på kostnaden – räkna på värdet. Vad är din tid
            värd? Vad kostar ett misstag? Och hur mycket tryggare sover du om
            natten när du vet att en expert har koll?
          </p>

          <div className="bg-[#f5f3ef] border border-[#cbbba0]/30 rounded-lg p-8 mt-12">
            <h3 className="text-xl font-playfair font-medium text-[#1a1a1a] mb-4">
              Sammanfattning
            </h3>
            <p className="text-gray-600 leading-relaxed">
              Löpande bokföring är något alla svenska företag måste sköta, men
              hur du gör det är upp till dig. Med dagens smarta bokföringsprogram
              och AI-verktyg är det fullt möjligt att hantera det själv – men det
              kräver tid, kunskap och disciplin.
            </p>
            <p className="text-gray-600 leading-relaxed mt-4">
              För många företagare är det smartaste valet att fokusera på
              kärnverksamheten och låta någon annan ta hand om siffrorna. Det
              handlar inte om att vara dålig på ekonomi, utan om att vara smart
              med sin tid.
            </p>
          </div>
        </div>
      </article>

      {/* CTA Section */}
      <section className="bg-[#1a1a1a] py-20 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl text-white mb-6 tracking-tight font-aboreto font-medium">
            Funderar du på om du borde ta hjälp med bokföringen?
          </h2>
          <p className="text-white/70 text-base md:text-lg leading-relaxed font-light font-geist mb-10">
            Vi erbjuder en kostnadsfri konsultation där vi går igenom din
            situation och ger dig ärliga råd – oavsett om du sedan väljer att
            fortsätta själv eller vill ha hjälp. Ingen press, inga konstigheter.
          </p>
          <Link
            href="/kontakt"
            className="inline-block px-10 py-4 bg-[#cbbba0] hover:bg-[#b8a88e] text-[#1a1a1a] text-[0.7rem] uppercase tracking-[0.15em] font-medium rounded transition-colors duration-300 font-geist"
          >
            Boka din gratis konsultation
          </Link>
        </div>
      </section>

      {/* Related Content */}
      <section className="bg-white py-16 px-6 md:px-12 border-t border-gray-100">
        <div className="max-w-[800px] mx-auto">
          <h3 className="text-xl font-playfair font-medium text-[#1a1a1a] mb-6">
            Relaterade tjänster
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Link
              href="/tjanster/lopande-bokforing"
              className="group p-6 bg-[#f5f3ef] rounded-lg hover:bg-[#eae6df] transition-colors"
            >
              <h4 className="text-lg font-medium text-[#1a1a1a] group-hover:text-[#8c7b60] transition-colors">
                Löpande bokföring
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                Låt oss ta hand om din bokföring varje månad
              </p>
            </Link>
            <Link
              href="/tjanster/bokslut-arsredovisning"
              className="group p-6 bg-[#f5f3ef] rounded-lg hover:bg-[#eae6df] transition-colors"
            >
              <h4 className="text-lg font-medium text-[#1a1a1a] group-hover:text-[#8c7b60] transition-colors">
                Bokslut & Årsredovisning
              </h4>
              <p className="text-gray-600 text-sm mt-2">
                Komplett hantering av ditt årsbokslut
              </p>
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
