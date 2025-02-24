"use client";

import { useProfileUser } from "@/contexts";
import { cn } from "@/utility";
import { EmptyStatement, ExpCardContainer } from "./components";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const ExperienceSection = (props: Props) => {
  const { className } = props;

  const user = useProfileUser();
  if (!user) return null;

  const { experiences } = user;

  const expCount = experiences.length;

  const renderContent = () => {
    if (expCount === 0) return <EmptyStatement />;

    return <ExpCardContainer />;
  };

  return (
    <section
      className={cn(
        expCount > 0 ? classes["root"] : classes["root--empty"],
        className,
      )}
    >
      {renderContent()}
    </section>
  );
};

export default ExperienceSection;
