import { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ui/ServiceHero";
import { FeatureCard, BenefitItem, ProcessStep } from "@/components/ui/FeatureCard";
import CTASection from "@/components/ui/CTASection";
import RelatedServices from "@/components/ui/RelatedServices";
import { Zap, Workflow, BarChart3 } from "lucide-react";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Digitalisering företag | Automatisera bokföring | Convextra",
  description:
    "Digitalisering av företagets ekonomi – vi automatiserar kvittohantering, fakturor och rapportering. Spara tid och få bättre kontroll med Convextra.",
  keywords: [
    "digitalisering företag",
    "automatisera bokföring",
    "digital ekonomi",
    "effektivisering",
    "bokföringsprogram",
  ],
  alternates: {
    canonical: "/tjanster/digitalisering",
  },
};

export default function DigitaliseringPage() {
  return (
    <main>
      <BreadcrumbSchema items={[
        { name: "Hem", url: "/" },
        { name: "Tjänster", url: "/tjanster" },
        { name: "Digitalisering" }
      ]} />
      <ServiceHero
        title="Automatisera bokföring?"
        subtitle="Vi hjälper dig effektivisera hela din ekonomihantering med smarta digitala arbetssätt"
        backgroundImage="/assets/newgoldengeometry.png"
        breadcrumb="Digitalisering"
      />

      {/* Intro Section with Overlapping Image */}
      <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-12 relative">
        {/* Overlapping Image */}
        <div className="max-w-4xl mx-auto -mt-32 md:-mt-40 mb-12 md:mb-16 relative z-10">
          <div className="relative aspect-square max-w-[500px] mx-auto rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/digitalisering.jpg"
              alt="Digitalisering - Convextra Redovisning"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed font-light font-geist">
            Många företag lägger onödigt mycket tid på manuella moment: kvitton, papper,
            fakturor, rapporter, avstämningar och administration. Genom att digitalisera och
            automatisera flödena runt ekonomin blir arbetet både snabbare och mer tillförlitligt
            – och du får tid över till det som faktiskt driver företaget framåt.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed font-light font-geist mt-6">
            Vi hjälper dig skapa en modern, smart ekonomifunktion som bara fungerar.
          </p>
        </div>
      </section>

      {/* Key Features */}
      <section className="bg-[#f5f3ef] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#1a1a1a] text-center mb-16 tracking-tight font-aboreto font-medium">
            Vad vi hjälper dig med
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white hover:bg-[#3a3a3a] p-8 rounded-lg hover:-translate-y-2 transition-all duration-500 ease-out group h-full shadow-sm">
              <div className="mb-6 h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/assets/digital-1.jpeg"
                  alt="Automatiserade kvitto- och fakturaflöden"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl text-[#1a1a1a] group-hover:text-white mb-4 font-playfair font-medium transition-colors duration-500 ease-out">
                Automatiserade kvitto- & fakturaflöden
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed font-geist font-light transition-colors duration-500 ease-out">
                Vi sätter upp smidiga rutiner där kvitton fotas i mobilen, fakturor kommer direkt in i systemet och underlag hamnar rätt automatiskt. Mindre klick, mindre jagande, mindre fel.
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white hover:bg-[#3a3a3a] p-8 rounded-lg hover:-translate-y-2 transition-all duration-500 ease-out group h-full shadow-sm">
              <div className="mb-6 h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/assets/digital-2.jpeg"
                  alt="Smidigare arbetsflöden och bättre struktur"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl text-[#1a1a1a] group-hover:text-white mb-4 font-playfair font-medium transition-colors duration-500 ease-out">
                Smidigare arbetsflöden & bättre struktur
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed font-geist font-light transition-colors duration-500 ease-out">
                All ekonomi samlas digitalt i tydliga system. Du slipper pärmar, dubbla filer och manuella speciallösningar. Ekonomin blir enklare att hantera – varje dag.
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white hover:bg-[#3a3a3a] p-8 rounded-lg hover:-translate-y-2 transition-all duration-500 ease-out group h-full shadow-sm">
              <div className="mb-6 h-48 relative rounded-lg overflow-hidden">
                <Image
                  src="/assets/digital-3.jpeg"
                  alt="Snabbare siffror och bättre rapportering"
                  fill
                  className="object-cover"
                />
              </div>
              <h3 className="text-xl text-[#1a1a1a] group-hover:text-white mb-4 font-playfair font-medium transition-colors duration-500 ease-out">
                Snabbare siffror & bättre rapportering
              </h3>
              <p className="text-gray-600 group-hover:text-white/80 text-sm leading-relaxed font-geist font-light transition-colors duration-500 ease-out">
                När flödena är digitala och automatiserade får du rapporter snabbare, mer tillförlitliga siffror och bättre beslutsunderlag. Perfekt för företag som vill växa eller få bättre koll.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[800px] mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#1a1a1a] text-center mb-16 tracking-tight font-aboreto font-medium">
            Så här går det till
          </h2>
          <div className="space-y-12">
            <ProcessStep
              number={1}
              title="Vi kartlägger dina ekonomiflöden"
              description="Genomgång av hur ni jobbar idag. Identifiering av manuella steg och tidstjuvar. Förslag på förbättringar och system som passar er."
            />
            <ProcessStep
              number={2}
              title="Vi bygger upp ett modernt, digitalt arbetssätt"
              description="Vi implementerar rätt system och integrationer. Sätter upp automatiserade flöden för kvitton, fakturor och rapportering. Skapar rutiner som gör vardagen enklare."
            />
            <ProcessStep
              number={3}
              title="Vi stöttar och optimerar löpande"
              description="Vi ser till att allt fungerar över tid. Justerar och utvecklar flödena efter era behov. Ni får support när något känns oklart eller behöver förbättras."
            />
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="bg-[#f5f3ef] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#1a1a1a] text-center mb-16 tracking-tight font-aboreto font-medium">
            Vad du vinner
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <BenefitItem
              title="Mindre manuellt arbete"
              description="Automatiserade rutiner minskar tiden du lägger på ekonomi"
            />
            <BenefitItem
              title="Färre fel och bättre kvalitet"
              description="Digitala flöden eliminerar dubbelarbete och borttappade underlag"
            />
            <BenefitItem
              title="Snabbare siffror"
              description="Du får uppdaterade rapporter och bättre beslutsunderlag – snabbare."
            />
            <BenefitItem
              title="Smidigare vardag"
              description="Allt samlas digitalt och blir lättare att hantera och följa upp."
            />
            <BenefitItem
              title="Modern & skalbar ekonomi"
              description="Rätt system och rutiner gör att ekonomin håller i takt med företagets tillväxt."
            />
            <BenefitItem
              title="Mer tid för det som räknas"
              description="När ekonomin flyter av sig själv kan du fokusera på kundvärde och utveckling istället."
            />
          </div>
        </div>
      </section>

      <RelatedServices currentServiceSlug="digitalisering" />

      <CTASection />
    </main>
  );
}
