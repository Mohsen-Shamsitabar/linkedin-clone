import { cn } from "@/lib/utils";
import classes from "./styles.module.css";

const Skeleton = ({
  className,
  ...props
}: React.HTMLAttributes<HTMLDivElement>) => {
  return <div className={cn(classes["root"], className)} {...props} />;
};

export default Skeleton;
