const faker = require('faker');

function generateStudent() {
  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gender: 'Male',
    number: faker.phone.phoneNumber('##########'),
    birthdate: '01 September,1988',
    subject: 'Maths',
    hobbie: 'Reading',
    address: faker.address.streetAddress(),
    state: 'Haryana',
    city: 'Karnal'
  };
}

module.exports = { generateStudent };
