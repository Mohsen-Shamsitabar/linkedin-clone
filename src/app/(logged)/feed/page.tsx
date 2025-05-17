"use client";
import { getPostsFromOwners } from "@/api/posts";
import GlobalLoading from "@/app/loading";
import { useLoggedUser } from "@/contexts";
import type { Post } from "@/types";
import * as React from "react";
import { PostList } from "../components";

const FeedPage = () => {
  const [feedPosts, setFeedPosts] = React.useState<Post[]>([]);
  const [isLoading, setIsLoading] = React.useState(true);

  const loggedUser = useLoggedUser()!;

  const { followings } = loggedUser;

  React.useEffect(() => {
    if (!isLoading) return;

    const fetchPosts = async () => {
      const feedPosts: Post[] = await getPostsFromOwners(new Set(followings));

      setFeedPosts(feedPosts);
      setIsLoading(false);
    };

    void fetchPosts();
  });

  if (isLoading) {
    return <GlobalLoading />;
  }

  if (!feedPosts.length) {
    return (
      <div className="text-center mt-72">
        <h2>OOPS...</h2>
        <h3>You have zero posts in your feed!</h3>
      </div>
    );
  }

  return <PostList posts={feedPosts} />;
};

export default FeedPage;
