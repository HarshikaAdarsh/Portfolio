import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  html,
  css,
  reactjs,
  tailwind,
  nodejs,
  mongodb,
  git,
  alphafitness,
  ACETOM,
  electrician,
  Calculator,
  ExoticExposure
} from "../assets";

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
    title: "Front End Developer",
    icon: web,
  },
  {
    title: "React Developer",
    icon: mobile,
  },
  {
    title: "Java Programmer",
    icon: backend,
  },
  {
    title: "UI UX Designer",
    icon: creator,
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
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "git",
    icon: git,
  },
];

const experiences = [
  {
    title: "Frontend Web Developer (project-lead)",
    company_name: "aligners",
    icon: alphafitness,
    iconBg: "#383E56",
    date: "Aug 2022 - Present · 1 yr 1 mo",
    points: [
      "Managed and supervised Frontend part of website .",
      "First worked as a intern and then after 3 month join part time ",
      "I joined aligners because it is a growing startup of gaming",
    ],
  },
  {
    title: "Overall Coordinator",
    company_name: "E cell SRMCM",
    icon: ACETOM,
    iconBg: "#E6DEDD",
    date: "Jun 2022 - Present · 1 yr 3 mos",
    points: [
      "Helping student to become entreprenure.",
      "Presenting opportunities and helping Entreprenures building thier product",
    ],
  },
  {
    title: "Student Volunteer",
    company_name: "Institution's Innovation Council - SRMCM",
    icon: electrician,
    iconBg: "#E6DEDD",
    date: "Feb 2022 - Present · 1 yr 7 mos",
    points: [
      "Worked with expertise in technoloy,students who were innovative.",
      "Delivered high - quality Workshops and excellent Guest Lectures.",
      "Thrived in fast - paced environments and was able to handle multiple projects simultaneously",
    ],
  },
]

const projects = [
  {
    name: "FasalGuru",
    description:
      "This project aims to facilitate farmers, especially smallholder farmers, through use of technology allowing for improvement in productivity, yield and fairer sale of crops tothe consumer directly.",
    tags: [
      {
        name: "React",
        color: "orange-text-gradient",
      },
      {
        name: "Nodejs",
        color: "blue-text-gradient",
      },
      {
        name: "MongoDB",
        color: "green-text-gradient",
      },
    ],
    image: ExoticExposure,
    source_code_link: "https://github.com/HarshikaAdarsh/Agrotech_React",
  },
  {
    name: "Portfolio",
    description:
      "Interactive 3D portfolio created using technology Reactjs and threejs",
    tags: [
      {
        name: "Reactjs",
        color: "orange-text-gradient",
      },
      {
        name: "Threejs",
        color: "blue-text-gradient",
      },
      {
        name: "TailwindCss",
        color: "green-text-gradient",
      },
    ],
    image: Calculator,
    source_code_link: "https://github.com/HarshikaAdarsh/Portfolio",
  },
];

export { services, technologies, experiences, projects };
