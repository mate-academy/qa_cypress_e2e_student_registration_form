const { defineConfig } = require('cypress');
const faker = require('faker');
const genders = ['Female', 'Male', 'Other'];
const subjects = ['Hindi', 'Economics', 'Arts'];
const hobbies = ['Sports', 'Reading', 'Music'];

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1980,
    setupNodeEvents(on, config) {
      on("task",{
        generateUser() {
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(genders),
            mobile: faker.phone.phoneNumber('##########'),
            subject: faker.random.arrayElement(subjects),
            hobby: faker.random.arrayElement(hobbies),
            address: faker.address.streetAddress(),
          };
        },
      });
    },
  },
});
