/* eslint-disable max-len */
// import { faker } from '@faker-js/faker';
const { defineConfig } = require('cypress');
// eslint-disable-next-line no-unused-vars
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          const randomIndex = Math.floor(Math.random() * 2);
          const genders = ['Male', 'Female', 'Other'];
          const hobbies = ['Sports', 'Reading', 'Music'];
          const randomDays = Math.floor(Math.random() * 27);
          const randomMonths = Math.floor(Math.random() * 11);
          const randomYears = Math.floor(Math.random() * 45);
          const days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31'];
          const months = ['January', 'February', 'March', 'April', 'May',
            'June', 'July', 'August', 'September', 'October', 'November', 'December'];
          const years = ['1970', '1971', '1972', '1973', '1974', '1975', '1976', '1977', '1978', '1979',
            '1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
            '1990', '1991', '1992', '1993', '1994', '1985', '1996', '1997', '1998', '1999',
            '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
            '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019'];
          const randomSubject = Math.floor(Math.random() * 13);
          const subjects = ['Accounting', 'Arts', 'Biology', 'Chemistry', 'Computer Science', 'Commerce',
            'English', 'Economics', 'Hindi', 'History', 'Maths', 'Physics', 'Civics', 'Social Studies'];
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            phone: faker.phone.phoneNumber('##########'),
            // eslint-disable-next-line max-len
            birthDate: days[randomDays] + ' ' + months[randomMonths] + ',' + years[randomYears],
            subject: subjects[randomSubject],
            gender: genders[randomIndex],
            hobbie: hobbies[randomIndex],
            address: faker.address.streetAddress()
          };
        }
      });
    }
  }
});
