import { getUser } from "@/api/users";
import { LoggedUserProvider, ProfileUserProvider } from "@/contexts";
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

  const loggedUserId: UserId = "USER_1";

  // for redirecting...
  // const isAuth = false;

  const [profileUser, loggedUser] = await Promise.all([
    getUser(userId),
    getUser(loggedUserId),
  ]);

  return (
    <div className="relative">
      <LoggedUserProvider context={loggedUser}>
        <ProfileUserProvider context={profileUser}>
          <Header />

          <main className={classes["main-content"]}>
            <ProfileSection />

            <AboutSection className={classes["section"]} />

            <PostsSection className={classes["section"]} />

            <ExperienceSection className={classes["section"]} />

            <EducationSection className={classes["section"]} />

            <SkillsSection className={classes["section"]} />

            <ContactSection className={classes["section"]} />
          </main>

          <Footer className={classes["footer"]} />
        </ProfileUserProvider>
      </LoggedUserProvider>
    </div>
  );
};

export default ProfilePage;
