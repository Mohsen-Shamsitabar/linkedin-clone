"use client";

import { ExpandableText } from "@/components/common";
import { useLoggedUser, useUserProfile } from "@/contexts";
import { cn } from "@/utility";
import { PencilIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const AboutSection = (props: Props) => {
  const { className } = props;

  const userProfile = useUserProfile();
  const loggedUser = useLoggedUser();
  if (!userProfile || !loggedUser) return null;

  const isProfileOwner = loggedUser.id === userProfile.id;

  if (!isProfileOwner && !userProfile.summary) return null;

  const renderEditAction = () => {
    if (!userProfile.summary || !isProfileOwner) return null;

    return <PencilIcon className="icon-action" />;
  };

  const renderAddSummaryBtn = () => {
    if (userProfile.summary) return null;

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
        <h2>About</h2>

        {renderEditAction()}
      </div>

      <ExpandableText
        className={classes["summary-text"]}
        text={userProfile.summary}
      />

      {renderAddSummaryBtn()}
    </section>
  );
};

export default AboutSection;
