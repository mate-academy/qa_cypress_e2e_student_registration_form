const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on(`task`, {
        generateNew(){
          const gender = [`Male`, `Female`,`Other`];
          const index = Math.floor(Math.random()*3)
          
          
          return{
            firstname: faker.person.firstName(),
            lastname: faker.person.lastName(),
            email: faker.internet.email(),
            mobile: faker.phone.number(`##########`),
            gender: gender[index],
            adress: faker.location.streetAddress()

          }
        }
      })
    }
  }
});
