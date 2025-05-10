import { getEducations } from "@/api/educations";
import { getExperiences } from "@/api/experiences";
import { getPosts } from "@/api/posts";
import { getUser } from "@/api/users";
import type { UserProfileData } from "@/contexts";
import { UserProfileProvider } from "@/contexts";
import type { UserId } from "@/types";
import classes from "../../commonStyles.module.css";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  PostsSection,
  ProfileSection,
  SkillsSection,
} from "./components";

type Props = {
  userId: UserId;
};

const UserProfile = async (props: Props) => {
  const { userId } = props;

  const profileUser = await getUser(userId);

  const [profileUsersExperiences, profileUsersEducations, profileUsersPosts] =
    await Promise.all([
      getExperiences(profileUser.experiences),
      getEducations(profileUser.educations),
      getPosts(profileUser.posts),
    ]);

  const profileUserData: UserProfileData = {
    ...profileUser,
    experiencesData: profileUsersExperiences,
    educationsData: profileUsersEducations,
    postsData: profileUsersPosts,
  };

  return (
    <div className="relative">
      <UserProfileProvider {...profileUserData}>
        <main className={classes["main-content"]}>
          <ProfileSection />

          <AboutSection className={classes["section"]} />

          <PostsSection className={classes["section"]} />

          <ExperienceSection className={classes["section"]} />

          <EducationSection className={classes["section"]} />

          <SkillsSection className={classes["section"]} />

          <ContactSection className={classes["section"]} />
        </main>
      </UserProfileProvider>
    </div>
  );
};

export default UserProfile;
