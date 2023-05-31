const { defineConfig } = require('cypress')
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1600,
    viewportWidth: 1200,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          genders = ['Male', 'Female', 'Other'];
          hobbies = ['Sports', 'Reading', 'Music'];
          subjects = ['Hindi', 'English', 'Chemistry', 'Maths', 'History', 'Physics'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(genders),
            phoneNumber: faker.phone.phoneNumber('##########'),
            subject: faker.random.arrayElement(subjects),
            hobby: faker.random.arrayElement(hobbies),
            address: faker.address.streetAddress(),
          };
        },
      });
    },
  },
})