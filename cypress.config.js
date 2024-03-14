const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 3);
          const genders = ['Male', 'Female', 'Other'];
          const hobby = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            mobile: faker.phone.phoneNumber('##########'),
            hobbies: hobby[randomIndex],
            address: faker.address.streetAddress()
          };
        }
      });
    }
  }
});
