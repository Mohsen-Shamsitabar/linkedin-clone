import { ExpandableText } from "@/components/common";
import * as paths from "@/routes/paths";
import type { Comment as CommentT } from "@/types";
import { cn } from "@/utility";
import moment from "moment";
import Image from "next/image";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  comment: CommentT;
};

const Comment = (props: Props) => {
  const { comment } = props;
  const commenter = comment.userSummary;

  const deltaDate = moment(comment.createDate).fromNow();

  const commenterProfile = `${paths.PROFILE}/${commenter.id}`;

  return (
    <li className={classes["root"]}>
      <div className={classes["avatar-container"]}>
        <Link href={commenterProfile}>
          <div className={cn("image-container", "rounded-full")}>
            <Image
              width={32}
              height={32}
              src={commenter.avatar}
              alt={"avatar"}
            />
          </div>
        </Link>
      </div>

      <div className={classes["text-container"]}>
        <div className={classes["text-head"]}>
          <Link
            className="text-subtitle1 font-semibold"
            href={commenterProfile}
          >{`${commenter.firstName} ${commenter.lastName}`}</Link>

          <span>{deltaDate}</span>
        </div>

        <span>{commenter.headline}</span>

        <ExpandableText
          className="text-subtitle2 font-medium mt-3"
          text={comment.text}
        />
      </div>
    </li>
  );
};

export default Comment;
