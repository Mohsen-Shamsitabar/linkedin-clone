import { LinkedinLogo } from "@/components/svgs";
import * as PATHS from "@/routes/paths";
import Link from "next/link";
import classes from "./styles.module.css";

const SignupHeader = () => {
  return (
    <header className={classes["root"]}>
      <nav className={classes["navbar"]}>
        <Link
          className={classes["linkedin-container"]}
          href={PATHS.NL_HOMEPAGE}
        >
          <LinkedinLogo className={classes["linkedin-logo"]} />
        </Link>
      </nav>
    </header>
  );
};

export default SignupHeader;
