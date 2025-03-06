import { Avatar } from "@/components/common";
import { paths } from "@/routes";
import type { Education } from "@/types";
import { cn } from "@/utility";
import moment from "moment";
import Link from "next/link";
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

  const companyProfileUrl = `${paths.PROFILE}/${companySummary.id}`;

  return (
    <li className={cn(classes["root"], className)}>
      <Link className="mt-1" href={companyProfileUrl}>
        <Avatar
          size={48}
          src={companySummary.avatar}
          alt={`${companySummary.name}'s avatar`}
          rounded={false}
        />
      </Link>

      <div className={classes["text-container"]}>
        <Link href={companyProfileUrl}>
          <p className={classes["company-name"]}>{companySummary.name}</p>
        </Link>

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
