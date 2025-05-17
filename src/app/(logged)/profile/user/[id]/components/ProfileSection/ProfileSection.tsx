"use client";

import { useLoggedUser, useUserProfile } from "@/contexts";
import { cn } from "@/utility";
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

  const userProfile = useUserProfile();
  const loggedUser = useLoggedUser();
  if (!userProfile || !loggedUser) return null;

  const isProfileOwner = loggedUser.id === userProfile.id;

  const renderSettingsIcon = () => {
    if (!isProfileOwner) return null;

    return (
      <div className={classes["settings-icon-container"]}>
        <SettingsIcon className="icon-action" size={16} />
      </div>
    );
  };

  const renderHeadActions = () => {
    if (!isProfileOwner) {
      return <EllipsisVerticalIcon className="icon-action" />;
    }

    return (
      <>
        <CornerUpRightIcon className="icon-action" />

        <PencilIcon className="icon-action" />
      </>
    );
  };

  const renderConnectionsCount = () => {
    if (!isProfileOwner) {
      return (
        <span
          className={classes["others-connections"]}
        >{`${userProfile.connections.length} connections`}</span>
      );
    }

    return (
      <span
        className={classes["own-connections"]}
      >{`${userProfile.connections.length} connections`}</span>
    );
  };

  const renderCameraIcon = () => {
    if (!isProfileOwner) return null;

    return (
      <div className={classes["camera-icon-container"]}>
        <CameraIcon size={16} className="icon-action" />
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
            src={userProfile.banner}
            alt={`${userProfile.firstName}'s banner image`}
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
          >{`${userProfile.firstName} ${userProfile.lastName}`}</h1>

          <p className={classes["user-headline"]}>{userProfile.headline}</p>

          <p className={classes["user-industry"]}>{userProfile.industry}</p>

          <p className={classes["user-info"]}>
            <span>{userProfile.contactInfo.address}</span>
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
              src={userProfile.avatar}
              alt={`${userProfile.firstName}'s avatar`}
            />
          </div>

          {renderCameraIcon()}
        </div>
      </div>
    </section>
  );
};

export default ProfileSection;
