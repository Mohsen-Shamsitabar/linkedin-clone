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
      headline: "THE place to get stuff",
      name: "Divar",
      avatar: "https://picsum.photos/id/22/152/152",
    },
    postId: "POST_1",
    text: "YOOOOOOO, good post.",
  },
  CMNT_3: {
    id: "CMNT_3",
    createDate: "2023-12-26T18:38:00+03:30",
    ownerSummary: {
      type: "user",
      id: "USER_1",
      firstName: "Mohsen",
      lastName: "Shamsitabar",
      avatar: "https://picsum.photos/id/0/152/152",
      headline: "Im sad and broke",
    },
    postId: "POST_1",
    text: "Thanks for the support yall.",
  },
};

export const getComments = (postId: PostId): Promise<Comment[]> => {
  const promise = new Promise<Comment[]>((resolve, _reject) => {
    const allCommentIds = Object.keys(comments) as CommentId[];

    setTimeout(() => {
      const result: Comment[] = [];

      allCommentIds.forEach(commentId => {
        const comment = comments[commentId]!;

        if (comment.postId === postId) {
          result.push(comment);
          return;
        }
      });

      resolve(result);
    }, 500);
  });

  return promise;
};
