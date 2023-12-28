const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1500,
    viewportWidthL: 1500,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const randomIndexForState = Math.floor(Math.random() * 3);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sport', 'Reading', 'Music'];
          const states = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];
          return {
            gender: genders[randomIndex],
            hobbie: hobbies[randomIndex],
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber('##########'),
            address: faker.address.streetAddress(),
            state: states[randomIndexForState]
          };
        }
      });
    }
  }
});
