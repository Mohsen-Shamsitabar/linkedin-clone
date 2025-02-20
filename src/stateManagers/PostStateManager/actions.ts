import type { CommentId, UserId } from "@/types";

export enum ActionType {
  LIKE,
  ADD_COMMENT,
  REMOVE_COMMENT,
}

export type Action =
  | {
      type: ActionType.LIKE;
      payload: { userId: UserId };
    }
  | {
      type: ActionType.ADD_COMMENT;

      payload: { commentId: CommentId };
    }
  | {
      type: ActionType.REMOVE_COMMENT;

      payload: { commentId: CommentId };
    };

export const createLikePostAction = (userId: UserId): Action => ({
  type: ActionType.LIKE,
  payload: { userId },
});

export const createAddCommentAction = (commentId: CommentId): Action => ({
  type: ActionType.ADD_COMMENT,
  payload: { commentId },
});

export const createRemoveCommentAction = (commentId: CommentId): Action => ({
  type: ActionType.REMOVE_COMMENT,
  payload: { commentId },
});
