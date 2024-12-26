import type { User, UserId } from "@/types";

type Users = Record<UserId, User>;

const users: Users = {
  USER_1: {
    id: "USER_1",
    createDate: "2024-12-26T18:38:00+03:30",
    firstName: "Mohsen",
    lastName: "Shamsitabar",
    avatar: "https://picsum.photos/id/0/152/152",
    banner: "https://picsum.photos/id/10/1000/250",
    location: {
      country: "Iran",
      city: "Karaj",
    },
    headline: "Im sad and broke",
    industry: "MYST",
    contactInfo: {
      phoneNumber: "09354360890",
      email: "shamsitabar.mohsen@gmail.com",
      address: "boom,boom,boom,boom",
      birthday: {
        month: "12",
        day: "1",
      },
      websites: [
        {
          type: "PORTFOLIO",
          url: "google.com",
        },
        {
          type: "BLOG",
          url: "google.com",
        },
        {
          type: "OTHER",
          url: "google.com",
        },
      ],
    },
    summary: "testing...",
    educations: ["EDU_1"],
    experiences: ["EXP_1"],
    posts: ["POST_1"],
    connections: ["USER_2"],
    followers: ["USER_2"],
    followings: ["USER_2"],
    skills: ["React", "CSS", "HTML"],
  },
  USER_2: {
    id: "USER_2",
    createDate: "2024-12-26T18:38:00+03:30",
    firstName: "Mostafa",
    lastName: "Shamsitabar",
    avatar: "https://picsum.photos/id/6/152/152",
    banner: "https://picsum.photos/id/60/1000/250",
    location: {
      country: "Iran",
      city: "Tehran",
    },
    headline: "Senior Software Engineer @ TAPSI",
    industry: "TAPSI",
    contactInfo: {
      phoneNumber: "09302124958",
      email: "guzguz@gmail.com",
      address: "Tehran Province, Iran",
      birthday: {
        month: "2",
        day: "27",
      },
      websites: [
        {
          type: "PORTFOLIO",
          url: "google.com",
        },
        {
          type: "BLOG",
          url: "google.com",
        },
        {
          type: "OTHER",
          url: "google.com",
        },
      ],
    },
    summary: `As a Front-end Software Engineer with a profound dedication to the open-source movement, I excel in creating tools and infrastructure that serve as the backbone for innovative applications. My expertise extends beyond the code—I am deeply passionate about design in all its forms. This passion manifests in a meticulous approach to user experience and interface design, ensuring that the tools I craft are not only functional but also intuitive and aesthetically pleasing.\nIn every project I undertake, my goal is to harmonize efficiency with elegance, creating a seamless experience for developers and end-users alike. My commitment to this dual craft of engineering and design is what drives me to contribute to a future where technology is accessible, reliable, and delightful to use.\n\n> Check out my open-source projects:\nhttps://github.com/mimshins`,
    educations: ["EDU_2"],
    experiences: ["EXP_2"],
    posts: ["POST_2"],
    connections: ["USER_1"],
    followers: ["USER_1"],
    followings: ["USER_1"],
    skills: ["Godot", "unity"],
  },
};

export const getUsers = (_query = "") => {
  const promise = new Promise<Users>((resolve, _reject) => {
    setTimeout(() => {
      resolve(users);
    }, 1000);
  });

  return promise;
};

export const getUser = (userId: UserId) => {
  const promise = new Promise<User>((resolve, _reject) => {
    setTimeout(() => {
      resolve(users[userId]!);
    }, 1000);
  });

  return promise;
};
