import { cn } from "@/lib/utils";
import type { Education } from "@/types";
import moment from "moment";
import Image from "next/image";
import classes from "./styles.module.css";

type Props = {
  className?: string;
  education: Education;
};

const EduCard = (props: Props) => {
  const { education, className } = props;
  const { companySummary, userSummary: _ } = education;

  const startYear = moment(education.startDate).format("YYYY");
  const endYear = moment(education.endDate).format("YYYY");

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
        <p className={classes["company-name"]}>{companySummary.name}</p>

        <p className="space-x-2">
          <span>{education.degree}</span>
          <span className="font-black">.</span>
          <span>{education.fieldOfStudy}</span>
        </p>

        <p className="text-icon space-x-1">
          <span>{startYear}</span>
          <span>-</span>
          <span>{endYear}</span>
        </p>
      </div>
    </li>
  );
};

export default EduCard;
