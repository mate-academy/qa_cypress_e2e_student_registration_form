const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');
const genders = ['Male', 'Female', 'Other'];
const subjects = ['Math', 'Arts', 'Biology', 'Physics', 'Commerce', 'Economics'];
const hobbies = ['Sports', 'Reading', 'Music'];

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            hobby: hobbies[randomIndex],
            mobileNumber: faker.phone.number('##########'),
            address: faker.location.streetAddress()
          };
        },
      });
    },
  },
});
