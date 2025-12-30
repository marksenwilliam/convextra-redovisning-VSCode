import { MetadataRoute } from 'next';

export default function robots(): MetadataRoute.Robots {
  // TEST: Launch at 2025-12-30 08:45:00 CET (2025-12-30T07:45:00Z)
  // PRODUCTION: Date.UTC(2025, 11, 31, 23, 0, 0) for 2026-01-01 00:00:00 CET
  const LAUNCH_TIMESTAMP_UTC = Date.UTC(2025, 11, 30, 7, 45, 0);
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
