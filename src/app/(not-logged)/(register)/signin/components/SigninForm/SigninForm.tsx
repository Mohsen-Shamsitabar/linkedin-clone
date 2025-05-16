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
import { useRouter } from "next/navigation";
import { LoaderIcon } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const formSchema = z.object({
  email: z.string().email(),
  password: z.string().min(6),
  keepLogged: z.boolean().optional(),
});

const SigninForm = () => {
  const { toast } = useToast();

  const router = useRouter();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      email: "",
      password: "",
      keepLogged: true,
    },
  });

  const onSubmit = async (_values: z.infer<typeof formSchema>) => {
    const url = new URL("http://localhost:3000/api/auth/login");
    const res = await fetch(url, {
      method: "POST",
      body: JSON.stringify({
        email: _values.email,
        password: _values.password,
      }),
    });

    if (res.ok) {
      toast({
        variant: "default",
        title: "login successful",
      });
      router.replace("/");
    }
  };

  const { isSubmitting } = form.formState;

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

          <BooleanFormControl
            disabled={isSubmitting}
            label="Keep me logged in"
            name="keepLogged"
          />
        </div>

        <AgreementText />

        <div className={classes["btn-container"]}>
          <Button
            disabled={isSubmitting}
            className="w-full"
            variant="fill"
            color="primary"
            type="submit"
          >
            {isSubmitting ? (
              <LoaderIcon className="animate-spin" />
            ) : (
              "Continue"
            )}
          </Button>

          <div className={classes["separator-container"]}>
            <Separator className="my-8" orientation="horizontal" />

            <span>or</span>
          </div>

          <Button disabled={isSubmitting} variant="outline" className="w-full">
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
