"use client";

import { LinkedinIcon } from "@/components/svgs";
import { Separator } from "@/components/ui";
import { cn } from "@/lib/utils";
import type { User } from "@/types";
import { MailIcon, PencilIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { ContactCard } from "./components";
import classes from "./styles.module.css";

type Props = {
  user: User;
  className?: string;
};

const ContactSection = (props: Props) => {
  const { user, className } = props;
  const { email } = user.contactInfo;

  const pathname = usePathname();

  const renderEmail = () => {
    if (!email) return null;

    return (
      <ContactCard
        title="Email"
        icon={<MailIcon className="stroke-icon mr-4" />}
        linkText={email}
        linkHref={""}
      />
    );
  };

  const renderLinkedIn = () => {
    const userPathname = pathname;

    return (
      <ContactCard
        title="LinkedIn"
        icon={<LinkedinIcon className="fill-icon mr-4" />}
        linkText={userPathname}
        linkHref={userPathname}
      />
    );
  };

  return (
    <section className={cn(classes["root"], className)}>
      <div className={classes["section-head"]}>
        <h2>Contact</h2>
        <PencilIcon className="stroke-icon" />
      </div>

      <div className={classes["section-body"]}>
        {renderEmail()}

        <Separator orientation="horizontal" className="my-5" />

        {renderLinkedIn()}
      </div>
    </section>
  );
};

export default ContactSection;
