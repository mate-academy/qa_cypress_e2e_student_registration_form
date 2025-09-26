const {
  faker
} = require('@faker-js/faker');

function generateUser() {
  const mobileNumber = Math.random().toString().slice(2, 12);
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = firstName + lastName + '@mail.com';
  const birthDate = '25 Jan 1988';

  return {
    mobileNumber,
    firstName,
    lastName,
    email,
    birthDate
  };
}

module.exports = {
  generateUser
};
