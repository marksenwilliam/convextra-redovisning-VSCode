import { Metadata } from "next";
import ServiceHero from "@/components/ui/ServiceHero";
import { FeatureCard, BenefitItem, ProcessStep } from "@/components/ui/FeatureCard";
import CTASection from "@/components/ui/CTASection";
import { Wallet, CalendarDays, FileSpreadsheet } from "lucide-react";

export const metadata: Metadata = {
  title: "Löneadministration Västerås | Lönehantering | Convextra",
  description:
    "Löneadministration i Västerås – vi hanterar löner, AGI, semester och rapportering. Trygg lönehantering varje månad. Boka kostnadsfritt samtal.",
};

export default function LoneadministrationPage() {
  return (
    <main>
      <ServiceHero
        title="Hjälp med löner?"
        subtitle="Vi hanterar löner, avtal, frånvaro och rapportering – så att allt blir rätt och skickas in i tid"
        backgroundImage="/assets/newgoldengeometry.png"
        breadcrumb="Löneadministration"
      />

      {/* Intro Section */}
      <section className="bg-white py-16 md:py-24 px-6 md:px-12">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-600 text-lg leading-relaxed font-light font-geist">
            Du fokuserar på din verksamhet så sköter vi lönerna. Lönehantering är ett av
            företagets mest känsliga områden. När den sköts rätt får dina medarbetare trygghet,
            du slipper stress och allt rapporteras korrekt till Skatteverket och andra
            myndigheter.
          </p>
          <p className="text-gray-600 text-lg leading-relaxed font-light font-geist mt-6">
            På Convextra Redovisning tar vi hand om hela löneprocessen – strukturerat, korrekt
            och i tid – varje månad.
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
              icon={<Wallet className="w-8 h-8" />}
              title="Korrekt lön i rätt tid"
              description="Vi sköter hela löneprocessen: löner, ersättningar, frånvaro, traktamenten och övriga underlag. Allt beräknas enligt aktuella lagar och regler så att dina medarbetare alltid får rätt lön – på rätt dag."
            />
            <FeatureCard
              icon={<CalendarDays className="w-8 h-8" />}
              title="Full ordning på ledighet & frånvaro"
              description="Semester, sjukfrånvaro, vab, övertid och komp – vi håller koll på allt. Du slipper osäkerhet, manuella räkningar och onödiga fel. Vi ser till att alla saldon är uppdaterade och korrekta."
            />
            <FeatureCard
              icon={<FileSpreadsheet className="w-8 h-8" />}
              title="Rapporter & arbetsgivardeklarationer"
              description="Vi hanterar arbetsgivardeklaration (AGI), pensionsrapportering, försäkringsunderlag och övrig myndighetsrapportering. Du kan vara trygg med att allt skickas in korrekt och i tid – varje månad."
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
              title="Vi lär känna din personal & dina behov"
              description="Boka ett kostnadsfritt samtal. Genomgång av anställningsform, avtal och rutiner. Förslag på lösning och pris."
            />
            <ProcessStep
              number={2}
              title="Vi sätter upp dina löneflöden"
              description="Vi skapar strukturer för löneunderlag, frånvaro & semester. Kopplar ihop rätt system. Ger tydliga instruktioner till dig och dina medarbetare."
            />
            <ProcessStep
              number={3}
              title="Vi sköter lönerna – du får full koll"
              description="Månatlig lönekörning. AGI & rapportering hanteras åt dig. Tillgängliga för frågor från både dig och personalen."
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
              title="Korrekta löner varje månad"
              description="Löner, ersättningar och avdrag blir rätt från början – enligt regler, lagar och avtal."
            />
            <BenefitItem
              title="Mindre administration"
              description="Du slipper jaga underlag och manuellt räkna semester eller frånvaro. Vi tar hand om allt."
            />
            <BenefitItem
              title="Trygghet i hanteringen"
              description="Vi säkerställer att AGI, pensionsunderlag och rapportering är korrekt och skickas in i tid."
            />
            <BenefitItem
              title="Full översikt över personalens saldon"
              description="Semester, komp, övertid och frånvaro hålls uppdaterat så du alltid har en tydlig bild."
            />
            <BenefitItem
              title="Bättre relation till personalen"
              description="Korrekt och tydlig lönehantering skapar trygghet och förtroende hos dina medarbetare."
            />
            <BenefitItem
              title="Support när du behöver det"
              description="Vi svarar snabbt när frågor uppstår – både från dig och dina anställda."
            />
          </div>
        </div>
      </section>

      <CTASection />
    </main>
  );
}
