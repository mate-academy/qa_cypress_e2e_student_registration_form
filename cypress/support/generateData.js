const { faker } = require('@faker-js/faker');

function generateData() {
  const firstName = faker.person.firstName();
  const lastName = faker.person.lastName();
  const email = faker.internet.email();
  const randomNumber = Math.floor(Math.random() * 3) + 1;
  const mobileNumber = faker.string.numeric(10);
  const dateOfBirth = faker.date.birthdate().toDateString().slice(4);
  const adress = faker.location.streetAddress();

  return {
    firstName,
    lastName,
    email,
    randomNumber,
    mobileNumber,
    dateOfBirth,
    adress
  };
}

module.exports = { generateData };
