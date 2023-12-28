const { defineConfig } = require('cypress');
const faker = require('faker');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://demoqa.com/automation-practice-form',
    viewportHeight: 1080,
    viewportWidth: 1350,
    setupNodeEvents(on, config) {
      on('task', {
        generateUser() {
          randomIndex = Math.floor(Math.random() * 2);
          randomLetter = Math.floor(Math.random() * 18);
          randomDays = Math.floor(Math.random() * 27);
          randomMoths = Math.floor(Math.random() * 11);
          randomYears = Math.floor(Math.random() * 43);
          genders = ['Male', 'Female', 'Other'];
          hobbies = ['Sports', 'Reading', 'Music'];
          days = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28'];
          months = ['January', 'February', 'March', 'April',
            'May', 'June', 'July', 'August', 'September',
            'October', 'November', 'December'];
          years = ['1980', '1981', '1982', '1983', '1984', '1985', '1986', '1987', '1988', '1989',
            '1990', '1991', '1992', '1993', '1994', '1995', '1996', '1997', '1998', '1999',
            '2000', '2001', '2002', '2003', '2004', '2005', '2006', '2007', '2008', '2009',
            '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019',
            '2020', '2021', '2022', '2023'];
          // letters = ['A', 'B', 'C', 'D', 'E', 'G', 'H', 'I', 'L',
          // 'M', 'N', 'O', 'P', 'R', 'S', 'T', 'U', 'V', 'Y']
          return {
            firstName: faker.name.firstName(),
            lastName: faker.name.lastName(),
            email: faker.internet.email(),
            gender: genders[randomIndex],
            phone: faker.phone.phoneNumber('##########'),
            date: days[randomDays] + ' ' + months[randomMoths] + ',' + years[randomYears],
            hobbie: hobbies[randomIndex],
            // subject: letters[randomLetter],
            currentAddress: faker.address.streetAddress()
          };
        }
      });
    }
  }
});
