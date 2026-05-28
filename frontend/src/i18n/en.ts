import type { Translation } from "../@types/Translation";

export default {
  meta: {
    title: "m1xture: fullstack developer",
    description:
      "I'm m1xture, a full-stack developer with commercial experience. I work with Node.js, Java, and modern frontend technologies",
  },
  header: {
    nav: ["About", "Projects"],
  },
  hero: {
    title: "Hi, I'm m1xture",
    desc: "A passionate fullstack developer who develops modern websites and reliable backend systems",
  },
  about: {
    title: "About me",

    description: [
      "I started by learning front-end technologies, then gradually moved on to Node.js and JavaScript backend frameworks. After that, I got into Java, and now I'm honing my skills in Spring",
    ],
    info: {
      startedProgramming: ["Started Programming since", "y.", "m."],
      programmingLanguages: "Programming languages",
      commercialExperience: ["Commercial experience", "years"],
      englishLevel: "English Level",
      location: ["Location", "Ukraine - EU"],
      email: "Email",
    },
  },
  projects: [
    {
      id: "femida",
      title: "Femida: Discord bot for the whole community",
      description:
        "A team project initiated by the GoITeens Academy. The task was to create a multifunctional bot for moderating chat messages, verifying academy students, collecting statistics, and managing a loyalty program. Three services were implemented: a dashboard, a backend, and the bot itself",
    },
    {
      id: "roomcraft",
      title: "Roomcraft: Room designer",
      description:
        "We had five days to build a fully functional room design tool from scratch. We managed to complete all the tasks, including the additional ones. The judges highly praised our work and awarded us first place",
    },

    {
      id: "yummy",

      title: "So Yummy: A recipe book in your pocket",
      description:
        "This is a website with a huge collection of recipes. At that point, the backend had already been developed, so our team focused solely on the frontend. You can save recipes to your favorites, search for them by category, and even add your own",
    },
  ],
} satisfies Translation;
