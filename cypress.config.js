const { defineConfig } = require('cypress');

module.exports = defineConfig({
  watchForFileChanges: false,
  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
    }
  }
});
