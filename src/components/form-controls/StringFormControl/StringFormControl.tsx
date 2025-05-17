"use client";

import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
  Input,
  TextArea,
} from "@/components/ui";
import { cn } from "@/utility";
import type { ControllerRenderProps } from "react-hook-form";
import { useFormContext } from "react-hook-form";
import { InputWithShowBtn } from "./components";
import classes from "./styles.module.css";

type Props = {
  label: string;
  name: string;
  className?: string;
  multiline?: boolean;
  placeholder?: string;
  description?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
  showBtn?: boolean;
};

const StringFormControl = (props: Props) => {
  const {
    name,
    label,
    className,
    description,
    placeholder,
    type,
    multiline,
    required,
    showBtn,
  } = props;

  const { control } = useFormContext();

  const renderLabel = () => {
    return (
      <FormLabel>
        {label}
        {required && <sup>*</sup>}
      </FormLabel>
    );
  };

  const renderFormControl = (field: ControllerRenderProps) => {
    if (multiline) {
      return (
        <FormControl>
          <TextArea className="h-4" placeholder={placeholder} {...field} />
        </FormControl>
      );
    }

    if (type === "password" && showBtn) {
      return <InputWithShowBtn field={field} placeholder={placeholder} />;
    }

    return (
      <FormControl>
        <Input type={type} placeholder={placeholder} {...field} />
      </FormControl>
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
          {renderLabel()}
          {renderFormControl(field)}
          {renderDescription()}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default StringFormControl;
