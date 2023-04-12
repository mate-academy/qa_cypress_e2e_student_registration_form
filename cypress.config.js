const { defineConfig } = require('cypress');
const { Faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    setupNodeEvents(on, config) {
        //     on("task", {
        // generateUser() {
        //   let randomIndex = Math.floor(Math.random()*2);
        //   let genders = ['Male', 'Female', 'Other'];
        //   return {
        //     firstName: Faker.name.firstName(),
        //     lastName: Faker.name.lastName(),
        //     email: Faker.internet.email(),
        //     gender: genders[randomIndex],
        //     mobileNumber: Faker.phone.number('##########'),
        //     birthDate: Faker.date.birthDate(),
        //   }
        }
      }
      });

