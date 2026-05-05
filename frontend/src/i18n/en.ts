import type { Translation } from "../@types/Translation";

export default {
  header: {
    nav: ["About", "Projects", "Contacts"],
  },
  hero: {
    title: "Hi, I'm m1xture",
    desc: "A passionate fullstack developer who develops modern websites and reliable backend systems",
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
