const { defineConfig } = require('cypress');
const { faker } = require('@faker-js/faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportHeight: 1500,
    viewportWidth: 1400,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const months = [
            'January',
            'February',
            'March',
            'April',
            'May',
            'June',
            'July',
            'August',
            'September',
            'October',
            'November',
            'December'
          ];
          const ggender = faker.person.sex();
          const gfirstName = faker.person.firstName(ggender);
          const glastName = faker.person.lastName(ggender);
          const gDate = faker.date.birthdate().toDateString().slice(4);
          const fullDate = new Date(gDate);
          const year = fullDate.getFullYear();
          const month = months[fullDate.getMonth()];
          const day = fullDate.getDate();
          return {
            firstName: gfirstName,
            lastName: glastName,
            email: faker.internet.email({
              firstName: gfirstName,
              lastName: glastName
            }),
            gender: ggender,
            phoneNumber: faker.phone.number('#########'),
            dateOfBirth: gDate,
            address: faker.location.streetAddress(),
            fullDateOfBirth: `${day} ${month},${year}`
          };
        }
      });
    }
  }
});
