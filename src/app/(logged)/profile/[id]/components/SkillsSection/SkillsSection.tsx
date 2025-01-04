"use client";

import { useProfileUser } from "@/contexts";
import { cn } from "@/lib/utils";
import { PencilIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const SkillsSection = (props: Props) => {
  const { className } = props;

  const profileUser = useProfileUser()!;

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
        <PencilIcon className="stroke-icon" />
      </div>

      <Link href={"/"} className={classes["add-skills"]}>
        <PlusIcon size={16} />
        <span>Add skills</span>
      </Link>

      <ol className={classes["skills-list"]}>{renderSkills()}</ol>
    </section>
  );
};

export default SkillsSection;
