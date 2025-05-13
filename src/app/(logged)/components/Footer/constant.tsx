import {
  BellIcon,
  BriefcaseBusinessIcon,
  HomeIcon,
  SquarePlusIcon,
  UsersIcon,
} from "lucide-react";
import type { FooterOptionType } from "./types";

export const FOOTER_OPTIONS: FooterOptionType[] = [
  {
    title: "Home",
    icon: <HomeIcon className="icon-action" />,
    href: "/feed",
  },
  {
    title: "My Network",
    icon: <UsersIcon className="icon-action" />,
    href: "/",
  },
  {
    title: "Post",
    icon: <SquarePlusIcon className="icon-action" />,
    href: "/",
  },
  {
    title: "Notifications",
    icon: <BellIcon className="icon-action" />,
    href: "/",
  },
  {
    title: "Jobs",
    icon: <BriefcaseBusinessIcon className="icon-action" />,
    href: "/",
  },
];
