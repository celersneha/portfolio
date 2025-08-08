import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

const routes = {
  "/devzoku": "https://devzoku.app",
  "/invisifeed": "https://invisifeed.vercel.app",
  "/inactitab": "https://inactitab.vercel.app",
  "/cinehue": "https://cinehue.vercel.app",
  "/linkedin": "https://www.linkedin.com/in/ss0807",
  "/github": "https://github.com/SnehaSharma245",
  "/twitter": "https://twitter.com/SnehaDevs",
  "/email": "mailto:snehav2109@gmail.com",
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
