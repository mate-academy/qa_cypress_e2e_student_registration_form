const { defineConfig } = require('cypress');

const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const randomHobby = Math.floor(Math.random() * 2);
          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            genderId: randomIndex + 1,
            phoneNumber: '0645167290',
            birth: {
              year: Math.floor(2000 + Math.random() * 20).toString(),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 27)
            },
            hobby: randomHobby + 1,
            adress: faker.location.streetAddress()
          };
        }
      });
    }
  }
});
