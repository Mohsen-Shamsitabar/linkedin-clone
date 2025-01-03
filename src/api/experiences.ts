import type { Experience, ExperienceId } from "@/types";

type Experiences = Record<ExperienceId, Experience>;

const experiences: Experiences = {
  EXP_1: {
    id: "EXP_1",
    userSummary: {
      id: "USER_1",
      firstName: "Mohsen",
      lastName: "Shamsitabar",
      avatar: "https://picsum.photos/id/0/152/152",
      headline: "Im sad and broke",
    },
    title: "Tapsi",
    company: "Tapsi",
    employmentType: "FULL_TIME",
    location: "Iran, Tehran, Sadeghie",
    locationType: "ON_SITE",
    startDate: "2020-12-26T18:38:00+03:30",
    endDate: "2024-12-26T18:38:00+03:30",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam error omnis, consequatur perspiciatis doloremque aperiam aspernatur? Magnam optio cumque quia, sapiente dolorem vitae impedit animi esse id illum veritatis quae.",
    skills: ["bluh", "bluh2", "bluh3"],
  },
  EXP_2: {
    id: "EXP_2",
    userSummary: {
      id: "USER_2",
      firstName: "Mostafa",
      lastName: "Shamsitabar",
      avatar: "https://picsum.photos/id/6/152/152",
      headline: "Senior Software Engineer @ TAPSI",
    },
    title: "Divar",
    company: "Divar",
    employmentType: "APPRENTICESHIP",
    location: "HELL, HEll, JAHANAm",
    locationType: "HYBRID",
    startDate: "2020-12-26T18:38:00+03:30",
    endDate: "2024-12-26T18:38:00+03:30",
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
