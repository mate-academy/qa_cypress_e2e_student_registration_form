const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportWidth: 1280,
    viewportHeight: 1024,
    pageLoadTimeout: 65000,
    setupNodeEvents(on, config) {
    }
  }
});
