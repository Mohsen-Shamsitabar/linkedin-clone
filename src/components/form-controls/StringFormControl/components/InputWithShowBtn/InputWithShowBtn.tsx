"use client";

import { Button, FormControl, Input } from "@/components/ui";
import * as React from "react";
import type { ControllerRenderProps } from "react-hook-form";
import classes from "./styles.module.css";

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
    <div className={classes["root"]}>
      <FormControl>
        <Input
          type={isVisible ? "text" : "password"}
          placeholder={placeholder}
          {...field}
        />
      </FormControl>

      <Button
        className={classes["show-btn"]}
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
