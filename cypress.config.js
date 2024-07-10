const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/automation-practice-form",
    pageLoadTimeout: 10000,
    setupNodeEvents(on, config) {},
  },
});
