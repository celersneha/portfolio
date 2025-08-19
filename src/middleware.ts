import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const routes = {
  "/devzoku": "https://devzoku.app",
  "/invisifeed": "https://invisifeed.vercel.app",
  "/inactitab": "https://inactitab.vercel.app",
  "/cinehue": "https://cinehue.vercel.app",
  "/linkedin": "https://www.linkedin.com/in/celersneha",
  "/github": "https://github.com/celersneha",
  "/twitter": "https://x.com/celersneha",
  "/email": "mailto:celersneha@gmail.com",
};

export function middleware(request: NextRequest) {
  const url = request.nextUrl;
  const redirectUrl = routes[url.pathname as keyof typeof routes];

  if (redirectUrl) {
    return NextResponse.redirect(redirectUrl);
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/invisifeed",
    "/inactivtab",
    "/quickbites",
    "/linkedin",
    "/github",
    "/twitter",
  ],
};
