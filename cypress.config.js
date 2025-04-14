const { defineConfig } = require('cypress');
const faker = require('faker');
const genders = ['Male', 'Female', 'Other'];
const hobbies = ['Sports', 'Reading', 'Music'];

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            phoneNumber: faker.phone.phoneNumber('#########'),
            birthDate: faker.date.past(),
            birth: {
              month: faker.date.month(),
              year: Math.floor(2000 + Math.random() * 20),
              day: Math.ceil(Math.random() * 28)
            },
            hobby: hobbies[randomIndex],
            address: faker.address.streetAddress()
          };
        }
      });
    }
  }
});
