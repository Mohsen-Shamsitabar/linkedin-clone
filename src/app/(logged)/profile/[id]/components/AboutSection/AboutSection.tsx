import { cn } from "@/lib/utils";
import type { User } from "@/types";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  user: User;
  className?: string;
};

const AboutSection = (props: Props) => {
  const { user: _user, className } = props;

  return (
    <section className={cn(classes["root"], className)}>
      <h2 className="mb-3">About</h2>

      <Link href={"/"} className={classes["add-summary"]}>
        <PlusIcon size={16} />
        <span className={classes["add-summary-text"]}>Add summary</span>
      </Link>
    </section>
  );
};

export default AboutSection;
