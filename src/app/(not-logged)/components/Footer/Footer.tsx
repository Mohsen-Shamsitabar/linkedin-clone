import { LinkedinLogo } from "@/components/svgs";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { FOOTER_OPTIONS } from "./footerOptions";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const Footer = (props: Props) => {
  const { className } = props;

  const renderOptions = () => {
    return FOOTER_OPTIONS.map(option => (
      <div
        className={classes["footer-option"]}
        key={`${option.href}-${option.label}`}
      >
        <Link href={option.href}>{option.label}</Link>
      </div>
    ));
  };

  return (
    <footer className={cn(className, classes["root"])}>
      <div className={cn("container", classes["container"])}>
        <div
          className={cn(classes["footer-option"], "flex flex-row items-center")}
        >
          <LinkedinLogo className={classes["linkedin-logo"]} />
          <span className={classes["mark"]}>©2024</span>
        </div>

        {renderOptions()}
      </div>
    </footer>
  );
};

export default Footer;
