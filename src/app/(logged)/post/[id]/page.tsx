import { getComments } from "@/api/comments";
import { getPosts } from "@/api/posts";
import { PostContainer } from "@/components/common";
import { PostStateManager } from "@/stateManagers";
import type { PostId, RouteProps } from "@/types";
import { Comment, CommentInput } from "./components";
import classes from "./styles.module.css";

const PostPage = async (props: RouteProps<{ id: PostId }>) => {
  const { params } = props;
  const { id: postId } = params;

  const posts = await getPosts([postId]);
  const post = posts[0]!;

  const allComments = await getComments(postId);

  const renderComments = () => {
    if (!post.comments.length) return null;

    return (
      <ul className={classes["comments-container"]}>
        {allComments.map(comment => (
          <Comment key={comment.id} comment={comment} />
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
