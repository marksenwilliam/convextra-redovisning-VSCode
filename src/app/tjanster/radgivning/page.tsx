import { Metadata } from "next";
import Image from "next/image";
import ServiceHero from "@/components/ui/ServiceHero";
import { FeatureCard, BenefitItem } from "@/components/ui/FeatureCard";
import CTASection from "@/components/ui/CTASection";
import RelatedServices from "@/components/ui/RelatedServices";
import { GraduationCap, Lightbulb, Target, Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Redovisningskonsult Västerås | Ekonomisk rådgivning | Convextra",
  description:
    "Redovisningskonsult i Västerås – rådgivning inom ekonomi, skatt och bolagsfrågor. Få hjälp att fatta rätt beslut för ditt företag. Boka gratis samtal.",
  alternates: {
    canonical: "/tjanster/radgivning",
  },
};

export default function RadgivningPage() {
  return (
    <main>
      <ServiceHero
        title="Vad gör en redovisningskonsult?"
        subtitle="Vad gör egentligen en bra redovisningskonsult? Läs vidare för att förstå hur vår rådgivning faktiskt kan hjälpa dig"
        backgroundImage="/assets/newgoldengeometry.png"
        breadcrumb="Rådgivning"
      />

      {/* Intro Section with Overlapping Image */}
      <section className="bg-white pt-8 pb-16 md:pt-12 md:pb-24 px-6 md:px-12 relative">
        {/* Overlapping Image */}
        <div className="max-w-4xl mx-auto -mt-32 md:-mt-40 mb-12 md:mb-16 relative z-10">
          <div className="relative aspect-square max-w-[500px] mx-auto rounded-xl overflow-hidden shadow-2xl">
            <Image
              src="/assets/rådgivning.jpg"
              alt="Rådgivning - Convextra Redovisning"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>

        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed font-light font-geist">
            Ekonomi, skatt och bolagsfrågor kan vara snårigt. När regler ändras, verksamheten
            växer eller viktiga vägval ska göras är det tryggt att ha någon som förklarar,
            vägleder och prioriterar rätt.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed font-light font-geist mt-6">
            Hos oss på Convextra Redovisning får du rådgivning som är konkret, begriplig och
            direkt användbar i din vardag.
          </p>
        </div>
      </section>

      {/* What We Help With */}
      <section className="bg-[#f5f3ef] py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1000px] mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#1a1a1a] text-center mb-16 tracking-tight font-aboreto font-medium">
            Vi hjälper dig att
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              "Planera skatt & utdelning",
              "Förstå siffror & lönsamhet",
              "Starta eller ändra bolagsform",
              "Få koll på moms, avdrag & regler",
              "Ta in delägare eller göra ägarförändringar",
              "Stöd inför bankmöten eller myndighetskontakt",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-white p-6 rounded-lg shadow-sm"
              >
                <div className="w-8 h-8 rounded-full bg-[#8c7b60]/10 flex items-center justify-center shrink-0">
                  <Check className="w-4 h-4 text-[#8c7b60]" strokeWidth={2} />
                </div>
                <span className="text-[#1a1a1a] font-geist font-medium">{item}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Approach */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-[1200px] mx-auto">
          <h2 className="text-3xl md:text-4xl text-[#1a1a1a] text-center mb-16 tracking-tight font-aboreto font-medium">
            Vår rådgivning ger dig
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<GraduationCap className="w-8 h-8" />}
              title="Erfarenhet"
              description="Du får svar på ett språk du förstår, utan facktermer och krångliga förklaringar. Vi översätter komplexa skatteregler och bokföringsbestämmelser till konkreta handlingsplaner som är lätta att följa."
            />
            <FeatureCard
              icon={<Lightbulb className="w-8 h-8" />}
              title="Fakta & kunskap"
              description="Vi hjälper dig undvika kostsamma misstag och onödiga skatter genom proaktiv planering och noggrann analys. Med djup kunskap om skatterätt, bokföringslagen och Skatteverkets senaste riktlinjer identifierar vi möjligheter du kanske inte visste fanns."
            />
            <FeatureCard
              icon={<Target className="w-8 h-8" />}
              title="Klarhet & perspektiv"
              description="Du får tydliga rekommendationer baserat på fakta, regler och erfarenhet – inte vaga gissningar. Vi presenterar olika alternativ, förklarar konsekvenserna av varje beslut och hjälper dig väga för- och nackdelar."
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
              title="Rätt beslut från början"
              description="Med rätt rådgivning undviker du kostsamma misstag och kan fatta välgrundade beslut om din ekonomi."
            />
            <BenefitItem
              title="Optimerad skatteplanering"
              description="Vi identifierar möjligheter att minska din skattebörda inom lagens ramar."
            />
            <BenefitItem
              title="Trygghet i komplexa frågor"
              description="Oavsett om det gäller bolagsstruktur, ägarförändringar eller myndighetskontakt – vi finns där."
            />
            <BenefitItem
              title="En partner som förstår dig"
              description="Vi anpassar rådgivningen efter just din verksamhet och dina kunskapsnivåer."
            />
          </div>
        </div>
      </section>

      <RelatedServices currentServiceSlug="radgivning" />

      <CTASection />
    </main>
  );
}
