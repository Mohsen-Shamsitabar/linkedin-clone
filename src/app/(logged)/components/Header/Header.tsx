"use client";

import { Avatar } from "@/components/common";
import { LinkedinIcon } from "@/components/svgs";
import { useLoggedUser } from "@/contexts";
import * as paths from "@/routes/paths";
import { MessageSquareMoreIcon } from "lucide-react";
import Link from "next/link";
import { ActionNav, Searchbar } from "./components";

type Props = {
  className?: string;
};

const Header = (props: Props) => {
  const { className } = props;

  const loggedUser = useLoggedUser();
  if (!loggedUser) return null;

  return (
    <header className={className}>
      {/* MOBILE VIEW */}

      <nav className="container flex flex-row justify-between items-center py-2 md:hidden">
        <Link href={`${paths.PROFILE}/${loggedUser.id}`}>
          <Avatar
            size={32}
            src={loggedUser.avatar}
            alt={`${loggedUser.firstName}'s avatar`}
          />
        </Link>

        <Searchbar />

        <div className="hover:cursor-pointer">
          <MessageSquareMoreIcon className="icon-action" />
        </div>
      </nav>

      {/* PC VIEW */}

      <nav className="hidden container flex-row items-center justify-between py-2 md:flex">
        <LinkedinIcon className="size-10 fill-primary" />

        <Searchbar />

        <ActionNav />
      </nav>
    </header>
  );
};

export default Header;
