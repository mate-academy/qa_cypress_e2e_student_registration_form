const { defineConfig } = require('cypress');
const faker = require('faker');
let hobbies = [];
let randomIndex = [];
let genders = [];

module.exports = defineConfig({
    e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
      viewportHeight: 1080,
      viewportWidth: 1320,
      setupNodeEvents(on, config) {
        on('task', {
          generateUser() {
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
            birth: {
            month: faker.date.month(),
              year: Math.floor(1970 + Math.random() * 50),
              day: Math.ceil(Math.random() * 28)
            },
            hobby: hobbies[randomIndex],
            address: faker.address.streetAddress(),
          };
        }
      });
    }
  }
});
