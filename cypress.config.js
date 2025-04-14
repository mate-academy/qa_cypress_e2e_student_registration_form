const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 3);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          const randomYear = Math.floor(Math.random() * 67 + 1940);
          const randomDay = Math.floor(Math.random() * 29);
          const monthsIndex = Math.floor(Math.random() * 12);
          const months = ['January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August',
            'September', 'October', 'November', 'December'];
          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            mobileNumber: faker.phone.number('##########'),
            password: 'testpass45',
            address: faker.location.streetAddress(),
            gender: genders[randomIndex],
            hobby: hobbies[randomIndex],
            birthday: `${randomDay} ${months[monthsIndex]},${randomYear}`
          };
        }
      });
    },
    baseUrl: 'https://demoqa.com'
  }
});
