"use client";

import { Button } from "@/components/ui";
import { COMPANY_TYPE_LABELS } from "@/constants";
import { useCompanyProfile } from "@/contexts";
import { cn } from "@/utility";
import moment from "moment";
import Link from "next/link";
import { InfoCard } from "./components";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const AboutUsSection = (props: Props) => {
  const { className } = props;

  const company = useCompanyProfile();
  if (!company) return null;

  const createDateYear = moment(company.createDate).year();

  const renderWebsite = () => {
    if (!company.contactInfo.website) return null;

    return (
      <InfoCard title="Website">
        <Button
          variant="ghost"
          color="primary"
          className={classes["infocard-link"]}
          asChild
        >
          <Link href={company.contactInfo.website.url}>
            {company.contactInfo.website.url}
          </Link>
        </Button>
      </InfoCard>
    );
  };

  const renderSpecialities = () => {
    if (company.specialties.length === 0) return null;

    return (
      <InfoCard title="Specialties">
        {company.specialties.map((spec, idx) => (
          <span key={`${spec}-${idx}`}>
            {idx === company.specialties.length - 1 ? spec : `${spec}, `}
          </span>
        ))}
      </InfoCard>
    );
  };

  return (
    <section className={cn(className, classes["root"])}>
      <div className={classes["text-container"]}>
        <h2>About us</h2>
        <p>{company.aboutUs}</p>
      </div>

      <dl className={classes["info-container"]}>
        {renderWebsite()}

        <InfoCard title="Industry">
          <p>{company.industry}</p>
        </InfoCard>

        <InfoCard title="Company size">
          <p>{`${company.size[0]}-${company.size[1]} employees`}</p>
        </InfoCard>

        <InfoCard title="Headquarters">
          <p>{`${company.location.city}, ${company.location.country}`}</p>
        </InfoCard>

        <InfoCard title="Type">
          <p>{COMPANY_TYPE_LABELS[company.type]}</p>
        </InfoCard>

        <InfoCard title="Founded">
          <p>{createDateYear}</p>
        </InfoCard>

        {renderSpecialities()}
      </dl>
    </section>
  );
};

export default AboutUsSection;
