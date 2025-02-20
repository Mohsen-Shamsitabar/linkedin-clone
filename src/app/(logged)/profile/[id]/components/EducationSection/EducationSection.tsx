"use client";

import { useProfileUser } from "@/contexts";
import { cn } from "@/lib/utils";

import { EduCardContainer, EmptyStatement } from "./components";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const EducationSection = (props: Props) => {
  const { className } = props;

  const user = useProfileUser();
  if (!user) return null;

  const { educations } = user;

  const eduCount = educations.length;

  const renderContent = () => {
    if (eduCount === 0) return <EmptyStatement />;

    return <EduCardContainer />;
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

export default EducationSection;
