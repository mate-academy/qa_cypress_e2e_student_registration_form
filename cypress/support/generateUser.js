const faker = require('faker');

function generateUser() {
  const firstName = faker.name.firstName();
  const lastName = faker.name.lastName();
  const email = faker.internet.email();
  const phoneNumber = faker.phone.phoneNumber('##########');
  const address = faker.address.streetAddress();

  return { firstName, lastName, email, phoneNumber, address };
}

module.exports = { generateUser };
