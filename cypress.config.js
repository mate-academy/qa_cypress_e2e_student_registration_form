const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1300,
    setupNodeEvents(on, config) {
    }
  }
});
