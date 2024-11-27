import type { Post, PostId } from "@/types";

type Posts = Record<PostId, Post>;

const posts: Posts = {
  POST_1: {
    id: "POST_1",
    owner: "USER_1",
    caption: "sometimes im aloneeee...",
    media: "https://picsum.photos/id/237/552/696",
    likedBy: ["USER_2"],
    comments: ["CMNT_1"],
  },
  POST_2: {
    id: "POST_2",
    owner: "USER_2",
    caption: "eh, im thinking of ending things!",
    media: "https://picsum.photos/id/300/552/696",
    likedBy: [],
    comments: [],
  },
};

export const getPosts = (_query = "") => {
  const promise = new Promise<Posts>((resolve, _reject) => {
    setTimeout(() => {
      resolve(posts);
    }, 1000);
  });

  return promise;
};
