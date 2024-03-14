const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          randomIndex = Math.floor(Math.random() * 3);
          genders = ['Male', 'Female', 'Other'];
          hobbies = ['Sports', 'Reading', 'Music'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            mobileNumber: faker.phone.number('##########'),
            password: '1234qwert!',
            address: faker.location.streetAddress(),
            gender: genders[randomIndex],
            hobby: hobbies[randomIndex],
            
          }
        }
       
      })
    }
  }
});
