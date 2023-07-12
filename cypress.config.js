const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1366,
    viewportHeight: 1200
  }
});
