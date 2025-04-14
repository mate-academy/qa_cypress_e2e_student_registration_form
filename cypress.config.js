const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser () {
          const randomIndex = Math.floor(Math.random() * 2);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            hobby: hobbies[randomIndex],
            phoneNumber: faker.phone.phoneNumber('##########'),
            address: faker.address.streetAddress(),
            birth: {
              month: faker.date.month(),
              year: Math.floor(2000 + Math.random() * 20),
              day: Math.ceil(Math.random() * 28)
            }
          };
        }
      });
    }
  }
});
