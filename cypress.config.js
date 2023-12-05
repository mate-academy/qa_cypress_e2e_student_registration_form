const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 1500,
  e2e: {
    setupNodeEvents(on, config) {
    }
  }
});
