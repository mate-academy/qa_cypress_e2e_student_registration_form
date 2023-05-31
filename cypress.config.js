const { defineConfig } = require('cypress')
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1980,
    
    setupNodeEvents(on, config) {
      on("task",{
        generateUser() {
          genders = ['Male', 'Female', 'Other'];
          subjects = ['English', 'Chemistry', 'Biology'];
          hobbies = ['Sports', 'Reading', 'Music'];

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

