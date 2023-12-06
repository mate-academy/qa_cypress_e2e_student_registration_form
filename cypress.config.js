const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1500,
    viewportHeight: 1500,
    setupNodeEvents(on, config) {
    }
  }
});
