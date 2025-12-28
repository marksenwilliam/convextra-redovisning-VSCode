import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Integritetspolicy | Convextra Redovisning",
  description: "Läs om hur Convextra Redovisning AB hanterar dina personuppgifter enligt GDPR.",
};

export default function IntegritetspolicyPage() {
  return (
    <main className="bg-white">
      {/* Header */}
      <section className="bg-[#1a1a1a] pt-32 pb-16 px-6">
        <div className="max-w-4xl mx-auto">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-white/70 hover:text-white text-sm font-geist mb-8 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Tillbaka till startsidan
          </Link>
          
          <h1 className="text-4xl md:text-5xl text-white font-medium font-aboreto tracking-tight mb-6">
            Integritetspolicy
          </h1>
          
          <p className="text-white/70 text-lg font-light font-geist">
            Senast uppdaterad: 28 december 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto prose prose-lg">
          <div className="space-y-12 text-gray-700 font-geist">
            {/* Introduction */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">1. Introduktion</h2>
              <p className="leading-relaxed">
                Convextra Redovisning AB, organisationsnummer 559472-7741, är ansvarig för behandlingen av dina personuppgifter. Vi värnar om din integritet och arbetar aktivt för att skydda dina personuppgifter i enlighet med dataskyddsförordningen (GDPR).
              </p>
              <p className="leading-relaxed mt-4">
                <strong>Kontaktuppgifter:</strong><br />
                Convextra Redovisning AB<br />
                Mälarparksvägen 11, 723 56 Västerås<br />
                E-post: info@convextraredovisning.se<br />
                Telefon: 073-627 79 77
              </p>
            </div>

            {/* Data Collection */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">2. Vilka personuppgifter samlar vi in?</h2>
              <p className="leading-relaxed mb-4">
                Vi samlar in och behandlar följande typer av personuppgifter:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Kontaktinformation:</strong> Namn, e-postadress, telefonnummer, företagsnamn</li>
                <li><strong>Kommunikation:</strong> Meddelanden du skickar via vårt kontaktformulär</li>
                <li><strong>Teknisk information:</strong> IP-adress, cookies, webbläsartyp (se vår cookiepolicy)</li>
                <li><strong>Bokföring och redovisning:</strong> För kunder som anlitar oss samlar vi in uppgifter nödvändiga för att utföra våra tjänster</li>
              </ul>
            </div>

            {/* Purpose */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">3. Varför behandlar vi dina personuppgifter?</h2>
              <p className="leading-relaxed mb-4">
                Vi behandlar dina personuppgifter för följande ändamål:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Avtalsuppfyllelse:</strong> För att kunna leverera våra redovisningstjänster</li>
                <li><strong>Kundsupport:</strong> För att hantera förfrågningar och ge support</li>
                <li><strong>Marknadsföring:</strong> För att skicka nyhetsbrev och information om våra tjänster (med ditt samtycke)</li>
                <li><strong>Rättsliga krav:</strong> För att uppfylla bokföringslagen och andra lagkrav</li>
                <li><strong>Webbplatsanalys:</strong> För att förbättra vår webbplats och tjänster</li>
              </ul>
            </div>

            {/* Legal Basis */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">4. Rättslig grund</h2>
              <p className="leading-relaxed">
                Vår behandling av personuppgifter baseras på:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li><strong>Avtal:</strong> För att kunna fullgöra vårt avtal med dig</li>
                <li><strong>Laglig förpliktelse:</strong> För att uppfylla bokföringslagen och skattelagstiftning</li>
                <li><strong>Samtycke:</strong> För marknadsföring och cookies (du kan när som helst återkalla ditt samtycke)</li>
                <li><strong>Berättigat intresse:</strong> För att utveckla och förbättra våra tjänster</li>
              </ul>
            </div>

            {/* Sharing */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">5. Delning av personuppgifter</h2>
              <p className="leading-relaxed mb-4">
                Vi delar inte dina personuppgifter med tredje part förutom:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Leverantörer:</strong> IT-tjänster, e-posttjänster (Resend), webbhotell (Vercel)</li>
                <li><strong>Myndigheter:</strong> Skatteverket, Bolagsverket (när det krävs enligt lag)</li>
                <li><strong>Revisorer:</strong> Vid behov för granskning</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Alla våra leverantörer är noggrant utvalda och följer GDPR. Vi ingår personuppgiftsbiträdesavtal med alla leverantörer som behandlar personuppgifter för vår räkning.
              </p>
            </div>

            {/* Storage */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">6. Hur länge sparar vi dina uppgifter?</h2>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Bokföringsmaterial:</strong> 7 år (enligt bokföringslagen)</li>
                <li><strong>Kunduppgifter:</strong> Under avtalstiden + 7 år</li>
                <li><strong>Kontaktförfrågningar:</strong> 2 år om inget avtal ingås</li>
                <li><strong>Marknadsföring:</strong> Tills du avregistrerar dig</li>
                <li><strong>Cookies:</strong> Se vår cookiepolicy</li>
              </ul>
            </div>

            {/* Rights */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">7. Dina rättigheter</h2>
              <p className="leading-relaxed mb-4">
                Enligt GDPR har du följande rättigheter:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Rätt till tillgång:</strong> Du har rätt att få information om vilka personuppgifter vi behandlar om dig</li>
                <li><strong>Rätt till rättelse:</strong> Du kan begära att felaktiga uppgifter rättas</li>
                <li><strong>Rätt till radering:</strong> Du kan begära att dina uppgifter raderas (&quot;rätten att bli glömd&quot;)</li>
                <li><strong>Rätt till begränsning:</strong> Du kan begära att behandlingen av dina uppgifter begränsas</li>
                <li><strong>Rätt till dataportabilitet:</strong> Du kan få ut dina uppgifter i ett strukturerat format</li>
                <li><strong>Rätt att göra invändningar:</strong> Du kan invända mot behandling av dina uppgifter</li>
                <li><strong>Rätt att återkalla samtycke:</strong> Om behandlingen baseras på samtycke kan du när som helst återkalla det</li>
              </ul>
              <p className="leading-relaxed mt-4">
                För att utöva dina rättigheter, kontakta oss på <a href="mailto:info@convextraredovisning.se" className="text-[#8c7b60] hover:underline">info@convextraredovisning.se</a>
              </p>
            </div>

            {/* Security */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">8. Säkerhet</h2>
              <p className="leading-relaxed">
                Vi vidtar lämpliga tekniska och organisatoriska åtgärder för att skydda dina personuppgifter mot obehörig åtkomst, förlust eller förstörelse. Detta inkluderar:
              </p>
              <ul className="list-disc pl-6 space-y-2 mt-4">
                <li>Kryptering av känslig data (HTTPS/SSL)</li>
                <li>Regelbundna säkerhetskopior</li>
                <li>Begränsad åtkomst till personuppgifter</li>
                <li>Utbildning av personal i dataskydd</li>
                <li>Säkra IT-system och brandväggar</li>
              </ul>
            </div>

            {/* Cookies */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">9. Cookies</h2>
              <p className="leading-relaxed">
                Vår webbplats använder cookies för att förbättra användarupplevelsen och analysera trafik. Läs mer i vår{" "}
                <Link href="/cookies" className="text-[#8c7b60] hover:underline">
                  cookiepolicy
                </Link>
                .
              </p>
            </div>

            {/* Complaints */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">10. Klagomål</h2>
              <p className="leading-relaxed">
                Om du anser att vi behandlar dina personuppgifter på ett felaktigt sätt har du rätt att lämna in ett klagomål till Integritetsskyddsmyndigheten (IMY):
              </p>
              <p className="leading-relaxed mt-4">
                <strong>Integritetsskyddsmyndigheten</strong><br />
                Box 8114, 104 20 Stockholm<br />
                Telefon: 08-657 61 00<br />
                E-post: imy@imy.se<br />
                Webbplats:{" "}
                <a href="https://www.imy.se" target="_blank" rel="noopener noreferrer" className="text-[#8c7b60] hover:underline">
                  www.imy.se
                </a>
              </p>
            </div>

            {/* Changes */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">11. Ändringar i integritetspolicyn</h2>
              <p className="leading-relaxed">
                Vi kan komma att uppdatera denna integritetspolicy vid behov. Eventuella ändringar publiceras på denna sida med angivet datum för senaste uppdatering.
              </p>
            </div>

            {/* Contact */}
            <div className="bg-[#f5f3ef] p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">Frågor?</h2>
              <p className="leading-relaxed mb-4">
                Har du frågor om hur vi hanterar dina personuppgifter är du välkommen att kontakta oss:
              </p>
              <p className="leading-relaxed">
                <strong>E-post:</strong> <a href="mailto:info@convextraredovisning.se" className="text-[#8c7b60] hover:underline">info@convextraredovisning.se</a><br />
                <strong>Telefon:</strong> 073-627 79 77<br />
                <strong>Adress:</strong> Mälarparksvägen 11, 723 56 Västerås
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
