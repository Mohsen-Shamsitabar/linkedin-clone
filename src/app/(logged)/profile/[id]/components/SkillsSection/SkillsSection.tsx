"use client";

import { useLoggedUser, useProfileUser } from "@/contexts";
import { cn } from "@/lib/utils";
import { PencilIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const SkillsSection = (props: Props) => {
  const { className } = props;

  const profileUser = useProfileUser();
  const loggedUser = useLoggedUser();
  if (!profileUser || !loggedUser) return null;

  const renderEditAction = () => {
    if (loggedUser.id !== profileUser.id) return null;

    return <PencilIcon className="stroke-icon" />;
  };

  const renderAddSkillBtn = () => {
    if (loggedUser.id !== profileUser.id) return null;

    return (
      <Link href={"/"} className={classes["add-skills"]}>
        <PlusIcon size={16} />
        <span>Add skills</span>
      </Link>
    );
  };

  const renderSkills = () => {
    return profileUser.skills.map((skill, idx) => (
      <li key={`${idx}-${skill}`} className={classes["skills-item"]}>
        <span>{skill}</span>
        {idx !== profileUser.skills.length - 1 && (
          <span className="mx-2">.</span>
        )}
      </li>
    ));
  };

  return (
    <section className={cn(classes["root"], className)}>
      <div className={classes["section-head"]}>
        <h2>Skills</h2>

        {renderEditAction()}
      </div>

      {renderAddSkillBtn()}

      <ol className={classes["skills-list"]}>{renderSkills()}</ol>
    </section>
  );
};

export default SkillsSection;
