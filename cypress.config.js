const { defineConfig } = require("cypress");

/* module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) 
    {module.exports = {
      e2e: {
        retries: {
          runMode: 2,
          openMode: 2
        },
        defaultCommandTimeout: 4000,
        viewportHeight: 800,
        viewportWidth: 1280,
        // We've imported your old cypress plugins here.
        // You may want to clean this up later by importing these.
        setupNodeEvents(on, config) {
          return require('./cypress/plugins/index.js')(on, config)
        },
      },
    }
    },
      baseUrl: "https://demoqa.com/automation-practice-form",
      viewportHeight: 500,
      viewportWidth: 960
  },
}); */

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form'
  }
})

