"use client";

import type { Posts } from "@/api/posts";
import type { Company } from "@/types";
import * as React from "react";

export type ContextValue = Company & {
  postsData: Posts;
};

const Context = React.createContext<ContextValue | null>(null);

type ProviderProps = {
  children: React.ReactNode;
  context: ContextValue;
};

export const Provider = (props: ProviderProps) => {
  const { children, context } = props;

  return <Context.Provider value={context}>{children}</Context.Provider>;
};

export const useContext = () => React.useContext(Context);
