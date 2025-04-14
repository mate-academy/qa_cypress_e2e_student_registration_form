const { faker } = require('@faker-js/faker');
const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com',
    viewportHeight: 1200,
    viewportWidth: 1200,
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

          const sex = faker.person.sex();
          const firstNameG = faker.person.firstName(sex);
          const lastNameG = faker.person.lastName(sex);
          const birthDateG = faker.date.birthdate().toDateString().slice(3);
          const birthDateFull = new Date(birthDateG);
          const dayG = String(birthDateFull.getDate()).padStart(2, '0');
          const monthG = months[birthDateFull.getMonth()];
          const yearG = birthDateFull.getFullYear();

          return {
            firstName: firstNameG,
            lastName: lastNameG,
            email: faker.internet.email({
              firstName: firstNameG,
              lastName: lastNameG
            }),
            gender: sex,
            phone: faker.phone.number('##########'),
            birthDate: birthDateG,
            address: faker.location.streetAddress(),
            day: dayG,
            month: monthG,
            year: yearG
          };
        }
      });
    }
  }
});
