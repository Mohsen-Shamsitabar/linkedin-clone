"use client";

import type { Educations } from "@/api/educations";
import type { Experiences } from "@/api/experiences";
import type { Posts } from "@/api/posts";
import type { User } from "@/types";
import * as React from "react";

export type ContextValue = User & {
  experiencesData: Experiences;
  educationsData: Educations;
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
