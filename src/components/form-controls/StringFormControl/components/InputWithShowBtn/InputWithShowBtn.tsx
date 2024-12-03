"use client";

import { Button, FormControl, Input } from "@/components/ui";
import * as React from "react";
import type { ControllerRenderProps } from "react-hook-form";

type Props = {
  field: ControllerRenderProps;
  placeholder?: string;
};

const InputWithShowBtn = (props: Props) => {
  const { field, placeholder } = props;

  const [isVisible, setIsVisible] = React.useState(false);

  const handleShowClick = (
    event: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    event.stopPropagation();
    event.preventDefault();

    setIsVisible(c => !c);
  };

  return (
    <div className="flex flex-row items-center relative">
      <FormControl>
        <Input
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          {...field}
        />
      </FormControl>

      <Button
        className="absolute right-0"
        variant="ghost"
        color="primary"
        onClick={handleShowClick}
      >
        {isVisible ? "Hide" : "Show"}
      </Button>
    </div>
  );
};

export default InputWithShowBtn;
