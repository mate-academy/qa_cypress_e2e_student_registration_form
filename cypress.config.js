const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 500,
    viewportWidth: 960
  },
})
