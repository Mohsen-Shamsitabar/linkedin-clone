import type { CompanyId, Post, PostId, UserId } from "@/types";

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
    comments: ["CMNT_1", "CMNT_2"],
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
  POST_3: {
    id: "POST_3",
    createDate: "2024-12-26T18:38:00+03:30",
    ownerSummary: {
      type: "company",
      id: "COMPANY_4",
      headline: "THE place to get stuff",
      location: { country: "Iran", city: "Tehran" },
      name: "Divar",
      avatar: "https://picsum.photos/id/22/152/152",
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

export const getPostsFromOwners = (ownerIds: Set<UserId | CompanyId>) => {
  const promise = new Promise<Post[]>((resolve, _reject) => {
    const allPosts = Object.values(posts);

    const postsFromOwner = allPosts.filter(({ ownerSummary }) =>
      ownerIds.has(ownerSummary.id),
    );

    setTimeout(() => {
      resolve(postsFromOwner);
    }, 1000);
  });

  return promise;
};
