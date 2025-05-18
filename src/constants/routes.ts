const ROUTES = {
  LOCAL: {
    HOME: {
      BASE: "/",
    },
    SIGNIN: {
      BASE: "/signin",
    },
    SIGNUP: {
      BASE: "/signup",
    },
    PROFILE: {
      BASE: "/profile",
      COMPANY: { BASE: "/company" },
      USER: { BASE: "/user" },
    },
    FEED: {
      BASE: "/feed",
    },
  },
} as const;

export { ROUTES };
