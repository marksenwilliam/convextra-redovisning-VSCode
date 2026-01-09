import { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ui/ServiceHero";
import ContentSection from "@/components/ui/ContentSection";
import { FeatureCard, BenefitItem, ProcessStep } from "@/components/ui/FeatureCard";
import CTASection from "@/components/ui/CTASection";
import RelatedServices from "@/components/ui/RelatedServices";
import { FileCheck, FileText, Receipt } from "lucide-react";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Hjälp med årsredovisning | Bokslut & Deklaration | Convextra",
  description:
    "Behöver du hjälp med årsredovisning? Convextra sköter bokslut, årsredovisning och deklaration – korrekt, i tid och utan stress. Boka gratis samtal.",
  keywords: [
    "hjälp med årsredovisning",
    "årsredovisning",
    "bokslut",
    "deklaration företag",
    "bolagsverket årsredovisning",
  ],
  alternates: {
    canonical: "/tjanster/bokslut-arsredovisning",
  },
};

export default function BokslutPage() {
  return (
    <main>
      <BreadcrumbSchema items={[
        { name: "Hem", url: "/" },
        { name: "Tjänster", url: "/tjanster" },
        { name: "Bokslut & Årsredovisning" }
      ]} />
      <ServiceHero
        title="Hjälp med årsredovisning"
        subtitle="Vi hjälper dig med din årsredovisning så att du får full kontroll på siffrorna"
        backgroundImage="/assets/newgoldengeometry.png"
        breadcrumb="Bokslut & Årsredovisning"
      />

      {/* Intro Section with Overlapping Image */}
      <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-12 relative">
        {/* Overlapping Image */}
        <div className="max-w-4xl mx-auto -mt-32 md:-mt-40 mb-12 md:mb-16 relative z-10">
          <div className="relative aspect-square max-w-[500px] mx-auto rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/årsredovisning.jpg"
              alt="Bokslut och årsredovisning - Convextra Redovisning"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed font-light font-geist">
            När året ska avslutas vill du känna dig trygg med att siffrorna stämmer och att
            allt rapporteras korrekt till Bolagsverket och Skatteverket. På Convextra
            Redovisning tar vi hand om hela processen – från avstämningar och underlag till
            färdig årsredovisning och deklaration.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed font-light font-geist mt-6">
            Strukturerat, korrekt och utan stress. Du får ett bokslut som håller för
            granskning – och full koll på företagets resultat.
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
              icon={<FileCheck className="w-8 h-8" />}
              title="Korrekt bokslut från början"
              description="Vi går igenom året, stämmer av samtliga balanskonton och säkerställer att allt är bokfört korrekt. Resultatet är ett rent och tydligt bokslut som speglar den verkliga ekonomin i ditt företag – redo för revisor, bank eller framtida beslut."
            />
            <FeatureCard
              icon={<FileText className="w-8 h-8" />}
              title="Årsredovisning som tål granskning"
              description="Vi upprättar en komplett årsredovisning enligt gällande lagar och regelverk. Allt levereras i tid, i rätt format och utan krångel. Du slipper osäkerheten kring formalia och vet att handlingarna är korrekta inför Bolagsverket."
            />
            <FeatureCard
              icon={<Receipt className="w-8 h-8" />}
              title="Moms och Momsrapportering"
              description="Mervärdesskatt (moms) är en central del av svensk företagsbeskattning. För företagare innebär det att korrekt hantering och rapportering är både en juridisk skyldighet och en möjlighet till effektiv kassaflödesstyrning."
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
              title="Vi går igenom din ekonomi"
              description="Samlar in underlag och bokföringsdata. Stämmer av konton, perioder och poster. Identifierar justeringar som behövs inför bokslut."
            />
            <ProcessStep
              number={2}
              title="Vi upprättar bokslut & årsredovisning"
              description="Gör nödvändiga bokslutsdispositioner och reserveringar. Upprättar årsredovisningen i rätt format. Säkerställer att allt följer lagar och normer."
            />
            <ProcessStep
              number={3}
              title="Vi skickar in handlingarna"
              description="Lämnar in deklaration & årsredovisning i tid. Ger dig nyckeltal och analys av året. Finns tillgängliga för frågor om resultat och skatt."
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
              title="Allt blir korrekt från start"
              description="Genom noggranna avstämningar och kontroller ser vi till att bokslutet blir rätt redan första gången. Du slipper onödiga rättningar och tidskrävande efterjusteringar."
            />
            <BenefitItem
              title="Tydlig årsanalys"
              description="Du får en genomgång av resultatet, kassaflödet och företagets utveckling under året. Perfekt underlag för budget, planering och framtida beslut."
            />
            <BenefitItem
              title="Full kontroll på siffrorna"
              description="Vi sammanställer tydliga rapporter och nyckeltal så att du förstår hur året faktiskt gick – inte bara vad siffrorna visar på pappret."
            />
            <BenefitItem
              title="Minskad skattekostnads-risk"
              description="Vi ser till att reserveringar, avdrag, periodiseringar och skattemässiga justeringar hanteras korrekt. Det minskar risken för fel och onödiga skattekostnader."
            />
            <BenefitItem
              title="Inlämning i tid"
              description="Årsredovisning och deklaration skickas in korrekt och i tid – varje gång. Du slipper påminnelser, förseningar och risken för förseningsavgifter."
            />
            <BenefitItem
              title="Ingen årsbokslutsstress"
              description="Vi hanterar hela processen åt dig, från underlag till färdigt bokslut och deklaration. Du kan fortsätta driva verksamheten utan onödigt avbrott och stress."
            />
          </div>
        </div>
      </section>

      <RelatedServices currentServiceSlug="bokslut-arsredovisning" />

      <CTASection />
    </main>
  );
}
