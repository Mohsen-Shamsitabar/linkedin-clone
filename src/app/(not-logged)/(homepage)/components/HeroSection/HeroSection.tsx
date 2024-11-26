import GoogleLogo from "@/components/svgs/GoogleLogo";
import { Button } from "@/components/ui";
import { cn } from "@/lib/utils";
import heroSectionImg from "@/public/svgs/not-logged-herosection.svg";
import Image from "next/image";
import Link from "next/link";
import classes from "./styles.module.css";

const HeroSection = () => {
  return (
    <section className={cn("container", classes["root"])}>
      <div className={classes["container"]}>
        <h1 className={classes["head-text"]}>
          Welcome to your professional community
        </h1>

        <div className={classes["btn-container"]}>
          <Button className="w-full" color="primary">
            <div className="bg-white rounded-full p-2">
              <GoogleLogo className="size-full" />
            </div>

            <span>Continue with Google</span>
          </Button>

          <Button className="w-full" variant="outline" color="default">
            Sign in with email
          </Button>
        </div>

        <p className={classes["agreement-text-container"]}>
          <span>
            By clicking Continue to join or sign in, you agree to LinkedIn’s
          </span>
          <Link href={"/"} className={classes["agreement-text-link"]}>
            User Agreement
          </Link>
          ,
          <Link href={"/"} className={classes["agreement-text-link"]}>
            Privacy Policy
          </Link>
          , and
          <Link href={"/"} className={classes["agreement-text-link"]}>
            Cookie Policy
          </Link>
          .
        </p>

        <p className={classes["new-to-linkedin-container"]}>
          <span>New to LinkedIn?</span>

          <Link className={classes["new-to-linkedin-link"]} href={"/"}>
            Join now
          </Link>
        </p>
      </div>

      <div className={classes["img-container"]}>
        <Image
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          src={heroSectionImg}
          alt={"hero section image"}
          className="w-full"
        />
      </div>
    </section>
  );
};

export default HeroSection;
