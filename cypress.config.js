const { defineConfig } = require('cypress')
const faker = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1200,
    viewportWidth: 1680,
    setupNodeEvents(on, config) {
      on("task",{
        generateUser() {
          genders = ['Female', 'Male', 'Other'];
          subjects = ['English', 'Chemistry', 'Computer Science'];
          hobbies = ['Music', 'Sports', 'Reading'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(genders),
            mobileNumber: faker.phone.phoneNumber('##########'),
            birth: {
              year: Math.floor(1960 + Math.random() * 60),
              month: Math.floor(Math.random() * 12),
              day: Math.floor(10 + Math.random() * 15),
            },
            subject: faker.random.arrayElement(subjects),
            hobby: faker.random.arrayElement(hobbies),
            address: faker.address.streetAddress(),
          };
        },
      });
    },
  },
});