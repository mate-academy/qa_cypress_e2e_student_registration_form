const { defineConfig } = require('cypress');
const faker = require('faker');
module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser(){
          genders = ['Male', 'Female', 'Other']
          hobby = ['Sports', 'Reading', 'Music']
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(genders),
            phoneNumber: faker.phone.phoneNumber('380#######'),
            hobbies: faker.random.arrayElement(hobby),
            adress: faker.address.streetAddress(),
            birth: {
              year: '1998',
              month: 'November',
              day: '30'
            },
            birthDate: `30 November,1998`
          }
        }
      })
    }
  }
});
