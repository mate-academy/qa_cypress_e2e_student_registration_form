const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 1500,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const name = faker.person.firstName();
          return {
            firstName: name,
            lastName: faker.person.lastName(),
            gender: faker.person.sex(),
            email: faker.internet.email(name),
            address: faker.location.streetAddress(),
            number: faker.phone.number('##########')
          };
        }
      });
    }
  }
});
