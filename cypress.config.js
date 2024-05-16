const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    pageLoadTimeout: 60000,
    baseUrl: 'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const hobbies = ['Sports', 'Reading', 'Music'];

          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            randomGenderIndex: Math.floor(Math.random() * 3) + 1,
            mobileNumber: '2222222222',
            birth: {
              day: Math.ceil(Math.random() * 28),
              month: faker.date.month(),
              year: Math.floor(2000 + Math.random() * 20)
            },
            hobby: hobbies[randomIndex],
            address: faker.location.streetAddress()

          };
        }
      });
    }
  }
});
