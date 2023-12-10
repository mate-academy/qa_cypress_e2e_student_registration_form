const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');
// const { first } = require('cypress/types/lodash');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportHeight: 1200,
    viewportWidth: 1080,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const gender = faker.person.sex();
          const firstName = faker.person.firstName(gender);
          const lastName = faker.person.lastName(gender);
          return {
            firstName,
            lastName,
            email: faker.internet.email({ firstName, lastName }),
            gender,
            phoneNumber: faker.phone.number('##########'),
            birthDate: faker.date.birthdate().toDateString().slice(4)
          };
        }
      });
    }
  }
});
