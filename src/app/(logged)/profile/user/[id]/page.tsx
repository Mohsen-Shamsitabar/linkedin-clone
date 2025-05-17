import { getEducations } from "@/api/educations";
import { getExperiences } from "@/api/experiences";
import { getPosts } from "@/api/posts";
import { getUser } from "@/api/users";
import type { UserProfileData } from "@/contexts";
import { UserProfileProvider } from "@/contexts";
import type { RouteProps, UserId } from "@/types";
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

const UserProfilePage = async (props: RouteProps<{ id: UserId }>) => {
  const {
    params: { id: userId },
  } = props;

  const userProfile = await getUser(userId);

  const [profileUsersExperiences, profileUsersEducations, profileUsersPosts] =
    await Promise.all([
      getExperiences(userProfile.experiences),
      getEducations(userProfile.educations),
      getPosts(userProfile.posts),
    ]);

  const profileUserData: UserProfileData = {
    ...userProfile,
    experiencesData: profileUsersExperiences,
    educationsData: profileUsersEducations,
    postsData: profileUsersPosts,
  };

  return (
    <div className="relative">
      <UserProfileProvider context={profileUserData}>
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

export default UserProfilePage;
