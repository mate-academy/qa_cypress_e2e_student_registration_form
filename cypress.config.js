const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportWidth: 1000,
    viewportHeight: 1500,
    setupNodeEvents(on, config) {
    }
  }
});
