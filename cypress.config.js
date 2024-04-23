/* eslint-disable object-shorthand */
const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const gender = faker.person.sex();
          const firstName = faker.person.firstName();
          const lastName = faker.person.lastName();
          return {
            firstName: firstName,
            lastName: lastName,
            // eslint-disable-next-line max-len
            email: faker.internet.email({ firstName: firstName, lastName: lastName }),
            gender: gender,
            phoneNumber: faker.phone.number('##########'),
            birthDay: faker.date.birthdate().toDateString().slice(4),
            adress: `${faker.location.city()} ${faker.location.street()} ${faker.location.buildingNumber()}`
          };
        }
      });
    }
  }
});
