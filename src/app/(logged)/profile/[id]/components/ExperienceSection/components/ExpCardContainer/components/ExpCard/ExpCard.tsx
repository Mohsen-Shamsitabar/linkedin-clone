import type { Experience } from "@/types";
import { cn } from "@/utility";
import moment from "moment";
import Image from "next/image";
import classes from "./styles.module.css";

type Props = {
  className?: string;
  experience: Experience;
};

const ExpCard = (props: Props) => {
  const { experience, className } = props;
  const { companySummary, userSummary: _ } = experience;

  const startYear = moment(experience.startDate).format("YYYY");
  const endYear = moment(experience.endDate).format("YYYY");
  const timePassed = moment(experience.endDate).from(
    experience.startDate,
    true,
  );

  return (
    <li className={cn(classes["root"], className)}>
      <div className="mt-1">
        <div className="image-container">
          <Image
            width={48}
            height={48}
            src={companySummary.avatar}
            alt={`${companySummary.name}'s avatar`}
          />
        </div>
      </div>

      <div className={classes["text-container"]}>
        <p className={classes["position-text"]}>{experience.position}</p>

        <p>{companySummary.name}</p>

        <p className="space-x-1">
          <span>{startYear}</span>
          <span>-</span>
          <span>{endYear}</span>
          <span className="font-black">.</span>
          <span>{timePassed}</span>
        </p>

        <p
          className={classes["location-text"]}
        >{`${companySummary.location.city}, ${companySummary.location.country}`}</p>
      </div>
    </li>
  );
};

export default ExpCard;
