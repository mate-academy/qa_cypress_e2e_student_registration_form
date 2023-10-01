const { defineHobbies } = require('./defineHobbies');
const { getFirstName } = require('./getFirstName');
const { getLastName } = require('./getLastName');
const { defineGender } = require('./defineGender');
const { faker } = require('@faker-js/faker');

function createRandomUser() {
  const gender = defineGender();
  const firstName = getFirstName();
  const lastName = getLastName();
  const email = faker.internet.email();
  const phoneNumber = faker.phone.number('##########');
  const birthDay = faker.date.birthdate().toDateString();
  const subjects = 'English';
  const hobbies = defineHobbies();
  const address = faker.address.streetAddress(true);
  const country = 'NCR';
  const city = 'Delhi';

  return {
    firstName,
    lastName,
    gender,
    email,
    phoneNumber,
    birthDay,
    hobbies,
    address,
    country,
    city,
    subjects
  };
}

module.exports = { createRandomUser };
