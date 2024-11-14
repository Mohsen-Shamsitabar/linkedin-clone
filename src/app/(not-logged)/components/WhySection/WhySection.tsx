import type { Option } from "@/app/(not-logged)/types";
import { cn } from "@/lib/utils";
import { ArrowRightIcon } from "lucide-react";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const WhySection = (props: Props) => {
  const { className } = props;

  const options: Option[] = [
    {
      label: "Find a coworker or classmate",
      href: "/",
    },
    {
      label: "Find a new job",
      href: "/",
    },
    {
      label: "Find a course or training",
      href: "/",
    },
  ];

  const renderOptions = () => {
    return options.map(option => (
      <Link
        key={`${option.href}-${option.label}`}
        className={classes["option"]}
        href={option.href}
      >
        <span>{option.label}</span>

        <ArrowRightIcon className="stroke-icon" />
      </Link>
    ));
  };

  return (
    <section className={cn(className)}>
      <div className={cn("container", classes["container"])}>
        <div className={classes["txt-container"]}>
          <div className="mb-6">
            <h2>Who is LinkedIn for?</h2>

            <p>Anyone looking to navigate their professional life.</p>
          </div>

          <div className={classes["options-container"]}>{renderOptions()}</div>
        </div>

        <div className={classes["img-container"]}>
          <div className="size-full flex items-center justify-center">
            IMAGE
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhySection;
