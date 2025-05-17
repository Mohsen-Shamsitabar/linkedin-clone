import { Separator } from "@/components/ui";
import { useUserProfile } from "@/contexts";
import { EduCard } from "./components";
import classes from "./styles.module.css";

const EduCardContainer = () => {
  const user = useUserProfile();
  if (!user) return null;

  const { educationsData } = user;

  const renderCards = () => {
    return educationsData.map((education, idx) => (
      <div className="w-full" key={education.id}>
        {idx !== 0 && <Separator className={classes["separator"]} />}

        <EduCard education={education} />
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
