import * as React from "react";

import { cn } from "@/lib/utils";
import classes from "./styles.module.css";

const TextArea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea className={cn(classes["root"], className)} ref={ref} {...props} />
  );
});
TextArea.displayName = "TextArea";

export default TextArea;
