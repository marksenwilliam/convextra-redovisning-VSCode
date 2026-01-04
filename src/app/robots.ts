import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: ['/', '/_next/static/css/'],
      disallow: ['/api/', '/_next/static/chunks/', '/_next/static/media/', '/_next/image/', '/static/'],
    },
    sitemap: 'https://www.convextraredovisning.se/sitemap.xml',
  };
}

