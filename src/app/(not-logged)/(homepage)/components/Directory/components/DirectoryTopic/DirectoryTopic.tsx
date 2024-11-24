import type { Option } from "@/app/(not-logged)/(homepage)/types";
import Link from "next/link";
import classes from "./styles.module.css";

type Props = {
  topicName: string;
  topicOptions: Option[];
};

const DirectoryTopic = (props: Props) => {
  const { topicOptions, topicName } = props;

  const renderOptions = () => {
    return topicOptions.map(option => (
      <Link
        className={classes["option"]}
        key={`${option.href}-${option.label}`}
        href={option.href}
      >
        {option.label}
      </Link>
    ));
  };

  return (
    <div className={classes["root"]}>
      <h3 className={classes["topic-name"]}>{topicName}</h3>

      <div className={classes["options-container"]}>{renderOptions()}</div>
    </div>
  );
};

export default DirectoryTopic;
