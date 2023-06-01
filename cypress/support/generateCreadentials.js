const faker = require('faker');

function generateCredentials() {
  const genders = ['Male', 'Female', 'Other'];
  const subjects = ['Computer science', 'English', 'Math', 'Literature'];
  const hobbies = ['Sports', 'Reading', 'Music'];

  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gender: faker.random.arrayElement(genders),
    phoneNumber: faker.phone.phoneNumber('##########'),
    subject: faker.random.arrayElement(subjects),
    hobby: faker.random.arrayElement(hobbies),
    address: faker.address.streetAddress(),
  }
};

module.exports = { generateCredentials };
