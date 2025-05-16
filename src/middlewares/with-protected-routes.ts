import { NextResponse } from "next/server";
import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";

import { triggerPathname } from "@/utility";
import { ROUTES } from "@/constants";

const {
  LOCAL: {
    HOME: { BASE: HOME_BASE_PATH },
    SIGNIN: { BASE: SIGNIN_BASE_PATH },
    SIGNUP: { BASE: SIGNUP_BASE_PATH },
    PROFILE: { BASE: PROFILE_BASE_PATH },
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

    const triggeredSafePathname = triggerPathname(pathname, [
      HOME_BASE_PATH,
      SIGNUP_BASE_PATH,
      SIGNIN_BASE_PATH,
    ]);
    const triggeredProtectedPathname = triggerPathname(pathname, [
      PROFILE_BASE_PATH,
    ]);

    const accessToken = cookies.get("access_token")?.value;

    const success = accessToken && accessToken.length > 0;

    if (success) {
      if (triggeredSafePathname) {
        request.nextUrl.pathname = FEED_BASE_PATH;
        return NextResponse.redirect(request.nextUrl);
      }
    } else {
      if (triggeredProtectedPathname) {
        request.nextUrl.pathname = SIGNUP_BASE_PATH;
        return NextResponse.redirect(request.nextUrl);
      }
    }

    return next(request, event);
  };

export { withProtectedRoutes };
