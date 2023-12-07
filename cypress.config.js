const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportHeight: 1900,
    viewportHeight: 1500,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const gender = faker.person.sex();
          const firstName = faker.person.firstName();
          const lastName = faker.person.lastName();
          return {
            firstName: firstName,
            lastName: lastName, 
            email: faker.internet.email({ firstName: firstName, lastName: lastName }),
            gender: gender,
            phoneNumber: faker.phone.number('##########'),
            // birthday: faker.date.birthdate().toDateString().slice(4),
            currentAddress: `${faker.location.city()} ${faker.location.street()} ${faker.location.buildingNumber()}`,
          }
        },
      });
    },
  },
});
