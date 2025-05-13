import { cn } from "@/utility";
import { FooterOption } from "./components";
import { FOOTER_OPTIONS } from "./constant";
import classes from "./styles.module.css";

type Props = {
  className?: string;
};

const Footer = (props: Props) => {
  const { className } = props;

  const renderOptions = () => {
    return FOOTER_OPTIONS.map((option, idx) => (
      <FooterOption
        key={`${option.title}-${idx}`}
        icon={option.icon}
        title={option.title}
        href={option.href}
      />
    ));
  };

  return (
    <footer className={cn(classes["root"], className)}>
      <nav>
        <ol className={classes["options-container"]}>{renderOptions()}</ol>
      </nav>
    </footer>
  );
};

export default Footer;
