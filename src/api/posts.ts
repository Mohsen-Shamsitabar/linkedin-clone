import type { Post, PostId } from "@/types";

export type Posts = Record<PostId, Post>;

const posts: Posts = {
  POST_1: {
    id: "POST_1",
    createDate: "2024-12-26T18:38:00+03:30",
    ownerSummary: {
      type: "user",
      id: "USER_1",
      firstName: "Mohsen",
      lastName: "Shamsitabar",
      avatar: "https://picsum.photos/id/0/152/152",
      headline: "Im sad and broke",
    },
    caption:
      "meow meow meow meow, this is a description for this post, just ignore it!!!meow meow meow meow, this is a description for this post, just ignore it!!!meow meow meow meow, this is a description for this post, just ignore it!!!meow meow meow meow, this is a description for this post, just ignore it!!!meow meow meow meow, this is a description for this post, just ignore it!!!meow meow meow meow, this is a description for this post, just ignore it!!!meow meow meow meow, this is a description for this post, just ignore it!!!meow meow meow meow, this is a description for this post, just ignore it!!!meow meow meow meow, this is a description for this post, just ignore it!!!meow meow meow meow, this is a description for this post, just ignore it!!!meow meow meow meow, this is a description for this post, just ignore it!!!meow meow meow meow, this is a description for this post, just ignore it!!!meow meow meow meow, this is a description for this post, just ignore it!!!",
    media: "https://picsum.photos/id/237/552/696",
    likedBy: ["USER_2"],
    comments: ["CMNT_1"],
  },
  POST_2: {
    id: "POST_2",
    createDate: "2024-12-26T18:38:00+03:30",
    ownerSummary: {
      type: "user",
      id: "USER_2",
      firstName: "Mostafa",
      lastName: "Shamsitabar",
      avatar: "https://picsum.photos/id/6/152/152",
      headline: "Senior Software Engineer @ TAPSI",
    },
    caption:
      "meow meow meow meow, this is a description for this post, just ignore it!!!",
    media: "https://picsum.photos/id/300/552/696",
    likedBy: [],
    comments: [],
  },
};

/**
 * If `postIds` is empty, then all the `posts` will be resolved.
 */
export const getPosts = (postIds: PostId[] = []) => {
  const postIdsSet = new Set(postIds);

  const promise = new Promise<Posts>((resolve, _reject) => {
    const allPostIds = Object.keys(posts) as PostId[];
    // const arePostIdsValid = allPostIds.some(postId =>
    //   postIds.some(givenPostId => postId === givenPostId),
    // );

    setTimeout(() => {
      if (!postIds.length) resolve(posts);
      // if (!arePostIdsValid) reject(new Error("Post ids are invalid!"));

      const result: Posts = {};

      allPostIds.forEach(postId => {
        if (!postIdsSet.has(postId)) return;
        result[postId] = posts[postId]!;
      });

      resolve(result);
    }, 1000);
  });

  return promise;
};
