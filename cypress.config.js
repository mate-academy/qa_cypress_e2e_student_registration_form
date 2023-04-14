const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
    on("task", {
      generateUser() {
        let randomIndex = Math.floor(Math.random() * 3);
        let genders = ['Male', 'Female', 'Other'];
        let hobbies = ['Sports', 'Reading', 'Music'];
        let states = ['NCR', 'Uttar Pradesh', 'Haryana', 'Rajasthan'];
        let cities = ['Jaipur', 'Jaiselmer'];

      return {
        firstName: faker.name.firstName(),
        lastName: faker.name.lastName(),
        email: faker.internet.email(),
        gender: genders[randomIndex],
        mobileNumber: faker.phone.number('##########'),
        birthDate: faker.date.birthdate(),
        hobby: hobbies[randomIndex],
        address: faker.address.streetAddress(),
        state: states[randomIndex],
        city: cities[randomIndex],
      };
      },  
    });
  },
},
});
