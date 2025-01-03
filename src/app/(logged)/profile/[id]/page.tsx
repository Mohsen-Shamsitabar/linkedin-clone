import { getUser } from "@/api/users";
import { ProfileUserProvider } from "@/contexts";
import type { UserId } from "@/types";
import type { RouteProps } from "@/utils/types";
import {
  AboutSection,
  ContactSection,
  EducationSection,
  ExperienceSection,
  Footer,
  Header,
  PostsSection,
  ProfileSection,
  SkillsSection,
} from "./components";
import classes from "./styles.module.css";

const ProfilePage = async (props: RouteProps<{ id: UserId }>) => {
  const {
    params: { id: userId },
  } = props;

  const loggedUserId: UserId = "USER_2";

  // for redirecting...
  // const isAuth = false;

  const profileUser = await getUser(userId);

  return (
    <div className="relative">
      <ProfileUserProvider context={profileUser}>
        <Header />

        <main className={classes["main-content"]}>
          <ProfileSection loggedUserId={loggedUserId} />

          <AboutSection
            loggedUserId={loggedUserId}
            className={classes["section"]}
          />

          <PostsSection
            loggedUserId={loggedUserId}
            className={classes["section"]}
          />

          <ExperienceSection className={classes["section"]} />

          <EducationSection className={classes["section"]} />

          <SkillsSection className={classes["section"]} />

          <ContactSection className={classes["section"]} />
        </main>

        <Footer className={classes["footer"]} />
      </ProfileUserProvider>
    </div>
  );
};

export default ProfilePage;
