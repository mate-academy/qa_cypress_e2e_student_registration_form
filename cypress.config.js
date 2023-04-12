const { defineConfig } = require('cypress')
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];

          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            mobile: faker.phone.number('##########'),
            dateOfBirth: faker.date.birthdate(),
            hobby: hobbies[randomIndex],
            address: faker.address.streetAddress(),
          }
        }
      })
    },
  },
})
