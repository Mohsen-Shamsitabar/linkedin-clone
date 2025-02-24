"use client";

import { Button, Input } from "@/components/ui";
import { useLoggedUser } from "@/contexts";
import * as paths from "@/routes/paths";
import { cn } from "@/utility";
import Image from "next/image";
import Link from "next/link";
import * as React from "react";
import classes from "./styles.module.css";

const CommentInput = () => {
  const [commentText, setCommentText] = React.useState("");

  const loggedUser = useLoggedUser();
  if (!loggedUser) return null;

  const handleCommentTextChange: React.ChangeEventHandler<
    HTMLInputElement
  > = event => {
    const value = event.target.value;

    setCommentText(value);
  };

  const handlePostClick: React.MouseEventHandler<HTMLButtonElement> = () => {
    setCommentText("");
  };

  return (
    <div className={classes["root"]}>
      <Link href={`${paths.PROFILE}/${loggedUser.id}`}>
        <div className={cn("image-container", classes["avatar-container"])}>
          <Image
            width={32}
            height={32}
            src={loggedUser.avatar}
            alt={`${loggedUser.firstName} ${loggedUser.lastName}'s avatar`}
            className="rounded-full"
          />
        </div>
      </Link>

      <Input
        onChange={handleCommentTextChange}
        value={commentText}
        placeholder="Add your comment"
      />

      <Button
        disabled={!commentText}
        variant="fill"
        color="primary"
        onClick={handlePostClick}
      >
        Post
      </Button>
    </div>
  );
};

export default CommentInput;
