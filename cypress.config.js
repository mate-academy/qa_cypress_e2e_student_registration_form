const { defineConfig } = require('cypress')
const faker = require('faker');
module.exports = defineConfig({
  e2e: {
    viewportHeigh: 1080,
    viewportWidth: 1280,
    setupNodeEvents (on, config) {
      on('task', {
        generateUser() {
          genders = ['Male', 'Female', 'Other'];
          subjects = ['Chemistry', 'English', 'Computer Science'];
          hobbies = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(genders),
            mobileNumber: faker.phone.phoneNumber('##########'),
            birthDate: {
              year: Math.floor(1955 + Math.random()*60),
              month: Math.floor(Math.random()*12),
              day: Math.floor(10 + Math.random()*15),
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
