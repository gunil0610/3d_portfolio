import {
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  nextjs,
  reactQuery,
  redux,
  tailwind,
  storybook,
  git,
  youha,
  youha_web,
  threejs,
  roka,
} from "@assets/index";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "Frontend Developer",
    icon: web,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React",
    icon: reactjs,
  },
  {
    name: "Next.js",
    icon: nextjs,
  },
  {
    name: "React Query",
    icon: reactQuery,
  },
  {
    name: "Redux",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Storybook",
    icon: storybook,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
];

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

const experiences: Experience[] = [
  {
    title: "Mortar Gunner",
    company_name: "Republic of Korea Army",
    icon: roka,
    iconBg: "#383E56",
    date: "January 2015 - October 2016",
    points: [
      "As a squad leader of 4.2 inch mortar squad, took care of squad members during training as well as daily life and developed communication skills.",
      "Mastered military skills including marksmanship, map reading and firing mortar.",
      "Discharged as a sergeant after 21 months of military service.",
    ],
  },
  {
    title: "Frontend Developer",
    company_name: "Ticketplace",
    icon: youha,
    iconBg: "#E6DEDD",
    date: "April 2021 - Present",
    points: [
      "Developing and maintaining web applications using Next.js and TypeScript.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

export interface Project {
  name: string;
  description: string;
  tags: { name: string; color: string }[];
  image: string;
  source_code_link: string;
  linkImage?: string;
  linkAlt?: string;
}

const projects: Project[] = [
  {
    name: "Youha",
    description:
      "Web-based platform that allows users to search about youtubers information and make things easier for advertiser and youtubers to send and receive commercial proposals.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "typescript",
        color: "green-text-gradient",
      },
      {
        name: "react-query",
        color: "orange-text-gradient",
      },
      {
        name: "redux",
        color: "pink-text-gradient",
      },
    ],
    image: youha_web,
    source_code_link: "https://www.youha.info/",
    linkImage: youha,
    linkAlt: "youha",
  },
];

export { services, technologies, experiences, projects };
