"use client";

import { useProfileUser } from "@/contexts";
import { cn } from "@/lib/utils";
import { EmptyStatement, ExpCardContainer } from "./components";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const ExperienceSection = (props: Props) => {
  const { className } = props;

  const user = useProfileUser();
  if (!user) return null;

  const { experiences: expIds } = user;

  const eduCount = expIds.length;

  const renderContent = () => {
    if (eduCount === 0) return <EmptyStatement />;

    return <ExpCardContainer experienceIds={expIds} />;
  };

  return (
    <section
      className={cn(
        eduCount > 0 ? classes["root"] : classes["root--empty"],
        className,
      )}
    >
      {renderContent()}
    </section>
  );
};

export default ExperienceSection;
