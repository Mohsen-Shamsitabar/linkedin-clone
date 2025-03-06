import type { Company, CompanyId } from "@/types";

type Companies = Record<CompanyId, Company>;

const companies: Companies = {
  COMPANY_1: {
    id: "COMPANY_1",
    name: "Alborz School",
    avatar: "https://picsum.photos/id/12/152/152",
    banner: "https://picsum.photos/id/13/1000/250",
    headline: "A Quarter Century of Purposeful Activities",
    industry: "Higher Education",
    type: "EDUCATIONAL",
    aboutUs: `The art department of Islamic Propaganda Organization began to work independently  in the early years of 1970’s in the area of  teaching various art courses and so far , thousands of trainees in different parts of  the country have been instructed in different art courses by these facilities and  make use of their educations formally or  informally. In the beginning of the period of leadership, following the words of supreme leadership  regarding the attention of the art  department to the underlying ,monumental and fundamental works and also ; the necessity of extensively active attending  and role playing of the aware and  committed artists ,which should be suitable to the comprehensive dimensions of the cultural invasion, after doing a lot of surveys, the art department got determined to set up an academic unit to solve the major problems of artists and those interested in art  in the area of shortcoming of the educational spaces by making use of its artistic and cultural experiences and to compensate for the lack of the presence of the work forces acquainted with the problems of  the artistic and cultural society and to fulfill the objective of promoting the ritual art  and tending the literature of Islamic  revolution by cultivating the committed and religious human forces. To explain the mentioned policy, Soore educational institution, which had been initially created to independently hold the training courses, was formally registered and continued its activity under the title of Soore Higher Education Institution. \nIn 2003 ,the vice-chairmanship of the Art Department of Islamic propaganda organization proceeded to establish Soore non-profit higher education institution of  the second type .After meeting with the  approval of High Council and consolidating  its Acts to acknowledge second type institutions, Sooreh non-profit Higher  Education Institution of the second type was promoted to the first type in the spring of 1997. Soore higher education institution has two other branches .the branch of Isfahan  established in August 1996 with two  courses in cinema and theatre and the  branch of Ardebil established in 17 Nvember 1996 with two courses in architecture at Associate’s degree and the  rebuilding and the restoring of the monuments at BA. degree.`,
    createDate: "2020-12-26T18:38:00+03:30",
    location: { country: "Iran", city: "Tehran" },
    followers: [],
    contactInfo: {
      email: "AlborzSchool@yahoo.com",
      phoneNumber: "09121547428",
      website: null,
    },
    posts: [],
    size: [12, 20],
    specialties: ["Art", "Tech", "Maths", "OtherShit"],
  },
  COMPANY_2: {
    id: "COMPANY_2",
    name: "Azad University Research Branch",
    avatar: "https://picsum.photos/id/14/152/152",
    banner: "https://picsum.photos/id/15/1000/250",
    headline: "This is my headLine >:3",
    industry: "Higher Education",
    type: "EDUCATIONAL",
    aboutUs: `Headquartered in Tehran, Iran, the Islamic Azad University was founded in 1982 and established by Akbar Hashemi Rafsanjani, currently has an enrollment of 1.5 million students, making it the world's third largest. Azad University has over 100 branches across the country and also in other countries. It has branches and universities in U.A.E, United Kingdom, Tanzania, Lebanon and Armenia and has plans to establish more branch campuses in Malaysia, Canada, Afghanistan and Tajikistan in the near future. Over the years, the university has accumulated assets estimated to be worth between $20â25 billion. Islamic Azad University's activities quickly expanded throughout the country, so that today thousands of students are enrolling every year. Not relying on government funding, it receives charitable donations and charges tuition fees.`,
    createDate: "2019-12-26T18:38:00+03:30",
    location: { country: "Iran", city: "Tehran" },
    followers: [],
    contactInfo: {
      email: "AzadUni.edu@yahoo.com",
      phoneNumber: "09121547428",
      website: {
        type: "COMPANY",
        url: "https://google.com",
      },
    },
    posts: [],
    size: [100, 499],
    specialties: ["Art", "Tech", "Maths", "Computer", "CS"],
  },
  COMPANY_3: {
    id: "COMPANY_3",
    name: "TAPSI",
    avatar: "https://picsum.photos/id/20/152/152",
    banner: "https://picsum.photos/id/21/1000/250",
    headline: "",
    industry: "Information Technology & Services",
    type: "PRIVATELY_HELD",
    aboutUs: `Tapsi has been the fastest growing mobile transportation platform in Iran. We aim to simplify people’s lives by revolutionizing the transportation industry. As an Iranian leading company in the sharing economy initiative, Tapsi is committed to work with communities and partners to solve Iran’s transportation, environmental challenges and employment problems using big data-driven, deep-learning algorithms that optimize resources allocation. By continuously improving the user experience and creating social values, we strive to build an open, efficient, collaborative, and sustainable transportation ecosystem. We imagine a society where transportation and tech bring people together, instead of apart. We see the future as community-driven — and it starts with you.`,
    createDate: "2018-12-26T18:38:00+03:30",
    location: { country: "Iran", city: "Tehran" },
    followers: [],
    contactInfo: {
      email: "Tapsi.corpo@gmail.com",
      phoneNumber: "",
      website: {
        type: "COMPANY",
        url: "http://Tapsi.ir",
      },
    },
    posts: [],
    size: [501, 1000],
    specialties: [
      "Transportation",
      "Internet Services",
      "Tech",
      "Data Analytics",
    ],
  },
  COMPANY_4: {
    id: "COMPANY_4",
    name: "Divar",
    avatar: "https://picsum.photos/id/22/152/152",
    banner: "https://picsum.photos/id/23/1000/250",
    headline: "THE place to get stuff",
    industry: "Technology, Information and Internet",
    type: "PRIVATELY_HELD",
    aboutUs: `Divar, a platform for getting stuff.`,
    createDate: "2017-12-26T18:38:00+03:30",
    location: { country: "Iran", city: "Tehran" },
    followers: [],
    contactInfo: {
      email: "",
      phoneNumber: "09121547428",
      website: {
        type: "COMPANY",
        url: "https://divar.ir",
      },
    },
    posts: [],
    size: [200, 500],
    specialties: [],
  },
};

export const getCompany = (companyId: CompanyId) => {
  const promise = new Promise<Company>((resolve, reject) => {
    const allUserIds = new Set(Object.keys(companies));
    const isValidUserId = allUserIds.has(companyId);

    setTimeout(() => {
      if (isValidUserId) resolve(companies[companyId]!);

      reject(new Error(`Company id "${companyId}" is invalid!`));
    }, 1000);
  });

  return promise;
};
