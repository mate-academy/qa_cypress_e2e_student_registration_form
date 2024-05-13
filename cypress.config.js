const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            randomGenderIndex: Math.floor(Math.random() * 3) + 1,
            phone: faker.phone.number('##########'),
            birth: {
              month: faker.date.month(),
              year: Math.floor(2000 + Math.random() * 20),
              day: Math.ceil(Math.random() * 28)
            },
            hobbies: Math.ceil(Math.random() * 3),
            address: faker.location.streetAddress(true)
          };
        }
      });
    }
  }
});
