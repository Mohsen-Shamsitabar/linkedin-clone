import { cn } from "@/utility";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const LineLoader = (props: Props) => {
  const { className } = props;

  return <div className={cn(classes["loader"], className)}></div>;
};

export default LineLoader;
