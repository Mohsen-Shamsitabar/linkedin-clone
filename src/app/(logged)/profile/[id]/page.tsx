import { COMPANY_PROFILE, USER_PROFILE } from "@/routes/paths";
import type { ClientId, RouteProps } from "@/types";
import { isCompanyId } from "@/utility";
import { redirect } from "next/navigation";

const ProfilePage = (props: RouteProps<{ id: ClientId }>) => {
  const {
    params: { id: paramId },
  } = props;

  if (isCompanyId(paramId)) {
    redirect(`${COMPANY_PROFILE}/${paramId}`);
  }

  redirect(`${USER_PROFILE}/${paramId}`);
};

export default ProfilePage;
