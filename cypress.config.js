const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportHeight: 800,
    viewportWidth: 600,
    setupNodeEvents(on, config) {
      on('task', {
        // generator usera - faker
        generateUser() {
          const gender = faker.person.sex();
          const firstName = faker.person.firstName(gender);
          const lastName = faker.person.lastName(gender);
          return {
            firstName,
            lastName,
            email: faker.internet.email({ firstName, lastName }),
            gender,
            phoneNumber: faker.phone.number('##########')
            //  birthDate: faker.date.birthdate().toDateString().slice(4),
          };
        }
      });
      // implement node event listeners here
    }
  }
});
