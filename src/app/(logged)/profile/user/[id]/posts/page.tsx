import { getPostsFromOwners } from "@/api/posts";
import { PostList } from "@/app/(logged)/components";
import type { RouteProps, UserId } from "@/types";

const PostsPage = async (props: RouteProps<{ id: UserId }>) => {
  const {
    params: { id: userId },
  } = props;

  const allPosts = await getPostsFromOwners(new Set([userId]));

  return <PostList posts={allPosts} />;
};

export default PostsPage;
