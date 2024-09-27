const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1300,
    viewportWidth: 1000,
    setupNodeEvents(on, config) {
    }
  }
});
