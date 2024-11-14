import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import * as React from "react";
import classes from "./styles.module.css";

import { cn } from "@/lib/utils";

const buttonVariants = cva(classes["root"], {
  variants: {
    variant: {
      fill: classes["fill"],
      outline: classes["outline"],
      ghost: classes["ghost"],
      link: classes["link"],
    },
    size: {
      md: classes["md"],
      sm: classes["sm"],
      lg: classes["lg"],
      circle: classes["circle"],
    },
    color: {
      default: classes["default"],
      icon: classes["icon"],
      primary: classes["primary"],
      secondary: classes["secondary"],
      destructive: classes["destructive"],
    },
  },
  defaultVariants: {
    variant: "fill",
    size: "md",
    color: "default",
  },
});

export type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> &
  VariantProps<typeof buttonVariants> & {
    asChild?: boolean;
  };

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, color, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className, color }))}
        ref={ref}
        {...props}
      />
    );
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
