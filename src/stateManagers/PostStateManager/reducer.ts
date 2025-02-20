import type { Post } from "@/types";
import { ActionType, type Action } from "./actions";

export type State = Post;

const reducer: React.Reducer<State, Action> = (state, action) => {
  switch (action.type) {
    case ActionType.LIKE: {
      const { userId } = action.payload;

      const oldLikes = new Set(state.likedBy);

      let newLikes = [];

      if (oldLikes.has(userId)) {
        oldLikes.delete(userId);
        newLikes = Array.from(oldLikes);
      } else {
        oldLikes.add(userId);
        newLikes = Array.from(oldLikes);
      }

      const newState: State = { ...state, likedBy: newLikes };

      return newState;
    }
    case ActionType.ADD_COMMENT: {
      const { commentId: _commentId } = action.payload;

      const newState: State = state;

      return newState;
    }
    case ActionType.REMOVE_COMMENT: {
      const { commentId: _commentId } = action.payload;

      const newState: State = state;

      return newState;
    }
    default:
      return state;
  }
};

export default reducer;
