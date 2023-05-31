const { defineConfig } = require('cypress')
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportWidth: 1980,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {

    },
  },
})
