const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1320,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const randomSubject = Math.floor(Math.random() * 13);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          const subjects = ['Hindi', 'English', 'Maths', 'Physics', 'Chemistry',
            'Biology', 'Computer Science', 'Commerce', 'Accounting',
            'Economics', 'Arts', 'Social Studies', 'History', 'Civics'];
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
