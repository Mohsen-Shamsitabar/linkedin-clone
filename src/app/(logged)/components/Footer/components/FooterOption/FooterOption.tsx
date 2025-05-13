import Link from "next/link";
import type { FooterOptionType } from "../../types";
import classes from "./styles.module.css";

type Props = {
  className?: string;
} & FooterOptionType;

const FooterOption = (props: Props) => {
  const { icon, title, className, href } = props;

  return (
    <li className={className}>
      <Link className={classes["root"]} href={href}>
        {icon}
        <span>{title}</span>
      </Link>
    </li>
  );
};

export default FooterOption;
