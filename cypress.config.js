const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
    },

    baseUrl:'https://demoqa.com/automation-practice-form',

    viewportWidth:1480,
    viewportHeight: 1200
  },
})
