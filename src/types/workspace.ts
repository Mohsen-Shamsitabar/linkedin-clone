/* eslint-disable @typescript-eslint/no-empty-object-type */
export type RouteProps<
  P extends Record<string, unknown> = {},
  S extends Record<string, unknown> = {},
> = {
  params: P;
  searchParams: S;
};

export type LayoutPageProps<P extends Record<string, unknown> = {}> = {
  children: React.ReactNode;
  params?: Promise<P>;
};

export type ErrorPageProps = {
  error: Error & { digest?: string };
  reset: () => void;
};
