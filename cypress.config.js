const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 3);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          const month = faker.date.month();
          const year = Math.floor(Math.random() * 50) + 1950;
          const day = Math.floor(Math.random() * 28) + 1;
          const birthDate = `${day} ${month},${year}`;
          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            mobileNumber: faker.phone.number('##########'),
            password: 'Qwerty@12345',
            address: faker.location.streetAddress(),
            gender: genders[randomIndex],
            hobby: hobbies[randomIndex],
            birthDate
          };
        },
      });
    },
    baseUrl: 'https://demoqa.com'
  },
});
