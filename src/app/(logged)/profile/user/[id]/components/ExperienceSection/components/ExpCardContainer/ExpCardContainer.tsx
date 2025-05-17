"use client";

import { Separator } from "@/components/ui";
import { useUserProfile } from "@/contexts";
import { ExpCard } from "./components";
import classes from "./styles.module.css";

const ExpCardContainer = () => {
  const user = useUserProfile();
  if (!user) return null;

  const { experiences, experiencesData } = user;

  const renderCards = () => {
    return experiences.map((expId, idx) => (
      <div className="w-full" key={`${expId}-${idx}`}>
        {idx !== 0 && <Separator className={classes["separator"]} />}

        <ExpCard experience={experiencesData[expId]!} />
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
