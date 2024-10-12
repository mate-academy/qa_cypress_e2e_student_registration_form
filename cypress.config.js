const { faker } = require('@faker-js/faker');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const arrOfGender =
           ['#gender-radio-1', '#gender-radio-2', '#gender-radio-3'];
          const randomGender = Math.floor(Math.random() * arrOfGender.length);

          const randomHobbies = Math.floor(Math.random() * 2) + 1;
          const hobbies = ['Sport', 'Reading', 'Music']; // hobby select

          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            genderId: randomGender,
            phoneNumber: faker.phone.number('##########'),
            birth: {
              year: Math.floor(2000 + Math.random() * 20).toString(),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 27)
            },
            hobby: hobbies[randomHobbies],
            address: faker.location.streetAddress()
          };
        }
      });
    }
  }
});
