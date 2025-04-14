const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportWidth: 1728,
    viewportHeight: 1117,
    pageLoadTimeout: 60000,
    screenshotOnRunFailure: false,
    setupNodeEvents(on, config) {
    }
  }
});
