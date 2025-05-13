import { getComments } from "@/api/comments";
import { getPosts } from "@/api/posts";
import { PostContainer } from "@/components/common";
import { PostStateManager } from "@/stateManagers/PostStateManager";
import type { PostId, RouteProps } from "@/types";
import { Comment, CommentInput } from "./components";
import classes from "./styles.module.css";

const PostPage = async (props: RouteProps<{ id: PostId }>) => {
  const { params } = props;
  const { id: postId } = params;

  const posts = await getPosts([postId]);
  const post = posts[postId]!;

  const allComments = await getComments(postId);

  const renderComments = () => {
    if (!post.comments.length) return null;

    return (
      <ul className={classes["comments-container"]}>
        {post.comments.map(commentId => (
          <Comment key={commentId} comment={allComments[commentId]!} />
        ))}
      </ul>
    );
  };

  return (
    <div className={classes["root"]}>
      <PostStateManager post={post}>
        <PostContainer />

        <CommentInput />

        <section>{renderComments()}</section>
      </PostStateManager>
    </div>
  );
};

export default PostPage;
