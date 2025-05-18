import { NextResponse, type NextMiddleware } from "next/server";
import { withProfileRedirect, withProtectedRoutes } from "@/middlewares";

const stackMiddlewares = (
  middlewares: Array<(middleware: NextMiddleware) => NextMiddleware>,
  index = 0,
): NextMiddleware => {
  const current = middlewares[index];

  if (current) {
    const next = stackMiddlewares(middlewares, index + 1);
    return current(next);
  }

  return () => NextResponse.next();
};

export default stackMiddlewares([withProtectedRoutes, withProfileRedirect]);

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico|robots.txt).*)"],
};
