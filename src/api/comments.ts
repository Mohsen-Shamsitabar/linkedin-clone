import type { Comment, CommentId } from "@/types";

type Comments = Record<CommentId, Comment>;

const comments: Comments = {
  CMNT_1: {
    id: "CMNT_1",
    createDate: "2024-12-26T18:38:00+03:30",
    writer: "USER_2",
    postId: "POST_1",
    text: "THIS IS SOME GOOOOOOD shit !!!",
    likedBy: ["USER_1"],
  },
};

export const getComments = (_query = "") => {
  const promise = new Promise<Comments>((resolve, _reject) => {
    setTimeout(() => {
      resolve(comments);
    }, 1000);
  });

  return promise;
};
