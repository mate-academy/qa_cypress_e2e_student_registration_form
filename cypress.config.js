const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          const numberOfDigits = '##########'
          randomIndex = Math.floor(Math.random() * 3)
          genders = ['Male', 'Female', 'Other']
          hobbies = ['Sports', 'Reading', 'Music']
          return{
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            mobileNumber: faker.string.numeric(numberOfDigits),
            birth: {
              year: Math.floor(2000 + Math.random() * 20),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 29)
            },
            hobby: hobbies[randomIndex],
            address: faker.location.streetAddress()
          }
        }
      });
    },
  },
});
