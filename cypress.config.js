const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const subject = 'Computer Science';
          const hobbies = ['Sports', 'Reading', 'Music'];
          const gender = ['Male', 'Female', 'Other'];
          const index = Math.floor(Math.random() * 3);

          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            genders: gender[index],
            mobileNumber: `${Math.random().toString().slice(2, 11)}`,
            birth: {
              day: Math.ceil(Math.random() * 28),
              month: faker.date.month(),
              year: Math.floor(2000 + Math.random() * 20)
            },
            subject,
            hobby: hobbies[randomIndex],
            address: faker.location.streetAddress()
          };
        }
      });
    }
  }
});
