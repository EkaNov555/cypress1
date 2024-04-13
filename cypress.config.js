const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl:'http://localhost:3000/',
    retries:2,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
  configurations: {
    computer: {
      viewportWidth: 1366,
      viewportHeight: 768,
    },
    mobile: {
      viewportWidth: 375,
      viewportHeight: 667,
    },
  },
});
