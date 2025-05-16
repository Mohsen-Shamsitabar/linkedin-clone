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
    },
    FEED: {
      BASE: "/feed",
    },
  },
} as const;

export { ROUTES };
