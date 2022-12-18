const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: "https://demoqa.com",
    viewportWidth: 1200,
    viewportHeight: 1200,
  },
})
