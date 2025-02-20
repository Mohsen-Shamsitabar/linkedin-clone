import { getEducations } from "@/api/educations";
import type { Experiences } from "@/api/experiences";
import { getExperiences } from "@/api/experiences";
import type { Posts } from "@/api/posts";
import { getPosts } from "@/api/posts";
import { getUser } from "@/api/users";
import type { ProfileUserData } from "@/contexts";
import { ProfileUserProvider } from "@/contexts";
import type { RouteProps, UserId } from "@/types";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  PostsSection,
  ProfileSection,
  SkillsSection,
} from "./components";
import classes from "./styles.module.css";

const ProfilePage = async (props: RouteProps<{ id: UserId }>) => {
  const {
    params: { id: userId },
  } = props;

  const profileUser = await getUser(userId);

  const [profileUsersExperiences, profileUsersEducations, profileUsersPosts] =
    await Promise.all<[Promise<Posts>, Promise<Experiences>, Promise<Posts>]>([
      getExperiences(profileUser.experiences),
      getEducations(profileUser.educations),
      getPosts(profileUser.posts),
    ]);

  const profileUserData: ProfileUserData = {
    ...profileUser,
    experiencesData: profileUsersExperiences,
    educationsData: profileUsersEducations,
    postsData: profileUsersPosts,
  };

  return (
    <div className="relative">
      <ProfileUserProvider context={profileUserData}>
        <main className={classes["main-content"]}>
          <ProfileSection />

          <AboutSection className={classes["section"]} />

          <PostsSection className={classes["section"]} />

          <ExperienceSection className={classes["section"]} />

          <EducationSection className={classes["section"]} />

          <SkillsSection className={classes["section"]} />

          <ContactSection className={classes["section"]} />
        </main>
      </ProfileUserProvider>
    </div>
  );
};

export default ProfilePage;
