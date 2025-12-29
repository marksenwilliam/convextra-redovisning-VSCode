import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// CET is UTC+1. Launch at 2026-01-01 00:00:00 CET (2025-12-31T23:00:00Z)
const LAUNCH_TIMESTAMP_UTC = Date.UTC(2025, 11, 31, 23, 0, 0); // Months are 0-indexed
const BYPASS_KEY = process.env.COUNTDOWN_BYPASS_KEY;

export function middleware(request: NextRequest) {
  const { pathname, searchParams } = request.nextUrl;

  // Allow static files and API routes
  if (
    pathname.startsWith('/_next') ||
    pathname.startsWith('/api') ||
    pathname.includes('.')
  ) {
    return NextResponse.next();
  }

  // Check for bypass cookie or query param
  const bypassCookie = request.cookies.get('countdown-bypass')?.value;
  const bypassQuery = searchParams.get('bypass');

  // If bypass key provided in URL, set cookie and redirect
  if (bypassQuery === BYPASS_KEY) {
    const response = NextResponse.redirect(new URL(pathname, request.url));
    response.cookies.set('countdown-bypass', BYPASS_KEY, {
      httpOnly: true,
      secure: true,
      sameSite: 'strict',
      maxAge: 60 * 60 * 24, // 24 hours
    });
    return response;
  }

  // If valid bypass cookie exists, allow access
  if (bypassCookie === BYPASS_KEY) {
    return NextResponse.next();
  }

  // Check current UTC time
  const nowUTC = Date.now();
  const beforeLaunch = nowUTC < LAUNCH_TIMESTAMP_UTC;

  if (beforeLaunch) {
    // Rewrite all requests to /countdown
    return NextResponse.rewrite(new URL('/countdown', request.url));
  }

  // After launch, allow normal site
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)',
  ],
};
