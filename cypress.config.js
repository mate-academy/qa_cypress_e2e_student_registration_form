const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1320,
    execTimeout: 8000,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const randomSubject = Math.floor(Math.random() * 10);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Other'];
          const subjects = ['Physics', 'History', 'English', 'IT', 'Chemistry',
            'Economics', 'Maths', 'Arts', 'Biology'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            phone: faker.phone.phoneNumber('##########'),
            hobbie: hobbies[randomIndex],
            adress: faker.address.streetName(),
            subject: subjects[randomSubject]
          };
        }
      });
    }
  }
});
