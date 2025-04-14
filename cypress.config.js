const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      const hobbies = ['Reading', 'Sports', 'Music'];

      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const genders = ['Male', 'Female', 'Other'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            mobileNumber: faker.phone.phoneNumber('##########'),
            birth: {
              year: Math.floor(1980 + Math.random() * 43),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 29)
            },
            hobby: hobbies[randomIndex],
            address: faker.address.streetAddress()
          };
        }
      });
    }
  }
});
