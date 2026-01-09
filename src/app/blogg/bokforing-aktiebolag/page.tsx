import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
    title: "Bokföring aktiebolag – Allt du behöver veta 2026 | Convextra",
    description:
        "Komplett guide till bokföring för aktiebolag. Lär dig om skyldigheter, bokföringslagen, BAS-kontoplanen och hur du sköter din bokföring rätt från start.",
    keywords: [
        "bokföring aktiebolag",
        "aktiebolag bokföring",
        "bokföring AB",
        "bokföringslagen",
        "BAS-kontoplan",
        "redovisning aktiebolag",
    ],
    alternates: {
        canonical: "/blogg/bokforing-aktiebolag",
    },
};

const faqItems = [
    {
        question: "Måste aktiebolag ha revisor?",
        answer: "Nej, mindre aktiebolag kan välja bort revisor om de inte uppfyller minst två av tre gränsvärden: fler än 3 anställda, mer än 1,5 miljoner i balansomslutning, eller mer än 3 miljoner i nettoomsättning."
    },
    {
        question: "Hur ofta måste aktiebolag bokföra?",
        answer: "Enligt bokföringslagen ska aktiebolag bokföra löpande, vilket innebär att affärshändelser ska bokföras så snart det är möjligt. I praktiken bör bokföring ske minst månadsvis."
    },
    {
        question: "Vad händer om man inte bokför i tid?",
        answer: "Försenad bokföring kan leda till bokföringsbrott, vilket kan ge böter eller fängelse. Dessutom riskerar bolaget skattetillägg om deklarationer lämnas fel eller för sent."
    },
    {
        question: "Kan jag sköta bokföringen själv som aktiebolag?",
        answer: "Ja, det är möjligt men kräver god kunskap om bokföringslagen och skattelagstiftning. Många väljer att anlita en redovisningsbyrå för att säkerställa att allt blir rätt och spara tid."
    }
];

