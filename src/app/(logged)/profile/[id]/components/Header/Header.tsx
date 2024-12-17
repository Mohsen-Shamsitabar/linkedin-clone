import { LinkedinIcon } from "@/components/svgs";
import type { User } from "@/types";
import { MessageSquareMoreIcon } from "lucide-react";
import Image from "next/image";
import { ActionNav, Searchbar } from "./components";

type Props = {
  user: User;
  className?: string;
};

const Header = (props: Props) => {
  const { className, user } = props;

  return (
    <header className={className}>
      {/* MOBILE VIEW */}

      <nav className="container flex flex-row justify-between items-center py-2 md:hidden">
        <div className="image-container rounded-full hover:cursor-pointer">
          <Image
            width={32}
            height={32}
            src={user.avatar}
            alt={`${user.firstName}'s avatar`}
          />
        </div>

        <Searchbar />

        <div className="hover:cursor-pointer">
          <MessageSquareMoreIcon className="stroke-icon" />
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
