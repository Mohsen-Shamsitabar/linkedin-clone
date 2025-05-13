"use client";
import { getPostsFromOwners } from "@/api/posts";
import GlobalLoading from "@/app/loading";
import { PostContainer } from "@/components/common";
import { useLoggedUser } from "@/contexts";
import { PostStateManager } from "@/stateManagers/PostStateManager";
import type { Post } from "@/types";
import * as React from "react";

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

  const renderPosts = () => {
    return feedPosts.map(post => (
      <li key={post.id}>
        <PostStateManager post={post}>
          <PostContainer />
        </PostStateManager>
      </li>
    ));
  };

  return (
    <ol className="flex flex-col space-y-2 bg-logged-bg">{renderPosts()}</ol>
  );
};

export default FeedPage;
