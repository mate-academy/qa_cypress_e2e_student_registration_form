const { defineConfig } = require('cypress');

module.exports = defineConfig({
  viewportWidth: 1080,
  viewportHeight: 1920,
  e2e: {
    setupNodeEvents(on, config) {
    }
  }
});
