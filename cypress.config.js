const { defineConfig } = require("cypress");
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1280,
    viewportWidth: 1800,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          hobbies = ['Sports', 'Reading', 'Music'];
          randomIndex = Math.floor(Math.random() * 2);
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            randomGenderIndex: Math.floor(Math.random() * 3) + 1,
            mobileNumber: '1111111111',
            birth: {
              year: Math.floor(2000 + Math.random() * 20 ),
              month: faker.date.month(), 
              day: Math.ceil(Math.random() * 28)
            },
            hobby: hobbies[randomIndex],
            address: faker.location.streetAddress()
          };
        },
      });
    },
  },
});
