import type { CompanyId, RouteProps, UserId } from "@/types";
import { isCompanyId } from "@/utility";
import { UserProfile } from "./components";

const ProfilePage = (props: RouteProps<{ id: UserId | CompanyId }>) => {
  const {
    params: { id: paramId },
  } = props;

  if (isCompanyId(paramId)) {
    return null;
  }

  return <UserProfile userId={paramId} />;
};

export default ProfilePage;
