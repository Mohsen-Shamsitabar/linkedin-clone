"use client";

import {
  BooleanFormControl,
  StringFormControl,
} from "@/components/form-controls";
import GoogleLogo from "@/components/svgs/GoogleLogo";
import { Button, Form, Separator } from "@/components/ui";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import classes from "./styles.module.css";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  remember: z.boolean().optional(),
});

const SigninForm = () => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      remember: false,
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
            label="Password (6+ characters)"
            name="password"
            type="password"
            showBtn
          />

          <BooleanFormControl label="Remember me" name="remember" />
        </div>

        <p className={classes["agreement-text"]}>
          By clicking Agree & Join or Continue, you agree to the LinkedIn
          <span> User Agreement</span>,<span> Privacy Policy</span>, and
          <span> Cookie Policy</span>
        </p>

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

        <p className={classes["on-linkedin-text"]}>
          Already on Linkedin? <span>Sign in</span>
        </p>
      </form>
    </Form>
  );
};

export default SigninForm;
