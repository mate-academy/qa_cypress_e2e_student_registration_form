const { defineConfig } = require("cypress");
const { faker } = require("@faker-js/faker");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://demoqa.com/automation-practice-form",
    viewportHeight: 1280,
    viewportWidth: 1800,
    //       retries: {
    //       runMode: 2,
    //       openMode: 2
    //   },
    setupNodeEvents(on, config) {
      on("task", {
        generateUser() {
          hobbies = ["Sports", "Reading", "Music"];
          genders = ["Male", "Female", "Other"];
          randomIndex = Math.floor(Math.random() * 2);
          return {
            firstName: faker.person.firstName(),
            lastName: faker.person.lastName(),
            email: faker.internet.email(),
            randomGenderIndex: Math.floor(Math.random() * 3) + 1,
            mobileNumber: Number(Array.from({ length: 10 }, () =>
              Math.floor(Math.random() * 10)).join('')),
            birth: {
              year: Math.floor(2000 + Math.random() * 20),
              month: faker.date.month(),
              day: Math.ceil(Math.random() * 28),
            },
            hobby: hobbies[randomIndex],
            gender: genders[randomIndex],
            address: faker.location.streetAddress(),
          };
        },
      });
      // implement node event listeners here
    },
  },
});
