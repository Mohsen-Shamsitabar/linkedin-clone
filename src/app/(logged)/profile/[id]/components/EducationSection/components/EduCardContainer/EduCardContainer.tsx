import { getEducations } from "@/api/educations";
import { Separator } from "@/components/ui";
import type { EducationId } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { EduCard } from "./components";
import classes from "./styles.module.css";

type Props = {
  educationIds: EducationId[];
};

const EduCardContainer = (props: Props) => {
  const { educationIds } = props;

  const { isPending, data: educations } = useQuery({
    queryKey: ["educationData"],
    queryFn: () => getEducations(educationIds),
  });

  if (!educations) return null;

  if (isPending) return <h1>LOADING...</h1>;

  const renderCards = () => {
    return educationIds.map((eduId, idx) => (
      <div className="w-full" key={`${eduId}-${idx}`}>
        {idx !== 0 && <Separator className={classes["separator"]} />}

        <EduCard education={educations[eduId]!} />
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
