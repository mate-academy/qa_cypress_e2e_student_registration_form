const { defineConfig } = require('cypress')

module.exports = defineConfig({
  e2e: {
    viewportWith: 1000,
    viewportHeight: 1000,
    setupNodeEvents(on, config) {
    },
  },
})
