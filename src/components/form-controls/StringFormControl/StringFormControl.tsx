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
import { useFormContext } from "react-hook-form";

type Props = {
  label: string;
  name: string;
  multiline?: boolean;
  placeholder?: string;
  description?: string;
  type?: React.HTMLInputTypeAttribute;
  required?: boolean;
};

const StringFormControl = (props: Props) => {
  const { name, label, description, placeholder, type, multiline, required } =
    props;

  const { control } = useFormContext();

  const renderLabel = () => {
    return (
      <FormLabel>
        {label}
        {required && <sup>*</sup>}
      </FormLabel>
    );
  };

  const renderDescription = () => {
    if (!description) return null;

    return <FormDescription>{description}</FormDescription>;
  };

  if (multiline) {
    return (
      <FormField
        control={control}
        name={name}
        render={({ field }) => (
          <FormItem>
            {renderLabel()}

            <FormControl>
              <TextArea placeholder={placeholder} {...field} />
            </FormControl>

            {renderDescription()}

            <FormMessage />
          </FormItem>
        )}
      />
    );
  }

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          {renderLabel()}

          <FormControl>
            <Input type={type} placeholder={placeholder} {...field} />
          </FormControl>

          {renderDescription()}

          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default StringFormControl;
