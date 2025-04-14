const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          function getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
          }
          const randomIndex = Math.floor(Math.random() * 3);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          const states = ['NCR', 'Uttar Pradesh', 'Haryana'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            phone: faker.phone.phoneNumber('##########'),
            birth: {
              year: getRandomInt(1900, 2023),
              month: getRandomInt(1, 12),
              day: getRandomInt(1, 28)
            },
            hobbie: hobbies[randomIndex],
            text: faker.lorem.paragraph(2),
            state: states[randomIndex],
            date: '10 Sep 2000'

          };
        }
      });
    }
  }
});
