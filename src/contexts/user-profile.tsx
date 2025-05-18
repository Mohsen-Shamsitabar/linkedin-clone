"use client";

import type { Education, Experience, Post, User } from "@/types";
import * as React from "react";

export type UserProfileData = User & {
  experiencesData: Experience[];
  educationsData: Education[];
  postsData: Post[];
};

const Context = React.createContext<UserProfileData | null>(null);

type ProviderProps = React.PropsWithChildren<UserProfileData>;

export const UserProfileProvider = (props: ProviderProps) => {
  const { children, ...data } = props;

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useUserProfile = () => React.useContext(Context);
