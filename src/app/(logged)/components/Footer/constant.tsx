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
    icon: <HomeIcon className="stroke-icon" />,
  },
  {
    title: "My Network",
    icon: <UsersIcon className="stroke-icon" />,
  },
  {
    title: "Post",
    icon: <SquarePlusIcon className="stroke-icon" />,
  },
  {
    title: "Notifications",
    icon: <BellIcon className="stroke-icon" />,
  },
  {
    title: "Jobs",
    icon: <BriefcaseBusinessIcon className="stroke-icon" />,
  },
];
