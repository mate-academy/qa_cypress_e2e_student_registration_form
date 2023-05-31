const { defineConfig } = require('cypress');
const faker = require('faker');
const genders = ['Male', 'Female', 'Other'];
const subjects = ['Civics', 'Chemistry', 'English', 'Economics'];
const hobbies = ['Sports', 'Reading', 'Music'];

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1540,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser(){
          return { 
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(genders),
            phoneNumber: faker.phone.phoneNumber('##########'),
            subject: faker.random.arrayElement(subjects),
            hobby: faker.random.arrayElement(hobbies),
            adress: faker.address.streetAddress(),
          }
        }
      })
    },
  },
})

