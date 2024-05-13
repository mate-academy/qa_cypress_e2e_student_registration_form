const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1280,
    viewportWidth: 1520,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          const hobbies = ['Sports', 'Reading', 'Music'];
          const randomIndex = Math.floor(Math.random() * 2);
          const genders = ['Male', 'Female', 'Other'];

          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            randomGenderIndex: genders[randomIndex],
            mobileNumber: '1111111111',
            birth: {
              year: Math.floor(2000 + Math.random() * 20),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 28)
            },
            hobby: hobbies[randomIndex],
            address: faker.address.streetAddress()
          };
        },
      });
    },
  },
});
