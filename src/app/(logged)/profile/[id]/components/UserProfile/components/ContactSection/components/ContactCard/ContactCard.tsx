import { cn } from "@/utility";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  className?: string;
  title: string;
  icon: JSX.Element;
  linkText: string;
  linkHref: string;
};

const ContactCard = (props: Props) => {
  const { icon, linkHref, linkText, className, title } = props;

  return (
    <div className={cn("flex", className)}>
      {icon}

      <div className={classes["text-container"]}>
        <p>{title}</p>
        <Link href={linkHref}>{linkText}</Link>
      </div>
    </div>
  );
};

export default ContactCard;
