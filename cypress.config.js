const { defineConfig } = require('cypress')
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1000,
    viewportHeight: 1200,
    baseUrl: 'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
      on("task", {
        generateUser(){
          randomDigitsFrom1to3 = Math.floor(Math.random()*3+1); //random digits from 1 to 3
          phone = faker.phone.phoneNumber('##########');
          firstName = faker.name.firstName();
          lastName = faker.name.lastName();
          userEmail = faker.internet.email();
          dateOfBirth =  `15 ${faker.date.month({ abbr: true, context: true })} ${faker.date.birthdate({ min: 18, max: 65, mode: 'age' }).toString().slice(11, 15)}`;
          currentAddress = faker.address.streetAddress(true);
          gender = ['Male', 'Female', 'Other'];
          hobbies = ['Sports', 'Reading', 'Music'];

          return {
            randomDigitsFrom1to3,
            phone,
            firstName,
            lastName,
            userEmail,
            dateOfBirth,
            currentAddress,
            gender,
            hobbies
          }
        }
      })
    },
  }
})
