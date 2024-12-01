import { LinkedinLogo } from "@/components/svgs";
import GoogleLogo from "@/components/svgs/GoogleLogo";
import { Button, Separator } from "@/components/ui";
import { cn } from "@/lib/utils";
import * as PATHS from "@/routes/paths";
import Link from "next/link";
import { Footer } from "../components";
import classes from "./styles.module.css";

const SignUpPage = () => {
  return (
    <div className="container h-screen flex flex-col justify-between">
      <div>
        <header className={classes["header"]}>
          <nav className={classes["navbar"]}>
            <Link
              className={classes["linkedin-container"]}
              href={PATHS.NL_HOMEPAGE}
            >
              <LinkedinLogo className={classes["linkedin-logo"]} />
            </Link>
          </nav>
        </header>

        <h2 className={classes["head-text"]}>Join LinkedIn now — it’s free!</h2>

        <main className="max-w-[400] mx-auto border-black rounded-lg p-6 md:border">
          <form className={classes["form"]} action="">
            <div className={classes["fieldsets"]}>
              <fieldset className={classes["fieldset"]}>
                <label htmlFor="email">Email</label>
                <input type="text" name="email" id="email" />
              </fieldset>

              <fieldset className={classes["fieldset"]}>
                <label htmlFor="password">password (6+ characters)</label>
                <input type="password" name="password" id="password" />
              </fieldset>

              <fieldset className={cn(classes["fieldset"], classes["bool"])}>
                <input type="checkbox" name="remember" id="remember" />
                <label htmlFor="remember">Remember me</label>
              </fieldset>
            </div>

            <p className={classes["agreement-text"]}>
              By clicking Agree & Join or Continue, you agree to the LinkedIn
              <span> User Agreement</span>,<span> Privacy Policy</span>, and
              <span> Cookie Policy</span>
            </p>

            <div className={classes["btn-container"]}>
              <Button className="w-full" variant="fill" color="primary">
                Continue
              </Button>

              <div className="w-full flex flex-row items-center justify-center overflow-hidden relative">
                <Separator className="my-8" orientation="horizontal" />

                <span className="absolute bg-white px-5">or</span>
              </div>

              <Button variant="outline" className="w-full">
                <div className="bg-white rounded-full p-2">
                  <GoogleLogo className="size-full" />
                </div>

                <span>Continue with Google</span>
              </Button>
            </div>

            <p className="text-subtitle1">
              Already on Linkedin?{" "}
              <span className="text-primary font-semibold hover:underline hover:cursor-pointer">
                Sign in
              </span>
            </p>
          </form>
        </main>
      </div>

      <Footer className="hidden md:block" />
    </div>
  );
};

export default SignUpPage;
