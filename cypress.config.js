const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/automation-practice-form",
    viewportHeight: 1080,
    viewportWidth: 1980,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(['Male', 'Female', 'Other']),
            number: faker.phone.phoneNumber('48########'),
            day: Math.floor(1 + Math.random() * 28),
            month: faker.date.month({ abbr: true }),
            year: Math.floor(1900 + Math.random() * 123),
            subject: {
              first: faker.random.arrayElement(['English', 'Economics', 'Civics']),
              second: faker.random.arrayElement(['Maths', 'Hindi', 'Chemistry'])
            },
            hobbie: faker.random.arrayElement(['Sports', 'Reading', 'Music']),
            address: faker.address.streetAddress(),
          };
        },
      });
    },
  },
})
