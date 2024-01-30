export const FULL_NAME = "Emmanuel Taiwo";

export const NAV_LINKS = [
  {
    id: 1,
    title: "Skills",
    route: "/#skills",
  },
  {
    id: 2,
    title: "About",
    route: "/#about",
  },
  {
    id: 3,
    title: "Projects",
    route: "/#projects",
  },
  {
    id: 4,
    title: "Contact",
    route: "/#contact",
  },
];

export const SKILLS_LIST = [
  {
    id: 1,
    name: "HTML",
    logo: "/assets/Images/html.svg",
    isDark: false,
  },
  {
    id: 2,
    name: "CSS",
    logo: "/assets/Images/css.svg",
    isDark: false,
  },
  {
    id: 3,
    name: "JAVASCRIPT",
    logo: "/assets/Images/javascript.svg",
    isDark: false,
  },
  {
    id: 4,
    name: "REACTJS",
    logo: "/assets/Images/react.svg",
    isDark: false,
  },
  {
    id: 5,
    name: "REACT NATIVE",
    logo: "/assets/Images/react-native.svg",
    isDark: false,
  },
  {
    id: 6,
    name: "REDUX",
    logo: "/assets/Images/redux.svg",
    isDark: false,
  },
  {
    id: 7,
    name: "TYPESCRIPT",
    logo: "/assets/Images/typescript.svg",
    isDark: false,
  },
  {
    id: 8,
    name: "GITHUB",
    logo: "/assets/Images/github.svg",
    isDark: true,
  },
  {
    id: 9,
    name: "NEXTJS",
    logo: "/assets/Images/nextjs.svg",
    isDark: true,
  },
  {
    id: 10,
    name: "MATERIAL UI",
    logo: "/assets/Images/material-ui.svg",
    isDark: false,
  },
  {
    id: 11,
    name: "SCSS",
    logo: "/assets/Images/scss.svg",
    isDark: false,
  },
  {
    id: 12,
    name: "GIT",
    logo: "/assets/Images/git.svg",
    isDark: false,
  },
  {
    id: 13,
    name: "NETLIFY",
    logo: "/assets/Images/netlify.svg",
    isDark: false,
  },
  {
    id: 14,
    name: "VERCEL",
    logo: "/assets/Images/vercel.svg",
    isDark: true,
  },
  {
    id: 15,
    name: "FIREBASE",
    logo: "/assets/Images/firebase.svg",
    isDark: false,
  },
  {
    id: 16,
    name: "NODEJS",
    logo: "/assets/Images/nodejs.svg",
    isDark: false,
  },
  {
    id: 17,
    name: "EXPRESSJS",
    logo: "/assets/Images/nodejs.svg",
    isDark: true,
  },
  {
    id: 18,
    name: "GRAPHQL",
    logo: "/assets/Images/graphql.svg",
    isDark: false,
  },
  {
    id: 19,
    name: "JEST",
    logo: "/assets/Images/jest.svg",
    isDark: false,
  },
  {
    id: 20,
    name: "CYPRESS",
    logo: "/assets/Images/cypress.svg",
    isDark: true,
  },
];

