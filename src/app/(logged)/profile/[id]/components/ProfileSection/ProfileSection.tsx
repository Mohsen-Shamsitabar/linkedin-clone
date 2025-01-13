"use client";

import { useLoggedUser, useProfileUser } from "@/contexts";
import { cn } from "@/lib/utils";
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
  className?: string;
};

const ProfileSection = (props: Props) => {
  const { className } = props;

  const profileUser = useProfileUser();
  const loggedUser = useLoggedUser();
  if (!profileUser || !loggedUser) return null;

  const { id: loggedUserId } = loggedUser;

  const renderSettingsIcon = () => {
    if (loggedUserId !== profileUser.id) return null;

    return (
      <div className={classes["settings-icon-container"]}>
        <SettingsIcon className="stroke-icon" size={16} />
      </div>
    );
  };

  const renderHeadActions = () => {
    if (loggedUserId !== profileUser.id) {
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
    if (loggedUserId !== profileUser.id) {
      return (
        <span
          className={classes["others-connections"]}
        >{`${profileUser.connections.length} connections`}</span>
      );
    }

    return (
      <span
        className={classes["own-connections"]}
      >{`${profileUser.connections.length} connections`}</span>
    );
  };

  const renderCameraIcon = () => {
    if (loggedUserId !== profileUser.id) return null;

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
            src={profileUser.banner}
            alt={`${profileUser.firstName}'s banner image`}
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
          >{`${profileUser.firstName} ${profileUser.lastName}`}</h1>

          <p className={classes["profileUser-headline"]}>
            {profileUser.headline}
          </p>

          <p className={classes["profileUser-industry"]}>
            {profileUser.industry}
          </p>

          <p className={classes["profileUser-info"]}>
            <span>{profileUser.contactInfo.address}</span>
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
              src={profileUser.avatar}
              alt={`${profileUser.firstName}'s avatar`}
            />
          </div>

          {renderCameraIcon()}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
