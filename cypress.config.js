// const { fa } = require('@faker-js/faker');
const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          // eslint-disable-next-line no-undef
          hobbies = ['Sports', 'Reading', 'Music'];
          // eslint-disable-next-line no-undef
          randomIndex = Math.floor(Math.random() * 2);
          // eslint-disable-next-line no-undef
          genders = ['Male', 'Female', 'Other'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            // eslint-disable-next-line no-undef
            randomGenderIndex: genders[randomIndex],
            mobileNumber: '1111111111',
            birth: {
              year: Math.floor(2000 + Math.random() * 20),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 20)
            },
            // eslint-disable-next-line no-undef
            hobby: hobbies[randomIndex],
            address: faker.address.streetAddress()
          };
        }
      });
    }
  }
});
