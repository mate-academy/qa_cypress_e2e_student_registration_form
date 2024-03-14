const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',

    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          randomIndex = Math.floor(Math.random() * 3);
          genders = ['Male', 'Female', 'Other'];
          hobbies = ['Sports', 'Reading', 'Music'];
          return{
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            mobileNumber: faker.phone.number('##########'),
            password: 'Aa12345!',
            address: faker.location.streetAddress(),
            gender: genders[randomIndex],
            hobby: hobbies[randomIndex],
          };
        },
      });
    },
  },
});
