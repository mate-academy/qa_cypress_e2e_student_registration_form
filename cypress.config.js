const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://demoqa.com',
    defaultCommandTimeout: 100000
  }
});
