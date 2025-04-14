const { faker } = require('@faker-js/faker');

function generateUserData() {
  const day = String(faker.datatype.number({ min: 1, max: 28 })).padStart(
    3,
    '0'
  );

  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gender: faker.helpers.arrayElement(['Male', 'Female', 'Other']),
    mobileNumber: faker.phone.number('##########'),
    birth: {
      day,
      month: faker.date.month(),
      year: faker.datatype.number({ min: 1970, max: 2005 })
    },
    subject: faker.helpers.arrayElement([
      'Maths',
      'Physics',
      'Chemistry',
      'Biology',
      'English'
    ]),
    hobby: faker.helpers.arrayElement(['Sports', 'Reading', 'Music']),
    address: faker.address.streetAddress()
  };
}

module.exports = { generateUserData };
