"use client";

import { ExpandableText } from "@/components/common";
import { useLoggedUser, useProfileUser } from "@/contexts";
import { cn } from "@/lib/utils";
import { PencilIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const AboutSection = (props: Props) => {
  const { className } = props;

  const profileUser = useProfileUser();
  const loggedUser = useLoggedUser();
  if (!profileUser || !loggedUser) return null;

  const { id: loggedUserId } = loggedUser;

  const isProfileOwner = loggedUserId === profileUser.id;

  if (!isProfileOwner && !profileUser.summary) return null;

  const renderEditAction = () => {
    if (!profileUser.summary || !isProfileOwner) return null;

    return <PencilIcon className="stroke-icon" />;
  };

  const renderAddSummaryBtn = () => {
    if (profileUser.summary) return null;

    return (
      <Link href={"/"} className={classes["add-summary"]}>
        <PlusIcon size={16} />
        <span>Add summary</span>
      </Link>
    );
  };

  return (
    <section className={cn(classes["root"], className)}>
      <div className={classes["head-container"]}>
        <h2 className="mb-3">About</h2>

        {renderEditAction()}
      </div>

      <ExpandableText
        className={classes["summary-text"]}
        text={profileUser.summary}
      />

      {renderAddSummaryBtn()}
    </section>
  );
};

export default AboutSection;
