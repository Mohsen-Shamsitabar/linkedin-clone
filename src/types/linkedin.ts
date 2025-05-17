import type { IdIdentifier } from "@/enums";

// === === === === === OPTIONS === === === === === //
export type EmploymentType =
  | "FULL_TIME"
  | "PART_TIME"
  | "SELF_EMPLOYED"
  | "FREELANCE"
  | "CONTRACT"
  | "INTERNSHIP"
  | "APPRENTICESHIP"
  | "SEASONAL"
  | "OTHER";

export type WebsiteType =
  | "PERSONAL"
  | "COMPANY"
  | "BLOG"
  | "PORTFOLIO"
  | "OTHER";

export type WorkEnviromentType = "ON_SITE" | "HYBRID" | "REMOTE";

export type CompanyType = "EDUCATIONAL" | "PRIVATELY_HELD";

// === === === === === SUB TYPES === === === === === //

export type CompanyId = `${IdIdentifier.companyId}${string}`;
export type UserId = `${IdIdentifier.userId}${string}`;
export type ClientId = CompanyId | UserId;
export type ExperienceId = `${IdIdentifier.experienceId}${string}`;
export type EducationId = `${IdIdentifier.educationId}${string}`;
export type PostId = `${IdIdentifier.postId}${string}`;
export type CommentId = `${IdIdentifier.commentId}${string}`;

export type ID =
  | CommentId
  | UserId
  | ExperienceId
  | EducationId
  | PostId
  | CompanyId;

export type Skill = string;

export type Website = {
  url: string;
  type: WebsiteType;
};

export type ValueRange = [number, number];

// === === === === === MAIN TYPES === === === === === //

export type User = {
  id: UserId;
  createDate: string;
  firstName: string;
  lastName: string;
  avatar: string;
  banner: string;
  headline: string;
  industry: string;
  location: { country: string; city: string };
  contactInfo: ContactInfo;
  summary: string;
  experiences: ExperienceId[];
  educations: EducationId[];
  posts: PostId[];
  skills: Skill[];
  followers: ClientId[];
  followings: ClientId[];
};

export type Company = Omit<
  User,
  | "firstName"
  | "lastName"
  | "contactInfo"
  | "summary"
  | "experiences"
  | "educations"
  | "skills"
  | "followings"
  | "id"
> & {
  id: CompanyId;
  name: string;
  contactInfo: Omit<ContactInfo, "birthday" | "address" | "websites"> & {
    website: Website | null;
  };
  specialties: Skill[];
  aboutUs: string;
  size: ValueRange;
  type: CompanyType;
};

// === === SUMMARY === === //

export type UserSummary = Pick<
  User,
  "avatar" | "firstName" | "id" | "lastName" | "headline"
> & {
  type: "user";
};

export type CompanySummary = Pick<
  Company,
  "id" | "avatar" | "name" | "location" | "headline"
> & {
  type: "company";
};

export type Summary = UserSummary | CompanySummary;

// === === === === //

export type Experience = {
  id: ExperienceId;
  userSummary: UserSummary;
  companySummary: CompanySummary;
  employmentType: EmploymentType;
  workEnv: WorkEnviromentType;
  position: string;
  startDate: string;
  endDate: string;
  skills: Skill[];
};

export type Education = {
  id: EducationId;
  userSummary: UserSummary;
  companySummary: CompanySummary;
  degree: string;
  fieldOfStudy: string;
  startDate: string;
  endDate: string;
  grade: string;
  skills: Skill[];
};

export type Post = {
  id: PostId;
  createDate: string;
  ownerSummary: Summary;
  caption: string;
  media: string;
  likedBy: ClientId[];
  comments: CommentId[];
};

export type Comment = {
  id: CommentId;
  createDate: string;
  ownerSummary: Summary;
  postId: PostId;
  text: string;
};

export type ContactInfo = {
  email: string;
  phoneNumber: string;
  address: string;
  birthday: { month: string; day: string };
  websites: Website[];
};
