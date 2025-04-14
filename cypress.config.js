const { faker } = require('@faker-js/faker');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
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
            randomGender: randomIndex + 1,
            mobileNumber: '1234567890',
            birth: {
              year: Math.floor(2000 + Math.random() * 22),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 27)
            },
            hobby: hobbies[randomIndex],
            address: faker.location.streetAddress()
          };
        }
      });
    }
  }
});
