import { PostContainer } from "@/components/common";
import { PostStateManager } from "@/stateManagers";
import type { Post } from "@/types";

type Props = {
  posts: Post[];
};

const PostList = (props: Props) => {
  const { posts } = props;

  const renderPosts = () => {
    return posts.map(post => (
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

export default PostList;
