const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1440,
    viewportWidth: 1440,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          randomIndex = Math.floor(Math.random() * 3);
          genders = ['Male', 'Female', 'Other'];
          hobbies = ['Reading', 'Sport', 'Music'];
          userEmail = faker.internet.email().toLowerCase();
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: userEmail,
            phoneNumber: faker.phone.phoneNumber('##########'),
            gender: genders[randomIndex],
            hobby: hobbies[randomIndex],
            address: faker.address.streetAddress()
          };
        },
      });
    },
  },
});
