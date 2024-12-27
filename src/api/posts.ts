import type { Post, PostId } from "@/types";

type Posts = Record<PostId, Post>;

const posts: Posts = {
  POST_1: {
    id: "POST_1",
    createDate: "2024-12-26T18:38:00+03:30",
    owner: "USER_1",
    caption:
      "meow meow meow meow, this is a description for this post, just ignore it!!!",
    media: "https://picsum.photos/id/237/552/696",
    likedBy: ["USER_2"],
    comments: ["CMNT_1"],
  },
  POST_2: {
    id: "POST_2",
    createDate: "2024-12-26T18:38:00+03:30",
    owner: "USER_2",
    caption:
      "meow meow meow meow, this is a description for this post, just ignore it!!!",
    media: "https://picsum.photos/id/300/552/696",
    likedBy: [],
    comments: [],
  },
};

export const getPosts = (postIds: PostId[] = []) => {
  const promise = new Promise<Posts>((resolve, _reject) => {
    setTimeout(() => {
      if (!postIds.length) resolve(posts);

      const allPostIds = Object.keys(posts) as PostId[];

      const fetchedPostIds = allPostIds.filter(postId =>
        postIds.includes(postId),
      );

      const result: Posts = {};

      fetchedPostIds.forEach(postId => (result[postId] = posts[postId]!));

      resolve(result);
    }, 1000);
  });

  return promise;
};
