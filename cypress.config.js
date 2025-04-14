const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    viewportWidth: 1500,
    viewportHeight: 1500,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const FirstName = faker.person.firstName();
          const LastName = faker.person.lastName();
          const Email = faker.internet.email();
          const Gender = faker.person.sex();
          const PhoneNumber = faker.phone.imei();
          const Address = faker.location.city();
          return {
            firstName: FirstName,
            lastName: LastName,
            email: Email,
            gender: Gender.charAt(0).toUpperCase() + Gender.slice(1),
            phoneNumber: PhoneNumber.replaceAll('-', '').slice(0, 10),
            address: Address
          };
        }
      });
    }
  }
});
