const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 4000,
    viewportWidth: 2500,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          randomIndex = Math.floor(Math.random() * 3);
          genders = ['Male', 'Female', 'Other'];
          hobbies = ['Sports', 'Reading', 'Reading'];
          userEmail = faker.internet.email().toLowerCase();
          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: userEmail,
            mobileNumber: faker.phone.number('##########'),
            gender: genders[randomIndex],
            birth: {
              month: faker.date.month(),
              year: Math.floor(1900 + Math.random() * 30),
              day: Math.floor(10 + Math.random() * 8),
            },
            hobby: hobbies[randomIndex],
            address: faker.address.streetAddress(),
          };
        },
      });
    },
  },
});
