// @ts-check
import { defineConfig, fontProviders } from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import netlify from "@astrojs/netlify";



// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: netlify(),
  site: "https://m1xture.xyz",

  vite: {
    plugins: [tailwindcss()],
  },

  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Golos Text",
      cssVariable: "--font-golos",
      subsets: ["latin", "cyrillic"],
    },
  ],

  integrations: [sitemap()],
});
