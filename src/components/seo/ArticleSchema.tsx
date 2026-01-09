interface ArticleSchemaProps {
    headline: string;
    description: string;
    datePublished: string;
    dateModified?: string;
    image?: string;
    url: string;
}

export default function ArticleSchema({
    headline,
    description,
    datePublished,
    dateModified,
    image,
    url,
}: ArticleSchemaProps) {
    const baseUrl = "https://www.convextraredovisning.se";

    const articleSchema = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": headline,
        "description": description,
        "image": image ? `${baseUrl}${image}` : `${baseUrl}/assets/og-image.jpg`,
        "datePublished": datePublished,
        "dateModified": dateModified || datePublished,
        "author": {
            "@type": "Organization",
            "name": "Convextra Redovisning AB",
            "url": baseUrl
        },
        "publisher": {
            "@type": "Organization",
            "name": "Convextra Redovisning AB",
            "logo": {
                "@type": "ImageObject",
                "url": `${baseUrl}/assets/logo.png`
            }
        },
        "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": `${baseUrl}${url}`
        }
    };

    return (
        <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
        />
    );
}
