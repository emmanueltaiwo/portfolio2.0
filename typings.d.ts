type SkillsList = {
  id: string;
  name: string;
  logo: string;
  isDark: "false" | "true";
};

type ProjectList = {
  id: string;
  title: string;
  description: string;
  coverImg: string;
  techStack: string[];
  liveLink: string;
  githubRepo: string;
  features: Features[];
  challengesAndSolutions: string;
  result: string;
};

type Features = {
  id: string;
  title: string;
  description: string;
};

type AuthResponse = {
  isLoggedIn: boolean;
};

type StateResponse = {
  status: "SUCCESS" | "ERROR";
  message: string;
};
