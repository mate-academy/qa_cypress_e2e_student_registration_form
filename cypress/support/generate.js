const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    viewportHeight: 1080,
    viewportWidth: 1280,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          genders = ['Male', 'Female', 'Other'];
          hobbies = ['Sports', 'Reading', 'Music'];
          subjects = ['English', 'Chemistry', 'Commerce', 'Economics', 'Arts'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(genders),
            phoneNumber: faker.phone.phoneNumber('##########'),
            subject: faker.random.arrayElement(subjects),
            hobby: faker.random.arrayElement(hobbies),
            address: faker.address.streetAddress(),
          };
        },
      });
    },
  },
})
