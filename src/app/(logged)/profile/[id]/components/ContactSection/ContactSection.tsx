"use client";

import { LinkedinIcon } from "@/components/svgs";
import { Separator } from "@/components/ui";
import { useProfileUser } from "@/contexts";
import { WEBSITE_TYPE_LABELS } from "@/labels";
import { cn } from "@/lib/utils";
import { BinaryIcon, MailIcon, PencilIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { ContactCard } from "./components";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const ContactSection = (props: Props) => {
  const { className } = props;

  const profileUser = useProfileUser()!;
  const { email } = profileUser.contactInfo;

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

  const renderOtherWebsites = () => {
    return profileUser.contactInfo.websites.map((website, idx) => (
      <div key={`${website.type}-${idx}`}>
        <Separator orientation="horizontal" className="my-5" />

        <ContactCard
          title={WEBSITE_TYPE_LABELS[website.type]}
          icon={<BinaryIcon className="stroke-icon mr-4" />}
          linkText={website.url}
          linkHref={website.url}
        />
      </div>
    ));
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

        {renderOtherWebsites()}
      </div>
    </section>
  );
};

export default ContactSection;
