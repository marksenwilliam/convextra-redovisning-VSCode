export default function StructuredData() {
  const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "ProfessionalService",
    "@id": "https://convextraredovisning.se/#organization",
    "name": "Convextra Redovisning AB",
    "alternateName": "Convextra",
    "description": "Digital redovisningsbyrå i Västerås. Vi erbjuder löpande bokföring, bokslut, årsredovisning, löneadministration och ekonomisk rådgivning för företag i hela Sverige.",
    "url": "https://convextraredovisning.se",
    "logo": "https://convextraredovisning.se/assets/logo.png",
    "image": "https://convextraredovisning.se/assets/hero-desktop.jpeg",
    "telephone": "+46736277977",
    "email": "info@convextraredovisning.se",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Mälarparksvägen 11",
      "addressLocality": "Västerås",
      "postalCode": "723 56",
      "addressRegion": "Västmanland",
      "addressCountry": "SE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 59.6162,
      "longitude": 16.5528
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "08:00",
        "closes": "16:00"
      }
    ],
    "areaServed": [
      {
        "@type": "Country",
        "name": "Sweden"
      },
      {
        "@type": "City",
        "name": "Västerås"
      },
      {
        "@type": "City",
        "name": "Uppsala"
      },
      {
        "@type": "City",
        "name": "Eskilstuna"
      }
    ],
    "priceRange": "$$",
    "currenciesAccepted": "SEK",
    "paymentAccepted": "Faktura",
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Redovisningstjänster",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Löpande bokföring",
            "description": "Digital bokföring och redovisning med moderna verktyg"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bokslut & Årsredovisning",
            "description": "Professionell hantering av bokslut och årsredovisningar"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Löneadministration",
            "description": "Komplett lönehantering för företag"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Ekonomisk rådgivning",
            "description": "Strategisk rådgivning inom ekonomi, skatt och bolagsfrågor"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Digitalisering",
            "description": "Effektivisering och digitalisering av ekonomiflöden"
          }
        }
      ]
    },
    "sameAs": [
      "https://www.facebook.com/convextraredovisning",
      "https://www.linkedin.com/company/convextra-redovisning",
      "https://www.instagram.com/convextraredovisning"
    ]
  };

  const websiteSchema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": "https://convextraredovisning.se/#website",
    "url": "https://convextraredovisning.se",
    "name": "Convextra Redovisning AB",
    "description": "Digital redovisningsbyrå i Västerås med personligt engagemang",
    "publisher": {
      "@id": "https://convextraredovisning.se/#organization"
    },
    "inLanguage": "sv-SE"
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
      />
    </>
  );
}
