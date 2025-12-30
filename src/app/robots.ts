import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // Launch at 2026-01-01 00:00:00 CET (2025-12-31T23:00:00Z)
  const LAUNCH_TIMESTAMP_UTC = Date.UTC(2025, 11, 31, 23, 0, 0);
  const nowUTC = Date.now();
  const beforeLaunch = nowUTC < LAUNCH_TIMESTAMP_UTC;

  if (beforeLaunch) {
    return {
      rules: {
        userAgent: '*',
        disallow: '/',
      },
    };
  }

  return {
    rules: {
      userAgent: '*',
      allow: '/',
      disallow: ['/api/', '/_next/', '/static/'],
    },
    sitemap: 'https://convextraredovisning.se/sitemap.xml',
  };
}
