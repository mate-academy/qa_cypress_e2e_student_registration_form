const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          hobbies = ['Sports', 'Reading', 'Music'];
          randomGenderIndex = Math.floor(Math.random() * 2) + 1;

          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            randomGenderIndex: randomGenderIndex,
            mobileNumber: '1111111111',
            birth: {
              year: Math.floor(2000 + Math.random() * 20),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 28),
            },
            hobby: hobbies[randomGenderIndex],
            address: faker.address.streetAddress()
          };
        },
      });
    },
  },
});
