const faker = require('faker');

function generateUser () {
  const genders = ['Male', 'Female', 'Other'];
  const subjects = ['Math', 'Arts', 'History'];
  const hobbies = ['Sports', 'Reading', 'Music'];
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const gender = faker.random.arrayElement(genders);
  const mobileNumber = faker.phone.phoneNumber('##########');
  const birth = '31 December 2023';
  const subject = faker.random.arrayElement(subjects);
  const hobby = faker.random.arrayElement(hobbies);
  const address = faker.address.streetAddress();
  const state = 'NCR';
  const city = 'Delhi';

  return { firstName, lastName, mobileNumber, birth, email, gender, hobby, subject, address, state, city }
};

module.exports = { generateUser };