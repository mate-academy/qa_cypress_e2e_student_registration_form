const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/',
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const genders = ['Male', 'Female', 'Other'];
          const hobbiesAll = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            mobileNumber: faker.phone.phoneNumber('##########'),
            birth: {
              year: Math.floor(1990 + Math.random() * 20),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 29)
            },
            hobbies: hobbiesAll[randomIndex],
            address: faker.address.streetAddress()
          };
        }
      });
    }
  }
});
