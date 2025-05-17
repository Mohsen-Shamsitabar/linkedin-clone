import { NextResponse } from "next/server";
import type { NextFetchEvent, NextMiddleware, NextRequest } from "next/server";

import { isCompanyId, isUserId, triggerPathname } from "@/utility";
import { ROUTES } from "@/constants";
import type { CompanyId, UserId } from "@/types";

const {
  LOCAL: {
    PROFILE: {
      BASE: PROFILE_BASE_PATH,
      COMPANY: { BASE: COMPANY_BASE_PATH },
      USER: { BASE: USER_BASE_PATH },
    },
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

    if (!triggeredProfilePathname) {
      return next(request, event);
    }

    const segments = pathname.split("/").filter(Boolean);

    // shift the profile segment
    segments.shift();

    const id = segments.shift() as CompanyId | UserId;

    if (id && isCompanyId(id)) {
      request.nextUrl.pathname = `${PROFILE_BASE_PATH}${COMPANY_BASE_PATH}/${id}`;
      return NextResponse.redirect(request.nextUrl);
    }

    if (id && isUserId(id)) {
      request.nextUrl.pathname = `${PROFILE_BASE_PATH}${USER_BASE_PATH}/${id}`;
      return NextResponse.redirect(request.nextUrl);
    }

    return next(request, event);
  };

export { withProfileRedirect };
