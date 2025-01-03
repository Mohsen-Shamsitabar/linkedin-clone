import type { Education, EducationId } from "@/types";

type Educations = Record<EducationId, Education>;

const educations: Educations = {
  EDU_1: {
    id: "EDU_1",
    userSummary: {
      id: "USER_1",
      firstName: "Mohsen",
      lastName: "Shamsitabar",
      avatar: "https://picsum.photos/id/0/152/152",
      headline: "Im sad and broke",
    },
    name: "Alborz",
    fieldOfStudy: "Math",
    degree: "diploma",
    grade: "17.5",
    startDate: "2020-12-26T18:38:00+03:30",
    endDate: "2024-12-26T18:38:00+03:30",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam error omnis, consequatur perspiciatis doloremque aperiam aspernatur? Magnam optio cumque quia, sapiente dolorem vitae impedit animi esse id illum veritatis quae.",
    skills: ["shit", "shit2", "shit3"],
  },
  EDU_2: {
    id: "EDU_2",
    userSummary: {
      id: "USER_2",
      firstName: "Mostafa",
      lastName: "Shamsitabar",
      avatar: "https://picsum.photos/id/6/152/152",
      headline: "Senior Software Engineer @ TAPSI",
    },
    name: "Azad University Research Branch",
    fieldOfStudy: "CS",
    degree: "license",
    grade: "18.28",
    startDate: "2020-12-26T18:38:00+03:30",
    endDate: "2024-12-26T18:38:00+03:30",
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam error omnis, consequatur perspiciatis doloremque aperiam aspernatur? Magnam optio cumque quia, sapiente dolorem vitae impedit animi esse id illum veritatis quae.",
    skills: [],
  },
};

export const getEducations = (_query = "") => {
  const promise = new Promise<Educations>((resolve, _reject) => {
    setTimeout(() => {
      resolve(educations);
    }, 1000);
  });

  return promise;
};
