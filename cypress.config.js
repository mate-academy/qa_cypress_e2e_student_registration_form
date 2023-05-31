const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      on("task",{
        generateUser() {
          const genders = ['Female', 'Male', 'Other'];
          const subjects = ['English', 'Chemistry', 'Computer Science', 'Art'];
          const hobbies = ['Music', 'Sports', 'Reading'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(genders),
            mobileNumber: faker.phone.phoneNumber('##########'),
            birth: {
              year: Math.floor(1900 + Math.random() * 100),
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
})
