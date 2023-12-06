const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1200,
    viewportWidth: 1400,
    setupNodeEvents(on, config) {
    }
  }
});
