const { defineConfig } = require('cypress')
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1980,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          genders = ['Male', 'Female', 'Other'];
          subjects = ['English', 'Social Studies', 'Economics'];
          hobbies = ['Sports', 'Reading', 'Music']
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(genders),
            mobile: faker.phone.phoneNumber('##########'),
            birthdate: {
              year: Math.floor(1980 + Math.random() * 30),
              month: Math.floor(Math.random() * 12),
              day: Math.floor(Math.random() * 28), 
            },
            subject: faker.random.arrayElement(subjects),
            hobby: faker.random.arrayElement(hobbies),
            address: faker.address.streetAddress(),
          }
        }
      })
    },
  },
})
