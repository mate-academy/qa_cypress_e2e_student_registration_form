const { defineConfig } = require('cypress')
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          const email = faker.internet.email().toLowerCase();
          const randomDay = Math.floor(10 + Math.random() * 10);
          const randomYear = Math.floor(1900 + Math.random() * 120);
          const randomSelect = Math.ceil(Math.random() * 3);

          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: email,
            gender: randomSelect,
            phoneNumber: faker.phone.number('380#######'),
            birth:{
              day: randomDay,
              month: faker.date.month(),
              year: randomYear,
            },
            subjects: randomSelect,
            hobbies: randomSelect,
            address: faker.address.streetAddress(),
          };
        },
      });
    },
  },
})
