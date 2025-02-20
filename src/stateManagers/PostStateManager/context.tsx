"use client";

import type { CommentId, UserId } from "@/types";
import * as React from "react";
import type { State } from "./reducer";

export type ContextValue = {
  state: State;
  likePost: (userId: UserId) => void;
  addComment: (commentId: CommentId) => void;
  removeComment: (commentId: CommentId) => void;
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
