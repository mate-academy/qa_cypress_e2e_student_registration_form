const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://demoqa.com',
    viewportHeight: 600,
    viewportWidth: 1000
  },
})
