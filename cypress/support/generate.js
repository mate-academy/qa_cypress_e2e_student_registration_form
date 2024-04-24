const { faker } = require('@faker-js/faker');

function generateUser() {
  const randomIndex = Math.floor(Math.random() * 3);
  const firstName = faker.internet.userName();
  const lastName = faker.internet.userName();
  const emailAddress = faker.internet.email();
  const gender = ['Male', 'Female', 'Others'];
  const mobilePhone = faker.phone.number('########');
  const birthDate = '24 Apr 1999';
  const subjects = 'English';
  const currentAddress = 'Shire, Bag End';
  const stateCity = 'NCR';

  return {
    firstName,
    lastName,
    emailAddress,
    gender: gender[randomIndex],
    mobilePhone,
    birthDate,
    subjects,
    currentAddress,
    stateCity
  };
}
module.exports = { generateUser };
