import { cn } from "@/lib/utils";
import type { User, UserId } from "@/types";
import {
  CameraIcon,
  CornerUpRightIcon,
  EllipsisVerticalIcon,
  PencilIcon,
  SettingsIcon,
} from "lucide-react";
import Image from "next/image";
import classes from "./styles.module.css";

type Props = {
  user: User;
  loggedUserId: UserId;
  className?: string;
};

const ProfileSection = (props: Props) => {
  const { user, loggedUserId, className } = props;

  const renderSettingsIcon = () => {
    if (loggedUserId !== user.id) return null;

    return (
      <div className={classes["settings-icon-container"]}>
        <SettingsIcon className="stroke-icon" size={16} />
      </div>
    );
  };

  const renderHeadActions = () => {
    if (loggedUserId !== user.id) {
      return <EllipsisVerticalIcon className="stroke-icon" />;
    }

    return (
      <>
        <CornerUpRightIcon className="stroke-icon" />

        <PencilIcon className="stroke-icon" />
      </>
    );
  };

  const renderConnectionsCount = () => {
    if (loggedUserId !== user.id) {
      return (
        <span
          className={classes["others-connections"]}
        >{`${user.connections.length} connections`}</span>
      );
    }

    return (
      <span
        className={classes["own-connections"]}
      >{`${user.connections.length} connections`}</span>
    );
  };

  const renderCameraIcon = () => {
    if (loggedUserId !== user.id) return null;

    return (
      <div className={classes["camera-icon-container"]}>
        <CameraIcon size={16} className="stroke-icon" />
      </div>
    );
  };

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

        {renderSettingsIcon()}
      </div>

      <div className={classes["info-container"]}>
        <div className={classes["head-actions-container"]}>
          {renderHeadActions()}
        </div>

        <div>
          <h1
            className={classes["username"]}
          >{`${user.firstName} ${user.lastName}`}</h1>

          <p className={classes["user-headline"]}>{user.headline}</p>

          <p className={classes["user-industry"]}>{user.industry}</p>

          <p className={classes["user-info"]}>
            <span>{user.contactInfo.address}</span>
            <span className={classes["separator"]}>.</span>
            {renderConnectionsCount()}
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

          {renderCameraIcon()}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
