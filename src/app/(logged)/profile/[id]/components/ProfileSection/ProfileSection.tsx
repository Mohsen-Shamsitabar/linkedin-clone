import { cn } from "@/lib/utils";
import type { User } from "@/types";
import {
  CameraIcon,
  CornerUpRightIcon,
  PencilIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import classes from "./styles.module.css";

type Props = {
  user: User;
  className?: string;
};

const ProfileSection = (props: Props) => {
  const { user, className } = props;

  return (
    <section className={cn(classes["root"], className)}>
      <div className={classes["banner-container"]}>
        <div className="image-container">
          <Image
            width={400}
            height={100}
            src={user.banner}
            alt={`${user.firstName}'s banner image`}
          />
        </div>

        <div className={classes["settings-icon-container"]}>
          <SettingsIcon className="stroke-icon" size={16} />
        </div>
      </div>

      <div className={classes["info-container"]}>
        <div className={classes["head-icons-container"]}>
          <CornerUpRightIcon className="stroke-icon" />

          <PencilIcon className="stroke-icon" />
        </div>

        <div>
          <h1
            className={classes["username"]}
          >{`${user.firstName} ${user.lastName}`}</h1>

          <p className={classes["user-bio"]}>{user.contactInfo.phoneNumber}</p>

          <p className={classes["user-info"]}>
            <span>{user.contactInfo.address}</span>
            <span className={classes["separator"]}>.</span>
            <span
              className={classes["connections"]}
            >{`${user.connections.length} connections`}</span>
          </p>
        </div>
      </div>

      <div className={classes["avatar-container"]}>
        <div className="relative">
          <div className="image-container rounded-full">
            <Image
              width={152}
              height={152}
              src={user.avatar}
              alt={`${user.firstName}'s avatar`}
            />
          </div>

          <div className={classes["camera-icon-container"]}>
            <CameraIcon size={16} className="stroke-icon" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
