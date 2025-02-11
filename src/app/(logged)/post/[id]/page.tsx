import { getComments } from "@/api/comments";
import { getPosts } from "@/api/posts";
import { PostContainer } from "@/components/common";
import type { PostId, RouteProps } from "@/types";
import { Comment } from "./components";
import classes from "./styles.module.css";

const PostPage = async (props: RouteProps<{ id: PostId }>) => {
  const { params } = props;
  const { id: postId } = params;

  const posts = await getPosts([postId]);
  const post = posts[postId]!;

  const allComments = await getComments(postId);

  const renderComments = () => {
    if (!post.comments.length) return null;

    return post.comments.map(commentId => (
      <Comment key={commentId} comment={allComments[commentId]!} />
    ));
  };

  return (
    <div className={classes["root"]}>
      <PostContainer post={post} />

      <section>
        <ul className={classes["comments-container"]}>{renderComments()}</ul>
      </section>
    </div>
  );
};

export default PostPage;
