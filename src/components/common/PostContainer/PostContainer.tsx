"use client";

import { getUser } from "@/api/users";
import { cn } from "@/lib/utils";
import likeIcon from "@/public/svgs/linkedinLikeIcon.svg";
import type { Post } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { MessageSquareTextIcon, ThumbsUpIcon } from "lucide-react";
import moment from "moment";
import Image from "next/image";
import * as React from "react";
import classes from "./styles.module.css";

type Props = {
  post: Post;
};

const PostContainer = (props: Props) => {
  const { post } = props;

  const { isPending, data: postOwner } = useQuery({
    queryKey: ["postOwnerData"],
    queryFn: () => getUser(post.owner),
  });

  const [isShown, setIsShown] = React.useState(false);

  if (isPending) return <h1>Loading...</h1>;

  if (!postOwner) return null;

  const deltaDate = moment(post.createDate).fromNow();

  const renderMoreBtn = () => {
    if (isShown) return null;

    return (
      <a
        className="text-subtitle1 text-icon hover:cursor-pointer hover:underline hover:text-primary"
        onClick={handleMoreBtn}
      >
        ...more
      </a>
    );
  };

  const handleMoreBtn = () => {
    setIsShown(c => !c);
  };

  return (
    <article className={classes["root"]}>
      <div className={classes["text-container"]}>
        <div className={classes["owner-info-container"]}>
          <div className={cn("image-container", classes["owner-avatar"])}>
            <Image
              width={48}
              height={48}
              src={postOwner.avatar}
              alt={"avatar"}
            />
          </div>

          <div>
            <p
              className={classes["owner-name"]}
            >{`${postOwner.firstName} ${postOwner.lastName}`}</p>

            <p className={classes["subtitle-text"]}>{postOwner.headline}</p>
            <p className={classes["subtitle-text"]}>{deltaDate}</p>
          </div>
        </div>

        <p
          className={cn(
            isShown
              ? classes["post-caption"]
              : classes["post-caption--clipped"],
          )}
        >
          {post.caption}
        </p>

        <div className="flex items-center justify-end">{renderMoreBtn()}</div>
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

          <span>69</span>
        </div>

        <div>
          <span>69</span>

          <span>Comments</span>
        </div>
      </div>

      <div className={classes["post-actions-container"]}>
        <div>
          <ThumbsUpIcon />
          <span>Like</span>
        </div>

        <div>
          <MessageSquareTextIcon />
          <span>Comment</span>
        </div>
      </div>
    </article>
  );
};

export default PostContainer;
