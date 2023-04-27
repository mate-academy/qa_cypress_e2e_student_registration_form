const { defineConfig } = require('cypress')
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          let randomIndex = Math.floor(Math.random() * 2);
          let genders = ['Male', 'Female', 'Other'];
          let hobbies = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            phoneNumber: faker.phone.phoneNumber('##########'),
            hobby: hobbies[randomIndex],
            address: faker.address.streetAddress(),
          }
        }
      })
    },
  },
})

