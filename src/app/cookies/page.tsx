import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Cookiepolicy | Convextra Redovisning",
  description: "Läs om hur Convextra Redovisning använder cookies på vår webbplats.",
  alternates: {
    canonical: "/cookies",
  },
};

export default function CookiesPage() {
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
            Cookiepolicy
          </h1>

          <p className="text-white/70 text-lg font-light font-geist">
            Senast uppdaterad: 28 december 2025
          </p>
        </div>
      </section>

      {/* Content */}
      <section className="py-16 px-6">
        <div className="max-w-4xl mx-auto">
          <div className="space-y-12 text-gray-700 font-geist">
            {/* What are cookies */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">Vad är cookies?</h2>
              <p className="leading-relaxed">
                Cookies är små textfiler som lagras på din enhet (dator, mobiltelefon, surfplatta) när du besöker en webbplats. Cookies hjälper webbplatsen att komma ihåg information om ditt besök, till exempel dina inställningar och tidigare aktiviteter. Detta gör att vi kan förbättra din upplevelse och göra webbplatsen mer användarvänlig.
              </p>
            </div>

            {/* Why we use cookies */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">Varför använder vi cookies?</h2>
              <p className="leading-relaxed mb-4">
                Vi använder cookies för att:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>Förbättra funktionaliteten på vår webbplats</li>
                <li>Analysera hur besökare använder webbplatsen</li>
                <li>Komma ihåg dina inställningar och preferenser</li>
                <li>Tillhandahålla relevant innehåll och funktioner</li>
                <li>Mäta och förbättra prestandan på vår webbplats</li>
              </ul>
            </div>

            {/* Types of cookies */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">Vilka typer av cookies använder vi?</h2>

              {/* Necessary cookies */}
              <div className="mb-6">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">1. Nödvändiga cookies</h3>
                <p className="leading-relaxed mb-2">
                  Dessa cookies är nödvändiga för att webbplatsen ska fungera korrekt. De möjliggör grundläggande funktioner som säker inloggning och samtyckesinställningar för cookies. Webbplatsen kan inte fungera korrekt utan dessa cookies.
                </p>
                <div className="bg-[#f5f3ef] p-4 rounded-lg mt-3">
                  <p className="text-sm"><strong>Exempel:</strong></p>
                  <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Cookiebot:</strong> Lagrar ditt samtycke för cookies (1 år)</li>
                    <li><strong>Cloudflare Turnstile:</strong> Skydd mot spam och bots på kontaktformulär</li>
                  </ul>
                </div>
              </div>

              {/* Analytics cookies */}
              <div className="mb-6">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">2. Analytiska cookies</h3>
                <p className="leading-relaxed mb-2">
                  Dessa cookies hjälper oss att förstå hur besökare interagerar med webbplatsen genom att samla in och rapportera information anonymt. Detta hjälper oss att förbättra webbplatsen och användarupplevelsen.
                </p>
                <div className="bg-[#f5f3ef] p-4 rounded-lg mt-3">
                  <p className="text-sm"><strong>Exempel:</strong></p>
                  <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Google Analytics:</strong> Mäter webbplatstrafik och användarbeteende (14 månader)</li>
                    <li><strong>_ga:</strong> Används för att skilja användare åt</li>
                    <li><strong>_ga_*:</strong> Används för att bevara sessionstillstånd</li>
                  </ul>
                </div>
              </div>

              {/* Functional cookies */}
              <div className="mb-6">
                <h3 className="text-xl font-medium text-[#1a1a1a] mb-2">3. Funktionella cookies</h3>
                <p className="leading-relaxed mb-2">
                  Dessa cookies gör det möjligt för webbplatsen att komma ihåg val du gör (som språk eller region) och tillhandahålla förbättrade, mer personliga funktioner.
                </p>
                <div className="bg-[#f5f3ef] p-4 rounded-lg mt-3">
                  <p className="text-sm"><strong>Exempel:</strong></p>
                  <ul className="text-sm list-disc pl-5 mt-2 space-y-1">
                    <li><strong>Bokningswidget:</strong> Sparar dina bokningsinställningar</li>
                    <li><strong>Formulär:</strong> Kommer ihåg ifylld information vid siduppdatering</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Third party cookies */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">Tredjepartscookies</h2>
              <p className="leading-relaxed mb-4">
                Förutom våra egna cookies använder vi också cookies från tredje part:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li><strong>Google Analytics:</strong> För webbplatsanalys och statistik</li>
                <li><strong>Google Maps:</strong> För att visa interaktiva kartor</li>
                <li><strong>Cloudflare:</strong> För säkerhet och prestanda</li>
                <li><strong>Vercel:</strong> För webbhosting och leverans av innehåll</li>
              </ul>
              <p className="leading-relaxed mt-4">
                Dessa tredje parter kan samla in information om din användning av denna och andra webbplatser enligt deras egna integritetspolicyer.
              </p>
            </div>

            {/* How to manage cookies */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">Hantera cookies</h2>
              <p className="leading-relaxed mb-4">
                Du har rätt att själv välja om du vill acceptera cookies eller inte. När du besöker vår webbplats första gången får du en förfrågan om att acceptera cookies via vår cookie-banner.
              </p>

              <h3 className="text-lg font-medium text-[#1a1a1a] mb-2 mt-6">Ändra dina cookie-inställningar</h3>
              <p className="leading-relaxed mb-4">
                Du kan när som helst ändra dina cookie-inställningar genom att:
              </p>
              <ul className="list-disc pl-6 space-y-2 mb-4">
                <li>Klicka på cookie-ikonen längst ner på sidan</li>
                <li>Använda inställningarna i din webbläsare (se nedan)</li>
              </ul>

              <h3 className="text-lg font-medium text-[#1a1a1a] mb-2 mt-6">Blockera cookies i din webbläsare</h3>
              <p className="leading-relaxed mb-4">
                De flesta webbläsare är inställda på att automatiskt acceptera cookies, men du kan ändra inställningarna för att blockera cookies om du föredrar det. Här är länkar till instruktioner för populära webbläsare:
              </p>
              <ul className="list-disc pl-6 space-y-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" target="_blank" rel="noopener noreferrer" className="text-[#8c7b60] hover:underline">
                    Google Chrome
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/sv/kb/aktivera-och-inaktivera-kakor" target="_blank" rel="noopener noreferrer" className="text-[#8c7b60] hover:underline">
                    Mozilla Firefox
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/sv-se/guide/safari/sfri11471/mac" target="_blank" rel="noopener noreferrer" className="text-[#8c7b60] hover:underline">
                    Safari
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/sv-se/microsoft-edge/ta-bort-cookies-i-microsoft-edge-63947406-40ac-c3b8-57b9-2a946a29ae09" target="_blank" rel="noopener noreferrer" className="text-[#8c7b60] hover:underline">
                    Microsoft Edge
                  </a>
                </li>
              </ul>
              <p className="leading-relaxed mt-4 text-sm text-gray-600">
                <strong>Obs:</strong> Om du blockerar eller raderar cookies kan vissa funktioner på webbplatsen sluta fungera korrekt.
              </p>
            </div>

            {/* Updates */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">Uppdateringar av cookiepolicyn</h2>
              <p className="leading-relaxed">
                Vi kan komma att uppdatera denna cookiepolicy från tid till annan för att återspegla ändringar i vår användning av cookies eller av juridiska skäl. Vi rekommenderar att du regelbundet granskar denna sida för att hålla dig informerad om hur vi använder cookies.
              </p>
            </div>

            {/* More info */}
            <div>
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">Mer information</h2>
              <p className="leading-relaxed">
                För mer information om hur vi behandlar dina personuppgifter, vänligen läs vår{" "}
                <Link href="/integritetspolicy" className="text-[#8c7b60] hover:underline">
                  integritetspolicy
                </Link>
                .
              </p>
            </div>

            {/* Contact */}
            <div className="bg-[#f5f3ef] p-8 rounded-lg mt-12">
              <h2 className="text-2xl font-medium text-[#1a1a1a] font-aboreto mb-4">Frågor om cookies?</h2>
              <p className="leading-relaxed mb-4">
                Har du frågor om vår användning av cookies är du välkommen att kontakta oss:
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
