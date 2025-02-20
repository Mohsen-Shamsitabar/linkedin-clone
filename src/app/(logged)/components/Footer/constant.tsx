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
  },
  {
    title: "My Network",
    icon: <UsersIcon className="icon-action" />,
  },
  {
    title: "Post",
    icon: <SquarePlusIcon className="icon-action" />,
  },
  {
    title: "Notifications",
    icon: <BellIcon className="icon-action" />,
  },
  {
    title: "Jobs",
    icon: <BriefcaseBusinessIcon className="icon-action" />,
  },
];
