const { defineConfig } = require('cypress');
const faker = require('faker');
module.exports = defineConfig({
  e2e: {
    viewportHeight: 1200,
    viewportWidth: 1800,

    setupNodeEvents(on, config) {
     on('task', {
      generateUser() {
        randomIndex = Math.floor(Math.random() * 2);
        gender = ['Male', 'Female', 'Other'];
        hobby = ['Sports', 'Reading', 'Music'];
        return {
          firstName: faker.name.firstName(),
          lastName: faker.name.lastName(),
          email: faker.internet.email(),
          gender: gender[randomIndex],
          phone: faker.phone.phoneNumber('093#######'),
          hobby: hobby[randomIndex],
          street: faker.address.streetAddress(),
          city: 'Delhi',
          state: 'NCR',
          subject: 'Maths',
        }
      }
     })                        
    }
  }
});
