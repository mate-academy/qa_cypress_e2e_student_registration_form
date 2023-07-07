const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
      "baseUrl": "https://demoqa.com/automation-practice-form",
      "viewportWidth": 1024,
    "viewportHeight": 1320,
      

  }
});