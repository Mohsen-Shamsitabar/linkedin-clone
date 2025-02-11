/* eslint-disable no-console */
"use client";

import { Button } from "@/components/ui";
import type { ErrorPageProps } from "@/types";

const GlobalError = (props: ErrorPageProps) => {
  const { error, reset } = props;

  console.error(error.message);

  return (
    <div>
      <h2>{error.message}</h2>

      <Button onClick={() => reset()}>Try again</Button>
    </div>
  );
};

export default GlobalError;
