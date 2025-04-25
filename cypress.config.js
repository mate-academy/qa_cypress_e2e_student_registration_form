const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    chromeWebSecurity: false,
    pageLoadTimeout: 120000,
    setupNodeEvents(on, config) {
    }
  }
});
