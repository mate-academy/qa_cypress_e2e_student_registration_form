const { faker } = require('@faker-js/faker');

function generateUser() {
  const user = {
    firstName: faker.name.firstName('female'),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gender: 'Female',
    birthday: '15 Sep 1996',
    phoneNumber: faker.phone.number('##########'),
    address: faker.address.streetAddress(),
    hobby: 'Reading',
    subjects: 'Economics',
    state: 'Haryana',
    city: 'Panipat',
  };

  return user;
}

module.exports = { generateUser };
