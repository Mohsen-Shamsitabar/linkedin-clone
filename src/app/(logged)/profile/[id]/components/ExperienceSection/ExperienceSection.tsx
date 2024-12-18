import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import briefCase from "@/public/svgs/brief-case.svg";
import type { User } from "@/types";
import Image from "next/image";
import classes from "./styles.module.css";

type Props = {
  user: User;
  className?: string;
};

const ExperienceSection = (props: Props) => {
  const { user: _user, className } = props;

  return (
    <section className={cn(classes["root"], className)}>
      <div className="image-container mb-2">
        <Image src={briefCase as string} alt={"image of a brief case"} />
      </div>

      <h2 className="mb-1">Have more experience?</h2>

      <p className="text-icon text-center text-subtitle1 font-medium mb-3">
        Add past positions to find new career opportunities or to reconnect with
        your past colleagues
      </p>

      <Button color="primary" variant="outline" className="w-full">
        Add experience
      </Button>
    </section>
  );
};

export default ExperienceSection;
