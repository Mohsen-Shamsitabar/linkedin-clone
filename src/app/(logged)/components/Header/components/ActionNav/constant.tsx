import {
  BellIcon,
  BriefcaseBusinessIcon,
  HomeIcon,
  MessageSquareMoreIcon,
  UsersIcon,
} from "lucide-react";
import type { ActionOption } from "./types";

export const ACTION_OPTIONS: ActionOption[] = [
  {
    icon: <HomeIcon className="stroke-inherit" />,
    title: "Home",
    href: "",
  },
  {
    icon: <UsersIcon className="stroke-inherit" />,
    title: "My Network",
    href: "",
  },
  {
    icon: <BriefcaseBusinessIcon className="stroke-inherit" />,
    title: "Jobs",
    href: "",
  },
  {
    icon: <MessageSquareMoreIcon className="stroke-inherit" />,
    title: "Messaging",
    href: "",
  },
  {
    icon: <BellIcon className="stroke-inherit" />,
    title: "Notifications",
    href: "",
  },
];
