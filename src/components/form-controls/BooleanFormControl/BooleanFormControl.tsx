"use client";

import {
  Checkbox,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui";
import { cn } from "@/lib/utils";
import { useFormContext } from "react-hook-form";
import classes from "./styles.module.css";

type Props = {
  label: string;
  name: string;
  className?: string;
  description?: string;
  required?: boolean;
};

const BooleanFormControl = (props: Props) => {
  const { name, label, className, description, required } = props;

  const { control } = useFormContext();

  const renderLabel = () => {
    return (
      <FormLabel className={classes["label"]}>
        {label}
        {required && <sup>*</sup>}
      </FormLabel>
    );
  };

  const renderDescription = () => {
    if (!description) return null;

    return <FormDescription>{description}</FormDescription>;
  };

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem className={cn(classes["root"], className)}>
          <FormControl>
            <Checkbox
              checked={field.value as boolean}
              onCheckedChange={field.onChange}
              {...field}
            />
          </FormControl>

          {renderLabel()}

          {renderDescription()}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default BooleanFormControl;
