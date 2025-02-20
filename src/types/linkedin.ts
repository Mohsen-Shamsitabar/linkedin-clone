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

export type CompanyId = `COMPANY_${string}`;
export type UserId = `USER_${string}`;
export type ExperienceId = `EXP_${string}`;
export type EducationId = `EDU_${string}`;
export type PostId = `POST_${string}`;
export type CommentId = `CMNT_${string}`;

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
  connections: UserId[];
  followers: UserId[];
  followings: UserId[];
};

export type UserSummary = Pick<
  User,
  "avatar" | "firstName" | "id" | "lastName" | "headline"
>;

export type Company = Omit<
  User,
  | "firstName"
  | "lastName"
  | "contactInfo"
  | "summary"
  | "experiences"
  | "educations"
  | "skills"
  | "connections"
  | "followings"
  | "id"
> & {
  id: string;
  name: string;
  contactInfo: Omit<ContactInfo, "birthday" | "address">;
  specialties: Skill[];
  aboutUs: string;
  size: ValueRange;
  type: CompanyType;
};

export type CompanySummary = Pick<
  Company,
  "id" | "avatar" | "name" | "location"
>;

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
  userSummary: UserSummary;
  caption: string;
  media: string;
  likedBy: UserId[];
  comments: CommentId[];
};

export type Comment = {
  id: CommentId;
  createDate: string;
  userSummary: UserSummary;
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
