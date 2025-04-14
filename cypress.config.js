const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          const randomIndex = Math.floor(Math.random() * 2);
          const addressFaker = faker.address.streetAddress() + ', ' +
            faker.address.city() + ', ' +
            faker.address.state() + ', ' +
            faker.address.country();
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            phone: faker.phone.phoneNumber('##########'),
            hobbie: hobbies[randomIndex],
            address: addressFaker
          };
        }
      });
    }
  }
});
