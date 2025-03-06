import { LinkedinLogo } from "@/components/svgs";
import { cn } from "@/utility";
import {
  BROWSE_OPTIONS,
  BUSINESS_OPTIONS,
  DIRECTORIES_OPTIONS,
  GENERAL_OPTIONS,
} from "../topicOptions";
import { DirectoryTopic } from "./components";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const Directory = (props: Props) => {
  const { className } = props;

  return (
    <section className={cn(className)}>
      <div className={cn("container", classes["container"])}>
        <div className={classes["linkedin-logo-container"]}>
          <LinkedinLogo className={classes["linkedin-logo"]} />
        </div>

        <DirectoryTopic topicName="General" topicOptions={GENERAL_OPTIONS} />

        <DirectoryTopic
          topicName="Browse LinkedIn"
          topicOptions={BROWSE_OPTIONS}
        />

        <DirectoryTopic
          topicName="Business Solutions"
          topicOptions={BUSINESS_OPTIONS}
        />

        <DirectoryTopic
          topicName="Directories"
          topicOptions={DIRECTORIES_OPTIONS}
        />
      </div>
    </section>
  );
};

export default Directory;
