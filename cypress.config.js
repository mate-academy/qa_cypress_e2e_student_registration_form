/* eslint-disable no-undef */
/* eslint-disable quotes */
/* eslint-disable no-unused-vars */
const { defineConfig } = require("cypress");
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1180,
    viewportWidth: 1320,
    execTimeout: 8000,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          randomIndex = Math.floor(Math.random() * 2);
          genders = ['Male', 'Female', 'Other'];
          hobbies = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            phone: faker.phone.phoneNumber('##########'),
            hobbie: hobbies[randomIndex],
            address: faker.address.streetName()
          };
        }
      });
    }
  }
});
