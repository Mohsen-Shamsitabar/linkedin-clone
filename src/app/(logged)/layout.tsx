import { getUser } from "@/api/users";
import { LoggedUserProvider } from "@/contexts";
import type { LayoutPageProps, UserId } from "@/types";
import { Footer, Header } from "./components";

const LoggedLayout = async (props: LayoutPageProps) => {
  const { children } = props;

  // for redirecting...
  // const isAuth = false;

  const loggedUserId: UserId = "USER_1";

  const loggedUser = await getUser(loggedUserId);

  return (
    <div>
      <LoggedUserProvider {...loggedUser}>
        <Header />

        <div>{children}</div>

        <Footer className="sticky bottom-0 right-0 left-0" />
      </LoggedUserProvider>
    </div>
  );
};

export default LoggedLayout;
