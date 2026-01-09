import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
    title: "Deklaration aktiebolag – Komplett guide 2026 | Convextra",
    description:
        "Allt om inkomstdeklaration för aktiebolag. Lär dig om INK2, viktiga datum, vanliga avdrag och hur du undviker misstag. Guide från Convextra Redovisning.",
    keywords: [
        "deklaration aktiebolag",
        "inkomstdeklaration AB",
        "INK2",
        "skattedeklaration företag",
        "årsredovisning aktiebolag",
        "skatteverket aktiebolag",
    ],
    alternates: {
        canonical: "/blogg/deklaration-aktiebolag",
    },
};

const faqItems = [
    {
        question: "När ska aktiebolag lämna in deklaration?",
        answer: "Tidpunkten beror på räkenskapsåret. För bolag med kalenderår (jan-dec) är deadline 1 juli året efter. Bolag med brutet räkenskapsår har andra datum."
    },
    {
        question: "Vad är INK2?",
        answer: "INK2 (Inkomstdeklaration 2) är huvudblanketten för aktiebolag och andra juridiska personers inkomstdeklaration till Skatteverket."
    },
    {
        question: "Vilka avdrag kan aktiebolag göra?",
        answer: "Vanliga avdrag inkluderar periodiseringsfonder, avskrivningar på inventarier, koncernbidrag, förlustavdrag från tidigare år och FoU-avdrag."
    },
    {
        question: "Vad kostar det att lämna in deklaration för sent?",
        answer: "Första förseningsavgiften är 625 kr. Vid upprepade förseningar kan avgiften öka betydligt, och skatteverket kan även uppskatta vinsten."
    }
];

