import type { User, UserId } from "@/types";

type Users = Record<UserId, User>;

const users: Users = {
  USER_1: {
    id: "USER_1",
    firstName: "Mohsen",
    lastName: "Shamsitabar",
    avatar: "https://picsum.photos/id/0/800/200",
    banner: "https://picsum.photos/id/10/152/152",
    location: {
      country: "Iran",
      city: "Karaj",
    },
    industary: "MYST",
    contactInfo: {
      phoneNumber: "09354360890",
      phoneType: "MOBILE",
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
    firstName: "Mostafa",
    lastName: "Shamsitabar",
    avatar: "https://picsum.photos/id/6/800/200",
    banner: "https://picsum.photos/id/60/152/152",
    location: {
      country: "Iran",
      city: "Tehran",
    },
    industary: "Divar",
    contactInfo: {
      phoneNumber: "09302124958",
      phoneType: "WORK",
      email: "guzguz@gmail.com",
      address: "mewn, asdad, p2, v5",
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
