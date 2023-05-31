const { defineConfig } = require('cypress')
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1980,

    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(['Male', 'Female', 'Other']),
            mobileNumber: faker.phone.phoneNumber('##########'),
            birth: {
              year: Math.floor(1960 + Math.random() * 60),
              month: Math.floor(Math.random() * 12),
              day: Math.floor(10 + Math.random() * 15)
            },
            hobby: faker.random.arrayElement(['Sports', 'Reading', 'Music']),
            address: faker.address.streetAddress()
          }
        }
      })
    },
  },
})
