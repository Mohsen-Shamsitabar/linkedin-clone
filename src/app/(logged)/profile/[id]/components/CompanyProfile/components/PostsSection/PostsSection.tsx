"use client";

import { PostContainer } from "@/components/common";
import { useCompanyProfile } from "@/contexts";
import { PostStateManager } from "@/stateManagers/PostStateManager";
import { cn } from "@/utility";

type Props = {
  className?: string;
};

const PostsSection = (props: Props) => {
  const { className } = props;

  const company = useCompanyProfile();
  if (!company) return null;

  const { postsData } = company;

  const postsCount = company.posts.length;

  const renderPosts = () => {
    if (postsCount <= 0) return null;

    return company.posts.map(postId => (
      <PostStateManager key={postId} post={postsData[postId]!}>
        <PostContainer />
      </PostStateManager>
    ));
  };

  return (
    <section className={cn(className, "space-y-2")}>{renderPosts()}</section>
  );
};

export default PostsSection;
