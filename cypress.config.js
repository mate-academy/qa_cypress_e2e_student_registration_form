const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1320,
    taskTimeout: 8000,
    setupNodeEvents(on, config) {
      on('task', {
        generateStudent() {
          randomIndex = Math.floor(Math.random() * 2);
          genders = ['Male', 'Female', 'Other'];
          hobbies = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            phoneNumber: faker.phone.phoneNumber('##########'),
            birthDate: faker.date.past(),
            hobbie: hobbies[randomIndex],
            address: faker.address.streetAddress(),
          };
        },
      });
    },
  },
});
