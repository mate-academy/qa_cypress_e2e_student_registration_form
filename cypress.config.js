const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  viewportWidth: 1000,
  viewportHeight: 1500,
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          // const randomNumber = Math.floor(Math.random(1000) * 1000);
          const newGender = faker.person.sex();
          const newUserName = faker.person.firstName(newGender);
          const newUserSurname = faker.person.lastName(newGender);
          return {
            userName: newUserName,
            userSurname: newUserSurname,
            gender: newGender,
            email: faker.internet
              .email({ firstName: newUserName, lastName: newUserSurname }),
            address: faker.location.streetAddress(),
            number: faker.phone.number('##########')
          };
        }
      });
    }
  }
});
