import { Avatar, ExpandableText } from "@/components/common";
import * as paths from "@/routes/paths";
import type { Comment as CommentT } from "@/types";
import { isCompanySummary } from "@/utility";
import moment from "moment";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  comment: CommentT;
};

const Comment = (props: Props) => {
  const { comment } = props;
  const commentOwner = comment.ownerSummary;

  const deltaDate = moment(comment.createDate).fromNow();

  const commentOwnerProfile = `${paths.PROFILE}/${commentOwner.id}`;

  const isCompanySum = isCompanySummary(commentOwner);

  return (
    <li className={classes["root"]}>
      <div className={classes["avatar-container"]}>
        <Link href={commentOwnerProfile}>
          <Avatar
            size={32}
            src={commentOwner.avatar}
            alt={"avatar"}
            rounded={!isCompanySum}
          />
        </Link>
      </div>

      <div className={classes["text-container"]}>
        <div className={classes["text-head"]}>
          <Link
            className="text-subtitle1 font-semibold"
            href={commentOwnerProfile}
          >
            {isCompanySum
              ? `${commentOwner.name}`
              : `${commentOwner.firstName} ${commentOwner.lastName}`}
          </Link>

          <span>{deltaDate}</span>
        </div>

        {!isCompanySum && <span>{commentOwner.headline}</span>}

        <ExpandableText
          className="text-subtitle2 font-medium mt-3"
          text={comment.text}
        />
      </div>
    </li>
  );
};

export default Comment;
