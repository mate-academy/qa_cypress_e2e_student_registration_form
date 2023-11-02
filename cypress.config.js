const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    }
  },
  viewportHeight: 1920,
  viewportWidth: 1080

});
