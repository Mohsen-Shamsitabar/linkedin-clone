import { cn } from "@/utility";
import type { Chip } from "../../types";
import { Chips } from "./components";
import classes from "./styles.module.css";

type Props = {
  header: string;
  chips: Chip[];
  description?: string;
  className?: string;
};

const SectionWithChips = (props: Props) => {
  const { chips, header, description, className } = props;

  const renderDescription = () => {
    if (!description) return null;

    return <p className="mb-6">{description}</p>;
  };

  return (
    <section className={cn(className)}>
      <div className={cn("container", classes["container"])}>
        <div className={classes["txt-container"]}>
          <h2>{header}</h2>

          {renderDescription()}
        </div>

        <div className={classes["chips-container"]}>{Chips(chips)}</div>
      </div>
    </section>
  );
};

export default SectionWithChips;
