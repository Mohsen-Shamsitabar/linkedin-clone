import { getCompany } from "@/api/companies";
import { getPosts } from "@/api/posts";
import type { CompanyProfileData } from "@/contexts";
import { CompanyProfileProvider } from "@/contexts";
import type { CompanyId, RouteProps } from "@/types";
import classes from "../../commonStyles.module.css";
import { AboutUsSection, PostsSection, ProfileSection } from "./components";

const CompanyProfilePage = async (props: RouteProps<{ id: CompanyId }>) => {
  const {
    params: { id: companyId },
  } = props;

  const company = await getCompany(companyId);
  const postsData = await getPosts(company.posts);

  const context: CompanyProfileData = { ...company, postsData };

  return (
    <div>
      <CompanyProfileProvider {...context}>
        <main className={classes["main-content"]}>
          <ProfileSection className={classes["section"]} />
          <AboutUsSection className={classes["section"]} />
          <PostsSection />
        </main>
      </CompanyProfileProvider>
    </div>
  );
};

export default CompanyProfilePage;
