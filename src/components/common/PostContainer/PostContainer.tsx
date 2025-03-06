"use client";

import * as paths from "@/routes/paths";
import {
  PostStateManager,
  usePostStateManager,
} from "@/stateManagers/PostStateManager";
import { cn, isCompanySummary } from "@/utility";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import Avatar from "../Avatar";
import ExpandableText from "../ExpandableText";
import { PostStatistics } from "./components";
import classes from "./styles.module.css";

type Props = {
  className?: string;
  isCompact?: boolean;
};

const PostContainer = (props: Props) => {
  const { className, isCompact = false } = props;

  const postManager = usePostStateManager();
  if (!postManager) return null;

  const { state: post } = postManager;

  const owner = post.ownerSummary;

  const isOwnerCompany = isCompanySummary(owner);

  const deltaDate = moment(post.createDate).fromNow();

  const renderOwnerInfo = () => {
    if (isCompanySummary(owner)) {
      return (
        <div>
          <Link href={`${paths.PROFILE}/${owner.id}`}>
            <p className={classes["owner-name"]}>{`${owner.name}`}</p>
          </Link>

          <p className={classes["subtitle-text"]}>{deltaDate}</p>
        </div>
      );
    }

    return (
      <div>
        <Link href={`${paths.PROFILE}/${owner.id}`}>
          <p className={classes["owner-name"]}>
            {`${owner.firstName} ${owner.lastName}`}
          </p>
        </Link>

        <p className={classes["subtitle-text"]}>{owner.headline}</p>
        <p className={classes["subtitle-text"]}>{deltaDate}</p>
      </div>
    );
  };

  return (
    <PostStateManager post={post}>
      <article
        className={cn(
          className,
          isCompact ? classes["root--compact"] : classes["root"],
        )}
      >
        <div className={classes["text-container"]}>
          <div className={classes["owner-info-container"]}>
            <Link href={`${paths.PROFILE}/${owner.id}`}>
              <Avatar
                className={classes["owner-avatar"]}
                size={48}
                src={owner.avatar}
                alt={"avatar"}
                rounded={!isOwnerCompany}
              />
            </Link>

            {renderOwnerInfo()}
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

        <PostStatistics />
      </article>
    </PostStateManager>
  );
};

export default PostContainer;
