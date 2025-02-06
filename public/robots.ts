// robots.ts
import { NextResponse } from 'next/server';

export const GET = async (): Promise<NextResponse> => {
  return new NextResponse(
    `User-agent: *
    Disallow: 
    Sitemap: https://www.boslightmulti-serviceslimited.com/sitemap.xml`,
    { headers: { 'Content-Type': 'text/plain' } }
  );
};
