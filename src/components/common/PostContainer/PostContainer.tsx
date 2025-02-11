import { cn } from "@/lib/utils";
import likeIcon from "@/public/svgs/linkedinLikeIcon.svg";
import * as paths from "@/routes/paths";
import type { Post } from "@/types";
import { MessageSquareTextIcon, ThumbsUpIcon } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import ExpandableText from "../ExpandableText";
import classes from "./styles.module.css";

type Props = {
  post: Post;
};

const PostContainer = (props: Props) => {
  const { post } = props;
  const owner = post.userSummary;

  const deltaDate = moment(post.createDate).fromNow();

  const likeCount = post.likedBy.length;
  const commentCount = post.comments.length;

  return (
    <article className={classes["root"]}>
      <div className={classes["text-container"]}>
        <div className={classes["owner-info-container"]}>
          <div className={cn("image-container", classes["owner-avatar"])}>
            <Image width={48} height={48} src={owner.avatar} alt={"avatar"} />
          </div>

          <div>
            <p className={classes["owner-name"]}>
              {`${owner.firstName} ${owner.lastName}`}
            </p>

            <p className={classes["subtitle-text"]}>{owner.headline}</p>
            <p className={classes["subtitle-text"]}>{deltaDate}</p>
          </div>
        </div>

        <ExpandableText text={post.caption} />
      </div>

      <div className="image-container">
        <Image width={1200} height={400} src={post.media} alt={"post media"} />
      </div>

      <div className={classes["post-statistics-container"]}>
        <div>
          <div>
            <Image
              width={16}
              height={16}
              src={likeIcon as string}
              alt={"like icon"}
            />
          </div>

          <span>{likeCount}</span>
        </div>

        <div>
          <span>{commentCount}</span>

          <span>Comments</span>
        </div>
      </div>

      <div className={classes["post-actions-container"]}>
        <div>
          <ThumbsUpIcon />
          <span>Like</span>
        </div>

        <Link href={`${paths.POST}/${post.id}`}>
          <MessageSquareTextIcon />
          <span>Comment</span>
        </Link>
      </div>
    </article>
  );
};

export default PostContainer;
