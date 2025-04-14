const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 900,
    viewportWidth: 1550,
    setupNodeEvents(on, config) {
    }
  }
});
