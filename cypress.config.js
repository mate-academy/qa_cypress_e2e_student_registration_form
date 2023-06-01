const { defineConfig } = require("cypress");
// const { subtract } = require("cypress/types/lodash");
const faker = require("faker");

const genders = ['Male', 'Female', 'Other'];
const subjects = ['Accounting', 'Maths', 'Biology'];
const hobbies = ['Sports', 'Reading', 'Music'];

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/automation-practice-form",
    viewportHeight: 1080,
    viewportWidth: 1920,
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: faker.random.arrayElement(genders),
            mobileNumber: faker.phone.phoneNumber("38########"),
            birth: {
              year: Math.floor(1960 + Math.random() * 60),
              month: Math.floor(Math.random() * 11),
              day: Math.floor(10 + Math.random() * 15),
            },
            subject: faker.random.arrayElement(subjects),
            hobby: faker.random.arrayElement(hobbies),
            address: faker.address.streetAddress(),
          };
        },
      });
    },
  },
});
