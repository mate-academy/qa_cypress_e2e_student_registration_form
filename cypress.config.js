const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1280,
    viewportWidth: 1800,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          const randomGenderIndex = Math.floor(Math.random() * genders.length);
          const randomHobbyIndex = Math.floor(Math.random() * hobbies.length);
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomGenderIndex],
            randomGenderIndex: randomGenderIndex + 1,
            mobileNumber: '1111111111',
            birth: {
              year: Math.floor(2000 + Math.random() * 20),
              month: faker.date.month(),
              day: String(Math.ceil(Math.random() * 28)).padStart(2, '0')
            },
            hobby: hobbies[randomHobbyIndex],
            address: faker.address.streetAddress(),
            state: 'NCR',
            city: 'Delhi'
          };
        }
      });
    }
  }
});
