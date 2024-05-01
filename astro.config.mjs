import { defineConfig } from "astro/config";
import alpinejs from "@astrojs/alpinejs";
import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  output: "server",
  integrations: [alpinejs()],
  adapter: node({
    mode: "standalone",
  }),
  build: {
    // This is the proposed change which will fix the problem for both
    // `astro build && astro preview` and `astro dev`.
    // cssCodeSplit: false,
  },
  vite: {
    build: {
      // This gives the correct behaviour if setting it to false, but only
      // fixes it for `astro build && astro preview` and not for `astro dev`.
      cssCodeSplit: false
    },
  },
});
