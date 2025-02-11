import { cn } from "@/lib/utils";
import type { FooterOptionType } from "../../types";
import classes from "./styles.module.css";

type Props = {
  className?: string;
} & FooterOptionType;

const FooterOption = (props: Props) => {
  const { icon, title, className } = props;

  return (
    <li className={cn(classes["root"], className)}>
      {icon}
      <span>{title}</span>
    </li>
  );
};

export default FooterOption;
