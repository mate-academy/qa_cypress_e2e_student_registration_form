const { defineConfig } = require('cypress')
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl:'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          let randomIndex = Math.floor(Math.random * 2);
          let gender = ['Male', 'Female', 'Other']

          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: gender[randomIndex],
            mobile: faker.phone.number('##########'),
            address: faker.address.streetAddress()
          }
        },
      });
    },
  },
})
 