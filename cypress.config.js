const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseURL: `https://demoqa.com/automation-practice-form`,
    setupNodeEvents(on, config) {
    }
  }
});
