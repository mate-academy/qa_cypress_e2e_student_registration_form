const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(['Male', 'Female', 'Other']),
            mobileNumber: faker.phone.phoneNumber('###########'),
            subjects: faker.random.arrayElement(['Physics', 'English', 'Chemistry']),
            hobbies: faker.random.arrayElement(['Sports', 'Reading', 'Music']),
            address: faker.address.streetAddress(),
          }
        }
      }
      )
    },
  },
})
