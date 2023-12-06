const { faker } = require('@faker-js/faker');

function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const phoneNumber = Math.random().toString().slice(2, 12);
  const adress = faker.location.streetAddress();

  return { firstName, lastName, email, phoneNumber, adress };
}

module.exports = { generateUser };
