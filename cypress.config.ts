import { defineConfig } from "cypress";

export default defineConfig({
  // env: {
  //   baseUrl: "http://localhost:5173",
  // },
  e2e: {
    baseUrl: "http://localhost:5173",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
