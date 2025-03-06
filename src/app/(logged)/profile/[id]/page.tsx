import type { CompanyId, RouteProps, UserId } from "@/types";
import { isCompanyId } from "@/utility";
import { CompanyProfile, UserProfile } from "./components";

const ProfilePage = (props: RouteProps<{ id: UserId | CompanyId }>) => {
  const {
    params: { id: paramId },
  } = props;

  if (isCompanyId(paramId)) {
    return <CompanyProfile companyId={paramId} />;
  }

  return <UserProfile userId={paramId} />;
};

export default ProfilePage;
