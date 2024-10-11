const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const hobbies = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            genderId: randomIndex + 1,
            phoneNumber: '1234567890',
            birth: {
              year: Math.floor(2000 + Math.random() * 20),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 27)
            },
            hobby: hobbies[randomIndex],
            address: faker.location.streetAddress()
          };
        }
      });
    }
  }
});
