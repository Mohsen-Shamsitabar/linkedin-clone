import { NextResponse } from "next/server";
import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";

import { triggerPathname } from "@/utility";
import { ROUTES } from "@/constants";

const {
  LOCAL: {
    PROFILE: { BASE: PROFILE_BASE_PATH },
  },
} = ROUTES;

const withProfileRedirect =
  (next: NextMiddleware): NextMiddleware =>
  async (request: NextRequest, event: NextFetchEvent) => {
    const {
      nextUrl: { pathname },
    } = request;

    const triggeredProfilePathname = triggerPathname(pathname, [
      PROFILE_BASE_PATH,
    ]);

    // if () {
    //   request.nextUrl.pathname = FEED_BASE_PATH;
    //   return NextResponse.redirect(request.nextUrl);
    // }
    // if () {
    //   request.nextUrl.pathname = SIGNUP_BASE_PATH;
    //   return NextResponse.redirect(request.nextUrl);
    // }

    return next(request, event);
  };

export { withProfileRedirect };
