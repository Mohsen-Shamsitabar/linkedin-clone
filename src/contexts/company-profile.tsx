"use client";

import type { Company, Post } from "@/types";
import * as React from "react";

export type CompanyProfileData = Company & {
  postsData: Post[];
};

const Context = React.createContext<CompanyProfileData | null>(null);

type ProviderProps = React.PropsWithChildren<CompanyProfileData>;

export const CompanyProfileProvider = (props: ProviderProps) => {
  const { children, ...data } = props;

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useCompanyProfile = () => React.useContext(Context);
