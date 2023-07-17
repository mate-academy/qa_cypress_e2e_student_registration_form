const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/automation-practice-form",
    viewportWidth: 1920,
    viewportHeight: 1080,
    setupNodeEvents(on, config) {
      on ("task", {
        generateUser() {
          randomIndex = Math.floor(Math.random() * 2);
          genders = ['Male', 'Female', 'Others'];
          hobbies = ["Sports", "Reading", "Music"]
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            mobileNumber: faker.phone.phoneNumber("##########"),
            hobby: hobbies[randomIndex],
            address: faker.address.streetAddress()
          }
        }
      })
    }
  }
});
