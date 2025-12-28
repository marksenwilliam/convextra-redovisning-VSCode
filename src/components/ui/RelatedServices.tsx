import Link from "next/link";

const services = [
  {
    title: "Löpande bokföring",
    description: "Låt oss ta hand om din bokföring varje månad",
    slug: "lopande-bokforing",
    href: "/tjanster/lopande-bokforing",
  },
  {
    title: "Bokslut & Årsredovisning",
    description: "Komplett hantering av ditt årsbokslut",
    slug: "bokslut-arsredovisning",
    href: "/tjanster/bokslut-arsredovisning",
  },
  {
    title: "Rådgivning",
    description: "Strategisk rådgivning inom ekonomi och skatt",
    slug: "radgivning",
    href: "/tjanster/radgivning",
  },
  {
    title: "Löneadministration",
    description: "Korrekt och pålitlig hantering av dina löner",
    slug: "loneadministration",
    href: "/tjanster/loneadministration",
  },
  {
    title: "Digitalisering",
    description: "Effektivisera dina ekonomiflöden med rätt system",
    slug: "digitalisering",
    href: "/tjanster/digitalisering",
  },
];

interface RelatedServicesProps {
  currentServiceSlug: string;
}

export default function RelatedServices({ currentServiceSlug }: RelatedServicesProps) {
  const filteredServices = services.filter(
    (service) => service.slug !== currentServiceSlug
  );

  return (
    <section className="bg-white py-16 md:py-24 px-6 md:px-12">
      <div className="max-w-[1200px] mx-auto">
        <h2 className="text-2xl md:text-3xl text-[#1a1a1a] text-center mb-12 font-playfair font-medium">
          Relaterade tjänster
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredServices.map((service) => (
            <Link
              key={service.slug}
              href={service.href}
              className="group block bg-[#fafaf9] border border-gray-200 rounded-xl p-6 hover:shadow-md hover:-translate-y-1 transition-all duration-300"
            >
              <h3 className="text-xl text-[#1a1a1a] font-playfair font-medium mb-2 group-hover:text-[#8b7355] transition-colors">
                {service.title}
              </h3>
              <p className="text-gray-500 text-sm font-light font-geist">
                {service.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
