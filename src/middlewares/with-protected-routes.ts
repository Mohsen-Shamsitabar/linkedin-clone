import { NextResponse } from "next/server";
import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";

import { triggerPathname } from "@/utility";
import { ROUTES } from "@/constants";
import { decodeJwt } from "jose";

const {
  LOCAL: {
    HOME: { BASE: HOME_BASE_PATH },
    SIGNIN: { BASE: SIGNIN_BASE_PATH },
    SIGNUP: { BASE: SIGNUP_BASE_PATH },
    FEED: { BASE: FEED_BASE_PATH },
  },
} = ROUTES;

const withProtectedRoutes =
  (next: NextMiddleware): NextMiddleware =>
  async (request: NextRequest, event: NextFetchEvent) => {
    const {
      cookies,
      nextUrl: { pathname },
    } = request;

    const isUnprotectedPath = triggerPathname(pathname, [
      HOME_BASE_PATH,
      SIGNUP_BASE_PATH,
      SIGNIN_BASE_PATH,
    ]);

    const accessToken = cookies.get("access_token")?.value;

    // If no access token and trying to access protected route, redirect to signin
    if (!accessToken && !isUnprotectedPath) {
      request.nextUrl.pathname = SIGNIN_BASE_PATH;
      return NextResponse.redirect(request.nextUrl);
    }

    if (accessToken) {
      const { exp: accessTokenExp } = decodeJwt(accessToken);

      // If token is invalid or expired, redirect to signin (unless already on unprotected route)
      if (!accessTokenExp || Date.now() >= accessTokenExp * 1000) {
        if (!isUnprotectedPath) {
          request.nextUrl.pathname = SIGNIN_BASE_PATH;
          return NextResponse.redirect(request.nextUrl);
        }
      } else if (isUnprotectedPath) {
        // If token is valid and user is on an unprotected route, redirect to feed
        request.nextUrl.pathname = FEED_BASE_PATH;
        return NextResponse.redirect(request.nextUrl);
      }
    }

    return next(request, event);
  };

export { withProtectedRoutes };
