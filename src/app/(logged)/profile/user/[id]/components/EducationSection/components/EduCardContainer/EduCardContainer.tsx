import { Separator } from "@/components/ui";
import { useUserProfile } from "@/contexts";
import { EduCard } from "./components";
import classes from "./styles.module.css";

const EduCardContainer = () => {
  const user = useUserProfile();
  if (!user) return null;

  const { educations, educationsData } = user;

  const renderCards = () => {
    return educations.map((eduId, idx) => (
      <div className="w-full" key={`${eduId}-${idx}`}>
        {idx !== 0 && <Separator className={classes["separator"]} />}

        <EduCard education={educationsData[eduId]!} />
      </div>
    ));
  };

  return (
    <>
      <h2 className={classes["head-text"]}>Education</h2>

      <ol className={classes["card-list"]}>{renderCards()}</ol>
    </>
  );
};

export default EduCardContainer;
