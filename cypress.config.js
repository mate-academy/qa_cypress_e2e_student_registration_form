const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: `https://demoqa.com/automation-practice-form`,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 3);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          const subjects = ['Physics', 'History', 'English', 'IT', 'Chemistry',
            'Economics', 'Maths', 'Arts', 'Biology'];
          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            mobileNumber: faker.phone.number('##########'),
            birth: {
              year: Math.floor(2000 + Math.random() * 20),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 29)
            },
            hobby: hobbies[randomIndex],
            address: faker.address.streetName(),
            subject: subjects[randomIndex]
          };
        }
      });
    }
  }
});
