const { defineConfig } = require('cypress');
/* eslint-disable comma-dangle */
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {},
  },
});
