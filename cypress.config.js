const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    "baseUrl": "https://demoqa.com/automation-practice-form",
    viewportHeight: 1050,
    viewportWidth: 1680
  },
});
