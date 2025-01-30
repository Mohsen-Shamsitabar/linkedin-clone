/* eslint-disable no-console */
"use client";

import { Button } from "@/components/ui";
import type { ErrorPageProps } from "@/types";
import { useEffect } from "react";

const Error = (props: ErrorPageProps) => {
  const { error, reset } = props;

  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error.message);
  }, [error]);

  return (
    <div>
      <h2>{error.message}</h2>

      <Button
        onClick={
          // Attempt to recover by trying to re-render the segment
          () => reset()
        }
      >
        Try again
      </Button>
    </div>
  );
};

export default Error;
