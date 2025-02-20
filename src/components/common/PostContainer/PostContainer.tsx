"use client";

import { cn } from "@/lib/utils";
import * as paths from "@/routes/paths";
import {
  PostStateManager,
  usePostStateManager,
} from "@/stateManagers/PostStateManager";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ExpandableText from "../ExpandableText";
import { PostStatistics } from "./components";
import classes from "./styles.module.css";

const PostContainer = () => {
  const pathName = usePathname();

  const postManager = usePostStateManager();
  if (!postManager) return null;

  const { state: post } = postManager;

  const owner = post.userSummary;

  const isInPostsPage = pathName.includes("post");

  const deltaDate = moment(post.createDate).fromNow();

  return (
    <PostStateManager post={post}>
      <article
        className={isInPostsPage ? classes["root"] : classes["root--compact"]}
      >
        <div className={classes["text-container"]}>
          <div className={classes["owner-info-container"]}>
            <Link href={`${paths.PROFILE}/${owner.id}`}>
              <div className={cn("image-container", classes["owner-avatar"])}>
                <Image
                  width={48}
                  height={48}
                  src={owner.avatar}
                  alt={"avatar"}
                />
              </div>
            </Link>

            <div>
              <Link href={`${paths.PROFILE}/${owner.id}`}>
                <p className={classes["owner-name"]}>
                  {`${owner.firstName} ${owner.lastName}`}
                </p>
              </Link>

              <p className={classes["subtitle-text"]}>{owner.headline}</p>
              <p className={classes["subtitle-text"]}>{deltaDate}</p>
            </div>
          </div>

          <ExpandableText text={post.caption} />
        </div>

        <div className="image-container">
          <Image
            width={1200}
            height={400}
            src={post.media}
            alt={"post media"}
          />
        </div>

        <PostStatistics isInPostsPage={isInPostsPage} />
      </article>
    </PostStateManager>
  );
};

export default PostContainer;
