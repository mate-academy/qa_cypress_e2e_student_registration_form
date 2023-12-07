const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1920,
    viewportWidth: 1080,
    setupNodeEvents(on, config) {
    }
  }
});
