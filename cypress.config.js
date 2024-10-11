const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const hobbies = ['Sport', 'Reading', 'Music'];
          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            genderId: randomIndex + 1,
            phoneNumber: faker.phone.number('##########'),
            birth: {
              year: Math.floor(1990 + Math.random() * 30).toString(),
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
