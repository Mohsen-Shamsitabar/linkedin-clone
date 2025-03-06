import type { Comment, CommentId, PostId } from "@/types";

export type Comments = Record<CommentId, Comment>;

const comments: Comments = {
  CMNT_1: {
    id: "CMNT_1",
    createDate: "2024-12-26T18:38:00+03:30",
    ownerSummary: {
      type: "user",
      id: "USER_2",
      firstName: "Mostafa",
      lastName: "Shamsitabar",
      avatar: "https://picsum.photos/id/6/152/152",
      headline: "Senior Software Engineer @ TAPSI",
    },
    postId: "POST_1",
    text: "THIS IS SOME GOOOOOOD shit !!!",
  },
  CMNT_2: {
    id: "CMNT_2",
    createDate: "2024-12-26T18:38:00+03:30",
    ownerSummary: {
      type: "company",
      id: "COMPANY_4",
      location: { country: "Iran", city: "Tehran" },
      name: "Divar",
      avatar: "https://picsum.photos/id/22/152/152",
    },
    postId: "POST_1",
    text: "YOOOOOOO, good post.",
  },
};

export const getComments = (postId: PostId) => {
  const promise = new Promise<Comments>((resolve, _reject) => {
    const allCommentIds = Object.keys(comments) as CommentId[];

    setTimeout(() => {
      const result: Comments = {};

      allCommentIds.forEach(commentId => {
        const comment = comments[commentId]!;

        if (comment.postId === postId) {
          result[commentId] = comment;
          return;
        }
      });

      resolve(result);
    }, 500);
  });

  return promise;
};
