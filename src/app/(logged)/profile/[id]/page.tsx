"use client";

import { getUser } from "@/api/users";
import type { UserId } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import {
  AboutSection,
  EducationSection,
  ExperienceSection,
  FeaturedSection,
  Header,
  ProfileSection,
} from "./components";
import classes from "./styles.module.css";

type ProfileParams = {
  id: UserId;
};

const ProfilePage = () => {
  const { id: userId } = useParams<ProfileParams>();

  const {
    isPending,
    error,
    data: user,
  } = useQuery({
    queryKey: ["userData"],
    queryFn: () => getUser(userId),
  });

  if (isPending) return <h1>Loading...</h1>;

  if (error) {
    return (
      <h1>
        <p>ERROR:</p>
        <p>{error.message}</p>
      </h1>
    );
  }

  return (
    <div>
      <Header user={user} />

      {/* MOBILE VIEW */}

      <main className={classes["main-content"]}>
        <ProfileSection user={user} />

        <AboutSection user={user} className={classes["section"]} />

        <FeaturedSection user={user} className={classes["section"]} />

        <ExperienceSection user={user} className={classes["section"]} />

        <EducationSection user={user} className={classes["section"]} />
      </main>

      {/* PC VIEW */}

      {/* <div className="bg-logged-bg hidden md:block">
        <main className="md:container py-6">
          <section className="flex flex-col relative bg-white rounded-md border border-border">
            <div className="relative w-full">
              <div className="image-container rounded-t-md">
                <Image
                  width={400}
                  height={100}
                  src={user.banner}
                  alt={`${user.firstName}'s banner image`}
                />
              </div>

              <div className="absolute top-4 right-4 bg-white p-2 rounded-full hover:cursor-pointer">
                <Settings className="stroke-icon" size={16} />
              </div>
            </div>

            <div className="w-full p-4">
              <div className="flex flex-row items-center justify-end gap-5 mb-10">
                <CornerUpRight className="stroke-icon" />

                <Pencil className="stroke-icon" />
              </div>

              <div>
                <h1 className="text-h4 font-semibold m-0">{`${user.firstName} ${user.lastName}`}</h1>

                <p>--</p>

                <p className="text-subtitle1 font-semibold text-icon flex flex-row items-center my-2">
                  <span>{user.contactInfo.address}</span>
                  <span className="mx-2 font-black">.</span>
                  <span className="text-primary-dark hover:cursor-pointer">
                    Contact info
                  </span>
                </p>

                <span className="text-subtitle1 font-semibold text-primary-dark hover:cursor-pointer">{`${user.connections.length} connections`}</span>
              </div>
            </div>

            <div className="w-[160] h-[160] absolute top-2/5 left-6 rounded-full border-white border-4">
              <div className="relative">
                <div className="image-container rounded-full">
                  <Image
                    width={152}
                    height={152}
                    src={user.avatar}
                    alt={`${user.firstName}'s avatar`}
                  />
                </div>

                <div className="absolute bottom-0 right-0 bg-white border border-divider rounded-full p-2">
                  <Camera size={16} className="stroke-icon" />
                </div>
              </div>
            </div>
          </section>
        </main>
      </div> */}
    </div>
  );
};

export default ProfilePage;