export const PROJECTS_LIST = [
  {
    id: 1,
    title: "SpendSense",
    description:
      "SpendSense is a comprehensive finance expense tracker designed to simplify money management. It empowers users to effortlessly organize their expenses, gain control of their finances, and plan for a secure financial future. With SpendSense, you can easily categorize your expenses, analyze spending patterns, and make informed financial decisions.",
    coverImg: "/assets/Images/spendsense_gallery.png",
    techStack: [
      "React.js",
      "Next.js",
      "Typescript",
      "Material UI",
      "Firebase",
      "Tailwind CSS",
      "Redux",
      "Firestore",
      "Chart.js",
    ],
    liveLink: "https://spendsense.com.ng/",
    githubRepo: "https://github.com/realemmanuel/spendsense",

    features: [
      {
        id: 1,
        title: "Expense Creation:",
        description:
          "Effortlessly record new expenses by inputting essential information, including the expense title, amount spent, and transaction date.",
      },
      {
        id: 2,
        title: "Holistic Expense Management:",
        description:
          "Categorize your expenses to gain insights into your spending patterns, ensuring organized financial data.",
      },
      {
        id: 3,
        title: "Dynamic Dashboard Insights:",
        description:
          "Access real-time metrics like total expenses, monthly expenses, and daily expenses on the captivating dashboard.",
      },
      {
        id: 4,
        title: "Streamlined Navigation:",
        description:
          "Enjoy seamless navigation between different app sections with the intuitive sidebar.",
      },
      {
        id: 5,
        title: "Advanced Expense Management:",
        description:
          "Utilize the 'All Expenses' table with advanced search, sorting, and filtering functionalities for a smoother experience.",
      },
      {
        id: 6,
        title: "Effortless Expense Entry:",
        description:
          "Creating new expenses is user-friendly with the 'Create' page, ensuring a hassle-free experience.",
      },
      {
        id: 7,
        title: "Seamless Integration:",
        description:
          "SpendSense harmoniously integrates multiple technologies to provide a flawless user experience.",
      },
      {
        id: 8,
        title: "Data Security at Its Best:",
        description:
          "Your data is secure with Firebase authentication and a focus on user data privacy.",
      },
      {
        id: 9,
        title: "Responsive & Real-Time:",
        description:
          "Enjoy a responsive, user-friendly dashboard with real-time data updates, accessible from any device.",
      },
      {
        id: 10,
        title: "Meticulous Planning & Design:",
        description:
          "SpendSense's meticulous planning and design ensure compatibility and smooth interactions between technologies.",
      },
      {
        id: 11,
        title: "Chart Your Financial Course:",
        description:
          "Analyze your financial journey with dynamic expense charts, customizable filters, and data visualization.",
      },
      {
        id: 12,
        title: "Material-UI Magic:",
        description:
          "SpendSense's 'All Expenses' table leverages Material-UI components and structured code for efficiency and user-friendliness.",
      },
      {
        id: 13,
        title: "A Solution for You:",
        description:
          "SpendSense empowers users to effortlessly manage their expenses and take control of their finances, anytime and anywhere.",
      },
    ],
    challengesAndSolutions:
      "During the development of SpendSense, challenges arose in organizing and displaying data effectively. To address this, a structured data model was implemented, ensuring efficient storage and retrieval. Additionally, creating an advanced filtering algorithm facilitated easy sorting and viewing of expenses by year, enhancing user experience. Designing a user-centric interface while maintaining responsiveness was achieved through the application of responsive design principles and CSS techniques. These solutions resulted in a user-friendly and efficient financial management tool that garnered positive user feedback.",
    result:
      "Users appreciate the user-friendly design, making expense tracking effortless and engaging. This positive feedback contributes to increased user engagement and satisfaction. SpendSense's development journey showcases successful solutions to intricate challenges, resulting in a tool that efficiently manages financial data while offering an intuitive and visually appealing interface.",
  },
  {
    id: 2,
    title: "GetLinked Tech Hackathon",
    description:
      "In September 2023, I actively engaged in the highly competitive GetLinkedAI Tech Hackathon, an exhilarating event that brought together a community of passionate individuals eager to push the boundaries of technology. The challenge presented to us was to construct a comprehensive website based on a provided design. This immersive experience not only tested our technical prowess but also encouraged collaboration and innovative problem-solving within a tight timeframe.",
    coverImg: "/assets/Images/getlinked.png",
    alt: "getlinked Banner",
    techStack: [
      "React.js",
      "Next.js",
      "Typescript",
      "Material UI",
      "Tailwind CSS",
    ],
    liveLink: "https://emmanuel-getlinkedai-hackathon.vercel.app/",
    githubRepo: "https://github.com/realemmanuel/getlinkedai-hackathon",
    features: [
      {
        id: 1,
        title: "Solo Development:",
        description:
          "Successfully undertook solo development during the GetLinkedAI Tech Hackathon, showcasing the ability to ideate, code, and iterate independently.",
      },
      {
        id: 2,
        title: "Strategic Prototyping:",
        description:
          "Efficiently prototyped and refined project concepts, demonstrating strategic decision-making and resource optimization.",
      },
      {
        id: 3,
        title: "Innovative Problem-Solving:",
        description:
          "Tackled intricate challenges presented by the hackathon, fostering creativity and innovative solutions as a solo participant.",
      },
      {
        id: 4,
        title: "Agile Project Management:",
        description:
          "Effectively managed project tasks and timelines through agile methodologies, ensuring a well-organized solo development process.",
      },
      {
        id: 5,
        title: "Real-Time Data Analytics:",
        description:
          "Accessed and analyzed real-time metrics related to project progress, code quality, and personal performance on an intuitive dashboard.",
      },
      {
        id: 6,
        title: "Adaptive Technology Integration:",
        description:
          "Independently integrated various technologies, showcasing versatility and adaptability in addressing hackathon challenges.",
      },
    ],
    challengesAndSolutions:
      "Throughout my participation in the GetLinkedAI Tech Hackathon, challenges emerged in managing time effectively and optimizing code efficiency as a solo developer. To overcome this, I implemented a structured workflow, prioritizing tasks and optimizing the development process. Additionally, refining code integration processes and adopting best practices ensured a streamlined solo development experience. The challenges posed during the hackathon led to successful solutions, reinforcing my commitment to delivering a high-quality project within the given timeframe.",
    result:
      "The outcome of my participation in the GetLinkedAI Tech Hackathon is a testament to my dedication and ability to overcome challenges independently. Positive feedback highlights the seamless integration of diverse technologies and the innovative problem-solving approach. This experience not only enhanced my skills but also contributed to the success of my project, showcasing effective solutions to challenges in a competitive hackathon environment.",
  },
  {
    id: 3,
    title: "Clutch",
    description:
      "Clutch is a social network that focuses on building communities. Its primary objective is to create a space where users can connect with like-minded individuals, share ideas, and cultivate meaningful communities. Clutch places a strong emphasis on quality connections over quantity, promoting a positive and engaging user experience.",
    coverImg: "/assets/Images/clutch_gallery.png",
    alt: "Spendsense Banner",
    techStack: [
      "Next.js 14",
      "Typescript",
      "Tailwind CSS",
      "Redux",
      "Material UI",
      "Cypress",
      "Jest",
      "Next Auth",
      "GraphQL",
      "React Query",
      "Web Sockets",
      "Firebase",
    ],
    liveLink: "https://clutchapp.vercel.app",
    githubRepo: "https://github.com/realemmanuel/clutch",
    features: [
      {
        id: 1,
        title: "Community-Centric Approach:",
        description:
          "Clutch revolves around communities, allowing users to join and actively participate in groups aligned with their interests.",
      },
      {
        id: 2,
        title: "Quality Connections:",
        description:
          "The platform prioritizes meaningful interactions, encouraging users to engage in thoughtful discussions within their communities.",
      },
      {
        id: 3,
        title: "Creating and Sharing Posts:",
        description:
          "Users can create and share posts within their communities, fostering discussions and sharing ideas with fellow community members.",
      },
      {
        id: 4,
        title: "Interactive Feeds:",
        description:
          "Enjoy interactive and dynamic feeds that showcase posts, updates, and activities from users within the communities you're a part of.",
      },
      {
        id: 5,
        title: "Social Engagement Features:",
        description:
          "Engage with posts through likes, comments, and sharing, enhancing the social experience and fostering community connections.",
      },
      {
        id: 6,
        title: "User Profiles:",
        description:
          "Create and customize user profiles, providing a personal touch to your presence within the Clutch social network.",
      },
      {
        id: 7,
        title: "Notifications:",
        description:
          "Stay updated with real-time notifications for likes, comments, and other relevant activities, ensuring you don't miss out on community interactions.",
      },
      {
        id: 8,
        title: "Search and Discovery:",
        description:
          "Effortlessly discover new communities and connect with users who share your interests through an intuitive search and discovery feature.",
      },
    ],
    challengesAndSolutions:
      "During the development of Clutch, challenges arose in optimizing post creation, implementing real-time updates, and ensuring a seamless social engagement experience. The use of Web Sockets addressed the need for real-time communication, providing dynamic updates to feeds and notifications. Additionally, the implementation of a robust search algorithm facilitated efficient community discovery. These solutions contribute to a social network that not only connects users but also enhances their overall social experience.",
    result:
      "Clutch has successfully created a dynamic social network where users can actively participate in communities, share posts, and engage with like-minded individuals. The platform's emphasis on meaningful connections, combined with advanced features, results in a positive and engaging user experience. Clutch's development journey demonstrates effective solutions to challenges, delivering a social network that fosters vibrant communities and user satisfaction.",
  },
];
