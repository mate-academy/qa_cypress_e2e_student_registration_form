const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1300,
    viewportWidth: 1800,
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            genders: genders[randomIndex],
            randomNumber: faker.phone.phoneNumber('##########'),
            hobbie: hobbies[randomIndex],
            randomAdress: faker.address.streetName()
          };
        }
      });
    }
  }
});
