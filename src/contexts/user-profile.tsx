"use client";

import type { Educations } from "@/api/educations";
import type { Experiences } from "@/api/experiences";
import type { Posts } from "@/api/posts";
import type { User } from "@/types";
import * as React from "react";

export type UserProfileData = User & {
  experiencesData: Experiences;
  educationsData: Educations;
  postsData: Posts;
};

const Context = React.createContext<UserProfileData | null>(null);

type ProviderProps = React.PropsWithChildren<UserProfileData>;

export const UserProfileProvider = (props: ProviderProps) => {
  const { children, ...data } = props;

  return <Context.Provider value={data}>{children}</Context.Provider>;
};

export const useUserProfile = () => React.useContext(Context);
