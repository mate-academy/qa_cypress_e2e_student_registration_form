const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportWidth: 1500,
    viewportHeight: 1200,
    setupNodeEvents(on, config) {
    }
  }
});
