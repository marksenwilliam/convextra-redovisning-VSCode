import { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ui/ServiceHero";
import { FeatureCard, BenefitItem, ProcessStep } from "@/components/ui/FeatureCard";
import CTASection from "@/components/ui/CTASection";
import RelatedServices from "@/components/ui/RelatedServices";
import { Monitor, FileBarChart, Shield } from "lucide-react";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Löpande bokföring | Redovisning företag | Convextra",
  description:
    "Löpande bokföring & redovisning för företag. Digital hantering, tydliga rapporter och trygghet i lagar och regler. Convextra Redovisning i Västerås.",
  keywords: [
    "löpande bokföring",
    "bokföring företag",
    "redovisning",
    "digital bokföring",
    "bokföringstjänster",
  ],
  alternates: {
    canonical: "/tjanster/lopande-bokforing",
  },
};

export default function LopandeBokforingPage() {
  return (
    <main>
      <BreadcrumbSchema items={[
        { name: "Hem", url: "/" },
        { name: "Tjänster", url: "/tjanster" },
        { name: "Löpande bokföring" }
      ]} />
      <ServiceHero
        title="LÖPANDE BOKFÖRING"
        subtitle="Vad är löpande bokföring och varför kan det vara värdefullt för dig?"
        backgroundImage="/assets/newgoldengeometry.png"
        breadcrumb="Löpande bokföring"
      />

      {/* Intro Section with Overlapping Image */}
      <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-12 relative">
        {/* Overlapping Image */}
        <div className="max-w-4xl mx-auto -mt-32 md:-mt-40 mb-12 md:mb-16 relative z-10">
          <div className="relative aspect-square max-w-[500px] mx-auto rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/bokföring.jpg"
              alt="Löpande bokföring - Convextra Redovisning"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed font-light font-geist">
            Vi är din bokföringsbyrå när du behöver löpande redovisning. Löpande bokföring är
            grunden i all ekonomi. När den sköts rätt får du full koll på läget, kan planera
            framåt och slipper obehagliga överraskningar.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed font-light font-geist mt-6">
            På Convextra Redovisning tar vi hand om hela din löpande redovisning – digitalt,
            strukturerat och med tydliga rapporter som du faktiskt förstår.
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
            <FeatureCard
              icon={<Monitor className="w-8 h-8" />}
              title="Smidig digital hantering"
              description="Glöm pärmar och lösa kvitton. Med våra digitala arbetssätt skickar du in kvitton, leverantörsfakturor och underlag direkt via mobil eller mejl. Vi ser till att allt bokförs löpande och hamnar på rätt ställe från början."
            />
            <FeatureCard
              icon={<FileBarChart className="w-8 h-8" />}
              title="Tydliga siffror & rapporter"
              description="Varje månad får du uppdaterade rapporter över resultat, balans och kassaflöde. Vi lyfter fram det som är viktigt för just ditt företag och förklarar siffrorna på ett begripligt sätt."
            />
            <FeatureCard
              icon={<Shield className="w-8 h-8" />}
              title="Trygghet i lagar och regler"
              description="Moms, arbetsgivardeklarationer, bokföringslag och redovisningsregler – vi håller koll åt dig. Convextra ser till att allt rapporteras korrekt och i tid."
            />
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
              title="Vi lär känna ditt företag"
              description="Boka ett kostnadsfritt samtal. Gå igenom verksamhet, volymer och behov. Få ett tydligt förslag på upplägg och pris."
            />
            <ProcessStep
              number={2}
              title="Vi sätter upp dina digitala flöden"
              description="Kopplar ihop system och skapar smidiga rutiner. Säkerställer att underlag kommer in på rätt sätt. Ger dig instruktioner så att vardagen blir enkel."
            />
            <ProcessStep
              number={3}
              title="Vi sköter siffrorna – du får koll"
              description="Bokför löpande och sköter moms & rapportering. Stämmer av konton och ser till att allt är korrekt. Skickar månadsrapporter och finns tillgängliga för frågor."
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
              title="Mer tid till din verksamhet"
              description="Du startade inte företag för att lägga kvällarna på kvitton, kontoplaner och momsdatum. När vi sköter din löpande redovisning får du tillbaka tid till kunder, affärsutveckling och livet utanför jobbet."
            />
            <BenefitItem
              title="Förutsägbara kostnader"
              description="Du ska veta vad din redovisning kostar – varje månad. Med tydlig prissättning och fasta överenskommelser slipper du oväntade fakturor."
            />
            <BenefitItem
              title="Mindre risk & färre fel"
              description="Varje krona har sin plats och varje händelse går att följa. Vi stämmer av bank, skattekonto och balanskonton löpande så att redovisningen alltid är i fas."
            />
            <BenefitItem
              title="Beslut på bättre underlag"
              description="Siffror är bara intressanta om de går att förstå och använda. Därför får du rapporter där vi lyfter fram det som är viktigast: lönsamhet, kostnadsnivåer och trender över tid."
            />
            <BenefitItem
              title="Alltid uppdaterade siffror"
              description="Siffror är bara värdefulla när de är aktuella. Vi bokför löpande och stämmer av konton regelbundet så att du alltid har en färsk bild av resultat, kassaflöde och skulder."
            />
          </div>
        </div>
      </section>

      <RelatedServices currentServiceSlug="lopande-bokforing" />

      <CTASection />
    </main>
  );
}
