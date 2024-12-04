import Link from "next/link";
import classes from "./styles.module.css";

const AgreementText = () => {
  return (
    <p className={classes["root"]}>
      <span>
        By clicking Continue to join or sign in, you agree to LinkedIn’s
      </span>
      <Link href={"/"} className={classes["text-link"]}>
        User Agreement
      </Link>
      ,
      <Link href={"/"} className={classes["text-link"]}>
        Privacy Policy
      </Link>
      , and
      <Link href={"/"} className={classes["text-link"]}>
        Cookie Policy
      </Link>
      .
    </p>
  );
};

export default AgreementText;