export default function DeklarationAktiebolagPage() {
    return (
        <main>
            {/* Schema Markup */}
            <BreadcrumbSchema items={[
                { name: "Hem", url: "/" },
                { name: "Blogg", url: "/blogg" },
                { name: "Deklaration aktiebolag" }
            ]} />
            <ArticleSchema
                headline="Deklaration aktiebolag – Komplett guide 2026"
                description="Allt om inkomstdeklaration för aktiebolag. Lär dig om INK2, viktiga datum, vanliga avdrag och hur du undviker misstag."
                datePublished="2026-01-09"
                image="/assets/rådgivning.jpg"
                url="/blogg/deklaration-aktiebolag"
            />
            <FAQSchema items={faqItems} />

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
                        <span>9 januari 2026</span>
                        <span>•</span>
                        <span>5 min läsning</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-aboreto font-medium tracking-tight mb-6">
                        Deklaration aktiebolag – Komplett guide
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl font-light font-geist leading-relaxed">
                        Allt du behöver veta om inkomstdeklaration för ditt aktiebolag
                    </p>
                </div>
            </header>

            {/* Article Content */}
            <article className="bg-white py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-[700px] mx-auto prose prose-lg prose-gray font-geist">
                    <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
                        Varje år ska alla aktiebolag lämna in inkomstdeklaration till
                        Skatteverket. Det kan kännas överväldigande, men med rätt kunskap
                        och förberedelser går det smidigt. I den här guiden går vi igenom
                        allt du behöver veta om deklaration för aktiebolag.
                    </p>

                    <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
                        Vilka blanketter används för aktiebolag?
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Aktiebolag deklarerar med blankett <strong>INK2</strong>
                        (Inkomstdeklaration 2). Detta är den vanliga deklarationen för
                        juridiska personer. Beroende på verksamheten kan även bilagor
                        krävas.
                    </p>

                    <div className="bg-[#f5f3ef] rounded-lg p-6 mt-6">
                        <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-4">
                            Vanliga blanketter och bilagor:
                        </h4>
                        <ul className="space-y-2 text-gray-600 list-none pl-0">
                            <li className="flex items-start gap-3">
                                <span className="text-[#8c7b60] font-medium">INK2</span>
                                <span>– Huvudblanketten för aktiebolag</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#8c7b60] font-medium">N3A</span>
                                <span>– Tilläggsinformation om transaktioner med närstående</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#8c7b60] font-medium">SKV 2002</span>
                                <span>– Räkenskapsschema (bifogas årsredovisningen)</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-[#8c7b60] font-medium">K10</span>
                                <span>– Fåmansföretag och kvalificerade andelar</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
                        Viktiga datum att hålla koll på
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Tidpunkten för deklaration beror på ditt räkenskapsår. De flesta
                        aktiebolag har kalenderår (januari–december), men andra upplägg
                        förekommer.
                    </p>

                    <div className="overflow-x-auto mt-6">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-[#1a1a1a]">
                                    <th className="text-left p-3 font-medium text-white">Räkenskapsår slutar</th>
                                    <th className="text-left p-3 font-medium text-white">Deklaration senast</th>
                                    <th className="text-left p-3 font-medium text-white">Skatt betalas</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                <tr className="border-b">
                                    <td className="p-3">31 december</td>
                                    <td className="p-3">1 juli året efter</td>
                                    <td className="p-3">12 mars året efter</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">30 april</td>
                                    <td className="p-3">1 november samma år</td>
                                    <td className="p-3">12 juli samma år</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3">30 juni</td>
                                    <td className="p-3">15 december samma år</td>
                                    <td className="p-3">12 september samma år</td>
                                </tr>
                                <tr>
                                    <td className="p-3">31 augusti</td>
                                    <td className="p-3">1 mars året efter</td>
                                    <td className="p-3">12 november samma år</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <div className="bg-[#1a1a1a] rounded-lg p-6 mt-6">
                        <h4 className="text-lg font-playfair font-medium text-white mb-3">
                            ⚠️ Viktigt om förseningar
                        </h4>
                        <p className="text-white/80 text-sm leading-relaxed">
                            Om deklarationen lämnas för sent utgår förseningsavgift. Första
                            förseningsavgiften är 625 kr, men vid upprepade förseningar kan
                            avgiften öka betydligt. Lämna alltid in i tid!
                        </p>
                    </div>

                    <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
                        Steg för steg: Så deklarerar du ditt aktiebolag
                    </h2>

                    <div className="space-y-6 mt-6">
                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#f5f3ef] flex items-center justify-center flex-shrink-0">
                                <span className="text-[#8c7b60] font-playfair font-medium">1</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
                                    Upprätta årsredovisning
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Innan du kan deklarera måste årsredovisningen vara klar. Den
                                    ska godkännas på årsstämma och skickas till Bolagsverket.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#f5f3ef] flex items-center justify-center flex-shrink-0">
                                <span className="text-[#8c7b60] font-playfair font-medium">2</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
                                    Beräkna skattemässigt resultat
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Det bokföringsmässiga resultatet justeras för ej avdragsgilla
                                    kostnader, skattefria intäkter och periodiseringsfonder.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#f5f3ef] flex items-center justify-center flex-shrink-0">
                                <span className="text-[#8c7b60] font-playfair font-medium">3</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
                                    Fyll i INK2
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Fyll i blanketten digitalt via Skatteverkets e-tjänster eller
                                    via ditt bokföringsprogram. De flesta program kan exportera
                                    till SRU-fil.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#f5f3ef] flex items-center justify-center flex-shrink-0">
                                <span className="text-[#8c7b60] font-playfair font-medium">4</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
                                    Bifoga bilagor
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Om du har periodiseringsfonder, koncernbidrag eller andra
                                    särskilda poster behöver du bilagor.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="w-10 h-10 rounded-full bg-[#f5f3ef] flex items-center justify-center flex-shrink-0">
                                <span className="text-[#8c7b60] font-playfair font-medium">5</span>
                            </div>
                            <div>
                                <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
                                    Skicka in och betala skatt
                                </h4>
                                <p className="text-gray-600 text-sm">
                                    Skicka in deklarationen och se till att skattekontot är
                                    påfyllt i tid för slutlig skatt.
                                </p>
                            </div>
                        </div>
                    </div>

                    <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
                        Vanliga avdrag för aktiebolag
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Det finns många avdrag som aktiebolag kan utnyttja. Här är några
                        av de vanligaste:
                    </p>

                    <ul className="space-y-3 text-gray-600 list-none pl-0 mt-4">
                        <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>
                                <strong>Periodiseringsfonder</strong> – Skjut upp beskattning
                                genom att sätta av del av vinsten
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>
                                <strong>Avskrivningar</strong> – Skriv av inventarier och
                                maskiner över tid
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>
                                <strong>Koncernbidrag</strong> – Flytta vinst mellan bolag i
                                samma koncern
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>
                                <strong>Förlustavdrag</strong> – Kvitta tidigare års förluster
                                mot vinst
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-green-600 mt-1">✓</span>
                            <span>
                                <strong>FoU-avdrag</strong> – Extra avdrag för forskning och
                                utveckling
                            </span>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
                        Vanliga misstag att undvika
                    </h2>

                    <div className="space-y-4 mt-6">
                        <div className="border-l-4 border-[#cbbba0] pl-6">
                            <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
                                Glömma ej avdragsgilla kostnader
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Böter, representation över gränsbelopp och privata kostnader
                                är inte avdragsgilla och måste läggas tillbaka i deklarationen.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#cbbba0] pl-6">
                            <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
                                Fel på K10-blanketten
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Fåmansföretagare måste fylla i K10 korrekt för beräkning av
                                gränsbelopp och kapitalinkomst. Fel här kan bli dyrt.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#cbbba0] pl-6">
                            <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
                                Missa tidigare underskott
                            </h4>
                            <p className="text-gray-600 text-sm">
                                Om bolaget hade förlust tidigare år kan du kvitta det mot årets
                                vinst – men bara om du anger det i deklarationen.
                            </p>
                        </div>
                    </div>

                    <div className="bg-[#f5f3ef] border border-[#cbbba0]/30 rounded-lg p-8 mt-12">
                        <h3 className="text-xl font-playfair font-medium text-[#1a1a1a] mb-4">
                            Sammanfattning
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Deklaration för aktiebolag kräver att årsredovisningen är klar
                            och att du har koll på skattemässiga justeringar. Håll koll på
                            datum, utnyttja tillgängliga avdrag och undvik vanliga misstag.
                            Med en bra redovisningskonsult på din sida kan du känna dig trygg
                            genom hela processen.
                        </p>
                    </div>
                </div>
            </article>

            {/* CTA Section */}
            <section className="bg-[#1a1a1a] py-20 px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl text-white mb-6 tracking-tight font-aboreto font-medium">
                        Låt oss ta hand om din deklaration
                    </h2>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed font-light font-geist mb-10">
                        Vi hjälper aktiebolag med både bokslut, årsredovisning och
                        inkomstdeklaration. Boka ett kostnadsfritt samtal så pratar vi
                        igenom hur vi kan hjälpa dig.
                    </p>
                    <Link
                        href="/kontakt"
                        className="inline-block px-10 py-4 bg-[#cbbba0] hover:bg-[#b8a88e] text-[#1a1a1a] text-[0.7rem] uppercase tracking-[0.15em] font-medium rounded transition-colors duration-300 font-geist"
                    >
                        Boka gratis konsultation
                    </Link>
                </div>
            </section>

            {/* Related Content */}
            <section className="bg-white py-16 px-6 md:px-12 border-t border-gray-100">
                <div className="max-w-[800px] mx-auto">
                    <h3 className="text-xl font-playfair font-medium text-[#1a1a1a] mb-6">
                        Relaterade artiklar
                    </h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Link
                            href="/blogg/bokforing-aktiebolag"
                            className="group p-6 bg-[#f5f3ef] rounded-lg hover:bg-[#eae6df] transition-colors"
                        >
                            <h4 className="text-lg font-medium text-[#1a1a1a] group-hover:text-[#8c7b60] transition-colors">
                                Bokföring aktiebolag
                            </h4>
                            <p className="text-gray-600 text-sm mt-2">
                                Allt du behöver veta om bokföring för AB
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
                                Vi sköter ditt bokslut åt dig
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
