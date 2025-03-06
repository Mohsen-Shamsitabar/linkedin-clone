import type { Education, EducationId } from "@/types";

export type Educations = Record<EducationId, Education>;

const educations: Educations = {
  EDU_1: {
    id: "EDU_1",
    userSummary: {
      type: "user",
      id: "USER_1",
      firstName: "Mohsen",
      lastName: "Shamsitabar",
      avatar: "https://picsum.photos/id/0/152/152",
      headline: "Im sad and broke",
    },
    companySummary: {
      type: "company",
      id: "COMPANY_1",
      name: "Alborz School",
      headline: "A Quarter Century of Purposeful Activities",
      avatar: "https://picsum.photos/id/12/152/152",
      location: { country: "Iran", city: "Tehran" },
    },
    fieldOfStudy: "Math",
    degree: "diploma",
    grade: "17.5",
    startDate: "2020-12-26T18:38:00+03:30",
    endDate: "2024-12-26T18:38:00+03:30",
    skills: ["shit", "shit2", "shit3"],
  },
  EDU_2: {
    id: "EDU_2",
    userSummary: {
      type: "user",
      id: "USER_2",
      firstName: "Mostafa",
      lastName: "Shamsitabar",
      avatar: "https://picsum.photos/id/6/152/152",
      headline: "Senior Software Engineer @ TAPSI",
    },
    companySummary: {
      type: "company",
      id: "COMPANY_2",
      name: "Azad University Research Branch",
      headline: "This is my headLine >:3",
      avatar: "https://picsum.photos/id/14/152/152",
      location: { country: "Iran", city: "Tehran" },
    },
    fieldOfStudy: "CS",
    degree: "license",
    grade: "18.28",
    startDate: "2020-12-26T18:38:00+03:30",
    endDate: "2024-12-26T18:38:00+03:30",
    skills: [],
  },
};

/**
 * If `educationIds` is empty, then all the `educations` will be resolved.
 */
export const getEducations = (educationIds: EducationId[] = []) => {
  const promise = new Promise<Educations>((resolve, reject) => {
    const allEducationIds = Object.keys(educations) as EducationId[];
    const areEducationIdsValid = allEducationIds.some(eduId =>
      educationIds.some(givenEduId => eduId === givenEduId),
    );

    setTimeout(() => {
      if (!educationIds.length) resolve(educations);
      if (!areEducationIdsValid)
        reject(new Error("Education ids are invalid!"));

      const fetchedEducationIds = allEducationIds.filter(eduId =>
        educationIds.includes(eduId),
      );

      const result: Educations = {};

      fetchedEducationIds.forEach(
        eduId => (result[eduId] = educations[eduId]!),
      );

      resolve(result);
    }, 1000);
  });

  return promise;
};
