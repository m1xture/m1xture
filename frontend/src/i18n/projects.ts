export interface ProjectDetails {
  id: string;
  stack: string[];
  links: Record<string, string>;
  date: [Date, Date] | Date;
}

export const projects: ProjectDetails[] = [
  {
    id: "femida",
    stack: [
      "Node.js",
      "Discord.js",
      "MongoDB",
      "mongoose",
      "Express.js",
      "JWT",
      "RabbitMQ",
    ],
    links: {
      github: "https://github.com/GoITeens-Projects/femida",
    },
    date: [new Date("2024-1"), new Date("2025-11")],
  },
  {
    id: "roomcraft",
    stack: ["Next.js", "Redux", "Material UI", "Express.js", "JWT", "MongoDB"],
    links: {
      github: "https://github.com/m1xture/roomcraft",
    },
    date: new Date("2025-08"),
  },
  {
    id: "yummy",
    stack: ["Typescript", "Next.js", "Redux", "SASS"],
    links: {
      github: "https://github.com/Tate-T/so-yummy-typescript-react-project",
      deploy: "https://so-yummy-project.vercel.app/",
    },
    date: new Date("2025-06"),
  },
];
