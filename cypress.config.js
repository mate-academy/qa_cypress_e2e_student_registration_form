const { defineConfig } = require('cypress')
const faker = require('faker');

const genders = ['Female', 'Male', 'Other'];
const subjects = ['Commerce', 'Civics', 'Biology'];
const hobbies = ['Music', 'Sports', 'Reading'];

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      on("task",{
        generateUser() {          
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(genders),
            mobileNumber: faker.phone.phoneNumber('##########'),
            birth: {
              year: Math.floor(1950 + Math.random() * 60),
              month: Math.floor(Math.random() * 12),
              day: Math.floor(18 + Math.random() * 10),
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
