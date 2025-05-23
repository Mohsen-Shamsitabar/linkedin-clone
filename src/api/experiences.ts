import type { Experience, ExperienceId } from "@/types";

export type Experiences = Record<ExperienceId, Experience>;

const experiences: Experiences = {
  EXP_1: {
    id: "EXP_1",
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
      id: "COMPANY_3",
      headline: "",
      name: "TAPSI",
      avatar: "https://picsum.photos/id/20/152/152",
      location: { country: "Iran", city: "Tehran" },
    },
    workEnv: "ON_SITE",
    employmentType: "FULL_TIME",
    position: "Senior Software Engineer",
    startDate: "2020-12-26T18:38:00+03:30",
    endDate: "2024-12-26T18:38:00+03:30",
    skills: ["bluh", "bluh2", "bluh3"],
  },
  EXP_2: {
    id: "EXP_2",
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
      id: "COMPANY_4",
      name: "Divar",
      headline: "THE place to get stuff",
      avatar: "https://picsum.photos/id/22/152/152",
      location: { country: "Iran", city: "Tehran" },
    },
    workEnv: "HYBRID",
    employmentType: "APPRENTICESHIP",
    position: "Senior UX Designer",
    startDate: "2020-12-26T18:38:00+03:30",
    endDate: "2024-12-26T18:38:00+03:30",
    skills: [],
  },
};

/**
 * If `experienceIds` is empty, then all the `experiences` will be resolved.
 */
export const getExperiences = (
  experienceIds: ExperienceId[] = [],
): Promise<Experience[]> => {
  const promise = new Promise<Experience[]>((resolve, reject) => {
    const allExperienceIds = Object.keys(experiences) as ExperienceId[];
    const areExperienceIdsValid = allExperienceIds.some(expId =>
      experienceIds.some(givenExpId => expId === givenExpId),
    );
    const allExperiences = Object.values(experiences);

    setTimeout(() => {
      if (!experienceIds.length) resolve(allExperiences);
      if (!areExperienceIdsValid)
        reject(new Error("Experience ids are invalid!"));

      const fetchedExperienceIds = allExperienceIds.filter(expId =>
        experienceIds.includes(expId),
      );

      const result: Experience[] = [];

      fetchedExperienceIds.forEach(expId => result.push(experiences[expId]!));

      resolve(result);
    }, 1000);
  });

  return promise;
};
