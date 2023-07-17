const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: `https://demoqa.com/automation-practice-form`,
    viewportHeight: 1100,
    viewportWidth: 1300,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomNum = Math.floor(Math.random() * 2);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          const subjects = ['Math', 'Ukrainian', 'Biology', 'Chemistry', 'English'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomNum],
            number: faker.phone.phoneNumber('380#######'),
            subject: faker.random.arrayElement(subjects),
            hobby: hobbies[randomNum],
            address: faker.address.streetAddress()
          };
        }
      });
    }
  }
});