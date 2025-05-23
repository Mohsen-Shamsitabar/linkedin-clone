import { LinkedinLogo } from "@/components/svgs";
import { Button, Separator } from "@/components/ui";
import * as PATHS from "@/routes/paths";
import { cn } from "@/utility";
import {
  BriefcaseBusiness,
  Gamepad2,
  NewspaperIcon,
  Presentation,
  Users,
} from "lucide-react";
import Link from "next/link";
import classes from "./styles.module.css";

const Header = () => {
  return (
    <header className={cn("container", classes["root"])}>
      <nav className={classes["navbar"]}>
        <Link
          className={classes["linkedin-logo-container"]}
          href={PATHS.NL_HOMEPAGE}
        >
          <LinkedinLogo className={classes["linkedin-logo"]} />
        </Link>

        <div className={classes["desktop-tabs"]}>
          <Link href={"/"} className={classes["icon-link"]}>
            <NewspaperIcon />
            <span className={classes["icon-text"]}>Articles</span>
          </Link>

          <Link href={"/"} className={classes["icon-link"]}>
            <Users />
            <span className={classes["icon-text"]}>People</span>
          </Link>

          <Link href={"/"} className={classes["icon-link"]}>
            <Presentation />
            <span className={classes["icon-text"]}>Learning</span>
          </Link>

          <Link href={"/"} className={classes["icon-link"]}>
            <BriefcaseBusiness />
            <span className={classes["icon-text"]}>Jobs</span>
          </Link>

          <Link href={"/"} className={classes["icon-link"]}>
            <Gamepad2 />
            <span className={classes["icon-text"]}>Games</span>
          </Link>
        </div>

        <Separator className={classes["separator"]} orientation="vertical" />

        <div className={classes["btn-container"]}>
          <Button asChild variant="outline" color="primary">
            <Link href={PATHS.SIGNIN}>Sign in</Link>
          </Button>

          <Button asChild variant="fill" color="primary" className="ml-2">
            <Link href={PATHS.SIGNUP}>Join now</Link>
          </Button>
        </div>
      </nav>
    </header>
  );
};

export default Header;
