const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 3);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            mobileNumber: faker.phone.number('##########'),
            password: 'qwerty123!',
            address: faker.location.streetAddress(),
            gender: genders[randomIndex],
            hobby: hobbies[randomIndex]
          };
        }
      });
    }
  }
});
