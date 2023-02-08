const { defineConfig } = require('cypress');

const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1320,

    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          randomIndex = Math.floor(Math.random() * 3);
          genders = ['Male', 'Female', 'Other'];
          hobbies = ['Sports', 'Reading', 'Music'];
          userEmail = faker.internet.email().toLowerCase();
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: userEmail,
            mobileNumber: faker.phone.phoneNumber('##########'),
            password: '12345Qwert!',
            gender: genders[randomIndex],
            birth: {
              year: Math.floor(2000 + Math.random() * 20),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 29),
            },
            hobby: hobbies[randomIndex],
            address: faker.address.streetAddress(),
          };
        },
      });
    },
  },
});
