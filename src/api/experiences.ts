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
    companySummary: {
      id: "COMPANY_3",
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
      id: "USER_2",
      firstName: "Mostafa",
      lastName: "Shamsitabar",
      avatar: "https://picsum.photos/id/6/152/152",
      headline: "Senior Software Engineer @ TAPSI",
    },
    companySummary: {
      id: "COMPANY_4",
      name: "Divar",
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
export const getExperiences = (experienceIds: ExperienceId[] = []) => {
  const promise = new Promise<Experiences>((resolve, reject) => {
    const allExperienceIds = Object.keys(experiences) as ExperienceId[];
    const areExperienceIdsValid = allExperienceIds.some(expId =>
      experienceIds.some(givenExpId => expId === givenExpId),
    );

    setTimeout(() => {
      if (!experienceIds.length) resolve(experiences);
      if (!areExperienceIdsValid)
        reject(new Error("Experience ids are invalid!"));

      const fetchedExperienceIds = allExperienceIds.filter(expId =>
        experienceIds.includes(expId),
      );

      const result: Experiences = {};

      fetchedExperienceIds.forEach(
        expId => (result[expId] = experiences[expId]!),
      );

      resolve(result);
    }, 1000);
  });

  return promise;
};
