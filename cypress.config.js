const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 720,
    viewportWidth: 1080,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          const randomIndex = Math.floor(Math.random() * genders.length);
          return {
            FirstName: faker.person.firstName(),
            LastName: faker.person.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            mobile: faker.phone.number('##########'),
            birth: {
              year: Math.floor(2000 - Math.random() * 20),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 29)
            },
            hobby: hobbies[randomIndex],
            address: faker.location.streetAddress()
          };
        }
      });
    }
  }
});
