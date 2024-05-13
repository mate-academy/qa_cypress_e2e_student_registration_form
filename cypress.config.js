const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          hobbies = ['Sports', 'Reading', 'Music'];
          genders = ['Male', 'Female', 'Other'];
          randomIndex = Math.floor(Math.random() * 3);


          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            mobileNumber: faker.phone.number('##########'),
            birth: {
              year: Math.floor(2000 + Math.random() * 20),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 28)
            },
            hobby: hobbies[randomIndex],
            address: faker.address.streetAddress()
          };
        },
      });
    },
  },
});