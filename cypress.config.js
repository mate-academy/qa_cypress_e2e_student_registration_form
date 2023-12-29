const { defineConfig } = require('cypress');

const faker = require('faker');


module.exports = defineConfig({
  e2e: {

    viewportHeight: 1080,
    viewportWidth:1320,
    baseUrl:'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          randomIndex = Math.floor(Math.random() * 2);
          genders = ['Male', 'Female', 'Other'];
          hobbies = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            phone: faker.phone.phoneNumber('##########'),
            hobbie: hobbies[randomIndex],
          };
        }
      })
    },
  },
});
