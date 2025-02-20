"use client";

import type { User } from "@/types";
import { useQueryClient } from "@tanstack/react-query";
import { ChevronDownIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { ACTION_OPTIONS } from "./constant";

const ActionNav = () => {
  const queryClient = useQueryClient();

  const user = queryClient.getQueryData<User>(["userData"]);

  if (!user) {
    return (
      <>
        <h1>ERROR:</h1>
        <p>No user found!</p>
      </>
    );
  }

  const renderActions = () => {
    return ACTION_OPTIONS.map((option, idx) => (
      <Link
        key={`${option.title}-${idx}`}
        href={option.href}
        className="flex flex-col items-center justify-center"
      >
        <div className="icon-action">{option.icon}</div>

        <div className="text-icon text-subtitle2 font-semibold">
          {option.title}
        </div>
      </Link>
    ));
  };

  return (
    <nav className="flex flex-row gap-4 items-center">
      {renderActions()}

      <div className="flex flex-col items-center justify-center hover:cursor-pointer">
        <div className="rounded-full overflow-hidden">
          <Image
            width={24}
            height={24}
            src={user.avatar}
            alt={`${user.firstName}'s avatar`}
          />
        </div>

        <p className="text-icon text-subtitle2 font-semibold flex flex-row items-center">
          <span>Me</span>
          <ChevronDownIcon size={16} />
        </p>
      </div>
    </nav>
  );
};

export default ActionNav;
