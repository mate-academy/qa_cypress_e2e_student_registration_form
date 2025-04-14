const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1100,
    viewportWidth: 1400,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const gender = ['Male', 'Other'];
          const hobbies = ['Sport', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            genders: gender[randomIndex],
            phone: faker.phone.phoneNumber('##########'),
            hobbies: hobbies[randomIndex]
          };
        }
      });
    }
  }
});
