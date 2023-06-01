const faker = require('faker');

function generateUser() {
  const subjects = ['Chemistry', 'English', 'Mathematics', 'Biology'];
  const hobbies = ['Sport', 'Music', 'Reading'];
  const genders = ['Male', 'Female', 'Other'];

  return {
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    email: faker.internet.email(),
    gender: faker.random.arrayElement(genders),
    mobileNumber: faker.phone.phoneNumber('##########'),
    subject: faker.random.arrayElement(subjects),
    hobby: faker.random.arrayElement(hobbies),
    address: faker.address.streetAddress(),
  };
};

module.exports = { generateUser };