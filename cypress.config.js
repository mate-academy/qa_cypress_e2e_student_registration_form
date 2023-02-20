const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportWidth: 720,
    baseUrl: 'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
    },
  },
})
