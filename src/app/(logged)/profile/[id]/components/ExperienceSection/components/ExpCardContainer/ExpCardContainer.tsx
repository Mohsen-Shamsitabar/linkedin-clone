"use client";

import { getExperiences } from "@/api/experiences";
import { Separator } from "@/components/ui";
import type { ExperienceId } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { ExpCard } from "./components";
import classes from "./styles.module.css";

type Props = {
  experienceIds: ExperienceId[];
};

const ExpCardContainer = (props: Props) => {
  const { experienceIds } = props;

  const { isPending, data: experiences } = useQuery({
    queryKey: ["experienceData"],
    queryFn: () => getExperiences(experienceIds),
  });

  if (!experiences) return null;

  if (isPending) return <h1>LOADING...</h1>;

  const renderCards = () => {
    return experienceIds.map((expId, idx) => (
      <div className="w-full" key={`${expId}-${idx}`}>
        {idx !== 0 && <Separator className={classes["separator"]} />}

        <ExpCard experience={experiences[expId]!} />
      </div>
    ));
  };

  return (
    <>
      <h2 className={classes["head-text"]}>Experience</h2>

      <ol className={classes["card-list"]}>{renderCards()}</ol>
    </>
  );
};

export default ExpCardContainer;
