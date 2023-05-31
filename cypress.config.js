const { defineConfig } = require('cypress')
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1980,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          genders = ['Male', 'Female', 'Other'];
          subjects = ['Hindi', 'English', 'Maths', 'Physics', 'Chemistry', 'Biology', 'Computer Science', 'Commerce', 'Accounting', 'Economics', 'Arts', 'Social Studies', 'History', 'Civics'];
          hobbies = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName : faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(genders),
            phoneNumber: faker.phone.phoneNumber('##########'),
            dateOfBirth: {
              day: Math.floor(7 + Math.random() * 28),
              month: faker.date.month(),
              year: Math.floor(1950 + Math.random() * 60)
            },
            subject: faker.random.arrayElement(subjects),
            hobby: faker.random.arrayElement(hobbies),
            currentAdress: faker.address.streetAddress(),
          };
        }
      })
    },
  },
})
