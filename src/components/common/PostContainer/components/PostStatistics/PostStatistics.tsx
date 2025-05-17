"use client";

import { useLoggedUser } from "@/contexts";
import likeIcon from "@/public/svgs/linkedinLikeIcon.svg";
import * as paths from "@/routes/paths";
import { usePostStateManager } from "@/stateManagers";
import { MessageSquareTextIcon, ThumbsUpIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import classes from "./styles.module.css";

const PostStatistics = () => {
  const pathname = usePathname();

  const postManager = usePostStateManager();
  const loggedUser = useLoggedUser();
  if (!postManager || !loggedUser) return null;

  const { state: post, likePost } = postManager;

  const commentCount = post.comments.length;
  const likeCount = post.likedBy.length;

  const isLikedByMe = post.likedBy.includes(loggedUser.id);

  const isInPostsPage = pathname.includes(`${paths.POST}/`);

  const renderCommentBtn = () => {
    if (isInPostsPage) {
      return (
        <button>
          <MessageSquareTextIcon />
          <span>Comment</span>
        </button>
      );
    }

    return (
      <Link href={`${paths.POST}/${post.id}`}>
        <MessageSquareTextIcon />
        <span>Comment</span>
      </Link>
    );
  };

  const handleLikeClick = () => {
    likePost(loggedUser.id);
  };

  return (
    <>
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
        <button onClick={handleLikeClick}>
          <ThumbsUpIcon
            className={
              isLikedByMe ? "fill-primary stroke-primary-dark" : undefined
            }
          />
          <span>Like</span>
        </button>

        {renderCommentBtn()}
      </div>
    </>
  );
};

export default PostStatistics;
