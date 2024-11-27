import type { Education, EducationId } from "@/types";

type Educations = Record<EducationId, Education>;

const educations: Educations = {
  EDU_1: {
    id: "EDU_1",
    owner: "USER_1",
    school: "Alborz",
    fieldOfStudy: "Math",
    degree: "diploma",
    grade: "17.5",
    startDate: { year: "2012", month: "3" },
    endDate: { year: "2016", month: "10" },
    description:
      "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nam error omnis, consequatur perspiciatis doloremque aperiam aspernatur? Magnam optio cumque quia, sapiente dolorem vitae impedit animi esse id illum veritatis quae.",
    skills: ["shit", "shit2", "shit3"],
  },
  EDU_2: {
    id: "EDU_2",
    owner: "USER_2",
    school: "Azad University Research Branch",
    fieldOfStudy: "CS",
    degree: "license",
    grade: "18.28",
    startDate: { year: "2012", month: "3" },
    endDate: { year: "2016", month: "10" },
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
