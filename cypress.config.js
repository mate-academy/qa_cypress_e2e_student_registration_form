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
          const numberOfDigits = '##########';
          const randomIndex = Math.floor(Math.random() * 3); // Declare randomIndex with const
          const genders = ['Male', 'Female', 'Other']; // Declare genders with const
          const hobbies = ['Sports', 'Reading', 'Music']; // Declare hobbies with const

          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            mobileNumber: faker.phone.number(numberOfDigits),
            birth: {
              year: Math.floor(1990 + Math.random() * 34),
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
