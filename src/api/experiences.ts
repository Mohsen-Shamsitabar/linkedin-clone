import type { Experience, ExperienceId } from "@/types";

type Experiences = Record<ExperienceId, Experience>;

const experiences: Experiences = {
  EXP_1: {
    id: "EXP_1",
    owner: "USER_1",
    active: true,
    title: "Tapsi",
    company: "Tapsi",
    employmentType: "FULL_TIME",
    profileHeadline: "MEOW MEOW NIGGA",
    location: "Iran, Tehran, Sadeghie",
    locationType: "ON_SITE",
    startDate: { year: "2020", month: "2" },
    endDate: { year: "2022", month: "9" },
    foundBy: "RECRUITER",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam error omnis, consequatur perspiciatis doloremque aperiam aspernatur? Magnam optio cumque quia, sapiente dolorem vitae impedit animi esse id illum veritatis quae.",
    skills: ["bluh", "bluh2", "bluh3"],
  },
  EXP_2: {
    id: "EXP_2",
    owner: "USER_2",
    active: false,
    title: "Divar",
    company: "Divar",
    employmentType: "APPRENTICESHIP",
    profileHeadline: "MEOW MEOW NIGGA XXXXXXX",
    location: "HELL, HEll, JAHANAm",
    locationType: "HYBRID",
    startDate: { year: "2022", month: "2" },
    endDate: { year: "2024", month: "9" },
    foundBy: "INDEED",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam error omnis, consequatur perspiciatis doloremque aperiam aspernatur? Magnam optio cumque quia, sapiente dolorem vitae impedit animi esse id illum veritatis quae.",
    skills: [],
  },
};

export const getExperiences = (_query = "") => {
  const promise = new Promise<Experiences>((resolve, _reject) => {
    setTimeout(() => {
      resolve(experiences);
    }, 1000);
  });

  return promise;
};
