const { defineConfig } = require('cypress');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
    }
  }
});
