const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  chromeWebSecurity: false,
  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          const randomIndex = (Math.floor(Math.random() * 3));
          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            mobileNumber: Math.random().toString().slice(2, 10),
            address: faker.location.city(),
            gender: genders[randomIndex],
            hobbie: hobbies[randomIndex]
          };
        }
      });
    }
  }
});
