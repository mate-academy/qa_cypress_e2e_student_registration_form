const { faker } = require('@faker-js/faker');

function generateUser() {
  const random = Math.random().toString().slice(2, 6);
  const firstName = faker.internet.userName() + random;
  const lastName = faker.internet.userName() + random;
  const email = `${firstName}@mail.com`;
  const mobileNumber = Math.random().toString().slice(2, 12);
  const dateOfBirth = Math.floor(Math.random() * 31) + 1 + ' ' + 'Aug' + ' ' + '1980';
  const currentAddress = faker.address.country() + ', ' + faker.address.city() + ' ' + faker.address.buildingNumber();

  return { firstName, lastName, email, mobileNumber, dateOfBirth, currentAddress };
};

module.exports = { generateUser };