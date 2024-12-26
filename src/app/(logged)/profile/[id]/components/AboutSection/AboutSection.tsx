import { cn } from "@/lib/utils";
import type { User, UserId } from "@/types";
import { PencilIcon, PlusIcon } from "lucide-react";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  user: User;
  loggedUserId: UserId;
  className?: string;
};

const AboutSection = (props: Props) => {
  const { user, loggedUserId, className } = props;

  if (loggedUserId !== user.id && !user.summary) return null;

  const renderEditAction = () => {
    if (!user.summary || loggedUserId !== user.id) return null;

    return <PencilIcon className="stroke-icon" />;
  };

  const renderAddSummaryBtn = () => {
    if (user.summary) return null;

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

      <span className={classes["summary-text"]}>{user.summary}</span>

      {renderAddSummaryBtn()}
    </section>
  );
};

export default AboutSection;
