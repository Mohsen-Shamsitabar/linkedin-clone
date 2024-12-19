"use client";

import { getUser } from "@/api/users";
import type { UserId } from "@/types";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  Footer,
  Header,
  ProfileSection,
  SkillsSection,
} from "./components";
import classes from "./styles.module.css";

type ProfileParams = {
  id: UserId;
};

const ProfilePage = () => {
  const { id: userId } = useParams<ProfileParams>();
  const loggedUserId: UserId = "USER_1";

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
    <div className="relative">
      <Header user={user} />

      <main className={classes["main-content"]}>
        <ProfileSection user={user} loggedUserId={loggedUserId} />

        <AboutSection
          user={user}
          loggedUserId={loggedUserId}
          className={classes["section"]}
        />

        <ExperienceSection user={user} className={classes["section"]} />

        <EducationSection user={user} className={classes["section"]} />

        <SkillsSection user={user} className={classes["section"]} />

        <ContactSection user={user} className={classes["section"]} />
      </main>

      <Footer className="sticky bottom-0 right-0 left-0" />
    </div>
  );
};

export default ProfilePage;
