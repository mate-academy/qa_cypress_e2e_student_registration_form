const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportWidth: 1024,
    viewportHeight: 768,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
    }
  }
});
