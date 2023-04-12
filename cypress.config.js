const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
            on("task", {
                generateUser() {
                  let randNum = Math.floor(Math.random() * 2) + 1;
                  let genders = ['Male', 'Female', 'Other'];
                  let hobbies = ['Sports', 'Reading', 'Music'];
                  return {
                    firstName: faker.name.firstName(),
                    lastName: faker.name.firstName(),
                    email: faker.internet.email(),
                    gender: genders[randNum],
                    // date: faker.date.birthdate(),
                    hobby: hobbies[randNum],
                    address: faker.address.city(),
                  };
                },
            });
        },
    },
});