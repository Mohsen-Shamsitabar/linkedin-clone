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

export type WebsiteTypes =
  | "PERSONAL"
  | "COMPANY"
  | "BLOG"
  | "PORTFOLIO"
  | "OTHER";

export type LocationType = "ON_SITE" | "HYBRID" | "REMOTE";

export type PhoneType = "HOME" | "WORK" | "MOBILE";

// === === === === === SUB TYPES === === === === === //

export type ExperienceId = `EXP_${string}`;
export type EducationId = `EDU_${string}`;
export type UserId = `USER_${string}`;
export type PostId = `POST_${string}`;
export type CommentId = `CMNT_${string}`;

export type Skill = string;

export type Date = {
  year: string;
  month: string;
};

export type Website = {
  url: string;
  type: WebsiteTypes;
};

// === === === === === MAIN TYPES === === === === === //

export type Experience = {
  id: ExperienceId;
  owner: UserId;
  title: string;
  employmentType: EmploymentType;
  company: string;
  startDate: Date;
  endDate: Date;
  location: string;
  locationType: LocationType;
  description: string;
  skills: Skill[];
};

export type Education = {
  id: EducationId;
  owner: UserId;
  name: string;
  degree: string;
  fieldOfStudy: string;
  startDate: Date;
  endDate: Date;
  grade: string;
  description: string;
  skills: Skill[];
};

export type Post = {
  id: PostId;
  owner: UserId;
  caption: string;
  media: string;
  likedBy: UserId[];
  comments: CommentId[];
};

export type Comment = {
  id: CommentId;
  writer: UserId;
  postId: PostId;
  text: string;
  likedBy: UserId[];
};

export type ContactInfo = {
  email: string;
  phoneNumber: string;
  phoneType: PhoneType;
  address: string;
  birthday: { month: string; day: string };
  websites: Website[];
};

export type User = {
  id: UserId;
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
