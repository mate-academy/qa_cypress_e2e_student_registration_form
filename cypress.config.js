const { faker } = require('@faker-js/faker');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportHeight: 1200,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const sex = faker.person.sex();
          const firstNameG = faker.person.firstName(sex);
          const lastNameG = faker.person.lastName(sex);

          return {
            firstName: firstNameG,
            lastName: lastNameG,
            email: faker.internet.email({
              firstName: firstNameG,
              lastName: lastNameG
            }),
            gender: sex,
            phone: faker.phone.number('##########'),
            birthDate: faker.date.birthdate().toDateString().slice(3),
            address: faker.location.streetAddress()
          };
        }
      });
    }
  }
});
