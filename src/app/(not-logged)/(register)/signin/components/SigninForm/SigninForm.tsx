"use client";

import { AgreementText } from "@/app/(not-logged)/components";
import {
  BooleanFormControl,
  StringFormControl,
} from "@/components/form-controls";
import GoogleLogo from "@/components/svgs/GoogleLogo";
import { Button, Form, Separator } from "@/components/ui";
import * as PATHS from "@/routes/paths";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import classes from "./styles.module.css";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  keepLogged: z.boolean().optional(),
});

const SigninForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      keepLogged: true,
    },
  });

  const onSubmit = (_values: z.infer<typeof formSchema>) => {
    return;
  };

  return (
    <Form {...form}>
      <form
        className={classes["form"]}
        // eslint-disable-next-line @typescript-eslint/no-misused-promises
        onSubmit={form.handleSubmit(onSubmit)}
      >
        <div className={classes["fieldsets"]}>
          <StringFormControl label="Email" name="email" />

          <StringFormControl
            label="Password"
            name="password"
            type="password"
            showBtn
          />

          <div className={classes["forgot-pass-container"]}>
            <Link href={""}>Forgot password?</Link>
          </div>

          <BooleanFormControl label="Keep me logged in" name="keepLogged" />
        </div>

        <AgreementText />

        <div className={classes["btn-container"]}>
          <Button
            className="w-full"
            variant="fill"
            color="primary"
            type="submit"
          >
            Continue
          </Button>

          <div className={classes["separator-container"]}>
            <Separator className="my-8" orientation="horizontal" />

            <span>or</span>
          </div>

          <Button variant="outline" className="w-full">
            <div className={classes["google-logo-container"]}>
              <GoogleLogo />
            </div>

            <span>Continue with Google</span>
          </Button>
        </div>

        <p className={classes["new-to-linkedin-text"]}>
          New to LinkedIn? <Link href={PATHS.SIGNUP}>Join now</Link>
        </p>
      </form>
    </Form>
  );
};

export default SigninForm;
