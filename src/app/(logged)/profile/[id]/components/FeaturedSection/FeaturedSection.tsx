import { cn } from "@/lib/utils";
import type { User } from "@/types";
import { PlusIcon } from "lucide-react";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  user: User;
  className?: string;
};

const FeaturedSection = (props: Props) => {
  const { user: _user, className } = props;

  return (
    <section className={cn(classes["root"], className)}>
      <h2 className="mb-3">Featured</h2>

      <p className={classes["featured-description"]}>
        Add external documents, photos and links.
      </p>

      <Link href={"/"} className={classes["add-featured"]}>
        <PlusIcon size={16} />
        <span>Add featured</span>
      </Link>
    </section>
  );
};

export default FeaturedSection;
