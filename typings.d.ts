type SkillsList = {
  id: number;
  mame: string;
  logo: string;
  isDark: boolean;
};

type ProjectList = {
  id: number;
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
  id: number;
  title: string;
  description: string;
};
