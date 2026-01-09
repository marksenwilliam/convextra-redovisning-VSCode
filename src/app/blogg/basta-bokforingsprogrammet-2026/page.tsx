import { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/seo/BreadcrumbSchema";
import ArticleSchema from "@/components/seo/ArticleSchema";
import FAQSchema from "@/components/seo/FAQSchema";

export const metadata: Metadata = {
    title: "Bästa bokföringsprogrammet 2026 – Jämförelse & Guide | Convextra",
    description:
        "Vilket bokföringsprogram är bäst för ditt företag 2026? Vi jämför Fortnox, SpeedLedger och Bokio med priser, funktioner och för- och nackdelar.",
    keywords: [
        "bokföringsprogram",
        "bästa bokföringsprogram",
        "bokföringsprogram företag",
        "fortnox",
        "speedledger",
        "bokio",
        "bokföring online",
        "jämförelse bokföringsprogram",
    ],
    alternates: {
        canonical: "/blogg/basta-bokforingsprogrammet-2026",
    },
};

const faqItems = [
    {
        question: "Vilket bokföringsprogram är bäst för småföretag?",
        answer: "Fortnox är vårt förstahandsval för de flesta företag tack vare dess kompletta ekosystem med 500+ integrationer. Bokio kan passa enmansföretag som vill ha enkel hantering."
    },
    {
        question: "Vad kostar ett bokföringsprogram?",
        answer: "Priserna varierar från gratis (Bokio) till 919 kr/mån (Fortnox Stor+). De flesta företag landar på 200-500 kr/mån beroende på funktioner och antal användare."
    },
    {
        question: "Kan jag byta bokföringsprogram under året?",
        answer: "Ja, det går att byta under året men det är enklast att göra det vid årsskifte. De flesta program erbjuder hjälp med datamigrering."
    },
    {
        question: "Behöver jag fortfarande en redovisningsbyrå om jag har ett bokföringsprogram?",
        answer: "Ett bokföringsprogram automatiserar mycket, men för bokslut, årsredovisning och skatteplanering rekommenderar vi att anlita en redovisningskonsult."
    }
];

// Software comparison data
const programs = [
    {
        name: "Fortnox",
        badge: "Vårt val",
        badgeColor: "bg-green-600",
        rating: 4.6,
        logo: "Fortnox",
        priceRange: "209 – 919 kr/mån",
        trialPeriod: "6 månader (för nystartade)",
        highlight: {
            title: "Vi rekommenderar Fortnox",
            text: "Som deras samarbetspartner hjälper vi dig att komma igång och maximera värdet av systemet. Nystartade företag får dessutom 6 månader gratis!",
        },
        description:
            "Fortnox är Sveriges mest populära och kompletta bokföringsprogram. Det passar allt från enmansföretag till större bolag med anställda. Med över 500 integrationer, utmärkt mobilapp och kraftfull automatisering är det det självklara valet för företag som vill växa.",
        features: [
            "Automatisk bokföring via bankkoppling",
            "Kvittohantering via app",
            "Fakturering med påminnelser",
            "Momsrapportering",
            "Lönehantering (i större paket)",
            "Integrationer med 500+ appar",
        ],
        pros: ["Mest komplett ekosystem", "Utmärkt mobilapp", "Många integrationer", "Bra för växande företag"],
        cons: ["Kan bli dyrt med alla tillägg", "Brantare inlärningskurva"],
        packages: [
            { name: "Mini", price: "209 kr/mån", includes: "Automatisk bokföring, bankkoppling, kvittohantering" },
            { name: "Liten", price: "349 kr/mån", includes: "Mini + fakturering" },
            { name: "Mellan", price: "529 kr/mån", includes: "Liten + lönehantering, systemintegration" },
            { name: "Stor", price: "749 kr/mån", includes: "Alla funktioner + avancerade rapporter" },
            { name: "Mini+ (anställda)", price: "369 kr/mån", includes: "Automatisk bokföring + systemintegration" },
            { name: "Liten+ (anställda)", price: "479 kr/mån", includes: "Mini+ + fakturering" },
            { name: "Mellan+ (anställda)", price: "659 kr/mån", includes: "Liten+ + lönehantering" },
            { name: "Stor+ (anställda)", price: "919 kr/mån", includes: "Komplett + anläggningsregister, rapporter" },
        ],
        url: "https://www.fortnox.se/paket",
    },
    {
        name: "SpeedLedger",
        badge: "Bäst kundbetyg",
        badgeColor: "bg-[#8c7b60]",
        rating: 4.8,
        logo: "SpeedLedger",
        priceRange: "229 – 384 kr/mån",
        trialPeriod: "14 dagar",
        highlight: {
            title: "Få 50% rabatt första året",
            text: "Just nu får du halva priset i rabatt på alla paket första året vid årsbetalning. Gäller nya kunder.",
        },
        description:
            "SpeedLedger är det enda bokföringsprogrammet i Sverige som skapar din bokföring direkt från transaktionerna på ditt bankkonto. Perfekt för dig som vill att bokföringen ska sköta sig själv.",
        features: [
            "Bokföring skapas automatiskt från banken",
            "Autokontering",
            "Gratis bokföringsrådgivning",
            "Smarta bokföringsförslag",
            "Rapporter och insikter",
            "Import och export SIE-fil",
        ],
        pros: ["Helt automatisk bokföring från banken", "Gratis rådgivning ingår", "Bäst kundbetyg", "Enkelt för nybörjare"],
        cons: ["Färre integrationer än Fortnox", "Mindre känt varumärke"],
        packages: [
            { name: "Fakturering", price: "129 kr/mån", includes: "Smart fakturering, kund/artikelregister, e-faktura, ROT/RUT" },
            { name: "Bokföring", price: "229 kr/mån", includes: "Automatisk bokföring från bank, bokföringsrådgivning" },
            { name: "Bokföring + Fakturering", price: "324 kr/mån", includes: "Allt i ett paket" },
        ],
        url: "https://www.speedledger.se/pris-bestall/",
    },
    {
        name: "Bokio",
        badge: "Bäst för nybörjare",
        badgeColor: "bg-blue-600",
        rating: 4.6,
        logo: "Bokio",
        priceRange: "249 – 599 kr/mån",
        trialPeriod: "14 dagar",
        highlight: {
            title: "Cashback på kortköp",
            text: "Med Bokios Plus-plan får du 0,9% återbäring på kontosaldo och 1% cashback på alla kortköp.",
        },
        description:
            "Bokio är ett användarvänligt bokföringsprogram som kombinerar bank och bokföring i ett. Perfekt för dig som aldrig jobbat med bokföring tidigare och vill komma igång snabbt.",
        features: [
            "Bokföring med färdiga mallar",
            "Integrerat företagskonto",
            "Fakturering med e-faktura",
            "Lönehantering för 1 anställd",
            "Bokslut och momsdeklaration",
            "Koppling till skattekonto",
        ],
        pros: ["Extremt användarvänligt", "Bank + bokföring i ett", "Cashback möjlighet", "Bra för nybörjare"],
        cons: ["Begränsat för större företag", "Färre avancerade funktioner"],
        packages: [
            { name: "Start", price: "249 kr/mån", includes: "Bokföring, bank, fakturering, lön för 1 person" },
            { name: "Bas", price: "349 kr/mån", includes: "Start + fler användare, integrationer" },
            { name: "Pro", price: "449 kr/mån", includes: "Bas + telefonsupport, projektredovisning" },
            { name: "Plus", price: "599 kr/mån", includes: "Allt + cashback, återbäring, anställda" },
        ],
        url: "https://www.bokio.se/priser/",
    },
];

export default function BastaBokforingsprogrammetPage() {
    return (
        <main>
            {/* Schema Markup */}
            <BreadcrumbSchema items={[
                { name: "Hem", url: "/" },
                { name: "Blogg", url: "/blogg" },
                { name: "Bästa bokföringsprogrammet 2026" }
            ]} />
            <ArticleSchema
                headline="Bästa bokföringsprogrammet 2026 – Jämförelse & Guide"
                description="Vilket bokföringsprogram är bäst för ditt företag 2026? Vi jämför Fortnox, SpeedLedger och Bokio med priser, funktioner och för- och nackdelar."
                datePublished="2026-01-09"
                image="/assets/bokföring.jpg"
                url="/blogg/basta-bokforingsprogrammet-2026"
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
                        <span>8 min läsning</span>
                    </div>
                    <h1 className="text-3xl md:text-4xl lg:text-5xl text-white font-aboreto font-medium tracking-tight mb-6">
                        Bästa bokföringsprogrammet 2026
                    </h1>
                    <p className="text-white/70 text-lg md:text-xl font-light font-geist leading-relaxed">
                        Jämför de mest populära bokföringsprogrammen i Sverige – priser,
                        funktioner och för- och nackdelar
                    </p>
                </div>
            </header>

            {/* Article Content */}
            <article className="bg-white py-16 md:py-24 px-6 md:px-12">
                <div className="max-w-[900px] mx-auto font-geist">
                    <p className="text-xl text-gray-700 leading-relaxed mb-8">
                        Att välja rätt bokföringsprogram kan spara dig hundratals timmar
                        varje år. <strong>Vi rekommenderar Fortnox</strong> till våra kunder – det är
                        Sveriges mest kompletta bokföringsprogram och det system vi själva
                        arbetar med dagligen. Men hur står det sig mot alternativen? I den
                        här guiden jämför vi Fortnox med andra populära val.
                    </p>

                    {/* Quick Comparison Table */}
                    <div className="bg-[#f5f3ef] rounded-lg p-6 mb-12 overflow-x-auto">
                        <h2 className="text-xl font-playfair font-medium text-[#1a1a1a] mb-4">
                            Snabb jämförelse
                        </h2>
                        <table className="w-full text-sm">
                            <thead>
                                <tr className="border-b-2 border-[#cbbba0]">
                                    <th className="text-left p-3 font-medium">Program</th>
                                    <th className="text-left p-3 font-medium">Utmärkelse</th>
                                    <th className="text-left p-3 font-medium">Pris</th>
                                    <th className="text-left p-3 font-medium">Provperiod</th>
                                    <th className="text-left p-3 font-medium">Betyg</th>
                                </tr>
                            </thead>
                            <tbody className="text-gray-600">
                                <tr className="border-b bg-green-50">
                                    <td className="p-3 font-medium text-[#1a1a1a]">Fortnox ⭐</td>
                                    <td className="p-3"><span className="bg-green-600 text-white text-xs px-2 py-1 rounded">Vårt val</span></td>
                                    <td className="p-3">209 – 919 kr/mån</td>
                                    <td className="p-3">6 månader*</td>
                                    <td className="p-3">⭐ 4.6</td>
                                </tr>
                                <tr className="border-b">
                                    <td className="p-3 font-medium text-[#1a1a1a]">SpeedLedger</td>
                                    <td className="p-3"><span className="bg-[#8c7b60] text-white text-xs px-2 py-1 rounded">Bäst kundbetyg</span></td>
                                    <td className="p-3">229 – 384 kr/mån</td>
                                    <td className="p-3">14 dagar</td>
                                    <td className="p-3">⭐ 4.8</td>
                                </tr>
                                <tr>
                                    <td className="p-3 font-medium text-[#1a1a1a]">Bokio</td>
                                    <td className="p-3"><span className="bg-blue-600 text-white text-xs px-2 py-1 rounded">Bäst för nybörjare</span></td>
                                    <td className="p-3">249 – 599 kr/mån</td>
                                    <td className="p-3">14 dagar</td>
                                    <td className="p-3">⭐ 4.6</td>
                                </tr>
                            </tbody>
                        </table>
                        <p className="text-xs text-gray-500 mt-3">*6 månaders gratis provperiod gäller endast för nystartade företag (yngre än 3 månader).</p>
                    </div>

                    {/* Software Cards */}
                    <div className="space-y-8">
                        {programs.map((program, index) => (
                            <div
                                key={program.name}
                                className="border border-gray-200 rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow"
                            >
                                {/* Card Header */}
                                <div className="bg-white p-6 border-b border-gray-100">
                                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                                        {/* Left: Badge, Name, Logo */}
                                        <div className="flex-1">
                                            <span className={`${program.badgeColor} text-white text-xs uppercase tracking-wider px-3 py-1 rounded-full`}>
                                                {program.badge}
                                            </span>
                                            <h3 className="text-2xl md:text-3xl font-playfair font-medium text-[#1a1a1a] mt-3 mb-1">
                                                {program.name}
                                            </h3>
                                            <div className="flex items-center gap-4 text-sm text-gray-500 mt-2">
                                                <div>
                                                    <span className="text-gray-400">Pris</span>
                                                    <p className="text-[#8c7b60] font-medium">{program.priceRange}</p>
                                                </div>
                                                <div className="border-l border-gray-200 pl-4">
                                                    <span className="text-gray-400">Gratis provperiod</span>
                                                    <p className="text-[#1a1a1a] font-medium">{program.trialPeriod}</p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Right: Rating + CTA */}
                                        <div className="flex flex-col items-end gap-3">
                                            <div className="text-right">
                                                <span className="text-3xl font-bold text-[#1a1a1a]">{program.rating}</span>
                                                <span className="text-yellow-500 ml-1">★★★★★</span>
                                                <p className="text-xs text-gray-400 uppercase tracking-wider">Betyg</p>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Highlight Box */}
                                    <div className="bg-orange-50 border border-orange-200 rounded-lg p-4 mt-4 flex items-start gap-3">
                                        <span className="text-orange-500 text-xl">💡</span>
                                        <div>
                                            <p className="font-medium text-[#1a1a1a] text-sm">{program.highlight.title}</p>
                                            <p className="text-gray-600 text-sm mt-1">{program.highlight.text}</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Card Body */}
                                <div className="bg-[#fafaf9] p-6">
                                    <p className="text-gray-600 leading-relaxed mb-6">
                                        {program.description}
                                    </p>

                                    {/* Features */}
                                    <h4 className="font-medium text-[#1a1a1a] mb-3">Funktioner som ingår:</h4>
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 mb-6">
                                        {program.features.map((feature, i) => (
                                            <div key={i} className="flex items-center gap-2 text-sm text-gray-600">
                                                <span className="text-green-600">✓</span>
                                                <span>{feature}</span>
                                            </div>
                                        ))}
                                    </div>

                                    {/* Pros & Cons */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                        <div>
                                            <h4 className="font-medium text-[#1a1a1a] mb-3">Fördelar</h4>
                                            <ul className="space-y-2">
                                                {program.pros.map((pro, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <span className="text-green-600 mt-0.5">✓</span>
                                                        <span>{pro}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                        <div>
                                            <h4 className="font-medium text-[#1a1a1a] mb-3">Nackdelar</h4>
                                            <ul className="space-y-2">
                                                {program.cons.map((con, i) => (
                                                    <li key={i} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <span className="text-[#8c7b60] mt-0.5">✗</span>
                                                        <span>{con}</span>
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>
                                    </div>

                                    {/* Pricing Table */}
                                    <h4 className="font-medium text-[#1a1a1a] mb-3">Paket och priser</h4>
                                    <div className="overflow-x-auto">
                                        <table className="w-full text-sm border-collapse">
                                            <thead>
                                                <tr className="bg-[#1a1a1a] text-white">
                                                    <th className="text-left p-3 font-medium">Paket</th>
                                                    <th className="text-left p-3 font-medium">Pris</th>
                                                    <th className="text-left p-3 font-medium">Innehåll</th>
                                                </tr>
                                            </thead>
                                            <tbody className="text-gray-600">
                                                {program.packages.map((pkg, i) => (
                                                    <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                                                        <td className="p-3 font-medium text-[#1a1a1a]">{pkg.name}</td>
                                                        <td className="p-3 text-[#8c7b60] font-medium whitespace-nowrap">{pkg.price}</td>
                                                        <td className="p-3">{pkg.includes}</td>
                                                    </tr>
                                                ))}
                                            </tbody>
                                        </table>
                                    </div>

                                    {/* CTA Button */}
                                    <div className="mt-6 text-center">
                                        <a
                                            href={program.url}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="inline-block px-8 py-3 bg-[#cbbba0] hover:bg-[#b8a88e] text-[#1a1a1a] text-sm uppercase tracking-wider font-medium rounded transition-colors"
                                        >
                                            Besök {program.name}
                                        </a>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Recommendation Section */}
                    <div className="mt-12">
                        <h2 className="text-2xl font-playfair font-medium text-[#1a1a1a] mb-6">
                            Vårt råd: Välj Fortnox
                        </h2>
                        <div className="bg-green-50 border-2 border-green-200 rounded-lg p-6 mb-6">
                            <h4 className="font-medium text-[#1a1a1a] mb-2 flex items-center gap-2">
                                <span className="text-green-600">✓</span> Fortnox – Det självklara valet för de flesta företag
                            </h4>
                            <p className="text-gray-600 mb-4">
                                Vi rekommenderar Fortnox till de allra flesta av våra kunder. Systemet är komplett,
                                skalbart och har branschens bästa ekosystem av integrationer. Oavsett om du driver
                                enskild firma, e-handel eller aktiebolag med anställda – Fortnox växer med dig.
                            </p>
                            <p className="text-gray-600">
                                <strong>Vår bonus:</strong> Som Convextra-kund hjälper vi dig att komma igång snabbt
                                och får ut maximalt av Fortnox. Vi sköter det tekniska så du kan fokusera på ditt företag.
                            </p>
                        </div>

                        <h3 className="text-lg font-playfair font-medium text-[#1a1a1a] mb-4">Alternativ att överväga</h3>
                        <div className="space-y-4">
                            <div className="bg-[#f5f3ef] rounded-lg p-6">
                                <h4 className="font-medium text-[#1a1a1a] mb-2">SpeedLedger – Om du vill göra allt själv</h4>
                                <p className="text-gray-600">
                                    SpeedLedger kan passa dig som har få transaktioner och vill sköta bokföringen
                                    helt själv utan hjälp från redovisningskonsult. Bokföringen skapas automatiskt
                                    från banken, men systemet har färre integrationer och är mindre skalbart.
                                </p>
                            </div>
                            <div className="bg-[#f5f3ef] rounded-lg p-6">
                                <h4 className="font-medium text-[#1a1a1a] mb-2">Bokio – Om du är nybörjare med små behov</h4>
                                <p className="text-gray-600">
                                    Bokio är användarvänligt och kan fungera för helt nya företagare med enkel
                                    verksamhet. Dock saknas många avancerade funktioner, och du kan behöva byta
                                    system när företaget växer – något du slipper med Fortnox.
                                </p>
                            </div>
                        </div>
                    </div>

                    {/* Why Fortnox Box */}
                    <div className="bg-[#1a1a1a] rounded-lg p-8 mt-12">
                        <h3 className="text-xl font-playfair font-medium text-white mb-4">
                            💡 Därför väljer vi Fortnox på Convextra
                        </h3>
                        <p className="text-white/80 leading-relaxed mb-4">
                            Vi har testat de flesta bokföringsprogram på marknaden och har valt
                            att standardisera på Fortnox av flera skäl:
                        </p>
                        <ul className="text-white/80 space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-[#cbbba0]">✓</span>
                                <span><strong>Komplett system</strong> – Allt från bokföring till fakturering och lön i ett</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#cbbba0]">✓</span>
                                <span><strong>500+ integrationer</strong> – Fungerar med nästan alla affärssystem</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#cbbba0]">✓</span>
                                <span><strong>Professionellt</strong> – Accepterat av banker, revisorer och Skatteverket</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-[#cbbba0]">✓</span>
                                <span><strong>Skalbart</strong> – Växer med ditt företag utan att du behöver byta system</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </article>

            {/* CTA Section */}
            <section className="bg-[#1a1a1a] py-20 px-6 md:px-12">
                <div className="max-w-3xl mx-auto text-center">
                    <h2 className="text-3xl md:text-4xl text-white mb-6 tracking-tight font-aboreto font-medium">
                        Behöver du hjälp med bokföringen?
                    </h2>
                    <p className="text-white/70 text-base md:text-lg leading-relaxed font-light font-geist mb-10">
                        Vi hjälper dig komma igång med Fortnox eller tar hand om hela din
                        bokföring. Boka ett kostnadsfritt samtal så pratar vi igenom dina
                        behov.
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
                            href="/tjanster/lopande-bokforing"
                            className="group p-6 bg-[#f5f3ef] rounded-lg hover:bg-[#eae6df] transition-colors"
                        >
                            <h4 className="text-lg font-medium text-[#1a1a1a] group-hover:text-[#8c7b60] transition-colors">
                                Löpande bokföring
                            </h4>
                            <p className="text-gray-600 text-sm mt-2">
                                Låt oss ta hand om din bokföring
                            </p>
                        </Link>
                    </div>
                </div>
            </section>
        </main>
    );
}