export default function BokforingAktiebolagPage() {
    return (
        <main>
            {/* Schema Markup */}
            <BreadcrumbSchema items={[
                { name: "Hem", url: "/" },
                { name: "Blogg", url: "/blogg" },
                { name: "Bokföring aktiebolag" }
            ]} />
            <ArticleSchema
                headline="Bokföring aktiebolag – Allt du behöver veta 2026"
                description="Komplett guide till bokföring för aktiebolag. Lär dig om skyldigheter, bokföringslagen, BAS-kontoplanen och hur du sköter din bokföring rätt från start."
                datePublished="2026-01-09"
                image="/assets/årsredovisning.jpg"
                url="/blogg/bokforing-aktiebolag"
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
                        <span>6 min läsning</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-aboreto font-medium tracking-tight mb-6">
                        Bokföring aktiebolag – Allt du behöver veta
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl font-light font-geist leading-relaxed">
                        En komplett guide för dig som driver eller ska starta aktiebolag
                    </p>
                </div>
            </header>

            {/* Article Content */}
            <article className="bg-white py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-[700px] mx-auto prose prose-lg prose-gray font-geist">
                    <p className="lead text-xl text-gray-700 leading-relaxed mb-8">
                        Att driva aktiebolag innebär ett större ansvar för bokföring och
                        redovisning jämfört med andra bolagsformer. I den här guiden går vi
                        igenom allt du behöver veta för att hålla ordning på din
                        bokföring – från grundläggande skyldigheter till praktiska tips.
                    </p>

                    <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
                        Varför är bokföring extra viktigt för aktiebolag?
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Som aktiebolag har du strängare krav på bokföring än enskilda
                        firmor. Här är de viktigaste skillnaderna:
                    </p>
                    <ul className="space-y-3 text-gray-600 list-none pl-0 mt-4">
                        <li className="flex items-start gap-3">
                            <span className="text-[#8c7b60] mt-1">•</span>
                            <span>
                                <strong>Årsredovisning är obligatorisk</strong> – Alla
                                aktiebolag måste lämna in årsredovisning till Bolagsverket
                                varje år
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#8c7b60] mt-1">•</span>
                            <span>
                                <strong>Revisionsplikt för större bolag</strong> – Om du når
                                vissa gränsvärden måste du ha revisor
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#8c7b60] mt-1">•</span>
                            <span>
                                <strong>Striktare regler för privata uttag</strong> – Du kan
                                inte ta ut pengar hur som helst utan lön eller utdelning
                            </span>
                        </li>
                        <li className="flex items-start gap-3">
                            <span className="text-[#8c7b60] mt-1">•</span>
                            <span>
                                <strong>Skattemässiga fördelar kräver korrekt bokföring</strong>
                                – Fel i bokföringen kan leda till allvarliga konsekvenser
                            </span>
                        </li>
                    </ul>

                    <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
                        Vad säger bokföringslagen?
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Enligt bokföringslagen (BFL) ska alla aktiebolag föra löpande
                        bokföring. Det innebär att alla affärshändelser ska bokföras så
                        snart det är möjligt. I praktiken betyder det:
                    </p>

                    <div className="bg-[#f5f3ef] rounded-lg p-6 mt-6">
                        <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-4">
                            Bokföringslagen kräver att du:
                        </h4>
                        <ul className="space-y-2 text-gray-600 list-none pl-0">
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 mt-1">✓</span>
                                <span>Bokför alla transaktioner löpande</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 mt-1">✓</span>
                                <span>Har verifikationer (kvitton/fakturor) för allt</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 mt-1">✓</span>
                                <span>Sparar räkenskapsinformation i 7 år</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 mt-1">✓</span>
                                <span>Upprättar årsbokslut eller årsredovisning</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <span className="text-green-600 mt-1">✓</span>
                                <span>Använder god redovisningssed</span>
                            </li>
                        </ul>
                    </div>

                    <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
                        BAS-kontoplanen – Grunden för din bokföring
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        De flesta svenska företag använder BAS-kontoplanen för sin
                        bokföring. Den delar upp kontona i klasser:
                    </p>

                    <div className="overflow-x-auto mt-6">
                        <table className="w-full text-sm border-collapse">
                            <thead>
                                <tr className="bg-[#1a1a1a]">
                                    <th className="text-left p-3 font-medium text-white">Kontoklass</th>
                                    <th className="text-left p-3 font-medium text-white">Innehåll</th>
                                    <th className="text-left p-3 font-medium text-white">Exempel</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                <tr className="border-b">
                                    <td className="p-3 font-medium">1xxx</td>
                                    <td className="p-3">Tillgångar</td>
                                    <td className="p-3">Bank, kundfordringar, inventarier</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3 font-medium">2xxx</td>
                                    <td className="p-3">Skulder & eget kapital</td>
                                    <td className="p-3">Leverantörsskulder, moms, lön</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3 font-medium">3xxx</td>
                                    <td className="p-3">Intäkter</td>
                                    <td className="p-3">Försäljning, ränteintäkter</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3 font-medium">4xxx</td>
                                    <td className="p-3">Varuinköp</td>
                                    <td className="p-3">Inköp av varor</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3 font-medium">5-6xxx</td>
                                    <td className="p-3">Övriga kostnader</td>
                                    <td className="p-3">Lokalhyra, telefon, resor</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3 font-medium">7xxx</td>
                                    <td className="p-3">Personalkostnader</td>
                                    <td className="p-3">Löner, sociala avgifter</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium">8xxx</td>
                                    <td className="p-3">Finansiella poster</td>
                                    <td className="p-3">Räntor, skatt, bokslutsposter</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>

                    <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
                        Vanliga misstag i aktiebolagets bokföring
                    </h2>

                    <div className="space-y-4 mt-6">
                        <div className="border-l-4 border-[#cbbba0] pl-6">
                            <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
                                1. Blanda privat och företag
                            </h4>
                            <p className="text-gray-600">
                                Ett vanligt misstag är att använda företagets kort för privata
                                inköp utan att bokföra det som förmån eller lån. Detta kan
                                leda till skattetillägg.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#cbbba0] pl-6">
                            <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
                                2. Missa momsdeklarationen
                            </h4>
                            <p className="text-gray-600">
                                Momsdeklarationen ska lämnas månads-, kvartals- eller årsvis
                                beroende på omsättning. Försening ger förseningsavgifter.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#cbbba0] pl-6">
                            <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
                                3. Släpa efter med bokföringen
                            </h4>
                            <p className="text-gray-600">
                                Att bokföra en gång per år räcker inte. Lagen kräver löpande
                                bokföring, och det gör det också enklare att ha koll på
                                företagets ekonomi.
                            </p>
                        </div>

                        <div className="border-l-4 border-[#cbbba0] pl-6">
                            <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-2">
                                4. Glömma arbetsgivardeklarationen
                            </h4>
                            <p className="text-gray-600">
                                Har du anställda (eller tar ut lön till dig själv) ska
                                arbetsgivaravgifter och skatteavdrag redovisas varje månad via
                                AGI.
                            </p>
                        </div>
                    </div>

                    <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mt-12 mb-4">
                        Ska du sköta bokföringen själv?
                    </h2>
                    <p className="text-gray-600 leading-relaxed">
                        Det är fullt möjligt att sköta bokföringen själv, särskilt om du
                        har ett mindre bolag med få transaktioner. Men det finns fördelar
                        med att ta hjälp:
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-6">
                        <div className="bg-[#f5f3ef] rounded-lg p-6">
                            <h4 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-3">
                                Sköta själv passar om:
                            </h4>
                            <ul className="space-y-2 text-gray-600 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>Få transaktioner per månad</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>Du har intresse för siffror</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-green-600">✓</span>
                                    <span>Enkel verksamhet utan anställda</span>
                                </li>
                            </ul>
                        </div>
                        <div className="bg-[#1a1a1a] rounded-lg p-6">
                            <h4 className="text-lg font-playfair font-medium text-white mb-3">
                                Anlita hjälp om:
                            </h4>
                            <ul className="space-y-2 text-white/80 text-sm">
                                <li className="flex items-start gap-2">
                                    <span className="text-[#cbbba0]">→</span>
                                    <span>Du har anställda</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#cbbba0]">→</span>
                                    <span>Många transaktioner varje månad</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#cbbba0]">→</span>
                                    <span>Du vill fokusera på din kärnverksamhet</span>
                                </li>
                                <li className="flex items-start gap-2">
                                    <span className="text-[#cbbba0]">→</span>
                                    <span>Du vill minimera risken för fel</span>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className="bg-[#f5f3ef] border border-[#cbbba0]/30 rounded-lg p-8 mt-12">
                        <h3 className="text-xl font-playfair font-medium text-[#1a1a1a] mb-4">
                            Sammanfattning
                        </h3>
                        <p className="text-gray-600 leading-relaxed">
                            Bokföring för aktiebolag kräver noggrannhet och kontinuitet.
                            Bokföringslagen ställer höga krav, och misstag kan bli kostsamma.
                            Med rätt system och rutiner – eller en bra redovisningskonsult –
                            kan du fokusera på det du gör bäst: att driva och utveckla ditt
                            företag.
                        </p>
                    </div>
                </div>
            </article>

            {/* CTA Section */}
            <section className="bg-[#1a1a1a] py-20 px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl text-white mb-6 tracking-tight font-aboreto font-medium">
                        Behöver ditt aktiebolag hjälp med bokföringen?
                    </h2>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed font-light font-geist mb-10">
                        Vi hjälper aktiebolag i hela Sverige med löpande bokföring,
                        bokslut och årsredovisning. Boka ett kostnadsfritt samtal så
                        berättar vi mer.
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
                            href="/blogg/deklaration-aktiebolag"
                            className="group p-6 bg-[#f5f3ef] rounded-lg hover:bg-[#eae6df] transition-colors"
                        >
                            <h4 className="text-lg font-medium text-[#1a1a1a] group-hover:text-[#8c7b60] transition-colors">
                                Deklaration aktiebolag
                            </h4>
                            <p className="text-gray-600 text-sm mt-2">
                                Guide till inkomstdeklaration för AB
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
                                Vi hjälper dig med årsbokslutet
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
