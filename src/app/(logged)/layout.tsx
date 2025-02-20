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
      <LoggedUserProvider context={loggedUser}>
        <Header />

        <div>{children}</div>

        <Footer />
      </LoggedUserProvider>
    </div>
  );
};

export default LoggedLayout;
