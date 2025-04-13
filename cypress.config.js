const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: `https://demoqa.com/automation-practice-form`,
    viewportHeight: 1200,
    viewportWidth: 1600,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNumber = Math.floor(Math.random() * 2);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomNumber],
            hobby: hobbies[randomNumber],
            number: faker.phone.phoneNumber('98########'),
            subject: faker.random
              .arrayElement(['English', 'Computer Science', 'Math']),
            address: faker.address.streetAddress()
          };
        }
      });
    }
  }
});
