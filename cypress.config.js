const { defineConfig } = require('cypress')
const faker = require('faker');
const genders = ['Male', 'Female', 'Other'];
const subjects = ['English', 'Chemistry', 'Biology'];
const hobbies = ['Sports', 'Reading', 'Music'];

module.exports = defineConfig({
  e2e: {
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
            mobileNumber: faker.phone.phoneNumber('##########'),
            subject: faker.random.arrayElement(subjects),
            hobby: faker.random.arrayElement(hobbies),
            address: faker.address.streetAddress()
          };
        },
      });
    },
  },
});

