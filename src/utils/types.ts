/* eslint-disable @typescript-eslint/no-empty-object-type */
export type RouteProps<
  P extends Record<string, unknown> = {},
  S extends Record<string, unknown> = {},
> = {
  params: P;
  searchParams: S;
};
