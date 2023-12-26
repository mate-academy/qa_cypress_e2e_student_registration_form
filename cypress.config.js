const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1300,
  viewportHeight: 1300,
  e2e: {
    setupNodeEvents(on, config) {
    }
  }
});
