"use client";

import { Button } from "@/components/ui";
import { useCompanyProfile } from "@/contexts";
import { cn } from "@/utility";
import Image from "next/image";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const ProfileSection = (props: Props) => {
  const { className } = props;

  const company = useCompanyProfile();
  if (!company) return null;

  const followerCount = company.followers.length;

  return (
    <section className={cn(classes["root"], className)}>
      <div className={classes["banner-container"]}>
        <div className="image-container">
          <Image
            width={400}
            height={100}
            src={company.banner}
            alt={`${company.name}'s banner image`}
          />
        </div>
      </div>

      <div className={classes["profile-info"]}>
        <div className={cn("image-container", classes["avatar-container"])}>
          <Image width={96} height={96} src={company.avatar} alt={""} />
        </div>

        <div className="space-y-1">
          <h1 className={classes["company-name"]}>{company.name}</h1>
          <p className="text-body2">{company.industry}</p>
          <p className="text-body2 text-icon">
            <span>{`${company.location.city}, ${company.location.country}`}</span>
            <span className="font-black mx-2">.</span>
            <span>{`${followerCount} followers`}</span>
          </p>

          <p className="text-subtitle1 text-icon">{company.headline}</p>
        </div>

        <div className={classes["actions"]}>
          <Button variant="outline" color="primary">
            + Follow
          </Button>

          <Button variant="fill" color="primary">
            See jobs
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
