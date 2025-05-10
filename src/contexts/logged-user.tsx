"use client";

import type { User } from "@/types";
import * as React from "react";

export type LoggedUserData = User;

const Context = React.createContext<LoggedUserData | null>(null);

type ProviderProps = React.PropsWithChildren<LoggedUserData>;

export const LoggedUserProvider = (props: ProviderProps) => {
  const { children, ...data } = props;

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useLoggedUser = () => React.useContext(Context);
