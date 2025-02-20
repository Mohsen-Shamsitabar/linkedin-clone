"use client";

import type { Post } from "@/types";
import * as React from "react";
import {
  createAddCommentAction,
  createLikePostAction,
  createRemoveCommentAction,
} from "./actions";
import { type ContextValue, Provider } from "./context";
import reducer from "./reducer";

type Props = {
  post: Post;
  children: React.ReactNode;
};

const PostStateManager = (props: Props) => {
  const { children, post } = props;

  const [state, dispatch] = React.useReducer(reducer, post);

  const stateManagerContext: ContextValue = React.useMemo(
    () => ({
      state,
      likePost: userId => dispatch(createLikePostAction(userId)),
      addComment: commentId => dispatch(createAddCommentAction(commentId)),
      removeComment: commentId =>
        dispatch(createRemoveCommentAction(commentId)),
    }),
    [state],
  );

  return <Provider context={stateManagerContext}>{children}</Provider>;
};

export default PostStateManager;
