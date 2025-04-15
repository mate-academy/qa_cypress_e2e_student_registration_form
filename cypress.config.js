const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            randomIndex: Math.floor(Math.random() * 3) + 1,
            mobileNumber: '0731231212',
            birth: {
              year: Math.floor(2000 + Math.random() * 20),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 28)
            },
            currentAdress: faker.location.streetAddress()
          };
        }
      });
    }
  }
});
