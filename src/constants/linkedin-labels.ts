import type {
  CompanyType,
  EmploymentType,
  WebsiteType,
  WorkEnvironmentType,
} from "@/types";

export const EMPLOYMENT_TYPE_LABELS: Record<EmploymentType, string> = {
  APPRENTICESHIP: "Apprentice ship",
  CONTRACT: "Contract",
  FREELANCE: "Freelance",
  FULL_TIME: "Full time",
  INTERNSHIP: "Intern ship",
  OTHER: "Other",
  PART_TIME: "Part time",
  SEASONAL: "Seasonal",
  SELF_EMPLOYED: "Self employed",
};

export const WEBSITE_TYPE_LABELS: Record<WebsiteType, string> = {
  BLOG: "Blog",
  COMPANY: "Company",
  OTHER: "Other",
  PERSONAL: "Personal",
  PORTFOLIO: "Portfolio",
};

export const LOCATION_TYPE_LABELS: Record<WorkEnvironmentType, string> = {
  HYBRID: "Hybrid",
  ON_SITE: "On site",
  REMOTE: "Remote",
};

export const COMPANY_TYPE_LABELS: Record<CompanyType, string> = {
  EDUCATIONAL: "Educational",
  PRIVATELY_HELD: "Privately Held",
};
