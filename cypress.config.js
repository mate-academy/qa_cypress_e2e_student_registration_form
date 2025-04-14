const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1320,
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
            phoneNumber: '9876543215',
            birth: {
              year: Math.floor(1950 + Math.random() * 20).toString(),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 27),
            },
            hobby: hobbies[randomIndex],
            address: faker.location.streetAddress(),
          };
        },
      });
    },
  },
});

